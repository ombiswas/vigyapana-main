import { Schema, model, Document, Types } from 'mongoose';
import { SubmissionStatus } from '../constants/roles';

export interface IContactNote {
  note: string;
  author: Types.ObjectId;
  createdAt: Date;
}

export interface IContactSubmission extends Document {
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  serviceRequested: string;
  budgetRange?: string;
  message: string;
  status: SubmissionStatus;
  notes: IContactNote[];
  createdAt: Date;
  updatedAt: Date;
}

const contactSubmissionSchema = new Schema<IContactSubmission>(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true, index: true },
    phone: { type: String, required: true, trim: true },
    companyName: { type: String, default: '' },
    serviceRequested: { type: String, required: true },
    budgetRange: { type: String, default: '' },
    message: { type: String, required: true },
    status: {
      type: String,
      enum: Object.values(SubmissionStatus),
      default: SubmissionStatus.NEW,
      index: true
    },
    notes: [
      {
        note: { type: String, required: true },
        author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        createdAt: { type: Date, default: Date.now }
      }
    ]
  },
  { timestamps: true }
);

contactSubmissionSchema.index({ status: 1, createdAt: -1 });

export const ContactSubmission = model<IContactSubmission>(
  'ContactSubmission',
  contactSubmissionSchema
);
