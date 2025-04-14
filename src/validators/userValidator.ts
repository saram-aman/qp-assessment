import Joi from 'joi';

export const orderSchema = Joi.object({
  items: Joi.array().items(
    Joi.object({
      itemId: Joi.number().integer().required(),
      quantity: Joi.number().integer().min(1).required()
    })
  ).required()
});
