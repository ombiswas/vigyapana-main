import { Schema, model, Document } from 'mongoose';

export interface ISettings extends Document {
  agencyName: string;
  tagline: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  googleMapsUrl?: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
  seoGlobal: {
    defaultMetaTitle: string;
    defaultMetaDescription: string;
    keywords: string[];
    ogImage?: string;
  };
  maintenanceMode: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const settingsSchema = new Schema<ISettings>(
  {
    agencyName: { type: String, default: 'Vigyapana Services Pvt. Ltd.' },
    tagline: { type: String, default: 'Elevating Brands with Data-Driven Digital Marketing' },
    contactEmail: { type: String, default: 'info@vigyapana.com' },
    contactPhone: { type: String, default: '+91 98765 43210' },
    address: { type: String, default: 'Vigyapana Towers, Cyber City, India' },
    googleMapsUrl: { type: String, default: '' },
    socialLinks: {
      linkedin: { type: String, default: '' },
      twitter: { type: String, default: '' },
      instagram: { type: String, default: '' },
      facebook: { type: String, default: '' },
      youtube: { type: String, default: '' }
    },
    seoGlobal: {
      defaultMetaTitle: { type: String, default: 'Vigyapana Services - Premier Digital Marketing Agency' },
      defaultMetaDescription: { type: String, default: 'Full-service digital agency specializing in SEO, PPC, Social Media, and Web Performance.' },
      keywords: [{ type: String }],
      ogImage: { type: String, default: '' }
    },
    maintenanceMode: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const Settings = model<ISettings>('Settings', settingsSchema);
