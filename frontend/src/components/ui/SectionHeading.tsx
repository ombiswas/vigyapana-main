import type React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: string;
  title: string;
  highlightedTitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlightedTitle,
  description,
  align = 'center',
  dark = false,
  className,
  ...props
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div
      className={cn('flex flex-col max-w-3xl mx-auto mb-12 sm:mb-16', alignClasses[align], className)}
      {...props}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent mb-4 shadow-sm backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          {badge}
        </div>
      )}
      <h2
        className={cn(
          'font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl leading-[1.15]',
          dark ? 'text-white' : 'text-foreground'
        )}
      >
        {title}{' '}
        {highlightedTitle && (
          <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
            {highlightedTitle}
          </span>
        )}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-base sm:text-lg leading-relaxed max-w-2xl',
            dark ? 'text-gray-300' : 'text-muted-foreground'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
