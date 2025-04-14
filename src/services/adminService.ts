import {
  createGroceryItem,
  getAllGroceryItems,
  updateGroceryItem,
  deleteGroceryItem,
  updateInventory,
} from '../models/groceryQueries';

export const addItem = async (name: string, price: number, inventory: number) => {
  return await createGroceryItem(name, price, inventory);
};

export const getItems = async () => {
  return await getAllGroceryItems();
};

export const updateItem = async (id: number, data: Partial<{ name: string; price: number }>) => {
  return await updateGroceryItem(id, data);
};

export const removeItem = async (id: number) => {
  return await deleteGroceryItem(id);
};

export const setInventory = async (id: number, inventory: number) => {
  return await updateInventory(id, inventory);
};
