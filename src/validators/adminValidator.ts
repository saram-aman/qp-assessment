import Joi from 'joi';

export const grocerySchema = Joi.object({
  name: Joi.string().min(2).required(),
  price: Joi.number().positive().required(),
  inventory: Joi.number().integer().min(0).required()
});

export const updateGrocerySchema = Joi.object({
  name: Joi.string().min(2).required(),
  price: Joi.number().positive().required(),
  inventory: Joi.number().integer().min(0).required()
});

export const inventorySchema = Joi.object({
  inventory: Joi.number().integer().min(0).required()
});
