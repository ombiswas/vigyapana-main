// ── API Configuration ──────────────────────────────────────────────────────────
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL ?? 'http://localhost:5000/api/v1',
  TIMEOUT:  parseInt(import.meta.env.VITE_API_TIMEOUT ?? '10000'),
} as const;

// ── API Endpoint Paths ─────────────────────────────────────────────────────────
export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    REGISTER:       '/auth/register',
    LOGIN:          '/auth/login',
    LOGOUT:         '/auth/logout',
    REFRESH:        '/auth/refresh-token',
    ME:             '/auth/me',
    CHANGE_PASSWORD:'/auth/change-password',
  },
  // Users
  USERS:          '/users',
  USER_PROFILE:   '/users/profile',
  // Services
  SERVICES:       '/services',
  // Portfolio
  PORTFOLIO:      '/portfolio',
  // Blog
  BLOG:           '/blog',
  // Team
  TEAM:           '/team',
  // Testimonials
  TESTIMONIALS:   '/testimonials',
  // Contact
  CONTACT:        '/contact',
  // Newsletter
  NEWSLETTER:     '/newsletter',
  // Careers
  CAREERS:        '/careers',
  // Inquiries
  INQUIRIES:      '/inquiries',
  // Analytics
  ANALYTICS: {
    DASHBOARD:    '/analytics/dashboard',
    PAGE_VIEWS:   '/analytics/page-views',
  },
  // Settings
  SETTINGS:       '/settings',
  // Media
  MEDIA:          '/media',
  // Uploads
  UPLOADS: {
    IMAGE:        '/uploads/image',
    IMAGES:       '/uploads/images',
    MEDIA:        '/uploads/media',
    DELETE:       '/uploads/delete',
  },
} as const;
