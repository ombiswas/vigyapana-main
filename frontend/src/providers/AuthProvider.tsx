import { type ReactNode, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import { useAuthStore } from '@/stores/authStore';
import { authService } from '@/services/auth.service';

interface AuthProviderProps {
  children: ReactNode;
}

/**
 * Bootstraps auth state on app load by calling /auth/me if the user
 * appears to be authenticated (httpOnly cookie is present).
 */
export function AuthProvider({ children }: AuthProviderProps) {
  const { isAuthenticated, setAuth, clearAuth, setLoading } = useAuthStore();

  const { data, isError, isLoading } = useQuery({
    queryKey: ['auth', 'me'],
    queryFn:  authService.getMe,
    enabled:  isAuthenticated,
    retry:    false,
    staleTime: Infinity,
  });

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, setLoading]);

  useEffect(() => {
    if (data) {
      // Re-hydrate user from server (in case of stale localStorage)
      setAuth(data.user, useAuthStore.getState().accessToken ?? '');
    }
  }, [data, setAuth]);

  useEffect(() => {
    if (isError) {
      clearAuth();
    }
  }, [isError, clearAuth]);

  return <>{children}</>;
}
