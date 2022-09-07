import { Router } from "express";
import validateSchema from "../middlewares/schemaValidatorMiddleware";
import userData from "../schemas/usersSchema";
import * as usersControllers from "../controllers/usersControllers";

const usersRouter: Router = Router();

usersRouter.post("/users/sign-up", validateSchema(userData), usersControllers.createAnAccount);

export default usersRouter;
