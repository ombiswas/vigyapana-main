import { Request, Response } from 'express';
import { CareerApplication } from '../models/career-application.model';
import { asyncHandler } from '../utils/async-handler';
import { ApiError } from '../utils/api-error';
import { ApiResponse } from '../utils/api-response';

export const applyForPosition = asyncHandler(async (req: Request, res: Response) => {
  const { fullName, email, phone, positionApplied, experienceYears, portfolioUrl, linkedinUrl, resume, coverLetter } = req.body;

  const application = await CareerApplication.create({
    fullName,
    email,
    phone,
    positionApplied,
    experienceYears,
    portfolioUrl,
    linkedinUrl,
    resume,
    coverLetter
  });

  return ApiResponse.created(res, 'Career application submitted successfully', application);
});

export const getCareerApplications = asyncHandler(async (req: Request, res: Response) => {
  const { status, position } = req.query;
  const filter: any = {};
  if (status) filter.status = status;
  if (position) filter.positionApplied = position;

  const applications = await CareerApplication.find(filter).sort({ createdAt: -1 });
  return ApiResponse.success(res, 'Career applications fetched', applications);
});

export const updateApplicationStatus = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;

  const application = await CareerApplication.findByIdAndUpdate(
    id,
    { status },
    { new: true, runValidators: true }
  );

  if (!application) throw ApiError.notFound('Application not found');

  return ApiResponse.success(res, 'Application status updated', application);
});
