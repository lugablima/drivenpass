import { Router } from "express";
import usersRouter from "./usersRouter";
import validateToken from "../middlewares/tokenValidatorMiddleware";
import credentialsRouter from "./credentialsRouter";
// import paymentsRouter from "./paymentsRouter";

const router: Router = Router();

router.use(usersRouter);
router.use(validateToken);
router.use(credentialsRouter);
// router.use(paymentsRouter);

export default router;
