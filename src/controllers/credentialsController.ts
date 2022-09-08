import { Request, Response } from "express";
import { InsertCredential } from "../types/credentialsTypes";
import * as credentialsService from "../services/credentialsService";

export async function create(req: Request, res: Response) {
	const credentialData: InsertCredential = req.body;

	await credentialsService.create(credentialData);

	res.status(201).send("Credential created successfully!");
}

export async function getAll(req: Request, res: Response) {
	//
}
