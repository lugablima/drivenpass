import { Wifi } from "@prisma/client";

export type TWifi = Wifi;

export type PayloadWifi = Omit<Wifi, "id" | "userId">;

export type InsertWifi = Omit<Wifi, "id">;
