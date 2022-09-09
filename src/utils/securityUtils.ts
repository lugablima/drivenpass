import Cryptr from "cryptr";

function configureCryptr(): Cryptr {
	const secretKey: string = process.env.CRYPTR_SECRET || "cryptr_secret";
	const cryptr: Cryptr = new Cryptr(secretKey);
	return cryptr;
}

export function encryptField(field: string): string {
	const cryptr: Cryptr = configureCryptr();
	const encryptedField: string = cryptr.encrypt(field);
	return encryptedField;
}

export function decryptField(encryptedField: string): string {
	const cryptr: Cryptr = configureCryptr();
	const decryptedField: string = cryptr.decrypt(encryptedField);
	return decryptedField;
}
