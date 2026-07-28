import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Helmet } from 'react-helmet-async';
import { authService } from '@/services/auth.service';
import { useAuthStore } from '@/stores/authStore';
import { Button } from '@/components/ui/Button';
import { Eye, EyeOff, Lock, Mail, ShieldAlert, Sparkles } from 'lucide-react';
import toast from 'react-hot-toast';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const navigate = useNavigate();
  const { setAuth } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'admin@vigyapana.com',
      password: '',
    },
  });

  const onSubmit = async (data: LoginSchema) => {
    setErrorMessage(null);
    try {
      const response = await authService.login(data);
      setAuth(response.user, response.accessToken);
      toast.success(`Welcome back, ${response.user.name}!`);
      void navigate('/admin', { replace: true });
    } catch (err: unknown) {
      const msg =
        (err as { response?: { data?: { message?: string } } })?.response?.data?.message ??
        'Invalid email or password. Please try again.';
      setErrorMessage(msg);
      toast.error(msg);
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Login | Vigyapana CMS</title>
      </Helmet>

      <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 relative overflow-hidden text-slate-100">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-primary/20 via-accent/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-2xl backdrop-blur-xl space-y-6 relative">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1 text-xs font-bold text-accent uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              Vigyapana Control Center
            </div>
            <h1 className="font-display text-3xl font-extrabold text-white">Admin Authentication</h1>
            <p className="text-xs text-slate-400">Sign in to manage agency campaigns, content, and inquiries.</p>
          </div>

          {errorMessage && (
            <div className="flex items-center gap-2 p-3.5 rounded-2xl bg-destructive/10 text-destructive text-xs font-semibold border border-destructive/30">
              <ShieldAlert className="h-4 w-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={(e) => void handleSubmit(onSubmit)(e)} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="email"
                  {...register('email')}
                  placeholder="admin@vigyapana.com"
                  className="w-full rounded-2xl border border-slate-800 bg-slate-950 pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">Password</label>
              <div className="relative">
                <Lock className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-slate-800 bg-slate-950 pl-10 pr-10 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && <p className="text-xs text-destructive mt-1">{errors.password.message}</p>}
            </div>

            <div className="pt-2">
              <Button type="submit" variant="accent" className="w-full justify-center shadow-xl" isLoading={isSubmitting}>
                Sign In to Dashboard
              </Button>
            </div>
          </form>

          <div className="text-center pt-4 border-t border-slate-800/80">
            <span className="text-[11px] text-slate-500">
              Vigyapana Services Pvt. Ltd. &copy; {new Date().getFullYear()} Secure CMS
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
