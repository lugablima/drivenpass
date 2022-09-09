import { Credentials } from "@prisma/client";

export type TCredentials = Credentials;

export type PayloadCredential = Omit<Credentials, "id" | "userId">;

export type InsertCredential = Omit<Credentials, "id">;
