import { Router } from "express";
import validateSchema from "../middlewares/schemaValidatorMiddleware";
import credentialData from "../schemas/credentialsSchema";
import * as credentialsController from "../controllers/credentialsController";

const credentialsRouter: Router = Router();

credentialsRouter.post("/credentials", validateSchema(credentialData), credentialsController.create);
credentialsRouter.get("/credentials", credentialsController.getAll);
credentialsRouter.delete("/credentials/:credentialId", credentialsController.deleteCredential);

export default credentialsRouter;
