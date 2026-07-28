import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function PreloaderScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if preloader has already run in current session
    const hasLoaded = sessionStorage.getItem('vigyapana-preloaded');
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem('vigyapana-preloaded', 'true');
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-slate-950 p-8 sm:p-16 text-white select-none pointer-events-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between text-xs uppercase tracking-widest font-mono text-slate-400">
            <span>Vigyapana Digital Agency</span>
            <span>Est. 2026</span>
          </div>

          {/* Center Brand Count */}
          <div className="space-y-4">
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-slate-200"
              >
                ENGINEERING HIGH-ROAS GROWTH & NGO FUNDRAISING
              </motion.h2>
            </div>

            <div className="flex items-baseline justify-between border-t border-slate-800 pt-6">
              <span className="text-xs font-mono text-accent uppercase tracking-wider">
                Loading Assets...
              </span>
              <div className="font-display text-6xl sm:text-8xl font-black font-mono text-amber-400">
                {progress}%
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>Google Ad Grants Partner</span>
            <span>Performance Marketing & Development</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
