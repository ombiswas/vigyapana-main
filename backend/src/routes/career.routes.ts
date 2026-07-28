import { Router } from 'express';
import {
  applyForPosition,
  getCareerApplications,
  updateApplicationStatus
} from '../controllers/career.controller';
import { authenticate, authorize } from '../middlewares/auth.middleware';
import { UserRole } from '../constants/roles';

const router = Router();

router.post('/apply', applyForPosition);

router.get(
  '/applications',
  authenticate,
  authorize(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  getCareerApplications
);
router.patch(
  '/applications/:id/status',
  authenticate,
  authorize(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  updateApplicationStatus
);

export default router;
