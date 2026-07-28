import apiClient from './apiClient';
import { API_ENDPOINTS } from '@/config/api';
import type {
  AuthResponse, ChangePasswordPayload, LoginPayload, RegisterPayload,
} from '@/types/user.types';
import type { ApiResponse } from '@/types/common.types';

// ── Auth Service ───────────────────────────────────────────────────────────────
export const authService = {
  login: async (payload: LoginPayload): Promise<AuthResponse> => {
    const { data } = await apiClient.post<ApiResponse<AuthResponse>>(
      API_ENDPOINTS.AUTH.LOGIN, payload,
    );
    if (!data.data) throw new Error('Login response missing data');
    return data.data;
  },

  register: async (payload: RegisterPayload): Promise<AuthResponse> => {
    const { data } = await apiClient.post<ApiResponse<AuthResponse>>(
      API_ENDPOINTS.AUTH.REGISTER, payload,
    );
    if (!data.data) throw new Error('Register response missing data');
    return data.data;
  },

  logout: async (): Promise<void> => {
    await apiClient.post(API_ENDPOINTS.AUTH.LOGOUT);
  },

  getMe: async (): Promise<AuthResponse> => {
    const { data } = await apiClient.get<ApiResponse<AuthResponse>>(
      API_ENDPOINTS.AUTH.ME,
    );
    if (!data.data) throw new Error('GetMe response missing data');
    return data.data;
  },

  changePassword: async (payload: ChangePasswordPayload): Promise<void> => {
    await apiClient.patch(API_ENDPOINTS.AUTH.CHANGE_PASSWORD, payload);
  },
};
