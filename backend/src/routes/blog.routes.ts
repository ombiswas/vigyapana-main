import { Router } from 'express';
import {
  getBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogCategories,
  createBlogCategory
} from '../controllers/blog.controller';
import { authenticate, authorize } from '../middlewares/auth.middleware';
import { validate } from '../middlewares/validate.middleware';
import { blogValidator } from '../validators/blog.validator';
import { UserRole } from '../constants/roles';

const router = Router();

router.get('/', getBlogs);
router.get('/categories', getBlogCategories);
router.get('/:slug', getBlogBySlug);

router.post(
  '/',
  authenticate,
  authorize(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.CONTENT_MANAGER),
  blogValidator,
  validate,
  createBlog
);
router.put(
  '/:id',
  authenticate,
  authorize(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.CONTENT_MANAGER),
  updateBlog
);
router.delete(
  '/:id',
  authenticate,
  authorize(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  deleteBlog
);
router.post(
  '/categories',
  authenticate,
  authorize(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  createBlogCategory
);

export default router;
