import { create } from 'zustand';

type Theme = 'light';

interface ThemeState {
  theme: Theme;
  resolvedTheme: 'light';
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>(() => ({
  theme: 'light',
  resolvedTheme: 'light',
  setTheme: () => {
    // Dark mode has been removed. Always light.
    localStorage.setItem('vigyapana-theme', 'light');
    document.documentElement.classList.remove('dark');
  },
}));
