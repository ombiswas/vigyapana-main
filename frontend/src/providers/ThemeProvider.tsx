import { type ReactNode, useEffect } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  useEffect(() => {
    // Always light mode — remove any persisted dark class
    document.documentElement.classList.remove('dark');
    localStorage.setItem('vigyapana-theme', 'light');
  }, []);

  return <>{children}</>;
}
