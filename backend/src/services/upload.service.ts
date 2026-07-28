import cloudinary from '../config/cloudinary';
import { ApiError } from '../utils/api-error';

export interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
  format: string;
  bytes: number;
  width?: number;
  height?: number;
}

export const uploadBufferToCloudinary = (
  buffer: Buffer,
  folder: string = 'vigyapana'
): Promise<CloudinaryUploadResult> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: `vigyapana/${folder}`,
        resource_type: 'auto',
        transformation: [{ quality: 'auto', fetch_format: 'auto' }]
      },
      (error, result) => {
        if (error || !result) {
          return reject(ApiError.internal(`Cloudinary Upload Error: ${error?.message || 'Unknown'}`));
        }
        resolve({
          public_id: result.public_id,
          secure_url: result.secure_url,
          format: result.format,
          bytes: result.bytes,
          width: result.width,
          height: result.height
        });
      }
    );

    uploadStream.end(buffer);
  });
};

export const deleteFromCloudinary = async (public_id: string): Promise<boolean> => {
  try {
    const result = await cloudinary.uploader.destroy(public_id);
    return result.result === 'ok';
  } catch (error) {
    console.error(`[Cloudinary] Delete failed for ${public_id}:`, error);
    return false;
  }
};
