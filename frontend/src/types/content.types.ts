import type { ImageAsset, SEOMeta, TimestampedDocument } from './common.types';

export type BlogStatus = 'draft' | 'review' | 'scheduled' | 'published' | 'archived';

export type BlogCategory =
  | 'digital_marketing' | 'seo' | 'social_media' | 'content' | 'branding'
  | 'ppc' | 'email_marketing' | 'analytics' | 'case_study' | 'industry_news' | 'tips';

export interface BlogPost extends TimestampedDocument {
  title:           string;
  slug:            string;
  excerpt:         string;
  content:         string;
  coverImage?:     ImageAsset;
  author:          { _id: string; name: string; avatar?: { url: string | null } };
  category:        BlogCategory;
  tags:            string[];
  status:          BlogStatus;
  publishedAt?:    string;
  readTime?:       number;
  views:           number;
  likes:           number;
  isFeatured:      boolean;
  commentsEnabled: boolean;
  commentCount:    number;
  seo?:            SEOMeta;
}

export type PortfolioIndustry =
  | 'ecommerce' | 'healthcare' | 'real_estate' | 'education' | 'hospitality'
  | 'fintech' | 'retail' | 'technology' | 'fmcg' | 'automotive' | 'other';

export interface PortfolioResult {
  metric:       string;
  value:        string;
  description?: string;
  icon?:        string;
}

export interface Portfolio extends TimestampedDocument {
  title:            string;
  slug:             string;
  clientName:       string;
  clientLogo?:      ImageAsset;
  tagline?:         string;
  overview:         string;
  challenge?:       string;
  solution?:        string;
  services:         string[];
  coverImage:       ImageAsset;
  gallery:          (ImageAsset & { order?: number })[];
  videoUrl?:        string;
  results:          PortfolioResult[];
  testimonial?:     {
    quote:       string;
    authorName:  string;
    authorRole:  string;
    authorImage?:string;
  };
  industry?:        PortfolioIndustry;
  tags:             string[];
  projectDuration?: string;
  completedAt?:     string;
  isFeatured:       boolean;
  isPublished:      boolean;
  order:            number;
  seo?:             SEOMeta;
}
