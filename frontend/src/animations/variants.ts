// ── Framer Motion Reusable Variants ──────────────────────────────────────────
import type { Variants } from 'framer-motion';

// ── Fade Up ────────────────────────────────────────────────────────────────────
export const fadeUpVariants: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// ── Fade In ────────────────────────────────────────────────────────────────────
export const fadeInVariants: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

// ── Scale In ───────────────────────────────────────────────────────────────────
export const scaleInVariants: Variants = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// ── Slide In Left ──────────────────────────────────────────────────────────────
export const slideInLeftVariants: Variants = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// ── Slide In Right ─────────────────────────────────────────────────────────────
export const slideInRightVariants: Variants = {
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// ── Stagger Container ─────────────────────────────────────────────────────────
export const staggerContainerVariants: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

// ── Card Hover ────────────────────────────────────────────────────────────────
export const cardHoverVariants = {
  rest:  { y: 0, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)' },
  hover: { y: -6, boxShadow: '0 16px 48px 0 rgba(99,102,241,0.20)', transition: { duration: 0.3 } },
};

// ── Viewport defaults ─────────────────────────────────────────────────────────
export const defaultViewport = { once: true, margin: '-80px' };
