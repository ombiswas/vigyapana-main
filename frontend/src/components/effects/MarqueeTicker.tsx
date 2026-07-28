import { motion } from 'framer-motion';

interface MarqueeTickerProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

export function MarqueeTicker({
  items,
  direction = 'left',
  speed = 25,
  className = '',
}: MarqueeTickerProps) {
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap flex select-none ${className}`}>
      <motion.div
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: speed,
        }}
        className="flex items-center gap-8 shrink-0"
      >
        {repeatedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-md px-5 py-2.5 text-xs font-bold text-foreground shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span>{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
