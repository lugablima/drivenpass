import bcrypt from "bcrypt";
import IUserData from "../types/usersTypes";
import * as usersRepository from "../repositories/usersRepository";

async function validateIfTheEmailAlreadyExists(email: string) {
	const user = await usersRepository.findByEmail(email);

	if (!user) {
		throw { code: "EmailAlreadyExists", message: "This email is already registered!" };
	}
}

function validatePasswordFormat(password: string) {
	if (password.length < 10) {
		throw { code: "PasswordFormat", message: "Password must be at least 10 characters long!" };
	}
}

function encryptPassword(password: string): string {
	const SALT: number = 10;
	const hashedPassword: string = bcrypt.hashSync(password, SALT);

	return hashedPassword;
}

export async function createAnAccount(userData: IUserData) {
	const { email, password } = userData;

	await validateIfTheEmailAlreadyExists(email);

	validatePasswordFormat(password);
	const encryptedPassword: string = encryptPassword(password);

	await usersRepository.insert({ email, password: encryptedPassword });
}

export async function accessAnAccount(userData: IUserData) {
	//
}
