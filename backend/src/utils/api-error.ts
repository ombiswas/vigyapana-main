import { HttpStatus } from '../constants/http-status';

export class ApiError extends Error {
  public readonly statusCode: number;
  public readonly errors: any[];
  public readonly isOperational: boolean;

  constructor(
    statusCode: number = HttpStatus.INTERNAL_SERVER_ERROR,
    message: string = 'Internal Server Error',
    errors: any[] = [],
    stack: string = ''
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.isOperational = true;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  static badRequest(message: string = 'Bad Request', errors: any[] = []): ApiError {
    return new ApiError(HttpStatus.BAD_REQUEST, message, errors);
  }

  static unauthorized(message: string = 'Unauthorized access'): ApiError {
    return new ApiError(HttpStatus.UNAUTHORIZED, message);
  }

  static forbidden(message: string = 'Forbidden resource'): ApiError {
    return new ApiError(HttpStatus.FORBIDDEN, message);
  }

  static notFound(message: string = 'Resource not found'): ApiError {
    return new ApiError(HttpStatus.NOT_FOUND, message);
  }

  static conflict(message: string = 'Resource conflict'): ApiError {
    return new ApiError(HttpStatus.CONFLICT, message);
  }

  static internal(message: string = 'Internal Server Error'): ApiError {
    return new ApiError(HttpStatus.INTERNAL_SERVER_ERROR, message);
  }
}
