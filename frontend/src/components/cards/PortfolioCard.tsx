import type React from 'react';
import { Link } from 'react-router';
import { Badge } from '@/components/ui/Badge';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

export interface PortfolioCardProps {
  title: string;
  slug: string;
  clientName: string;
  coverImage: { url: string; alt?: string };
  industry?: string;
  results?: { metric: string; value: string }[];
  tagline?: string;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  slug,
  clientName,
  coverImage,
  industry,
  results = [],
  tagline,
}) => {
  return (
    <div className="group relative rounded-3xl border border-border/60 bg-card shadow-lg hover:shadow-2xl transition-shadow duration-500 transform-gpu">
      {/* Image container — overflow-hidden scoped here only */}
      <div className="relative h-64 sm:h-72 w-full rounded-t-3xl overflow-hidden">
        <img
          src={coverImage.url}
          alt={coverImage.alt ?? title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 [will-change:transform]"
        />
        {/* Gradient: fade to section-alt background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--section-alt-bg))]/90 via-[hsl(var(--section-alt-bg))]/20 to-transparent pointer-events-none" />

        {industry && (
          <div className="absolute top-4 left-4 z-10">
            <Badge variant="glass" className="capitalize text-xs">
              {industry.replace(/_/g, ' ')}
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
          {clientName}
        </div>

        <Link to={`/portfolio/${slug}`}>
          <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
            <span>{title}</span>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
          </h3>
        </Link>

        {tagline && (
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {tagline}
          </p>
        )}

        {/* Results Banner Grid */}
        {results.length > 0 && (
          <div className="mt-4 pt-4 border-t border-border/60 grid grid-cols-2 gap-3">
            {results.slice(0, 2).map((res, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[10px] uppercase font-semibold text-muted-foreground flex items-center gap-1">
                  <TrendingUp className="h-3 w-3 text-accent" /> {res.metric}
                </span>
                <span className="text-base font-extrabold text-foreground">{res.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
