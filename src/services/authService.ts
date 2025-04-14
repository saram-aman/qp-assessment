import { createUser, findUserByEmail } from '../models/userQueries';
import { comparePassword, hashPassword } from '../utils/hash';
import { generateToken } from '../utils/jwt';
import { Role } from '../utils/types';

export const registerUser = async (email: string, password: string, role: Role) => {
  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    throw new Error('User already exists');
  }

  const hashed = await hashPassword(password);
  const user = await createUser(email, hashed, role);
  return { id: user.id, email: user.email, role: user.role };
};

export const loginUser = async (email: string, password: string) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error('Invalid credentials');

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const token = generateToken({ id: user.id, role: user.role });
  return { token };
};
