import { Router } from 'express';
import { getAllUsers } from '../controllers/userController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

// GET /api/users  (protected)
router.get('/', protect, getAllUsers);

export default router;
