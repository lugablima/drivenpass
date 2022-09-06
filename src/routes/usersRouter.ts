import { Router } from "express";
import validateSchema from "../middlewares/schemaValidator";
import * as usersSchema from "../schemas/usersSchema";

const usersRouter: Router = Router();

usersRouter.post("/users/sign-up", validateSchema(usersSchema.signUp));

export default usersRouter;
