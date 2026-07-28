import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import apiRoutes from './routes';
import { requestLogger } from './middlewares/logger.middleware';
import { globalRateLimiter } from './middlewares/rate-limiter.middleware';
import { errorHandler } from './middlewares/error.middleware';
import { env } from './config/env';

const app: Application = express();

// Security Middlewares
app.use(helmet());
app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

// Global Rate Limiting
app.use('/api', globalRateLimiter);

// Body & Cookie Parsers
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

// Request Logging
app.use(requestLogger);

// Health Check Endpoint
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'Vigyapana API Engine'
  });
});

// API Routes Master Mounting
app.use('/api/v1', apiRoutes);

// Global Error Handler
app.use(errorHandler);

export default app;
