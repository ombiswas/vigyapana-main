import { Router } from 'express';
import {
  subscribeNewsletter,
  unsubscribeNewsletter,
  getSubscribers
} from '../controllers/newsletter.controller';
import { authenticate, authorize } from '../middlewares/auth.middleware';
import { UserRole } from '../constants/roles';

const router = Router();

router.post('/subscribe', subscribeNewsletter);
router.post('/unsubscribe', unsubscribeNewsletter);

router.get(
  '/subscribers',
  authenticate,
  authorize(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  getSubscribers
);

export default router;
