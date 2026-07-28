import { Router } from 'express';
import {
  getPortfolios,
  getPortfolioBySlug,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
  getPortfolioCategories,
  createPortfolioCategory
} from '../controllers/portfolio.controller';
import { authenticate, authorize } from '../middlewares/auth.middleware';
import { UserRole } from '../constants/roles';

const router = Router();

// Public
router.get('/', getPortfolios);
router.get('/categories', getPortfolioCategories);
router.get('/:slug', getPortfolioBySlug);

// Admin Only
router.post(
  '/',
  authenticate,
  authorize(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.CONTENT_MANAGER),
  createPortfolio
);
router.put(
  '/:id',
  authenticate,
  authorize(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.CONTENT_MANAGER),
  updatePortfolio
);
router.delete(
  '/:id',
  authenticate,
  authorize(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  deletePortfolio
);
router.post(
  '/categories',
  authenticate,
  authorize(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  createPortfolioCategory
);

export default router;
