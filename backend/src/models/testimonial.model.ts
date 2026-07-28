import { Schema, model, Document } from 'mongoose';

export interface ITestimonial extends Document {
  clientName: string;
  clientTitle: string;
  companyName: string;
  companyLogo?: {
    public_id: string;
    secure_url: string;
  };
  clientAvatar?: {
    public_id: string;
    secure_url: string;
  };
  content: string;
  rating: number;
  isFeatured: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const testimonialSchema = new Schema<ITestimonial>(
  {
    clientName: { type: String, required: true, trim: true },
    clientTitle: { type: String, required: true, trim: true },
    companyName: { type: String, required: true, trim: true },
    companyLogo: {
      public_id: { type: String },
      secure_url: { type: String }
    },
    clientAvatar: {
      public_id: { type: String },
      secure_url: { type: String }
    },
    content: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5, default: 5 },
    isFeatured: { type: Boolean, default: false, index: true },
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

testimonialSchema.index({ isFeatured: -1, order: 1 });

export const Testimonial = model<ITestimonial>('Testimonial', testimonialSchema);
