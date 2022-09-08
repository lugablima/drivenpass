import { Request, Response } from "express";
import { InsertUser, UserToken } from "../types/authTypes";
import * as authService from "../services/authService";

export async function create(req: Request, res: Response) {
	const userData: InsertUser = req.body;

	await authService.create(userData);

	res.status(201).send("Account created successfully!");
}

export async function access(req: Request, res: Response) {
	const userData: InsertUser = req.body;

	const token: UserToken = await authService.access(userData);

	res.status(200).send(token);
}
