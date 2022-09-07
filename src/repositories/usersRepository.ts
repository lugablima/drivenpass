import { Users, InsertUser } from "../types/usersTypes";
import prisma from "../config/prismaClient";

export async function findByEmail(email: string): Promise<Users | null> {
	const result: Users | null = await prisma.users.findUnique({ where: { email } });

	return result;
}

export async function findById(id: number): Promise<Users | null> {
	const result: Users | null = await prisma.users.findUnique({ where: { id } });

	return result;
}

export async function insert(userData: InsertUser): Promise<Users> {
	const result: Users = await prisma.users.create({ data: userData });

	return result;
}
