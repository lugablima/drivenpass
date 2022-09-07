import joi, { ObjectSchema } from "joi";

const userData: ObjectSchema = joi.object({
	email: joi.string().email().required(),
	password: joi.string().min(10).trim().required(),
});

export default userData;
