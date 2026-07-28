import type { ImageAsset, SEOMeta, TimestampedDocument } from './common.types';

export type ServiceCategory =
  | 'digital_marketing' | 'seo' | 'social_media' | 'content_marketing'
  | 'ppc' | 'email_marketing' | 'web_design' | 'branding'
  | 'video_production' | 'influencer_marketing' | 'analytics' | 'other';

export interface ServiceFeature {
  title:       string;
  description?: string;
  icon?:        string;
}

export interface ServiceProcess {
  step:         number;
  title:        string;
  description?: string;
}

export interface Service extends TimestampedDocument {
  title:            string;
  slug:             string;
  tagline?:         string;
  description:      string;
  shortDescription?:string;
  icon?:            string;
  coverImage?:      ImageAsset;
  gallery:          ImageAsset[];
  features:         ServiceFeature[];
  deliverables:     string[];
  process:          ServiceProcess[];
  category:         ServiceCategory;
  tags:             string[];
  pricingModel:     'fixed' | 'monthly' | 'custom' | 'contact';
  startingPrice?:   number;
  currency:         string;
  order:            number;
  isFeatured:       boolean;
  isPublished:      boolean;
  seo?:             SEOMeta;
}
