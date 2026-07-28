import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge Tailwind classes without conflicts */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a number with locale commas */
export function formatNumber(n: number, locale = 'en-IN'): string {
  return new Intl.NumberFormat(locale).format(n);
}

/** Format currency (default INR) */
export function formatCurrency(amount: number, currency = 'INR', locale = 'en-IN'): string {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
}

/** Format a date string */
export function formatDate(date: string | Date, options?: Intl.DateTimeFormatOptions): string {
  return new Intl.DateTimeFormat('en-IN', {
    year: 'numeric', month: 'long', day: 'numeric', ...options,
  }).format(new Date(date));
}

/** Truncate a string to N characters */
export function truncate(str: string, n: number): string {
  return str.length > n ? `${str.slice(0, n - 3)}...` : str;
}

/** Capitalize first letter */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/** Convert snake_case to Title Case */
export function snakeToTitle(str: string): string {
  return str.split('_').map(capitalize).join(' ');
}

/** Generate initials from a full name */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

/** Sleep / delay utility */
export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/** Debounce a function */
export function debounce<T extends (...args: unknown[]) => unknown>(fn: T, wait: number) {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), wait);
  };
}

/** Check if a URL is absolute */
export function isAbsoluteUrl(url: string): boolean {
  return /^https?:\/\//i.test(url);
}

/** Extract error message from Axios error */
export function getErrorMessage(error: unknown): string {
  if (typeof error === 'object' && error !== null) {
    const err = error as { response?: { data?: { message?: string } }; message?: string };
    return err.response?.data?.message ?? err.message ?? 'An unexpected error occurred.';
  }
  return 'An unexpected error occurred.';
}
