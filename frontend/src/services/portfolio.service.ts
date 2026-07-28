import apiClient from './apiClient';
import { API_ENDPOINTS } from '@/config/api';
import type { Portfolio } from '@/types/content.types';
import type { ApiResponse, FilterParams } from '@/types/common.types';

export const portfolioService = {
  getAll: async (params?: FilterParams) => {
    const { data } = await apiClient.get<ApiResponse<Portfolio[]>>(API_ENDPOINTS.PORTFOLIO, { params });
    return data;
  },

  getBySlug: async (slug: string) => {
    const { data } = await apiClient.get<ApiResponse<{ portfolio: Portfolio }>>(
      `${API_ENDPOINTS.PORTFOLIO}/${slug}`,
    );
    return data.data?.portfolio;
  },

  create: async (payload: Partial<Portfolio>) => {
    const { data } = await apiClient.post<ApiResponse<{ portfolio: Portfolio }>>(
      API_ENDPOINTS.PORTFOLIO, payload,
    );
    return data.data?.portfolio;
  },

  update: async (id: string, payload: Partial<Portfolio>) => {
    const { data } = await apiClient.put<ApiResponse<{ portfolio: Portfolio }>>(
      `${API_ENDPOINTS.PORTFOLIO}/${id}`, payload,
    );
    return data.data?.portfolio;
  },

  delete: async (id: string) => {
    await apiClient.delete(`${API_ENDPOINTS.PORTFOLIO}/${id}`);
  },
};
