import { Request, Response } from 'express';
import { Service } from '../models/service.model';
import { asyncHandler } from '../utils/async-handler';
import { ApiError } from '../utils/api-error';
import { ApiResponse } from '../utils/api-response';
import { slugify } from '../utils/slugify';

export const getServices = asyncHandler(async (_req: Request, res: Response) => {
  const services = await Service.find({ isActive: true }).sort({ order: 1, createdAt: -1 });
  return ApiResponse.success(res, 'Services fetched successfully', services);
});

export const getServiceBySlug = asyncHandler(async (req: Request, res: Response) => {
  const { slug } = req.params;
  const service = await Service.findOne({ slug, isActive: true });
  if (!service) throw ApiError.notFound('Service not found');

  return ApiResponse.success(res, 'Service details fetched', service);
});

export const createService = asyncHandler(async (req: Request, res: Response) => {
  const { title } = req.body;
  const slug = slugify(title);

  const existing = await Service.findOne({ slug });
  if (existing) throw ApiError.conflict('Service with title already exists');

  const service = await Service.create({
    ...req.body,
    slug
  });

  return ApiResponse.created(res, 'Service created successfully', service);
});

export const updateService = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData = { ...req.body };

  if (updateData.title) {
    updateData.slug = slugify(updateData.title);
  }

  const service = await Service.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true
  });

  if (!service) throw ApiError.notFound('Service not found');

  return ApiResponse.success(res, 'Service updated successfully', service);
});

export const deleteService = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const service = await Service.findByIdAndDelete(id);
  if (!service) throw ApiError.notFound('Service not found');

  return ApiResponse.success(res, 'Service deleted successfully', null);
});
