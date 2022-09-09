import joi, { ObjectSchema } from "joi";

const noteData: ObjectSchema = joi.object({
	title: joi.string().trim().max(50).required(),
	note: joi.string().trim().max(1000).required(),
});

export default noteData;
