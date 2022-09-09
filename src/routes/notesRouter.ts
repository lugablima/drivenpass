import { Router } from "express";
import validateSchema from "../middlewares/schemaValidatorMiddleware";
import noteData from "../schemas/notesSchema";
import * as notesController from "../controllers/notesController";

const notesRouter: Router = Router();

notesRouter.post("/notes", validateSchema(noteData), notesController.create);
notesRouter.get("/notes", notesController.getAll);
notesRouter.delete("/notes/:noteId", notesController.deletenote);

export default notesRouter;
