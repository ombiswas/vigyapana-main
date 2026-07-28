import { Schema, model, Document, Types } from 'mongoose';

export interface IMetric {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
}

export interface ICaseStudy extends Document {
  title: string;
  slug: string;
  clientName: string;
  clientIndustry: string;
  clientLogo?: {
    public_id: string;
    secure_url: string;
  };
  heroImage: {
    public_id: string;
    secure_url: string;
  };
  summary: string;
  challenge: string;
  solution: string;
  resultsMetrics: IMetric[];
  deliverables: string[];
  testimonialRef?: Types.ObjectId;
  isFeatured: boolean;
  status: 'DRAFT' | 'PUBLISHED';
  publishedAt?: Date;
  seoMetaData?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const caseStudySchema = new Schema<ICaseStudy>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, index: true },
    clientName: { type: String, required: true, trim: true },
    clientIndustry: { type: String, required: true, index: true },
    clientLogo: {
      public_id: { type: String },
      secure_url: { type: String }
    },
    heroImage: {
      public_id: { type: String, required: true },
      secure_url: { type: String, required: true }
    },
    summary: { type: String, required: true, maxlength: 400 },
    challenge: { type: String, required: true },
    solution: { type: String, required: true },
    resultsMetrics: [
      {
        label: { type: String, required: true },
        value: { type: String, required: true },
        prefix: { type: String, default: '' },
        suffix: { type: String, default: '' }
      }
    ],
    deliverables: [{ type: String }],
    testimonialRef: { type: Schema.Types.ObjectId, ref: 'Testimonial' },
    isFeatured: { type: Boolean, default: false, index: true },
    status: { type: String, enum: ['DRAFT', 'PUBLISHED'], default: 'DRAFT', index: true },
    publishedAt: { type: Date },
    seoMetaData: {
      metaTitle: { type: String },
      metaDescription: { type: String },
      ogImage: { type: String }
    }
  },
  { timestamps: true }
);

caseStudySchema.index({ status: 1, isFeatured: -1, createdAt: -1 });

export const CaseStudy = model<ICaseStudy>('CaseStudy', caseStudySchema);
