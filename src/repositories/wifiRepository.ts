import prisma from "../config/prismaClient";
import { TWifi, InsertWifi } from "../types/wifiTypes";

export async function findAll(userId: number): Promise<TWifi[]> {
	const result: TWifi[] = await prisma.wifi.findMany({ where: { userId } });

	return result;
}

export async function findById(id: number): Promise<TWifi | null> {
	const result: TWifi | null = await prisma.wifi.findUnique({ where: { id } });

	return result;
}

export async function deleteById(id: number) {
	await prisma.wifi.delete({ where: { id } });
}

export async function insert(credential: InsertWifi): Promise<TWifi> {
	const result: TWifi = await prisma.wifi.create({ data: credential });

	return result;
}
