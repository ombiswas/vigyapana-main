import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Button } from '@/components/ui/Button';
import { RefreshCw, ShieldAlert } from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center p-6 text-center bg-background">
          <div className="max-w-md space-y-6 rounded-3xl border border-border/80 bg-card p-8 shadow-2xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10 text-destructive mx-auto">
              <ShieldAlert className="h-8 w-8" />
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-2xl font-bold text-foreground">Something Unexpected Happened</h2>
              <p className="text-xs text-muted-foreground">
                An unexpected interface error occurred. Our technical monitoring team has been notified.
              </p>
            </div>

            {this.state.error && (
              <div className="p-3 rounded-xl bg-muted text-[11px] font-mono text-destructive text-left overflow-x-auto max-h-32">
                {this.state.error.message}
              </div>
            )}

            <Button variant="accent" onClick={this.handleReset} className="w-full justify-center">
              <RefreshCw className="h-4 w-4 mr-2" /> Reload Application Page
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
