import { Router } from "express";
import validateSchema from "../middlewares/schemaValidatorMiddleware";
import wifiData from "../schemas/wifiSchema";
import * as wifiController from "../controllers/wifiController";

const wifiRouter: Router = Router();

wifiRouter.post("/wi-fi", validateSchema(wifiData), wifiController.create);
wifiRouter.get("/wi-fi", wifiController.getAll);
wifiRouter.delete("/wi-fi/:wifiId", wifiController.deleteWifi);

export default wifiRouter;
