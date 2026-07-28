import apiClient from './apiClient';
import { API_ENDPOINTS } from '@/config/api';
import type { ApiResponse } from '@/types/common.types';

export interface ContactPayload {
  name:                string;
  email:               string;
  phone?:              string;
  company?:            string;
  subject:             string;
  message:             string;
  servicesInterested?: string[];
  budget?:             string;
}

export const contactService = {
  submit: async (payload: ContactPayload) => {
    const { data } = await apiClient.post<ApiResponse<{ id: string }>>(
      API_ENDPOINTS.CONTACT, payload,
    );
    return data;
  },

  getAll: async (params?: Record<string, unknown>) => {
    const { data } = await apiClient.get<ApiResponse<unknown[]>>(API_ENDPOINTS.CONTACT, { params });
    return data;
  },
};
