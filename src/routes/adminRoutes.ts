import { Router } from 'express';
import {
  addGroceryItem,
  deleteItem,
  updateInventory,
  updateItem,
  viewAllItems
} from '../controllers/AdminController';

import { authenticate } from '../middlewares/authMiddleware';
import { authorize } from '../middlewares/roleMiddleware';
import { Role } from '../utils/types';
import { validateRequest } from '../middlewares/validateRequest';
import { grocerySchema, inventorySchema, updateGrocerySchema } from '../validators/adminValidator';

const router = Router();

router.use((req, res, next) => {
  authenticate(req, res, (err) => {
    if (err) return next(err);
    authorize([Role.ADMIN])(req, res, next);
  });
});

router.post('/groceries', validateRequest(grocerySchema), addGroceryItem);
router.get('/groceries', validateRequest(grocerySchema), viewAllItems);
router.put('/groceries/:id', validateRequest(updateGrocerySchema), updateItem);
router.delete('/groceries/:id', deleteItem);
router.patch('/groceries/:id/inventory', validateRequest(inventorySchema), updateInventory);

export default router;
