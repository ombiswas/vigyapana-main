import { body } from 'express-validator';

export const blogValidator = [
  body('title').trim().notEmpty().withMessage('Blog title is required'),
  body('excerpt').trim().notEmpty().withMessage('Blog excerpt is required'),
  body('content').trim().notEmpty().withMessage('Blog content is required'),
  body('category').isMongoId().withMessage('Valid blog category ID is required')
];
