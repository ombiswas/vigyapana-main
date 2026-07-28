import { Request, Response } from 'express';
import { Media } from '../models/media.model';
import { asyncHandler } from '../utils/async-handler';
import { ApiError } from '../utils/api-error';
import { ApiResponse } from '../utils/api-response';
import { uploadBufferToCloudinary, deleteFromCloudinary } from '../services/upload.service';

export const uploadMedia = asyncHandler(async (req: Request, res: Response) => {
  if (!req.file) {
    throw ApiError.badRequest('No file attached for upload');
  }

  const folder = (req.query.folder as string) || 'general';
  const result = await uploadBufferToCloudinary(req.file.buffer, folder);

  const media = await Media.create({
    filename: req.file.originalname,
    originalName: req.file.originalname,
    public_id: result.public_id,
    secure_url: result.secure_url,
    format: result.format,
    mimeType: req.file.mimetype,
    sizeBytes: result.bytes,
    width: result.width,
    height: result.height,
    uploadedBy: req.user?.userId
  });

  return ApiResponse.created(res, 'File uploaded to Cloudinary successfully', media);
});

export const getMediaAssets = asyncHandler(async (req: Request, res: Response) => {
  const { page = 1, limit = 20 } = req.query;
  const pageNum = parseInt(page as string, 10);
  const limitNum = parseInt(limit as string, 10);

  const [assets, total] = await Promise.all([
    Media.find()
      .populate('uploadedBy', 'name email')
      .sort({ createdAt: -1 })
      .skip((pageNum - 1) * limitNum)
      .limit(limitNum),
    Media.countDocuments()
  ]);

  return ApiResponse.success(res, 'Media gallery fetched', assets, 200, {
    page: pageNum,
    limit: limitNum,
    total,
    totalPages: Math.ceil(total / limitNum)
  });
});

export const deleteMediaAsset = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const media = await Media.findById(id);
  if (!media) throw ApiError.notFound('Media asset not found');

  await deleteFromCloudinary(media.public_id);
  await media.deleteOne();

  return ApiResponse.success(res, 'Media asset deleted', null);
});
