import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { User } from '@/types/user.types';

interface AuthState {
  user:            User | null;
  accessToken:     string | null;
  isAuthenticated: boolean;
  isLoading:       boolean;

  // Actions
  setAuth:        (user: User, accessToken: string) => void;
  setAccessToken: (token: string) => void;
  updateUser:     (updates: Partial<User>) => void;
  clearAuth:      () => void;
  setLoading:     (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user:            null,
      accessToken:     null,
      isAuthenticated: false,
      isLoading:       false,

      setAuth: (user, accessToken) =>
        set({ user, accessToken, isAuthenticated: true, isLoading: false }),

      setAccessToken: (token) =>
        set({ accessToken: token, isAuthenticated: true }),

      updateUser: (updates) =>
        set((state) => ({ user: state.user ? { ...state.user, ...updates } : null })),

      clearAuth: () =>
        set({ user: null, accessToken: null, isAuthenticated: false, isLoading: false }),

      setLoading: (loading) => set({ isLoading: loading }),
    }),
    {
      name:    'vigyapana-auth',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        // Only persist user, NOT access token (token lives in memory / httpOnly cookie)
        user:            state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);
