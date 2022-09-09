import joi, { ObjectSchema } from "joi";

const credentialData: ObjectSchema = joi.object({
	title: joi.string().trim().required(),
	url: joi.string().uri().required(),
	username: joi.string().trim().required(),
	password: joi.string().trim().required(),
});

export default credentialData;
