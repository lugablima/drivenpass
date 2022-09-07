import { users } from "@prisma/client";

export type Users = users;

export type InsertUser = Omit<users, "id">;
