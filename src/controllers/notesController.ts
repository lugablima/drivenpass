import { Request, Response } from "express";
import { PayloadNote, TNotes } from "../types/notesTypes";
import { UserId } from "../types/authTypes";
import * as notesService from "../services/notesService";

export async function create(req: Request, res: Response) {
	const noteData: PayloadNote = req.body;
	const { userId }: UserId = res.locals.userData;

	const note: TNotes = await notesService.create({ ...noteData, userId });

	res.status(201).send(note);
}

export async function getAll(req: Request, res: Response) {
	const noteId: number = Number(req.query.noteId);
	const { userId }: UserId = res.locals.userData;

	const notes: TNotes | TNotes[] = await notesService.getAll(noteId, userId);

	res.status(200).send(notes);
}

export async function deleteNote(req: Request, res: Response) {
	const noteId: number = Number(req.params.noteId);
	const { userId }: UserId = res.locals.userData;

	await notesService.deleteNote(noteId, userId);

	res.status(200).send("Note successfully deleted!");
}
