import prisma from "../config/prismaClient";
import { TCredentials, InsertCredential } from "../types/credentialsTypes";

export async function findAll(userId: number): Promise<TCredentials[]> {
	const result: TCredentials[] = await prisma.credentials.findMany({ where: { userId } });

	return result;
}

export async function findById(id: number): Promise<TCredentials | null> {
	const result: TCredentials | null = await prisma.credentials.findUnique({ where: { id } });

	return result;
}

export async function findByUserIdAndTitle(userId: number, title: string): Promise<TCredentials | null> {
	const result: TCredentials | null = await prisma.credentials.findUnique({
		where: {
			title_userId: {
				title,
				userId,
			},
		},
	});

	return result;
}

export async function insert(credential: InsertCredential): Promise<TCredentials> {
	const result: TCredentials = await prisma.credentials.create({ data: { ...credential } });

	return result;
}
