// ── Shared Base Types ──────────────────────────────────────────────────────────
export interface TimestampedDocument {
  _id:       string;
  createdAt: string;
  updatedAt: string;
}

export interface ImageAsset {
  url:      string;
  publicId: string;
  alt?:     string;
  caption?: string;
}

export interface SEOMeta {
  metaTitle?:       string;
  metaDescription?: string;
  keywords?:        string[];
  ogImage?:         string;
  canonicalUrl?:    string;
}

export interface PaginationMeta {
  total:       number;
  page:        number;
  limit:       number;
  totalPages:  number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

// ── API Response Wrapper ───────────────────────────────────────────────────────
export interface ApiResponse<T> {
  success:   boolean;
  message:   string;
  data?:     T;
  meta?:     PaginationMeta;
  timestamp: string;
}

export interface ApiError {
  success: false;
  message: string;
  status?: number;
}

// ── Query Params ───────────────────────────────────────────────────────────────
export interface PaginationParams {
  page?:  number;
  limit?: number;
  sort?:  string;
}

export interface FilterParams extends PaginationParams {
  search?: string;
  [key: string]: unknown;
}
