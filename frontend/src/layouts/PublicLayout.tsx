import { Outlet } from 'react-router';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SmoothScrollProvider } from '@/components/effects/SmoothScrollProvider';
import { ScrollProgressBar } from '@/components/effects/ScrollProgressBar';
import { PreloaderScreen } from '@/components/effects/PreloaderScreen';
import { MouseFollower } from '@/components/effects/MouseFollower';
import { PageTransition } from '@/components/effects/PageTransition';

export default function PublicLayout() {
  return (
    <SmoothScrollProvider>
      <PreloaderScreen />
      <MouseFollower />
      <ScrollProgressBar />

      {/* Screen Reader Skip Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-xs focus:font-bold focus:text-white focus:shadow-xl"
      >
        Skip to main content
      </a>

      <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-accent/30 selection:text-foreground">
        <Navbar />
        <main id="main-content" className="flex-1">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
