import { Router } from "express";
import validateSchema from "../middlewares/schemaValidatorMiddleware";
import cardData from "../schemas/cardsSchema";
import * as cardsController from "../controllers/cardsController";

const cardsRouter: Router = Router();

cardsRouter.post("/cards", validateSchema(cardData), cardsController.create);
cardsRouter.get("/cards", cardsController.getAll);
cardsRouter.delete("/cards/:cardId", cardsController.deletecard);

export default cardsRouter;
