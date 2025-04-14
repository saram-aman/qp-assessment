import { Request, Response } from 'express';
import { loginUser, registerUser } from '../services/authService';
import { Role } from '../utils/types';

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password, role } = req.body;

    if (!Object.values(Role).includes(role)) {
      res.status(400).json({ message: 'Invalid role' });
    }

    const user = await registerUser(email, password, role);
    res.status(200).json({ message: 'User registered successfully', user });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const result = await loginUser(email, password);
    res.status(200).json({ message: 'Login successful', ...result });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};
