import joi, { ObjectSchema } from "joi";

const wifiData: ObjectSchema = joi.object({
	title: joi.string().trim().required(),
	networkName: joi.string().trim().required(),
	password: joi.string().trim().required(),
});

export default wifiData;
