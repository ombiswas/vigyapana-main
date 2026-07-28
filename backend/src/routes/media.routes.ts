import { Router } from 'express';
import {
  uploadMedia,
  getMediaAssets,
  deleteMediaAsset
} from '../controllers/media.controller';
import { authenticate, authorize } from '../middlewares/auth.middleware';
import { uploadSingleImage } from '../middlewares/upload.middleware';
import { UserRole } from '../constants/roles';

const router = Router();

router.post(
  '/upload',
  authenticate,
  authorize(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.CONTENT_MANAGER),
  uploadSingleImage,
  uploadMedia
);
router.get(
  '/',
  authenticate,
  authorize(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.CONTENT_MANAGER),
  getMediaAssets
);
router.delete(
  '/:id',
  authenticate,
  authorize(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  deleteMediaAsset
);

export default router;
