import { Router } from "express";
import authRouter from "./authRouter";
import validateToken from "../middlewares/tokenValidatorMiddleware";
import credentialsRouter from "./credentialsRouter";
// import paymentsRouter from "./paymentsRouter";

const router: Router = Router();

router.use(authRouter);
router.use(validateToken);
router.use(credentialsRouter);
// router.use(paymentsRouter);

export default router;
