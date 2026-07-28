import { Schema, model, Document } from 'mongoose';

export interface ITeamMember extends Document {
  name: string;
  role: string;
  bio: string;
  avatar: {
    public_id: string;
    secure_url: string;
  };
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const teamMemberSchema = new Schema<ITeamMember>(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    bio: { type: String, required: true },
    avatar: {
      public_id: { type: String, required: true },
      secure_url: { type: String, required: true }
    },
    socialLinks: {
      linkedin: { type: String, default: '' },
      twitter: { type: String, default: '' },
      github: { type: String, default: '' }
    },
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true, index: true }
  },
  { timestamps: true }
);

teamMemberSchema.index({ isActive: 1, order: 1 });

export const TeamMember = model<ITeamMember>('TeamMember', teamMemberSchema);
