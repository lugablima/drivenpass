import joi, { ObjectSchema } from "joi";

const cardData: ObjectSchema = joi.object({
	title: joi.string().trim().required(),
	cardNumber: joi.string().trim().required(),
	cardholderName: joi.string().trim().required(),
	securityCode: joi.string().trim().required(),
	expirationDate: joi.string().trim().required(),
	password: joi.string().trim().required(),
	isVirtual: joi.boolean().required(),
	type: joi.string().valid("credit", "debit", "credit_debit").required(),
});

export default cardData;
