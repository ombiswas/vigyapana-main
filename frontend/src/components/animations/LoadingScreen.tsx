import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoadingComplete(true), 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!loadingComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[999] bg-[#08080a] flex flex-col items-center justify-between p-8 sm:p-16 select-none"
        >
          {/* Top Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-white leading-none">
                VIGYAPANA
              </span>
              <span className="text-[10px] uppercase font-semibold text-indigo-400 tracking-widest leading-none mt-1">
                Services Pvt Ltd
              </span>
            </div>
          </div>

          {/* Middle Percentage Counter */}
          <div className="text-center space-y-4">
            <h1 className="text-7xl sm:text-9xl font-black gradient-text tracking-tighter">
              {progress}%
            </h1>
            <p className="text-xs uppercase font-bold tracking-widest text-zinc-500 animate-pulse">
              Initializing Enterprise Platform Engine
            </p>
          </div>

          {/* Bottom Progress Line */}
          <div className="w-full max-w-md h-1 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
