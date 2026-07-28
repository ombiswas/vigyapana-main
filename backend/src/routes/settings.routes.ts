import { Router } from 'express';
import { getSettings, updateSettings } from '../controllers/settings.controller';
import { authenticate, authorize } from '../middlewares/auth.middleware';
import { UserRole } from '../constants/roles';

const router = Router();

router.get('/', getSettings);

router.put(
  '/',
  authenticate,
  authorize(UserRole.SUPER_ADMIN),
  updateSettings
);

export default router;
