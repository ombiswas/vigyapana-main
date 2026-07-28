import { body } from 'express-validator';

export const contactSubmissionValidator = [
  body('fullName').trim().notEmpty().withMessage('Full name is required'),
  body('email').isEmail().withMessage('Please enter a valid email address'),
  body('phone').trim().notEmpty().withMessage('Phone number is required'),
  body('serviceRequested').notEmpty().withMessage('Please select a service'),
  body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters long')
];
