import type React from 'react';
import { Link } from 'react-router';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Home, Sparkles } from 'lucide-react';

export const NotFoundView: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <Container size="sm" className="text-center relative z-10">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-tr from-primary to-accent shadow-2xl shadow-primary/30 mb-6">
          <Sparkles className="h-10 w-10 text-white" />
        </div>

        <h1 className="font-display text-7xl sm:text-9xl font-black tracking-tight text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-clip-text">
          404
        </h1>

        <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-foreground">
          Page Not Found
        </h2>

        <p className="mt-3 text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/">
            <Button variant="default" size="lg" className="w-full sm:w-auto shadow-lg">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Contact Support
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};
