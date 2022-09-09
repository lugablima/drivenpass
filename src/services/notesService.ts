import { TNotes, InsertNote } from "../types/notesTypes";
import * as notesRepository from "../repositories/notesRepository";
import * as errorHandlingUtils from "../utils/errorHandlingUtils";

async function validateIfTheNoteTitleAlreadyExists(userId: number, title: string) {
	const note: TNotes | null = await notesRepository.findByUserIdAndTitle(userId, title);

	if (note) {
		throw errorHandlingUtils.unauthorized("This note title already exists for this user!");
	}
}

async function validateNoteId(noteId: number, userId: number) {
	if (!noteId) return null;

	const note: TNotes | null = await notesRepository.findById(noteId);

	if (!note) {
		throw errorHandlingUtils.notFound("Note not found!");
	}

	if (note.userId !== userId) {
		throw errorHandlingUtils.unauthorized("Invalid note id!");
	}

	return note;
}

async function getAllUserNotes(userId: number) {
	const notes: TNotes[] = await notesRepository.findAll(userId);
	return notes;
}

export async function create(noteData: InsertNote) {
	const { title, note, userId } = noteData;

	await validateIfTheNoteTitleAlreadyExists(userId, title);

	const noteInserted: TNotes = await notesRepository.insert({
		title,
		note,
		userId,
	});

	return noteInserted;
}

export async function getAll(noteId: number, userId: number) {
	const note: TNotes | null = await validateNoteId(noteId, userId);

	if (!note) {
		const notes: TNotes[] = await getAllUserNotes(userId);
		return notes;
	}

	return note;
}

export async function deleteNote(noteId: number, userId: number) {
	const note: TNotes | null = await validateNoteId(noteId, userId);

	if (!note) {
		throw errorHandlingUtils.badRequest("Note id was not sent!");
	}

	await notesRepository.deleteById(note.id);
}
