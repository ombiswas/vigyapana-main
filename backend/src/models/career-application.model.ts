import { Schema, model, Document } from 'mongoose';
import { ApplicationStatus } from '../constants/roles';

export interface ICareerApplication extends Document {
  fullName: string;
  email: string;
  phone: string;
  positionApplied: string;
  experienceYears: number;
  portfolioUrl?: string;
  linkedinUrl?: string;
  resume: {
    public_id: string;
    secure_url: string;
  };
  coverLetter?: string;
  status: ApplicationStatus;
  createdAt: Date;
  updatedAt: Date;
}

const careerApplicationSchema = new Schema<ICareerApplication>(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true, index: true },
    phone: { type: String, required: true, trim: true },
    positionApplied: { type: String, required: true, trim: true, index: true },
    experienceYears: { type: Number, required: true, min: 0 },
    portfolioUrl: { type: String, default: '' },
    linkedinUrl: { type: String, default: '' },
    resume: {
      public_id: { type: String, required: true },
      secure_url: { type: String, required: true }
    },
    coverLetter: { type: String, default: '' },
    status: {
      type: String,
      enum: Object.values(ApplicationStatus),
      default: ApplicationStatus.PENDING,
      index: true
    }
  },
  { timestamps: true }
);

careerApplicationSchema.index({ status: 1, createdAt: -1 });

export const CareerApplication = model<ICareerApplication>(
  'CareerApplication',
  careerApplicationSchema
);
