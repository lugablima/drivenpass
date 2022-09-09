import { Cards } from "@prisma/client";

export type TCards = Cards;

export type PayloadCard = Omit<Cards, "id" | "userId">;

export type InsertCard = Omit<Cards, "id">;
