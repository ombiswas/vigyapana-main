import { Router } from 'express';
import { getDashboardAnalytics } from '../controllers/analytics.controller';
import { authenticate, authorize } from '../middlewares/auth.middleware';
import { UserRole } from '../constants/roles';

const router = Router();

router.get(
  '/dashboard',
  authenticate,
  authorize(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.CONTENT_MANAGER),
  getDashboardAnalytics
);

export default router;
