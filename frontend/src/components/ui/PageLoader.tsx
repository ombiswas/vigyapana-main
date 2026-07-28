export function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        {/* Animated ring */}
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-muted border-t-primary" />
          <div className="absolute inset-2 animate-pulse rounded-full bg-primary/10" />
        </div>
        <p className="font-display text-sm font-medium text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}
