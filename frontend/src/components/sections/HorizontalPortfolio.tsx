import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { portfolioData } from '@/data/portfolioData';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';

gsap.registerPlugin(ScrollTrigger);

export function HorizontalPortfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const projects = Object.values(portfolioData);

  useEffect(() => {
    const track = sectionRef.current;
    const trigger = triggerRef.current;
    if (!track || !trigger) return;

    // Calculate exact scroll translation so all cards scroll smoothly into view
    const getScrollAmount = () => {
      const trackWidth = track.scrollWidth;
      return -(trackWidth - window.innerWidth + (window.innerWidth < 768 ? 24 : 64));
    };

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: trigger,
          start: 'top top', // Starts pinning cleanly when the section hits top of viewport
          end: () => `+=${Math.max(1600, track.scrollWidth - window.innerWidth + 400)}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={triggerRef}
      className="relative bg-slate-950 text-white min-h-screen flex flex-col justify-center overflow-hidden py-12 lg:py-16"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center shrink-0">
        <SectionHeading
          badge="Featured Works"
          title="Signature Success Stories"
          description="Explore our highest-performing digital campaigns driving real ROI for NGOs and commercial brands."
          align="center"
          dark
          className="mb-6 sm:mb-8"
        />
      </div>

      {/* Horizontal Track Container */}
      <div className="overflow-hidden w-full shrink-0">
        <div
          ref={sectionRef}
          className="flex items-stretch gap-6 sm:gap-8 px-6 sm:px-12 md:px-16 w-max will-change-transform transform-gpu"
        >
          {projects.map((project) => (
            <div
              key={project.slug}
              className="w-[320px] sm:w-[400px] md:w-[440px] shrink-0 rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl flex flex-col justify-between hover:border-slate-700 transition-colors duration-300 transform-gpu [backface-visibility:hidden]"
            >
              <div className="space-y-4">
                {/* Image Wrapper */}
                <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden bg-slate-950 isolate">
                  <img
                    src={project.coverImage.url}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 z-10">
                    <Badge variant="accent" className="shadow-md">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono text-accent uppercase tracking-wider font-semibold">
                    Client: {project.clientName}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug line-clamp-2">
                    {project.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              {/* Results & CTA Action */}
              <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                  <TrendingUp className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>{project.results[0]?.value} {project.results[0]?.metric}</span>
                </div>
                <Link to={`/portfolio/${project.slug}`}>
                  <Button variant="accent" size="sm" className="shadow-md">
                    View Story <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
