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
    <div className="rounded-3xl border border-border/80 bg-card p-6 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-center transform-gpu [backface-visibility:hidden]">
      <div className="md:col-span-5 relative h-56 rounded-2xl overflow-hidden bg-card isolate transform-gpu [backface-visibility:hidden]">
        <img
          src={coverImage.url}
          alt={coverImage.alt ?? title}
          className="h-[101%] w-[101%] -mt-[0.5%] -ml-[0.5%] object-cover transition-transform duration-500 hover:scale-105 transform-gpu [backface-visibility:hidden]"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="accent" className="shadow-md">
            {industry ?? 'Case Study'}
          </Badge>
        </div>
      </div>

      <div className="md:col-span-7 flex flex-col justify-between h-full">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Client: {clientName}
          </span>
          <Link to={`/case-studies/${slug}`}>
            <h3 className="font-display text-2xl font-bold text-foreground hover:text-primary transition-colors mt-1">
              {title}
            </h3>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {summary}
          </p>

          {services.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {services.map((srv, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
                >
                  {srv}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Results grid & action */}
        <div className="mt-6 pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
          {results.length > 0 && (
            <div className="flex items-center gap-6">
              {results.slice(0, 2).map((res, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-accent flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" /> {res.metric}
                  </span>
                  <span className="text-lg font-black text-foreground">{res.value}</span>
                </div>
              ))}
            </div>
          )}

          <Link
            to={`/case-studies/${slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline ml-auto"
          >
            Read Case Study <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
