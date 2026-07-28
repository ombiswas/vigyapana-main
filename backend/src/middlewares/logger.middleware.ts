import morgan from 'morgan';
import { env } from '../config/env';

export const requestLogger = morgan(
  env.NODE_ENV === 'development'
    ? ':method :url :status :response-time ms - :res[content-length]'
    : 'combined'
);
