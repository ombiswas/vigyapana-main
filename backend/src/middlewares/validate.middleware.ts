import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { ApiError } from '../utils/api-error';

export const validate = (req: Request, _res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const extractedErrors = errors.array().map((err: any) => ({
      field: err.path || err.param,
      message: err.msg
    }));
    return next(ApiError.badRequest('Validation failed', extractedErrors));
  }
  next();
};
