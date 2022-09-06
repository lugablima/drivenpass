import { Request, Response } from "express";
import IUserData from "../types/usersTypes";
import * as usersService from "../services/usersService";

export async function createAnAccount(req: Request, res: Response) {
	const userData: IUserData = req.body;

	await usersService.createAnAccount(userData);

	res.status(201).send("Account created successfully!");
}

export async function accessAnAccount(req: Request, res: Response) {
	//
}
