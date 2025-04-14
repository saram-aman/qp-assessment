import { Request, Response } from 'express';
import * as AdminService from '../services/adminService';

export const addGroceryItem = async (req: Request, res: Response) => {
  try {
    const { name, price, inventory } = req.body;
    console.log('Adding grocery item:', { name, price, inventory });
    const item = await AdminService.addItem(name, price, inventory);
    res.status(201).json({ message: 'Grocery item added successfully', item });
  } catch (error: any) {
    res.status(400).json({ message: `Failed to add grocery item: ${error.message}` });
  }
};

export const viewAllItems = async (_req: Request, res: Response) => {
  try {
    const items = await AdminService.getItems();
    res.status(200).json({ message: 'Fetched all grocery items successfully', items });
  } catch (error: any) {
    res.status(500).json({ message: `Failed to fetch grocery items: ${error.message}` });
  }
};

export const updateItem = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const updated = await AdminService.updateItem(id, req.body);
    res.status(200).json({ message: 'Grocery item updated successfully', updated });
  } catch (error: any) {
    res.status(400).json({ message: `Failed to update grocery item: ${error.message}` });
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await AdminService.removeItem(id);
    res.status(204).json({ message: 'Grocery item deleted successfully' });
  } catch (error: any) {
    res.status(400).json({ message: `Failed to delete grocery item: ${error.message}` });
  }
};

export const updateInventory = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const { inventory } = req.body;
    const updated = await AdminService.setInventory(id, inventory);
    res.status(200).json({ message: 'Inventory updated successfully', updated });
  } catch (error: any) {
    res.status(400).json({ message: `Failed to update inventory: ${error.message}` });
  }
};
