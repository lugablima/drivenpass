import { Request, Response, NextFunction } from "express";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function errorHandlerMiddleware(error: Error, _req: Request, res: Response, next: NextFunction) {
	if (error.name === "bad_request") {
		return res.status(400).send(error.message);
	}

	if (error.name === "unauthorized") {
		return res.status(401).send(error.message);
	}

	if (error.name === "not_found") {
		return res.status(404).send(error.message);
	}

	if (error.name === "conflict") {
		return res.status(409).send(error.message);
	}

	return res.sendStatus(500);
}
