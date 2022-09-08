import { Credentials } from "@prisma/client";

export type TCredentials = Credentials;

export type InsertCredential = Omit<Credentials, "id" | "userId">;
