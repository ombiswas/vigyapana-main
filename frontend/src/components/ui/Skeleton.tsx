interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = '' }: SkeletonProps) {
  return <div className={`animate-pulse rounded-2xl bg-muted/70 ${className}`} />;
}

export function SkeletonCard() {
  return (
    <div className="rounded-3xl border border-border/80 bg-card p-6 space-y-4 shadow-md">
      <Skeleton className="h-44 w-full rounded-2xl" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <div className="pt-2 flex justify-between items-center">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-8 w-20 rounded-xl" />
      </div>
    </div>
  );
}

export function SkeletonTableRow() {
  return (
    <tr className="animate-pulse">
      <td className="px-4 py-4">
        <Skeleton className="h-4 w-36 mb-1" />
        <Skeleton className="h-3 w-24" />
      </td>
      <td className="px-4 py-4">
        <Skeleton className="h-5 w-20 rounded-md" />
      </td>
      <td className="px-4 py-4">
        <Skeleton className="h-4 w-16" />
      </td>
      <td className="px-4 py-4">
        <Skeleton className="h-4 w-20" />
      </td>
      <td className="px-4 py-4 text-right">
        <Skeleton className="h-8 w-16 rounded-xl ml-auto" />
      </td>
    </tr>
  );
}
