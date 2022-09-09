import { Request, Response } from "express";
import { PayloadWifi, TWifi } from "../types/wifiTypes";
import { UserId } from "../types/authTypes";
import * as wifiService from "../services/wifiService";

export async function create(req: Request, res: Response) {
	const wifiData: PayloadWifi = req.body;
	const { userId }: UserId = res.locals.userData;

	const wifi: TWifi = await wifiService.create({ ...wifiData, userId });

	res.status(201).send(wifi);
}

export async function getAll(req: Request, res: Response) {
	const wifiId: number = Number(req.query.wifiId);
	const { userId }: UserId = res.locals.userData;

	const wifi: TWifi | TWifi[] = await wifiService.getAll(wifiId, userId);

	res.status(200).send(wifi);
}

export async function deleteWifi(req: Request, res: Response) {
	const wifiId: number = Number(req.params.wifiId);
	const { userId }: UserId = res.locals.userData;

	await wifiService.deleteWifi(wifiId, userId);

	res.status(200).send("Wifi successfully deleted!");
}
