import apiClient from './apiClient';
import { API_ENDPOINTS } from '@/config/api';
import type { BlogPost } from '@/types/content.types';
import type { ApiResponse, FilterParams } from '@/types/common.types';

export const blogService = {
  getAll: async (params?: FilterParams) => {
    const { data } = await apiClient.get<ApiResponse<BlogPost[]>>(API_ENDPOINTS.BLOG, { params });
    return data;
  },

  getBySlug: async (slug: string) => {
    const { data } = await apiClient.get<ApiResponse<{ post: BlogPost }>>(
      `${API_ENDPOINTS.BLOG}/${slug}`,
    );
    return data.data?.post;
  },

  create: async (payload: Partial<BlogPost>) => {
    const { data } = await apiClient.post<ApiResponse<{ post: BlogPost }>>(
      API_ENDPOINTS.BLOG, payload,
    );
    return data.data?.post;
  },

  update: async (id: string, payload: Partial<BlogPost>) => {
    const { data } = await apiClient.put<ApiResponse<{ post: BlogPost }>>(
      `${API_ENDPOINTS.BLOG}/${id}`, payload,
    );
    return data.data?.post;
  },

  delete: async (id: string) => {
    await apiClient.delete(`${API_ENDPOINTS.BLOG}/${id}`);
  },
};
