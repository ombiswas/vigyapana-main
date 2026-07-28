import type React from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface LoaderProps {
  size?: 'sm' | 'default' | 'lg';
  fullScreen?: boolean;
  text?: string;
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  size = 'default',
  fullScreen = false,
  text,
  className,
}) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    default: 'h-10 w-10',
    lg: 'h-16 w-16',
  };

  const content = (
    <div className={cn('flex flex-col items-center justify-center gap-3', className)}>
      <div className="relative">
        <div className={cn('rounded-2xl bg-gradient-to-tr from-primary to-accent animate-spin flex items-center justify-center p-2 shadow-lg shadow-primary/20', sizeClasses[size])}>
          <Sparkles className="h-full w-full text-white" />
        </div>
      </div>
      {text && (
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground animate-pulse">
          {text}
        </span>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md">
        {content}
      </div>
    );
  }

  return content;
};
