import { Request, Response } from 'express';
import { Settings } from '../models/settings.model';
import { asyncHandler } from '../utils/async-handler';
import { ApiResponse } from '../utils/api-response';

export const getSettings = asyncHandler(async (_req: Request, res: Response) => {
  let settings = await Settings.findOne();
  if (!settings) {
    settings = await Settings.create({});
  }
  return ApiResponse.success(res, 'Agency global settings retrieved', settings);
});

export const updateSettings = asyncHandler(async (req: Request, res: Response) => {
  let settings = await Settings.findOne();
  if (!settings) {
    settings = await Settings.create(req.body);
  } else {
    Object.assign(settings, req.body);
    await settings.save();
  }

  return ApiResponse.success(res, 'Settings updated successfully', settings);
});
