import { TNotes, InsertNote } from "../types/notesTypes";
import * as notesRepository from "../repositories/notesRepository";
import * as errorHandlingUtils from "../utils/errorHandlingUtils";
import * as securityUtils from "../utils/securityUtils";

async function validateIfTheNoteTitleAlreadyExists(userId: number, title: string) {
	const note: TNotes | null = await notesRepository.findByUserIdAndTitle(userId, title);

	if (note) {
		throw errorHandlingUtils.unauthorized("This note title already exists for this user!");
	}
}

function decryptCredentialPasswords(notes: TNotes[]) {
	const newnotes: TNotes[] = notes.map((credential) => ({
		...credential,
		password: securityUtils.decryptField(credential.password),
	}));

	return newnotes;
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
	return decryptCredentialPasswords(notes);
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

export async function getAll(credentialId: number, userId: number) {
	const credential: TNotes | null = await validateNoteId(credentialId, userId);

	if (!credential) {
		const notes: TNotes[] = await getAllUserNotes(userId);
		return notes;
	}

	credential.password = securityUtils.decryptField(credential.password);

	return credential;
}

export async function deleteCredential(credentialId: number, userId: number) {
	const credential: TNotes | null = await validateNoteId(credentialId, userId);

	if (!credential) {
		throw errorHandlingUtils.badRequest("Credential id was not sent!");
	}

	await notesRepository.deleteById(credential.id);
}
