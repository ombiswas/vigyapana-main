import { Request, Response } from 'express';
import { Portfolio } from '../models/portfolio.model';
import { PortfolioCategory } from '../models/portfolio-category.model';
import { asyncHandler } from '../utils/async-handler';
import { ApiError } from '../utils/api-error';
import { ApiResponse } from '../utils/api-response';
import { slugify } from '../utils/slugify';

export const getPortfolios = asyncHandler(async (req: Request, res: Response) => {
  const { category, featured } = req.query;
  const filter: any = {};

  if (category) {
    const cat = await PortfolioCategory.findOne({ slug: category as string });
    if (cat) filter.category = cat._id;
  }

  if (featured === 'true') filter.isFeatured = true;

  const portfolios = await Portfolio.find(filter)
    .populate('category', 'name slug')
    .sort({ isFeatured: -1, order: 1, createdAt: -1 });

  return ApiResponse.success(res, 'Portfolios retrieved successfully', portfolios);
});

export const getPortfolioBySlug = asyncHandler(async (req: Request, res: Response) => {
  const { slug } = req.params;
  const portfolio = await Portfolio.findOne({ slug }).populate('category', 'name slug');

  if (!portfolio) {
    throw ApiError.notFound('Portfolio item not found');
  }

  return ApiResponse.success(res, 'Portfolio details retrieved', portfolio);
});

export const createPortfolio = asyncHandler(async (req: Request, res: Response) => {
  const { title, clientName, category, coverImage, gallery, summary, description, deliverables, liveUrl, isFeatured, order } = req.body;

  const slug = slugify(title);
  const existing = await Portfolio.findOne({ slug });
  if (existing) {
    throw ApiError.conflict('Portfolio with a similar title already exists');
  }

  const portfolio = await Portfolio.create({
    title,
    slug,
    clientName,
    category,
    coverImage,
    gallery: gallery || [],
    summary,
    description,
    deliverables: deliverables || [],
    liveUrl,
    isFeatured: isFeatured || false,
    order: order || 0
  });

  return ApiResponse.created(res, 'Portfolio item created successfully', portfolio);
});

export const updatePortfolio = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData = { ...req.body };

  if (updateData.title) {
    updateData.slug = slugify(updateData.title);
  }

  const portfolio = await Portfolio.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true
  });

  if (!portfolio) throw ApiError.notFound('Portfolio item not found');

  return ApiResponse.success(res, 'Portfolio item updated', portfolio);
});

export const deletePortfolio = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const portfolio = await Portfolio.findByIdAndDelete(id);
  if (!portfolio) throw ApiError.notFound('Portfolio item not found');

  return ApiResponse.success(res, 'Portfolio item deleted successfully', null);
});

// Category Controllers
export const getPortfolioCategories = asyncHandler(async (_req: Request, res: Response) => {
  const categories = await PortfolioCategory.find({ isActive: true }).sort({ name: 1 });
  return ApiResponse.success(res, 'Portfolio categories retrieved', categories);
});

export const createPortfolioCategory = asyncHandler(async (req: Request, res: Response) => {
  const { name, description } = req.body;
  const slug = slugify(name);

  const category = await PortfolioCategory.create({ name, slug, description });
  return ApiResponse.created(res, 'Portfolio category created', category);
});
