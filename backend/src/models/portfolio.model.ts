import { Schema, model, Document, Types } from 'mongoose';

export interface IPortfolio extends Document {
  title: string;
  slug: string;
  clientName: string;
  category: Types.ObjectId;
  coverImage: {
    public_id: string;
    secure_url: string;
  };
  gallery: Array<{
    public_id: string;
    secure_url: string;
  }>;
  summary: string;
  description: string;
  deliverables: string[];
  liveUrl?: string;
  isFeatured: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const portfolioSchema = new Schema<IPortfolio>(
  {
    title: {
      type: String,
      required: [true, 'Portfolio title is required'],
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
    clientName: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'PortfolioCategory',
      required: true,
      index: true
    },
    coverImage: {
      public_id: { type: String, required: true },
      secure_url: { type: String, required: true }
    },
    gallery: [
      {
        public_id: { type: String },
        secure_url: { type: String }
      }
    ],
    summary: {
      type: String,
      required: true,
      maxlength: 300
    },
    description: {
      type: String,
      required: true
    },
    deliverables: [{ type: String }],
    liveUrl: { type: String, default: '' },
    isFeatured: { type: Boolean, default: false, index: true },
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

portfolioSchema.index({ isFeatured: -1, order: 1, createdAt: -1 });

export const Portfolio = model<IPortfolio>('Portfolio', portfolioSchema);
