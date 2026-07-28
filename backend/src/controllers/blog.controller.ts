import { Request, Response } from 'express';
import { Blog } from '../models/blog.model';
import { BlogCategory } from '../models/blog-category.model';
import { asyncHandler } from '../utils/async-handler';
import { ApiError } from '../utils/api-error';
import { ApiResponse } from '../utils/api-response';
import { slugify } from '../utils/slugify';

export const getBlogs = asyncHandler(async (req: Request, res: Response) => {
  const { page = 1, limit = 10, category, search, tag, status } = req.query;
  const pageNum = parseInt(page as string, 10);
  const limitNum = parseInt(limit as string, 10);
  const skip = (pageNum - 1) * limitNum;

  const filter: any = {};
  if (status) filter.status = status;
  else filter.status = 'PUBLISHED';

  if (category) {
    const cat = await BlogCategory.findOne({ slug: category as string });
    if (cat) filter.category = cat._id;
  }

  if (tag) filter.tags = tag;

  if (search) {
    filter.$text = { $search: search as string };
  }

  const [blogs, total] = await Promise.all([
    Blog.find(filter)
      .populate('author', 'name avatar role')
      .populate('category', 'name slug')
      .sort({ publishedAt: -1, createdAt: -1 })
      .skip(skip)
      .limit(limitNum),
    Blog.countDocuments(filter)
  ]);

  return ApiResponse.success(res, 'Blogs fetched successfully', blogs, 200, {
    page: pageNum,
    limit: limitNum,
    total,
    totalPages: Math.ceil(total / limitNum)
  });
});

export const getBlogBySlug = asyncHandler(async (req: Request, res: Response) => {
  const { slug } = req.params;
  const blog = await Blog.findOneAndUpdate(
    { slug },
    { $inc: { viewsCount: 1 } },
    { new: true }
  )
    .populate('author', 'name avatar role')
    .populate('category', 'name slug');

  if (!blog) throw ApiError.notFound('Blog post not found');

  return ApiResponse.success(res, 'Blog post retrieved', blog);
});

export const createBlog = asyncHandler(async (req: Request, res: Response) => {
  const { title } = req.body;
  const slug = slugify(title);

  const blog = await Blog.create({
    ...req.body,
    slug,
    author: req.user?.userId,
    publishedAt: req.body.status === 'PUBLISHED' ? new Date() : undefined
  });

  return ApiResponse.created(res, 'Blog post created successfully', blog);
});

export const updateBlog = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData = { ...req.body };

  if (updateData.title) {
    updateData.slug = slugify(updateData.title);
  }

  if (updateData.status === 'PUBLISHED') {
    const current = await Blog.findById(id);
    if (current && current.status !== 'PUBLISHED') {
      updateData.publishedAt = new Date();
    }
  }

  const blog = await Blog.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true
  });

  if (!blog) throw ApiError.notFound('Blog post not found');

  return ApiResponse.success(res, 'Blog post updated successfully', blog);
});

export const deleteBlog = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const blog = await Blog.findByIdAndDelete(id);
  if (!blog) throw ApiError.notFound('Blog post not found');

  return ApiResponse.success(res, 'Blog post deleted successfully', null);
});

// Categories
export const getBlogCategories = asyncHandler(async (_req: Request, res: Response) => {
  const categories = await BlogCategory.find({ isActive: true }).sort({ name: 1 });
  return ApiResponse.success(res, 'Blog categories retrieved', categories);
});

export const createBlogCategory = asyncHandler(async (req: Request, res: Response) => {
  const { name, description } = req.body;
  const slug = slugify(name);

  const category = await BlogCategory.create({ name, slug, description });
  return ApiResponse.created(res, 'Blog category created', category);
});
