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
        <div className="flex items-center gap-2.5 mb-4">
          {align !== 'right' && <div className="h-px w-6 bg-primary/50" />}
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
            {badge}
          </span>
          {align !== 'left' && align !== 'center' && <div className="h-px w-6 bg-primary/50" />}
        </div>
      )}
      <h2
        className={cn(
          'font-display font-bold',
          'text-[1.85rem] sm:text-[2.2rem] lg:text-[2.6rem]',
          'tracking-[-0.02em] leading-[1.1]',
          dark ? 'text-white' : 'text-foreground'
        )}
      >
        {title}{' '}
        {highlightedTitle && (
          <span className="text-primary">
            {highlightedTitle}
          </span>
        )}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-base leading-[1.75] max-w-2xl font-sans font-normal',
            dark ? 'text-white/60' : 'text-muted-foreground'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
