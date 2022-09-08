import { Users } from "@prisma/client";

export type TUsers = Users;

export type InsertUser = Omit<Users, "id">;

export interface UserToken {
	token: string;
}

export interface UserId {
	userId: number;
}
