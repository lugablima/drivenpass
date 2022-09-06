import joi, { ObjectSchema } from "joi";

export const signUp: ObjectSchema = joi.object({
	email: joi.string().email().required(),
	password: joi.string().min(10).trim().required(),
});

export const signIn: ObjectSchema = joi.object({
	email: joi.string().email().required(),
	password: joi.string().min(10).trim().required(),
});
