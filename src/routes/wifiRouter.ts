import { Router } from "express";
import validateSchema from "../middlewares/schemaValidatorMiddleware";
import wifiData from "../schemas/wifiSchema";
import * as wifiController from "../controllers/wifiController";

const wifiRouter: Router = Router();

wifiRouter.post("/wifi", validateSchema(wifiData), wifiController.create);
wifiRouter.get("/wifi", wifiController.getAll);
wifiRouter.delete("/wifi/:wifiId", wifiController.deleteWifi);

export default wifiRouter;
