import { TCards, InsertCard } from "../types/cardsTypes";
import * as cardsRepository from "../repositories/cardsRepository";
import * as errorHandlingUtils from "../utils/errorHandlingUtils";
import * as securityUtils from "../utils/securityUtils";

async function validateIfTheCardTitleAlreadyExists(userId: number, title: string) {
	const card: TCards | null = await cardsRepository.findByUserIdAndTitle(userId, title);

	if (card) {
		throw errorHandlingUtils.unauthorized("This card title already exists for this user!");
	}
}

function decryptCardPasswords(cards: TCards[]) {
	const newCards: TCards[] = cards.map((card) => ({
		...card,
		password: securityUtils.decryptField(card.password),
	}));

	return newCards;
}

async function validateCardId(cardId: number, userId: number) {
	if (!cardId) return null;

	const card: TCards | null = await cardsRepository.findById(cardId);

	if (!card) {
		throw errorHandlingUtils.notFound("Card not found!");
	}

	if (card.userId !== userId) {
		throw errorHandlingUtils.unauthorized("Invalid card id!");
	}

	return card;
}

async function getAllUserCards(userId: number) {
	const cards: TCards[] = await cardsRepository.findAll(userId);
	return decryptCardPasswords(cards);
}

export async function create(cardData: InsertCard) {
	const { title, url, username, password, userId } = cardData;

	await validateIfTheCardTitleAlreadyExists(userId, title);

	const encryptedPassword: string = securityUtils.encryptField(password);

	const card: TCards = await cardsRepository.insert({
		title,
		url,
		username,
		password: encryptedPassword,
		userId,
	});

	card.password = password;

	return card;
}

export async function getAll(credentialId: number, userId: number) {
	const credential: TCards | null = await validateCardId(credentialId, userId);

	if (!credential) {
		const credentials: TCards[] = await getAllUserCards(userId);
		return credentials;
	}

	credential.password = securityUtils.decryptField(credential.password);

	return credential;
}

export async function deleteCard(credentialId: number, userId: number) {
	const credential: TCards | null = await validateCardId(credentialId, userId);

	if (!credential) {
		throw errorHandlingUtils.badRequest("Credential id was not sent!");
	}

	await cardsRepository.deleteById(credential.id);
}
