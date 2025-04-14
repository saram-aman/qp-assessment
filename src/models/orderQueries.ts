import { PrismaClient } from '@prisma/client';
import { OrderItemInput } from '../utils/interface';

const prisma = new PrismaClient();

export const createOrder = async (userId: number, items: OrderItemInput[]) => {
  return await prisma.order.create({
    data: {
      userId,
      items: {
        create: items.map((item) => ({
          itemId: item.itemId,
          quantity: item.quantity,
        })),
      },
    },
    include: {
      items: true,
    },
  });
};

export const getUserOrders = async (userId: number, filters?: { name?: string; priceMin?: number; priceMax?: number }) => {
  return await prisma.order.findMany({
    where: {
      userId,
      items: {
        some: {
          item: {
            name: filters?.name ? { contains: filters.name, mode: 'insensitive' } : undefined,
            price: {
              gte: filters?.priceMin,
              lte: filters?.priceMax,
            },
          },
        },
      },
    },
    include: {
      items: {
        include: {
          item: true,
        },
      },
    },
  });
};
