import prisma from "../config/prismaClient";
import { TCards, InsertCard } from "../types/cardsTypes";

export async function findAll(userId: number): Promise<TCards[]> {
	const result: TCards[] = await prisma.cards.findMany({ where: { userId } });

	return result;
}

export async function findById(id: number): Promise<TCards | null> {
	const result: TCards | null = await prisma.cards.findUnique({ where: { id } });

	return result;
}

export async function findByUserIdAndTitle(userId: number, title: string): Promise<TCards | null> {
	const result: TCards | null = await prisma.cards.findUnique({
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
	await prisma.cards.delete({ where: { id } });
}

export async function insert(card: InsertCard): Promise<TCards> {
	const result: TCards = await prisma.cards.create({ data: { ...card } });

	return result;
}
