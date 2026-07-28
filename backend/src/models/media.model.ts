import { Schema, model, Document, Types } from 'mongoose';

export interface IMedia extends Document {
  filename: string;
  originalName: string;
  public_id: string;
  secure_url: string;
  format: string;
  mimeType: string;
  sizeBytes: number;
  width?: number;
  height?: number;
  uploadedBy: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const mediaSchema = new Schema<IMedia>(
  {
    filename: { type: String, required: true },
    originalName: { type: String, required: true },
    public_id: { type: String, required: true, unique: true, index: true },
    secure_url: { type: String, required: true },
    format: { type: String, required: true },
    mimeType: { type: String, required: true },
    sizeBytes: { type: Number, required: true },
    width: { type: Number },
    height: { type: Number },
    uploadedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
);

mediaSchema.index({ createdAt: -1 });

export const Media = model<IMedia>('Media', mediaSchema);
