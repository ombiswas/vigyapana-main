import type React from 'react';
import { Link } from 'react-router';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import * as Icons from 'lucide-react';

export interface ServiceCardProps {
  title: string;
  slug: string;
  category: string;
  description: string;
  iconName?: string;
  features?: string[];
  isFeatured?: boolean;
  startingPrice?: number | undefined;
  index?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  slug,
  category,
  description,
  iconName = 'Sparkles',
  features = [],
  startingPrice,
  index,
}) => {
  const IconComponent =
    (Icons as unknown as Record<string, React.FC<{ className?: string }>>)[iconName] ?? Sparkles;

  return (
    <div className="group relative flex flex-col bg-card rounded-2xl border border-border/90 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_36px_-8px_rgba(0,0,0,0.12)] hover:border-primary/30">

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-6">

        {/* Top row: icon + meta */}
        <div className="flex items-start justify-between mb-5">
          {/* Icon */}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8 text-primary shrink-0">
            <IconComponent className="h-5 w-5" />
          </div>

          {/* Index + Category */}
          <div className="flex items-center gap-2 pt-0.5">
            {index !== undefined && (
              <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground/40 tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </span>
            )}
            <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
              {category}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display text-[1.1rem] font-bold tracking-[-0.01em] text-foreground leading-snug mb-2.5 group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-[1.68] line-clamp-3 mb-5">
          {description}
        </p>

        {/* Features */}
        {features.length > 0 && (
          <ul className="space-y-2 mb-5">
            {features.slice(0, 3).map((feat, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-foreground/70">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-px" />
                <span className="font-medium line-clamp-1">{feat}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Push footer to bottom */}
        <div className="flex-1" />
      </div>

      {/* Footer row */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-border/40">
        {/* Price */}
        {startingPrice ? (
          <div className="flex flex-col leading-none">
            <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-0.5">
              Starting from
            </span>
            <span className="text-sm font-bold text-foreground tabular-nums">
              ₹{startingPrice.toLocaleString('en-IN')}
            </span>
          </div>
        ) : (
          <span className="text-xs text-muted-foreground font-medium">Custom Quote</span>
        )}

        {/* Link */}
        <Link
          to={`/services/${slug}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/70 transition-colors group/link"
        >
          Learn More
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
};
