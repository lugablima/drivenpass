import { Request, Response } from "express";
import { InsertUser, UserToken } from "../types/usersTypes";
import * as usersService from "../services/usersService";

export async function createAnAccount(req: Request, res: Response) {
	const userData: InsertUser = req.body;

	await usersService.createAnAccount(userData);

	res.status(201).send("Account created successfully!");
}

export async function accessAnAccount(req: Request, res: Response) {
	const userData: InsertUser = req.body;

	const token: UserToken = await usersService.accessAnAccount(userData);

	res.status(200).send(token);
}
