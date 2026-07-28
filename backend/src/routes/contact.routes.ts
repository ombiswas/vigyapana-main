import { Router } from 'express';
import {
  submitContactForm,
  getContactSubmissions,
  updateSubmissionStatus,
  deleteSubmission
} from '../controllers/contact.controller';
import { authenticate, authorize } from '../middlewares/auth.middleware';
import { validate } from '../middlewares/validate.middleware';
import { contactSubmissionValidator } from '../validators/contact.validator';
import { UserRole } from '../constants/roles';

const router = Router();

router.post('/', contactSubmissionValidator, validate, submitContactForm);

router.get(
  '/',
  authenticate,
  authorize(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  getContactSubmissions
);
router.patch(
  '/:id/status',
  authenticate,
  authorize(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  updateSubmissionStatus
);
router.delete(
  '/:id',
  authenticate,
  authorize(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  deleteSubmission
);

export default router;
