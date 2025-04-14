import { Router } from 'express';
import authRoutes from './authRoutes';
import adminRoutes from './adminRoutes';
import userRoutes from './userRoutes';

const router = Router();

router.use('/api/auth', authRoutes);
router.use('/api/admin', adminRoutes);
router.use('/api/user', userRoutes);

export default router;
