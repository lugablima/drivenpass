import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Users, InsertUser, UserToken } from "../types/usersTypes";
import * as usersRepository from "../repositories/usersRepository";
import * as errorHandlingUtils from "../utils/errorHandlingUtils";

async function findUserByEmail(email: string) {
	const user: Users | null = await usersRepository.findByEmail(email);

	return user;
}

function validatePasswordFormat(password: string) {
	if (password.length < 10) {
		throw errorHandlingUtils.badRequest("Password must be at least 10 characters long!");
	}
}

function encryptPassword(password: string): string {
	const SALT: number = 10;
	const hashedPassword: string = bcrypt.hashSync(password, SALT);

	return hashedPassword;
}

function validatePassword(password: string, encryptedPassword: string) {
	if (!bcrypt.compareSync(password, encryptedPassword)) {
		throw errorHandlingUtils.unauthorized("Invalid email or password!");
	}
}

function generateToken(userId: number): string {
	const JWT_SECRET: string = process.env.JWT_SECRET || "secret";
	const TIME_15_DAYS_IN_SECONDS: number = 60 * 60 * 24 * 15;

	const token: string = jwt.sign({ userId }, JWT_SECRET, { expiresIn: TIME_15_DAYS_IN_SECONDS });

	return token;
}

export async function createAnAccount(userData: InsertUser) {
	const { email, password } = userData;

	const user: Users | null = await findUserByEmail(email);

	if (user) {
		throw errorHandlingUtils.conflict("This email is already registered!");
	}

	validatePasswordFormat(password);
	const encryptedPassword: string = encryptPassword(password);

	await usersRepository.insert({ email, password: encryptedPassword });
}

export async function accessAnAccount(userData: InsertUser) {
	const { email, password } = userData;

	const user: Users | null = await findUserByEmail(email);

	if (!user) {
		throw errorHandlingUtils.unauthorized("Invalid email or password!");
	}

	validatePasswordFormat(password);
	validatePassword(password, user.password);

	const token: UserToken = {
		token: generateToken(user.id),
	};

	return token;
}
