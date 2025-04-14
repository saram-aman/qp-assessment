import { Router } from 'express';
import { register, login } from '../controllers/AuthController';
import { loginSchema, registerSchema } from '../validators/authValidator';
import { validateRequest } from '../middlewares/validateRequest';

const router = Router();
router.post('/register', validateRequest(registerSchema), register);
router.post('/login', validateRequest(loginSchema), login);

export default router;
