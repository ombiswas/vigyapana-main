import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export function ImageReveal({ src, alt, className = '', aspectRatio = 'aspect-[16/10]' }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <div ref={ref} className={`relative overflow-hidden rounded-3xl ${aspectRatio} ${className}`}>
      {/* Curtain Mask Overlay */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={isInView ? { scaleY: 0 } : { scaleY: 1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0 z-10 bg-slate-950 origin-top pointer-events-none"
      />

      {/* Image with zoom reveal */}
      <motion.img
        src={src}
        alt={alt}
        initial={{ scale: 1.25 }}
        animate={isInView ? { scale: 1.0 } : { scale: 1.25 }}
        transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>
  );
}
