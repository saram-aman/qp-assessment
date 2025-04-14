import { PrismaClient } from '@prisma/client';
import { Role } from '../utils/types';

const prisma = new PrismaClient();

export const createUser = async (email: string, password: string, role: Role) => {
  return await prisma.user.create({
    data: { email, password, role },
  });
};

export const findUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: { email },
  });
};

