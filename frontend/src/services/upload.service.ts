import apiClient from './apiClient';
import { API_ENDPOINTS } from '@/config/api';

export interface UploadResult {
  url:      string;
  publicId: string;
  width?:   number;
  height?:  number;
  format?:  string;
  bytes?:   number;
}

export const uploadService = {
  uploadImage: async (file: File, folder?: string): Promise<UploadResult> => {
    const formData = new FormData();
    formData.append('image', file);
    if (folder) formData.append('folder', folder);

    const { data } = await apiClient.post<{ data: UploadResult }>(
      API_ENDPOINTS.UPLOADS.IMAGE,
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } },
    );
    return data.data;
  },

  uploadImages: async (files: File[], folder?: string): Promise<UploadResult[]> => {
    const formData = new FormData();
    files.forEach((file) => formData.append('images', file));
    if (folder) formData.append('folder', folder);

    const { data } = await apiClient.post<{ data: UploadResult[] }>(
      API_ENDPOINTS.UPLOADS.IMAGES,
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } },
    );
    return data.data;
  },

  deleteAsset: async (publicId: string, resourceType = 'image'): Promise<void> => {
    await apiClient.delete(API_ENDPOINTS.UPLOADS.DELETE, {
      data: { publicId, resourceType },
    });
  },
};
