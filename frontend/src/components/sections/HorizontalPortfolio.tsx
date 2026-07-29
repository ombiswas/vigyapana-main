import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { portfolioData } from '@/data/portfolioData';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';

gsap.registerPlugin(ScrollTrigger);

const CARD_HEIGHT = 520; // px — consistent card height

export function HorizontalPortfolio() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = Object.values(portfolioData);

  useEffect(() => {
    const track = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;

    // Wait one frame so layout is fully measured
    const raf = requestAnimationFrame(() => {
      const getScrollAmount = () => {
        return -(track.scrollWidth - window.innerWidth + 160);
      };

      const ctx = gsap.context(() => {
        gsap.to(track, {
          x: getScrollAmount,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            // Pin starts when the section's bottom hits the viewport bottom
            start: 'bottom bottom',
            end: () => `+=${Math.abs(getScrollAmount()) + 200}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      return () => ctx.revert();
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    // NOTE: No overflow-hidden on section — GSAP pin spacer must not be clipped
    <section
      ref={sectionRef}
      className="section-alt relative"
      style={{ minHeight: '100svh' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 900,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(79,70,229,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Section heading */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-14">
        <SectionHeading
          badge="Featured Works"
          title="Signature Success"
          highlightedTitle="Stories"
          description="Explore our highest-performing digital campaigns driving measurable ROI for NGOs and commercial brands."
          align="center"
        />
      </div>

      {/* Cards track — overflow-hidden only here, not on section */}
      <div className="overflow-hidden w-full pb-20">
        <div
          ref={trackRef}
          className="flex items-center gap-6 w-max px-10 sm:px-16 md:px-24 will-change-transform transform-gpu"
        >
          {projects.map((project, idx) => (
            <div
              key={project.slug}
              className="relative shrink-0 rounded-2xl overflow-hidden"
              style={{ width: 360, height: CARD_HEIGHT }}
            >
              {/* Full-bleed image */}
              <img
                src={project.coverImage.url}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ willChange: 'transform' }}
              />

              {/* Top-to-bottom dark vignette for readability */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.92) 100%)',
                }}
              />

              {/* Top row */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                <span className="text-[11px] font-black tracking-[0.3em] text-white/40 uppercase">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="inline-flex items-center rounded-full border border-white/25 bg-black/40 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-white tracking-wide">
                  {project.category}
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                {/* Client name */}
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/55 mb-2">
                  {project.clientName}
                </p>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-white leading-snug line-clamp-2 mb-3">
                  {project.title}
                </h3>

                {/* Key metric */}
                {project.results?.[0] && (
                  <div className="flex items-center gap-2 mb-5">
                    <TrendingUp className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span className="text-sm font-black text-emerald-400">
                      {project.results[0].value}
                    </span>
                    <span className="text-xs text-white/50 font-medium">
                      {project.results[0].metric}
                    </span>
                  </div>
                )}

                {/* CTA link */}
                <Link
                  to={`/portfolio/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white/70 hover:text-white transition-colors duration-300 group"
                >
                  View Case Study
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </Link>
              </div>

              {/* Hover ring overlay — separate element so scale doesn't affect it */}
              <Link
                to={`/portfolio/${project.slug}`}
                aria-label={project.title}
                className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 hover:ring-white/30 transition-all duration-500 group"
                tabIndex={-1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
