import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const MouseFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Detect if hovering over clickable or interactive element
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.classList.contains('interactive'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-indigo-500/60 bg-indigo-500/10 backdrop-blur-[1px] transition-transform duration-75 hidden md:block"
      animate={{
        x: mousePosition.x - (isHovered ? 24 : 12),
        y: mousePosition.y - (isHovered ? 24 : 12),
        width: isHovered ? 48 : 24,
        height: isHovered ? 48 : 24,
        scale: isHovered ? 1.4 : 1,
        borderColor: isHovered ? 'rgba(129, 140, 248, 0.8)' : 'rgba(99, 102, 241, 0.4)',
        backgroundColor: isHovered ? 'rgba(99, 102, 241, 0.15)' : 'rgba(99, 102, 241, 0.05)'
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
    />
  );
};
