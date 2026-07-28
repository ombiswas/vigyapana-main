import { Schema, model, Document } from 'mongoose';

export interface IPortfolioCategory extends Document {
  name: string;
  slug: string;
  description?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const portfolioCategorySchema = new Schema<IPortfolioCategory>(
  {
    name: {
      type: String,
      required: [true, 'Category name is required'],
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
    description: {
      type: String,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export const PortfolioCategory = model<IPortfolioCategory>(
  'PortfolioCategory',
  portfolioCategorySchema
);
