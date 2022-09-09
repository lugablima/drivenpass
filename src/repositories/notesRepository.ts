import prisma from "../config/prismaClient";
import { TNotes, InsertNote } from "../types/notesTypes";

export async function findAll(userId: number): Promise<TNotes[]> {
	const result: TNotes[] = await prisma.notes.findMany({ where: { userId } });

	return result;
}

export async function findById(id: number): Promise<TNotes | null> {
	const result: TNotes | null = await prisma.notes.findUnique({ where: { id } });

	return result;
}

export async function findByUserIdAndTitle(userId: number, title: string): Promise<TNotes | null> {
	const result: TNotes | null = await prisma.notes.findUnique({
		where: {
			title_userId: {
				title,
				userId,
			},
		},
	});

	return result;
}

export async function deleteById(id: number) {
	await prisma.notes.delete({ where: { id } });
}

export async function insert(credential: InsertNote): Promise<TNotes> {
	const result: TNotes = await prisma.notes.create({ data: credential });

	return result;
}
