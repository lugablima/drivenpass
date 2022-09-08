import { Request, Response } from "express";
import { PayloadCredential, TCredentials } from "../types/credentialsTypes";
import { UserId } from "../types/authTypes";
import * as credentialsService from "../services/credentialsService";

export async function create(req: Request, res: Response) {
	const credentialData: PayloadCredential = req.body;
	const { userId }: UserId = res.locals.userData;

	const credential: TCredentials = await credentialsService.create({ ...credentialData, userId });

	res.status(201).send(credential);
}

export async function getAll(req: Request, res: Response) {
	//
}
