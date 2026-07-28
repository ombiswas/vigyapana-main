// ── GSAP Animation Presets for Vigyapana ─────────────────────────────────────
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

// Register plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// ── Default ease ───────────────────────────────────────────────────────────────
export const EASE = {
  smooth:   'power2.out',
  expo:     'expo.out',
  elastic:  'elastic.out(1, 0.5)',
  back:     'back.out(1.7)',
  bounce:   'bounce.out',
  linear:   'none',
} as const;

// ── Duration presets ───────────────────────────────────────────────────────────
export const DURATION = {
  fast:     0.3,
  normal:   0.6,
  slow:     1.0,
  verySlow: 1.6,
} as const;

// ── Fade in from bottom ────────────────────────────────────────────────────────
export const fadeInUp = (
  element: gsap.TweenTarget,
  options: gsap.TweenVars = {},
) =>
  gsap.from(element, {
    y: 40,
    opacity: 0,
    duration: DURATION.normal,
    ease: EASE.expo,
    ...options,
  });

// ── Stagger children ───────────────────────────────────────────────────────────
export const staggerFadeInUp = (
  elements: gsap.TweenTarget,
  stagger = 0.1,
  options: gsap.TweenVars = {},
) =>
  gsap.from(elements, {
    y: 40,
    opacity: 0,
    duration: DURATION.normal,
    ease: EASE.expo,
    stagger,
    ...options,
  });

// ── ScrollTrigger factory ──────────────────────────────────────────────────────
export const createScrollTrigger = (
  trigger: string | Element,
  animation: gsap.core.Tween | gsap.core.Timeline,
  options: ScrollTrigger.Vars = {},
): ScrollTrigger => {
  return ScrollTrigger.create({
    trigger,
    start:  'top 85%',
    end:    'bottom 15%',
    animation,
    ...options,
  });
};

// ── Text reveal ────────────────────────────────────────────────────────────────
export const textReveal = (element: gsap.TweenTarget, text: string) =>
  gsap.to(element, {
    duration: DURATION.slow,
    text: { value: text, delimiter: '' },
    ease: EASE.linear,
  });

export { gsap, ScrollTrigger };
