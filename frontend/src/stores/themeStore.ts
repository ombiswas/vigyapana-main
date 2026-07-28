import { create } from 'zustand';

type Theme = 'light' | 'dark' | 'system';

interface ThemeState {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
}

const getResolvedTheme = (theme: Theme): 'light' | 'dark' => {
  if (theme === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return theme;
};

export const useThemeStore = create<ThemeState>((set) => ({
  theme:         (localStorage.getItem('vigyapana-theme') as Theme) ?? 'dark',
  resolvedTheme: getResolvedTheme(
    (localStorage.getItem('vigyapana-theme') as Theme) ?? 'dark',
  ),

  setTheme: (theme) => {
    const resolved = getResolvedTheme(theme);
    localStorage.setItem('vigyapana-theme', theme);
    document.documentElement.classList.toggle('dark', resolved === 'dark');
    set({ theme, resolvedTheme: resolved });
  },
}));
