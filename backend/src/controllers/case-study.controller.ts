import { Request, Response } from 'express';
import { CaseStudy } from '../models/case-study.model';
import { asyncHandler } from '../utils/async-handler';
import { ApiError } from '../utils/api-error';
import { ApiResponse } from '../utils/api-response';
import { slugify } from '../utils/slugify';

export const getCaseStudies = asyncHandler(async (req: Request, res: Response) => {
  const { status, featured, industry } = req.query;
  const filter: any = {};

  if (status) filter.status = status;
  else filter.status = 'PUBLISHED'; // Default public filter

  if (featured === 'true') filter.isFeatured = true;
  if (industry) filter.clientIndustry = industry;

  const caseStudies = await CaseStudy.find(filter)
    .populate('testimonialRef')
    .sort({ isFeatured: -1, createdAt: -1 });

  return ApiResponse.success(res, 'Case studies retrieved successfully', caseStudies);
});

export const getCaseStudyBySlug = asyncHandler(async (req: Request, res: Response) => {
  const { slug } = req.params;
  const caseStudy = await CaseStudy.findOne({ slug }).populate('testimonialRef');

  if (!caseStudy) throw ApiError.notFound('Case study not found');

  return ApiResponse.success(res, 'Case study details fetched', caseStudy);
});

export const createCaseStudy = asyncHandler(async (req: Request, res: Response) => {
  const { title } = req.body;
  const slug = slugify(title);

  const caseStudy = await CaseStudy.create({
    ...req.body,
    slug
  });

  return ApiResponse.created(res, 'Case study created successfully', caseStudy);
});

export const updateCaseStudy = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData = { ...req.body };

  if (updateData.title) {
    updateData.slug = slugify(updateData.title);
  }

  const caseStudy = await CaseStudy.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true
  });

  if (!caseStudy) throw ApiError.notFound('Case study not found');

  return ApiResponse.success(res, 'Case study updated successfully', caseStudy);
});

export const deleteCaseStudy = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const caseStudy = await CaseStudy.findByIdAndDelete(id);
  if (!caseStudy) throw ApiError.notFound('Case study not found');

  return ApiResponse.success(res, 'Case study deleted successfully', null);
});
