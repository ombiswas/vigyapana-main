import { Schema, model, Document } from 'mongoose';

export interface IServiceFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface IServicePackage {
  name: string;
  price: string;
  billingPeriod: string;
  features: string[];
  isPopular?: boolean;
}

export interface IService extends Document {
  title: string;
  slug: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  bannerImage?: {
    public_id: string;
    secure_url: string;
  };
  features: IServiceFeature[];
  packages: IServicePackage[];
  isPopular: boolean;
  isActive: boolean;
  order: number;
  seoMetaData?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}

const serviceSchema = new Schema<IService>(
  {
    title: {
      type: String,
      required: [true, 'Service title is required'],
      unique: true,
      trim: true
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true
    },
    tagline: {
      type: String,
      default: ''
    },
    shortDescription: {
      type: String,
      required: true,
      maxlength: 300
    },
    fullDescription: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    bannerImage: {
      public_id: { type: String },
      secure_url: { type: String }
    },
    features: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
        icon: { type: String }
      }
    ],
    packages: [
      {
        name: { type: String, required: true },
        price: { type: String, required: true },
        billingPeriod: { type: String, default: 'monthly' },
        features: [{ type: String }],
        isPopular: { type: Boolean, default: false }
      }
    ],
    isPopular: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true, index: true },
    order: { type: Number, default: 0 },
    seoMetaData: {
      metaTitle: { type: String },
      metaDescription: { type: String },
      keywords: [{ type: String }]
    }
  },
  { timestamps: true }
);

serviceSchema.index({ isActive: 1, order: 1 });

export const Service = model<IService>('Service', serviceSchema);
