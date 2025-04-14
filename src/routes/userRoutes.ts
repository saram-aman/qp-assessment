import { Router } from 'express';
import { getOrders, listGroceries, placeOrder } from '../controllers/UserController';
import { authenticate } from '../middlewares/authMiddleware';
import { authorize } from '../middlewares/roleMiddleware';
import { Role } from '../utils/types';
import { grocerySchema } from '../validators/adminValidator';
import { validateRequest } from '../middlewares/validateRequest';
import { orderSchema } from '../validators/userValidator';

const router = Router();

router.use((req, res, next) => {
  authenticate(req, res, (err) => {
    if (err) return next(err);
    authorize([Role.USER])(req, res, next);
  });
});

router.get('/groceries', validateRequest(grocerySchema), listGroceries);
router.post('/orders', validateRequest(orderSchema), placeOrder);
router.get('/orders', validateRequest(orderSchema), getOrders);

export default router;
