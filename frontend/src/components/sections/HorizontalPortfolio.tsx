import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { portfolioData } from '@/data/portfolioData';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router';

gsap.registerPlugin(ScrollTrigger);

export function HorizontalPortfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const projects = Object.values(portfolioData);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: '-65%',
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '+=2000',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      },
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section ref={triggerRef} className="relative overflow-hidden bg-slate-950 text-white py-20">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <SectionHeading
            badge="Featured Case Studies"
            title="Horizontal Showcase"
            description="Scroll down to explore our highest-ROAS digital campaigns."
            align="left"
            dark
          />
          <div className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider">
            <Sparkles className="h-4 w-4" /> Scroll to Drag &rarr;
          </div>
        </div>
      </Container>

      {/* Horizontal Track Container */}
      <div className="overflow-hidden">
        <div ref={sectionRef} className="flex gap-8 px-6 sm:px-12 w-max">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="w-[320px] sm:w-[460px] shrink-0 rounded-3xl border border-slate-800 bg-slate-900/90 p-6 space-y-6 shadow-2xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="relative h-56 rounded-2xl overflow-hidden bg-slate-950">
                  <img
                    src={project.coverImage.url}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="accent">{project.category}</Badge>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-accent uppercase tracking-wider">
                    Client: {project.clientName}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400">{project.results[0]?.value} {project.results[0]?.metric}</span>
                <Link to={`/portfolio/${project.slug}`}>
                  <Button variant="accent" size="sm">
                    View Case Study <ArrowRight className="h-3.5 w-3.5 ml-1" />
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
