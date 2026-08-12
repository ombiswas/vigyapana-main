import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { portfolioData } from '@/data/portfolioData';
import { ArrowLeft, ArrowRight, ArrowUpRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';
import { cn } from '@/lib/utils';

const AUTO_INTERVAL = 5500;
const CARD_H = 480;

export function HorizontalPortfolio() {
  const projects = Object.values(portfolioData);
  const total = projects.length;

  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hovering = useRef(false);

  // Measure visible count on screen resize
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, []);

  const maxIndex = Math.max(0, total - visibleCount);

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const startTimer = useCallback(() => {
    stopTimer();
    timerRef.current = setInterval(() => {
      if (!hovering.current) {
        setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }
    }, AUTO_INTERVAL);
  }, [maxIndex]);

  const next = useCallback(() => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [startTimer]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') { prev(); startTimer(); }
      if (e.key === 'ArrowRight') { next(); startTimer(); }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [prev, next, startTimer]);

  // Calculate sliding percentage and gap offset dynamically
  // Gap is 20px (gap-5)
  const cardShiftPercent = 100 / visibleCount;
  const cardShiftGapPx = 20 / visibleCount;
  const translateX = `calc(-${index * cardShiftPercent}% - ${index * cardShiftGapPx}px)`;

  return (
    <section className="section-alt relative overflow-hidden py-24 lg:py-32">
      {/* Ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 40% at 50% -10%, hsl(161 93% 40% / 0.05) 0%, transparent 70%)',
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header + nav row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <SectionHeading
            badge="Featured Works"
            title="Signature Success"
            highlightedTitle="Stories"
            description="Our highest-performing campaigns driving measurable ROI."
            align="left"
            className="mb-0 max-w-xl"
          />

          <div className="flex items-center gap-3 shrink-0">
            {/* Numeric counter */}
            <span className="mr-1 text-[11px] font-semibold tabular-nums tracking-widest text-muted-foreground select-none">
              <span className="text-foreground font-bold">{String(index + 1).padStart(2, '0')}</span>
              <span className="mx-1">/</span>
              {String(total).padStart(2, '0')}
            </span>

            <button
              onClick={() => { prev(); startTimer(); }}
              aria-label="Previous project"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card text-foreground transition-all duration-200 hover:border-foreground/30 hover:bg-foreground/5 active:scale-95"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => { next(); startTimer(); }}
              aria-label="Next project"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card text-foreground transition-all duration-200 hover:border-foreground/30 hover:bg-foreground/5 active:scale-95"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Outer clip container for horizontal track */}
        <div className="overflow-hidden w-full pb-4">
          <motion.div
            className="flex gap-5 will-change-transform"
            animate={{ x: translateX }}
            transition={{
              duration: 0.65,
              ease: [0.25, 1, 0.5, 1], // Smooth fluid cubic-bezier slide curve
            }}
          >
            {projects.map((project, idx) => (
              <div
                key={project.slug}
                className={cn(
                  'group relative shrink-0 overflow-hidden rounded-2xl border border-border/60',
                  'w-full sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)]',
                  'shadow-[0_2px_10px_-4px_rgba(0,0,0,0.06)] transition-all duration-300',
                  'hover:shadow-[0_12px_36px_-8px_rgba(0,0,0,0.18)] hover:border-primary/30'
                )}
                style={{ height: CARD_H }}
                onMouseEnter={() => { hovering.current = true; }}
                onMouseLeave={() => { hovering.current = false; }}
              >
                {/* Photo */}
                <img
                  src={project.coverImage.url}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  draggable={false}
                />

                {/* Vignette */}
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, transparent 35%, rgba(0,0,0,0.6) 62%, rgba(0,0,0,0.94) 100%)',
                  }}
                />

                {/* Top row */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="text-[10px] font-black tracking-[0.3em] text-white/35 uppercase select-none">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="inline-flex rounded-full border border-white/20 bg-black/45 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold text-white/80 tracking-wide">
                    {project.category}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/45 mb-1.5 truncate">
                    {project.clientName}
                  </p>

                  <h3 className="font-display text-[1.12rem] font-bold text-white leading-snug line-clamp-2 mb-3">
                    {project.title}
                  </h3>

                  {project.results?.[0] && (
                    <div className="flex items-center gap-1.5 mb-3.5">
                      <TrendingUp className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span className="text-[0.85rem] font-black text-primary tabular-nums">
                        {project.results[0].value}
                      </span>
                      <span className="text-xs text-white/45 font-medium truncate">
                        {project.results[0].metric}
                      </span>
                    </div>
                  )}

                  <div className="h-px bg-white/10 mb-3.5" />

                  <Link
                    to={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white transition-colors duration-200 group/cta"
                  >
                    View Case Study
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                  </Link>
                </div>

                {/* Card hit target */}
                <Link
                  to={`/portfolio/${project.slug}`}
                  aria-label={project.title}
                  className="absolute inset-0 rounded-2xl"
                  tabIndex={-1}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dot progress */}
        <div className="flex items-center justify-center gap-2 mt-8" role="tablist">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => {
                setIndex(i);
                startTimer();
              }}
              className={cn(
                'rounded-full transition-all duration-300 ease-out',
                i === index
                  ? 'w-5 h-1.5 bg-foreground'
                  : 'w-1.5 h-1.5 bg-border hover:bg-foreground/40'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
