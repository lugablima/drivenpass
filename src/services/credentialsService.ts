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

export async function create(credentialData: InsertCredential) {
	const { title, url, username, password, userId } = credentialData;

	await validateIfTheCredentialTitleAlreadyExists(userId, title);

	const encryptedPassword: string = securityUtils.encryptField(password);

	await credentialsRepository.insert({ title, url, username, password: encryptedPassword, userId });
}

export async function getAll() {
	//
}
