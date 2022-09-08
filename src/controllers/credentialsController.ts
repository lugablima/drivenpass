import { Request, Response } from "express";
import { PayloadCredential } from "../types/credentialsTypes";
import { UserId } from "../types/authTypes";
import * as credentialsService from "../services/credentialsService";

export async function create(req: Request, res: Response) {
	const credentialData: PayloadCredential = req.body;
	const { userId }: UserId = res.locals.userData;

	await credentialsService.create({ ...credentialData, userId });

	res.status(201).send("Credential created successfully!");
}

export async function getAll(req: Request, res: Response) {
	//
}
