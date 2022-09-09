import { TWifi, InsertWifi } from "../types/wifiTypes";
import * as wifiRepository from "../repositories/wifiRepository";
import * as errorHandlingUtils from "../utils/errorHandlingUtils";
import * as securityUtils from "../utils/securityUtils";

function decryptCardPasswords(wifi: TWifi[]) {
	const newWifi: TWifi[] = wifi.map((card) => ({
		...card,
		password: securityUtils.decryptField(card.password),
		securityCode: securityUtils.decryptField(card.securityCode),
	}));

	return newWifi;
}

async function validateWifiId(wifiId: number, userId: number) {
	if (!wifiId) return null;

	const wifi: TWifi | null = await wifiRepository.findById(wifiId);

	if (!wifi) {
		throw errorHandlingUtils.notFound("Wi-fi not found!");
	}

	if (wifi.userId !== userId) {
		throw errorHandlingUtils.unauthorized("Invalid wi-fi id!");
	}

	return wifi;
}

async function getAllUserWifi(userId: number) {
	const wifi: TWifi[] = await wifiRepository.findAll(userId);
	return decryptCardPasswords(wifi);
}

export async function create(wifiData: InsertWifi) {
	const encryptedPassword: string = securityUtils.encryptField(wifiData.password);

	const wifi: TWifi = await wifiRepository.insert({
		...wifiData,
		password: encryptedPassword,
	});

	wifi.password = wifiData.password;

	return wifi;
}

export async function getAll(credentialId: number, userId: number) {
	const credential: TWifi | null = await validateWifiId(credentialId, userId);

	if (!credential) {
		const credentials: TWifi[] = await getAllUserWifi(userId);
		return credentials;
	}

	credential.password = securityUtils.decryptField(credential.password);
	credential.securityCode = securityUtils.decryptField(credential.securityCode);

	return credential;
}

export async function deleteWifi(cardId: number, userId: number) {
	const card: TWifi | null = await validateWifiId(cardId, userId);

	if (!card) {
		throw errorHandlingUtils.badRequest("Card id was not sent!");
	}

	await wifiRepository.deleteById(card.id);
}
