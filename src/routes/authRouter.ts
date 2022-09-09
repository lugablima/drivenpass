import { Router } from "express";
import validateSchema from "../middlewares/schemaValidatorMiddleware";
import userData from "../schemas/authSchema";
import * as authController from "../controllers/authController";

const authRouter: Router = Router();

authRouter.post("/sign-up", validateSchema(userData), authController.create);
authRouter.post("/sign-in", validateSchema(userData), authController.access);

export default authRouter;
