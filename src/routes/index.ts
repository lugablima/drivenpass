import { Router } from "express";
import authRouter from "./authRouter";
import validateToken from "../middlewares/tokenValidatorMiddleware";
import credentialsRouter from "./credentialsRouter";
import notesRouter from "./notesRouter";

const router: Router = Router();

router.use(authRouter);
router.use(validateToken);
router.use(credentialsRouter);
router.use(notesRouter);

export default router;
