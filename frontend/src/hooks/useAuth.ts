import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

import { authService } from '@/services/auth.service';
import { useAuthStore } from '@/stores/authStore';
import { ROUTES } from '@/config/routes';
import type { LoginPayload, RegisterPayload } from '@/types/user.types';

// ── useLogin ───────────────────────────────────────────────────────────────────
export function useLogin() {
  const { setAuth } = useAuthStore();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (payload: LoginPayload) => authService.login(payload),
    onSuccess: (data) => {
      setAuth(data.user, data.accessToken);
      toast.success(`Welcome back, ${data.user.name}!`);
      void navigate(ROUTES.ADMIN.DASHBOARD);
    },
    onError: (error: { response?: { data?: { message?: string } } }) => {
      toast.error(error.response?.data?.message ?? 'Login failed. Please try again.');
    },
  });
}

// ── useLogout ──────────────────────────────────────────────────────────────────
export function useLogout() {
  const { clearAuth } = useAuthStore();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      clearAuth();
      queryClient.clear();
      toast.success('Logged out successfully.');
      void navigate(ROUTES.LOGIN);
    },
    onError: () => {
      // Force logout even if API call fails
      clearAuth();
      queryClient.clear();
      void navigate(ROUTES.LOGIN);
    },
  });
}

// ── useRegister ────────────────────────────────────────────────────────────────
export function useRegister() {
  const { setAuth } = useAuthStore();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (payload: RegisterPayload) => authService.register(payload),
    onSuccess: (data) => {
      setAuth(data.user, data.accessToken);
      toast.success('Account created successfully!');
      void navigate(ROUTES.ADMIN.DASHBOARD);
    },
    onError: (error: { response?: { data?: { message?: string } } }) => {
      toast.error(error.response?.data?.message ?? 'Registration failed.');
    },
  });
}
