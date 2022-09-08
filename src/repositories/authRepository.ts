import { TUsers, InsertUser } from "../types/authTypes";
import prisma from "../config/prismaClient";

export async function findByEmail(email: string): Promise<TUsers | null> {
	const result: TUsers | null = await prisma.users.findUnique({ where: { email } });

	return result;
}

export async function findById(id: number): Promise<TUsers | null> {
	const result: TUsers | null = await prisma.users.findUnique({ where: { id } });

	return result;
}

export async function insert(userData: InsertUser): Promise<TUsers> {
	const result: TUsers = await prisma.users.create({ data: userData });

	return result;
}
