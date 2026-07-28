export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <h1 className="font-display text-8xl font-bold text-primary">404</h1>
      <p className="text-xl text-muted-foreground">Page not found.</p>
      <a href="/" className="text-primary underline">Return home</a>
    </div>
  );
}
