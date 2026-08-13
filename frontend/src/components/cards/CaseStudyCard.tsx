import type React from 'react';
import { Link } from 'react-router';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, TrendingUp } from 'lucide-react';

export interface CaseStudyCardProps {
  title: string;
  slug: string;
  clientName: string;
  summary: string;
  coverImage: { url: string; alt?: string };
  results?: { metric: string; value: string }[];
  services?: string[];
  industry?: string;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  slug,
  clientName,
  summary,
  coverImage,
  results = [],
  services = [],
  industry,
}) => {
  return (
    <div className="group rounded-2xl border border-border/90 bg-card p-6 shadow-[0_6px_40px_-12px_rgba(0,0,0,0.1),0_2px_8px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_-10px_rgba(0,0,0,0.12)] hover:border-primary/30 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      {/* Image column */}
      <div className="md:col-span-5 relative h-60 sm:h-64 rounded-xl overflow-hidden bg-muted">
        <img
          src={coverImage.url}
          alt={coverImage.alt ?? title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {/* Subtle dark vignette to ensure top text badge pops cleanly */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

        {/* Industry badge with high contrast on image */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <Badge className="bg-background/95 text-foreground backdrop-blur-md border border-border/80 font-bold text-[11px] uppercase tracking-wider px-3 py-1 shadow-sm">
            {industry ?? 'Case Study'}
          </Badge>
        </div>
      </div>

      {/* Content column */}
      <div className="md:col-span-7 flex flex-col justify-between h-full space-y-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
            {clientName}
          </span>

          <Link to={`/case-studies/${slug}`}>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mt-1 leading-snug">
              {title}
            </h3>
          </Link>

          <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed line-clamp-3 font-sans">
            {summary}
          </p>

          {services.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3.5">
              {services.map((srv, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-secondary text-foreground text-xs font-semibold"
                >
                  {srv}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Results & CTA row */}
        <div className="pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
          {results.length > 0 && (
            <div className="flex items-center gap-6">
              {results.slice(0, 2).map((res, i) => (
                <div key={i} className="flex flex-col leading-none">
                  <span className="text-[10px] uppercase font-bold text-primary flex items-center gap-1 mb-1">
                    <TrendingUp className="h-3 w-3" /> {res.metric}
                  </span>
                  <span className="text-lg font-black text-foreground tabular-nums">{res.value}</span>
                </div>
              ))}
            </div>
          )}

          <Link
            to={`/case-studies/${slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary/75 transition-colors ml-auto group/link"
          >
            Read Playbook <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
