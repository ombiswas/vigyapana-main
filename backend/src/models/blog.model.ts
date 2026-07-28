import { Schema, model, Document, Types } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: {
    public_id: string;
    secure_url: string;
  };
  author: Types.ObjectId;
  category: Types.ObjectId;
  tags: string[];
  readTimeMinutes: number;
  viewsCount: number;
  status: 'DRAFT' | 'PUBLISHED';
  publishedAt?: Date;
  seoMetaData?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogImage?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const blogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, index: true },
    excerpt: { type: String, required: true, maxlength: 400 },
    content: { type: String, required: true },
    coverImage: {
      public_id: { type: String, required: true },
      secure_url: { type: String, required: true }
    },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    category: { type: Schema.Types.ObjectId, ref: 'BlogCategory', required: true, index: true },
    tags: [{ type: String, index: true }],
    readTimeMinutes: { type: Number, default: 5 },
    viewsCount: { type: Number, default: 0 },
    status: { type: String, enum: ['DRAFT', 'PUBLISHED'], default: 'DRAFT', index: true },
    publishedAt: { type: Date },
    seoMetaData: {
      metaTitle: { type: String },
      metaDescription: { type: String },
      keywords: [{ type: String }],
      ogImage: { type: String }
    }
  },
  { timestamps: true }
);

blogSchema.index({ status: 1, publishedAt: -1 });
blogSchema.index({ title: 'text', content: 'text', tags: 'text' });

export const Blog = model<IBlog>('Blog', blogSchema);
