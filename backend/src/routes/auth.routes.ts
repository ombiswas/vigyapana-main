import { Router } from 'express';
import {
  login,
  refreshToken,
  logout,
  getMe,
  createAdminUser
} from '../controllers/auth.controller';
import { authenticate, authorize } from '../middlewares/auth.middleware';
import { authRateLimiter } from '../middlewares/rate-limiter.middleware';
import { validate } from '../middlewares/validate.middleware';
import { loginValidator, registerAdminValidator } from '../validators/auth.validator';
import { UserRole } from '../constants/roles';

const router = Router();

router.post('/login', authRateLimiter, loginValidator, validate, login);
router.post('/refresh-token', refreshToken);
router.post('/logout', authenticate, logout);
router.get('/me', authenticate, getMe);
router.post(
  '/register-admin',
  authenticate,
  authorize(UserRole.SUPER_ADMIN),
  registerAdminValidator,
  validate,
  createAdminUser
);

export default router;
