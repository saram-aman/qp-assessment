import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createGroceryItem = async (name: string, price: number, inventory: number) => {
  return await prisma.groceryItem.create({
    data: { name, price, inventory },
  });
};

export const getAllGroceryItems = async () => {
  return await prisma.groceryItem.findMany();
};

export const getGroceryItemsUser = async (filters: { name?: string; priceMin?: number; priceMax?: number }) => {
  const { name, priceMin, priceMax } = filters;

  return await prisma.groceryItem.findMany({
    where: {
      ...(name && { name: { contains: name, mode: 'insensitive' } }),
      ...(priceMin !== undefined && { price: { gte: priceMin } }),
      ...(priceMax !== undefined && { price: { lte: priceMax } }),
    },
  });
};

export const updateGroceryItem = async (id: number, updates: Partial<{ name: string; price: number }>) => {
  return await prisma.groceryItem.update({
    where: { id },
    data: updates,
  });
};

export const deleteGroceryItem = async (id: number) => {
  return await prisma.groceryItem.delete({
    where: { id },
  });
};

export const updateInventory = async (id: number, inventory: number) => {
  return await prisma.groceryItem.update({
    where: { id },
    data: { inventory },
  });
};

export const findGroceryById = async (id: number) => {
  return await prisma.groceryItem.findUnique({
    where: { id },
  });
};
