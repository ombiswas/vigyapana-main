import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  items: string[];
  speed?: number;
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  items,
  speed = 25,
  className = ''
}) => {
  return (
    <div className={`flex overflow-hidden whitespace-nowrap select-none py-6 ${className}`}>
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: speed
        }}
        className="flex items-center gap-12 font-display text-xl sm:text-3xl font-extrabold uppercase tracking-wider text-zinc-600/60"
      >
        {items.concat(items).map((item, idx) => (
          <div key={idx} className="flex items-center gap-12 hover:text-indigo-400 transition-colors">
            <span>{item}</span>
            <span className="w-2 h-2 rounded-full bg-indigo-500/50" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
