import { type FC } from 'react';
import { useThemeStore } from '@/stores/themeStore';
import { useAuthStore } from '@/stores/authStore';
import { ExternalLink, Menu, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router';

interface AdminTopBarProps {
  onToggleMobileSidebar: () => void;
}

export const AdminTopBar: FC<AdminTopBarProps> = ({ onToggleMobileSidebar }) => {
  const { resolvedTheme, setTheme } = useThemeStore();
  const { user } = useAuthStore();

  const toggleTheme = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-border/80 bg-card/80 px-6 backdrop-blur-md">
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleMobileSidebar}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-border text-muted-foreground hover:text-foreground lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <h2 className="font-display text-sm font-bold text-foreground hidden sm:block">
          CMS Control Panel
        </h2>
      </div>

      <div className="flex items-center gap-3">
        {/* Public Website Preview Link */}
        <Link
          to="/"
          target="_blank"
          className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          <ExternalLink className="h-3.5 w-3.5" /> View Public Website
        </Link>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground hover:text-foreground transition-colors"
          title="Toggle Dark / Light Mode"
        >
          {resolvedTheme === 'dark' ? <Sun className="h-4 w-4 text-accent" /> : <Moon className="h-4 w-4" />}
        </button>

        {/* User Pill */}
        <div className="hidden sm:flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-foreground">{user?.name ?? 'Admin'}</span>
        </div>
      </div>
    </header>
  );
};
