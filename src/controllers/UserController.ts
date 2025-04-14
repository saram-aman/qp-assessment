import { Request, Response } from 'express';
import * as UserService from '../services/userService';

export const listGroceries = async (_req: Request, res: Response) => {
  try {
    const { name, priceMin, priceMax } = _req.query;
    const filters = {
      name: typeof name === 'string' ? name : undefined,
      priceMin: typeof priceMin === 'string' ? parseFloat(priceMin) : undefined,
      priceMax: typeof priceMax === 'string' ? parseFloat(priceMax) : undefined,
    };
    const items = await UserService.viewGroceryItems(filters);
    res.status(200).json({ message: 'Groceries retrieved successfully', data: items });
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to retrieve groceries', error: error.message });
  }
};

export const placeOrder = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const { items } = req.body;

    const order = await UserService.placeOrder(user.id, items);
    res.status(201).json({ message: 'Order placed successfully', data: order });
  } catch (error: any) {
    res.status(400).json({ message: 'Failed to place order', error: error.message });
  }
};

export const getOrders = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const orders = await UserService.getMyOrders(user.id);
    res.status(200).json({ message: 'Orders retrieved successfully', data: orders });
  } catch (error: any) {
    res.status(400).json({ message: 'Failed to retrieve orders', error: error.message });
  }
};
