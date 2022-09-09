import { Router } from "express";
import authRouter from "./authRouter";
import validateToken from "../middlewares/tokenValidatorMiddleware";
import credentialsRouter from "./credentialsRouter";
import notesRouter from "./notesRouter";
import cardsRouter from "./cardsRouter";

const router: Router = Router();

router.use(authRouter);
router.use(validateToken);
router.use(credentialsRouter);
router.use(notesRouter);
router.use(cardsRouter);

export default router;
