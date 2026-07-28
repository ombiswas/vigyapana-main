import apiClient from './apiClient';
import { API_ENDPOINTS } from '@/config/api';
import type { Service } from '@/types/service.types';
import type { ApiResponse, FilterParams } from '@/types/common.types';

export const serviceService = {
  getAll: async (params?: FilterParams) => {
    const { data } = await apiClient.get<ApiResponse<Service[]>>(API_ENDPOINTS.SERVICES, { params });
    return data;
  },

  getBySlug: async (slug: string) => {
    const { data } = await apiClient.get<ApiResponse<{ service: Service }>>(
      `${API_ENDPOINTS.SERVICES}/${slug}`,
    );
    return data.data?.service;
  },

  create: async (payload: Partial<Service>) => {
    const { data } = await apiClient.post<ApiResponse<{ service: Service }>>(
      API_ENDPOINTS.SERVICES, payload,
    );
    return data.data?.service;
  },

  update: async (id: string, payload: Partial<Service>) => {
    const { data } = await apiClient.put<ApiResponse<{ service: Service }>>(
      `${API_ENDPOINTS.SERVICES}/${id}`, payload,
    );
    return data.data?.service;
  },

  delete: async (id: string) => {
    await apiClient.delete(`${API_ENDPOINTS.SERVICES}/${id}`);
  },

  togglePublished: async (id: string) => {
    const { data } = await apiClient.patch<ApiResponse<{ service: Service }>>(
      `${API_ENDPOINTS.SERVICES}/${id}/toggle-published`,
    );
    return data.data?.service;
  },

  reorder: async (items: { id: string; order: number }[]) => {
    await apiClient.patch(`${API_ENDPOINTS.SERVICES}/reorder`, { items });
  },
};
