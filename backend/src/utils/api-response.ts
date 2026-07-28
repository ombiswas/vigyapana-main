import { Response } from 'express';
import { HttpStatus } from '../constants/http-status';

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export class ApiResponse {
  static success<T>(
    res: Response,
    message: string,
    data: T,
    statusCode: number = HttpStatus.OK,
    meta?: PaginationMeta
  ): Response {
    return res.status(statusCode).json({
      success: true,
      statusCode,
      message,
      data,
      ...(meta && { meta })
    });
  }

  static created<T>(res: Response, message: string, data: T): Response {
    return ApiResponse.success(res, message, data, HttpStatus.CREATED);
  }
}
