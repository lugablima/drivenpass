import bcrypt from "bcrypt";
import { Users, InsertUser } from "../types/usersTypes";
import * as usersRepository from "../repositories/usersRepository";

async function validateIfTheEmailAlreadyExists(email: string) {
	const user: Users | null = await usersRepository.findByEmail(email);

	if (!user) {
		const error: Error = { name: "EmailAlreadyExists", message: "This email is already registered!" };
		throw error;
	}
}

function validatePasswordFormat(password: string) {
	if (password.length < 10) {
		const error: Error = { name: "PasswordFormat", message: "Password must be at least 10 characters long!" };
		throw error;
	}
}

function encryptPassword(password: string): string {
	const SALT: number = 10;
	const hashedPassword: string = bcrypt.hashSync(password, SALT);

	return hashedPassword;
}

export async function createAnAccount(userData: InsertUser) {
	const { email, password } = userData;

	await validateIfTheEmailAlreadyExists(email);

	validatePasswordFormat(password);
	const encryptedPassword: string = encryptPassword(password);

	await usersRepository.insert({ email, password: encryptedPassword });
}

export async function accessAnAccount(userData: InsertUser) {
	//
}
