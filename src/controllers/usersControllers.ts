import { Request, Response } from "express";
import IUserData from "../types/usersTypes";

export async function createAnAccount(req: Request, res: Response) {
    const accountData: IUserData = req.body;
} 

export async function accessAnAccount(req: Request, res: Response) {
    //
} 