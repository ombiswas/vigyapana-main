import { Request, Response } from 'express';
import { Testimonial } from '../models/testimonial.model';
import { asyncHandler } from '../utils/async-handler';
import { ApiError } from '../utils/api-error';
import { ApiResponse } from '../utils/api-response';

export const getTestimonials = asyncHandler(async (req: Request, res: Response) => {
  const { featured } = req.query;
  const filter: any = {};
  if (featured === 'true') filter.isFeatured = true;

  const testimonials = await Testimonial.find(filter).sort({ isFeatured: -1, order: 1, createdAt: -1 });
  return ApiResponse.success(res, 'Testimonials retrieved', testimonials);
});

export const createTestimonial = asyncHandler(async (req: Request, res: Response) => {
  const testimonial = await Testimonial.create(req.body);
  return ApiResponse.created(res, 'Testimonial created', testimonial);
});

export const updateTestimonial = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const testimonial = await Testimonial.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true
  });
  if (!testimonial) throw ApiError.notFound('Testimonial not found');

  return ApiResponse.success(res, 'Testimonial updated', testimonial);
});

export const deleteTestimonial = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const testimonial = await Testimonial.findByIdAndDelete(id);
  if (!testimonial) throw ApiError.notFound('Testimonial not found');

  return ApiResponse.success(res, 'Testimonial deleted', null);
});
