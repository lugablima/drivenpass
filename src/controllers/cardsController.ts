import { Request, Response } from "express";
import { PayloadCard, TCards } from "../types/cardsTypes";
import { UserId } from "../types/authTypes";
import * as cardsService from "../services/cardsService";

export async function create(req: Request, res: Response) {
	const cardData: PayloadCard = req.body;
	const { userId }: UserId = res.locals.userData;

	const card: TCards = await cardsService.create({ ...cardData, userId });

	res.status(201).send(card);
}

export async function getAll(req: Request, res: Response) {
	const cardId: number = Number(req.query.cardId);
	const { userId }: UserId = res.locals.userData;

	const cards: TCards | TCards[] = await cardsService.getAll(cardId, userId);

	res.status(200).send(cards);
}

export async function deleteCard(req: Request, res: Response) {
	const cardId: number = Number(req.params.cardId);
	const { userId }: UserId = res.locals.userData;

	await cardsService.deleteCard(cardId, userId);

	res.status(200).send("Card successfully deleted!");
}
