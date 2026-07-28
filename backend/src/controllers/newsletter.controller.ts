import { Request, Response } from 'express';
import { NewsletterSubscriber } from '../models/newsletter-subscriber.model';
import { asyncHandler } from '../utils/async-handler';
import { ApiError } from '../utils/api-error';
import { ApiResponse } from '../utils/api-response';

export const subscribeNewsletter = asyncHandler(async (req: Request, res: Response) => {
  const { email } = req.body;

  let subscriber = await NewsletterSubscriber.findOne({ email });

  if (subscriber) {
    if (subscriber.isActive) {
      throw ApiError.conflict('This email is already subscribed to our newsletter');
    }
    subscriber.isActive = true;
    subscriber.unsubscribedAt = undefined;
    await subscriber.save();
  } else {
    subscriber = await NewsletterSubscriber.create({ email });
  }

  return ApiResponse.created(res, 'Subscribed to newsletter successfully', subscriber);
});

export const unsubscribeNewsletter = asyncHandler(async (req: Request, res: Response) => {
  const { email } = req.body;
  const subscriber = await NewsletterSubscriber.findOne({ email });
  if (!subscriber) throw ApiError.notFound('Subscriber email not found');

  subscriber.isActive = false;
  subscriber.unsubscribedAt = new Date();
  await subscriber.save();

  return ApiResponse.success(res, 'Unsubscribed from newsletter', null);
});

export const getSubscribers = asyncHandler(async (_req: Request, res: Response) => {
  const subscribers = await NewsletterSubscriber.find().sort({ createdAt: -1 });
  return ApiResponse.success(res, 'Newsletter subscribers list retrieved', subscribers);
});
