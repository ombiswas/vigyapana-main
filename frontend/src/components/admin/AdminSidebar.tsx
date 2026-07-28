import { type FC } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { useAuthStore } from '@/stores/authStore';
import {
  BookOpen,
  Briefcase,
  FileText,
  FolderOpen,
  Image as ImageIcon,
  Layers,
  LayoutDashboard,
  LogOut,
  Mail,
  MessageSquareQuote,
  Settings,
  UserCheck,
  Users,
} from 'lucide-react';
import toast from 'react-hot-toast';

interface AdminSidebarProps {
  onCloseMobile?: () => void;
}

const navItems = [
  { label: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { label: 'Services', path: '/admin/services', icon: Layers },
  { label: 'Portfolio', path: '/admin/portfolio', icon: Briefcase },
  { label: 'Case Studies', path: '/admin/case-studies', icon: FolderOpen },
  { label: 'Blog Posts', path: '/admin/blog', icon: BookOpen },
  { label: 'Team Members', path: '/admin/team', icon: Users },
  { label: 'Testimonials', path: '/admin/testimonials', icon: MessageSquareQuote },
  { label: 'Inquiries & Contact', path: '/admin/contacts', icon: Mail },
  { label: 'Newsletter', path: '/admin/newsletter', icon: FileText },
  { label: 'Career Applications', path: '/admin/careers', icon: UserCheck },
  { label: 'Media Library', path: '/admin/media', icon: ImageIcon },
  { label: 'Settings', path: '/admin/settings', icon: Settings },
];

export const AdminSidebar: FC<AdminSidebarProps> = ({ onCloseMobile }) => {
  const { user, clearAuth } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    clearAuth();
    toast.success('Logged out successfully.');
    void navigate('/admin/login', { replace: true });
  };

  return (
    <aside className="flex h-full w-64 flex-col border-r border-border bg-card/95 backdrop-blur-xl">
      {/* Brand Header */}
      <div className="flex h-16 items-center justify-between px-6 border-b border-border/80">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary font-display font-black text-white text-lg">
            V
          </div>
          <div>
            <span className="font-display font-bold text-foreground text-sm block leading-none">Vigyapana</span>
            <span className="text-[10px] text-accent font-semibold uppercase tracking-wider">CMS Admin</span>
          </div>
        </div>
      </div>

      {/* Nav Menu */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        <div className="px-3 pb-2 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
          Management
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/admin'}
              onClick={onCloseMobile}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-2xl px-3.5 py-2.5 text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-primary text-white shadow-md shadow-primary/20 font-bold'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`
              }
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>

      {/* User Footer */}
      <div className="p-4 border-t border-border/80 space-y-3">
        <div className="flex items-center gap-3 px-2">
          <div className="h-9 w-9 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm">
            {user?.name?.charAt(0) ?? 'A'}
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="text-xs font-bold text-foreground truncate">{user?.name ?? 'Admin User'}</div>
            <div className="text-[10px] text-muted-foreground truncate">{user?.email ?? 'admin@vigyapana.com'}</div>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs font-bold text-destructive hover:bg-destructive hover:text-white transition-all"
        >
          <LogOut className="h-3.5 w-3.5" /> Sign Out
        </button>
      </div>
    </aside>
  );
};
