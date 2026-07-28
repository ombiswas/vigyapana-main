import type React from 'react';
import { Link } from 'react-router';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
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
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  slug,
  category,
  description,
  iconName = 'Sparkles',
  features = [],
  isFeatured = false,
  startingPrice,
}) => {
  // Dynamically resolve Lucide icon
  const IconComponent = (Icons as unknown as Record<string, React.FC<{ className?: string }>>)[iconName] ?? Sparkles;

  return (
    <Card
      className={`flex flex-col justify-between h-full relative overflow-hidden ${
        isFeatured ? 'border-primary/50 shadow-xl shadow-primary/10' : ''
      }`}
    >
      {isFeatured && (
        <div className="absolute top-0 right-0">
          <div className="bg-gradient-to-l from-accent to-amber-500 text-slate-950 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl shadow-md">
            Popular Choice
          </div>
        </div>
      )}

      <div>
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-inner">
              <IconComponent className="h-6 w-6" />
            </div>
            <Badge variant="outline" className="capitalize text-[11px]">
              {category.replace(/_/g, ' ')}
            </Badge>
          </div>

          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="mt-2 line-clamp-3">
            {description}
          </CardDescription>
        </CardHeader>

        {features.length > 0 && (
          <CardContent className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Key Deliverables:
            </div>
            {features.slice(0, 3).map((feat, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-foreground/80">
                <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </CardContent>
        )}
      </div>

      <CardFooter className="flex items-center justify-between pt-4 border-t border-border/40">
        <div>
          {startingPrice ? (
            <div className="flex flex-col">
              <span className="text-[10px] text-muted-foreground uppercase">Starting from</span>
              <span className="text-sm font-bold text-foreground">₹{startingPrice.toLocaleString('en-IN')}</span>
            </div>
          ) : (
            <span className="text-xs text-muted-foreground font-medium">Custom Quote</span>
          )}
        </div>

        <Link
          to={`/services/${slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group"
        >
          <span>Learn More</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
};
