import { getGroceryItemsUser, findGroceryById, updateInventory } from '../models/groceryQueries';
import { createOrder, getUserOrders } from '../models/orderQueries';
import { OrderItemInput } from '../utils/interface';

export const viewGroceryItems = async (filters: { name?: string; priceMin?: number; priceMax?: number }) => {
  return await getGroceryItemsUser(filters);
};

export const placeOrder = async (userId: number, items: OrderItemInput[]) => {
  for (const item of items) {
    const grocery = await findGroceryById(item.itemId);
    if (!grocery || grocery.inventory < item.quantity) {
      throw new Error(`Item ${item.itemId} is out of stock or not enough quantity.`);
    }

    await updateInventory(item.itemId, grocery.inventory - item.quantity);
  }

  return await createOrder(userId, items);
};

export const getMyOrders = async (userId: number) => {
  return await getUserOrders(userId);
};
