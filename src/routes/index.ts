import { Router } from "express";
import usersRouter from "./usersRouter";
import validateToken from "../middlewares/tokenValidatorMiddleware";
// import rechargesRouter from "./rechargesRouter";
// import paymentsRouter from "./paymentsRouter";

const router: Router = Router();

router.use(usersRouter);
router.use(validateToken);
// router.use(rechargesRouter);
// router.use(paymentsRouter);

export default router;
