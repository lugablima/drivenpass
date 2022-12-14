import { TCredentials, InsertCredential } from "../types/credentialsTypes";
import * as credentialsRepository from "../repositories/credentialsRepository";
import * as errorHandlingUtils from "../utils/errorHandlingUtils";
import * as securityUtils from "../utils/securityUtils";

async function validateIfTheCredentialTitleAlreadyExists(userId: number, title: string) {
	const credential: TCredentials | null = await credentialsRepository.findByUserIdAndTitle(userId, title);

	if (credential) {
		throw errorHandlingUtils.unauthorized("This credential title already exists for this user!");
	}
}

function decryptCredentialPasswords(credentials: TCredentials[]) {
	const newCredentials: TCredentials[] = credentials.map((credential) => ({
		...credential,
		password: securityUtils.decryptField(credential.password),
	}));

	return newCredentials;
}

async function validateCredentialId(credentialId: number, userId: number) {
	if (!credentialId) return null;

	const credential: TCredentials | null = await credentialsRepository.findById(credentialId);

	if (!credential) {
		throw errorHandlingUtils.notFound("Credential not found!");
	}

	if (credential.userId !== userId) {
		throw errorHandlingUtils.unauthorized("Invalid credential id!");
	}

	return credential;
}

async function getAllUserCredentials(userId: number) {
	const credentials: TCredentials[] = await credentialsRepository.findAll(userId);
	return decryptCredentialPasswords(credentials);
}

export async function create(credentialData: InsertCredential) {
	const { title, url, username, password, userId } = credentialData;

	await validateIfTheCredentialTitleAlreadyExists(userId, title);

	const encryptedPassword: string = securityUtils.encryptField(password);

	const credential: TCredentials = await credentialsRepository.insert({
		title,
		url,
		username,
		password: encryptedPassword,
		userId,
	});

	credential.password = password;

	return credential;
}

export async function getAll(credentialId: number, userId: number) {
	const credential: TCredentials | null = await validateCredentialId(credentialId, userId);

	if (!credential) {
		const credentials: TCredentials[] = await getAllUserCredentials(userId);
		return credentials;
	}

	credential.password = securityUtils.decryptField(credential.password);

	return credential;
}

export async function deleteCredential(credentialId: number, userId: number) {
	const credential: TCredentials | null = await validateCredentialId(credentialId, userId);

	if (!credential) {
		throw errorHandlingUtils.badRequest("Credential id was not sent!");
	}

	await credentialsRepository.deleteById(credential.id);
}
