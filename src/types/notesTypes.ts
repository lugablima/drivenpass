import { Notes } from "@prisma/client";

export type TNotes = Notes;

export type PayloadNote = Omit<Notes, "id" | "userId">;

export type InsertNote = Omit<Notes, "id">;
