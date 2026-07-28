import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, input, [data-cursor]');
      if (interactive) {
        setIsHovered(true);
        const cursorAttr = interactive.getAttribute('data-cursor');
        setHoverText(cursorAttr ?? null);
      } else {
        setIsHovered(false);
        setHoverText(null);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block overflow-hidden">
      {/* Outer Ambient Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-accent/60 bg-accent/10 backdrop-blur-[1px] flex items-center justify-center pointer-events-none"
        animate={{
          x: mousePosition.x - (isHovered ? 32 : 16),
          y: mousePosition.y - (isHovered ? 32 : 16),
          width: isHovered ? 64 : 32,
          height: isHovered ? 64 : 32,
          scale: isHovered ? 1.2 : 1.0,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25, mass: 0.5 }}
      >
        {hoverText && (
          <span className="text-[10px] font-bold uppercase tracking-wider text-accent font-mono">
            {hoverText}
          </span>
        )}
      </motion.div>

      {/* Inner Solid Center Dot */}
      <motion.div
        className="fixed top-0 left-0 h-2 w-2 rounded-full bg-accent pointer-events-none shadow-[0_0_8px_rgba(234,179,8,1)]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 35 }}
      />
    </div>
  );
}
