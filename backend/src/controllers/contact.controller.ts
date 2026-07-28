import { Request, Response } from 'express';
import { ContactSubmission } from '../models/contact-submission.model';
import { asyncHandler } from '../utils/async-handler';
import { ApiError } from '../utils/api-error';
import { ApiResponse } from '../utils/api-response';
import { sendContactNotificationEmail, sendLeadConfirmationEmail } from '../services/email.service';

export const submitContactForm = asyncHandler(async (req: Request, res: Response) => {
  const { fullName, email, phone, companyName, serviceRequested, budgetRange, message } = req.body;

  const submission = await ContactSubmission.create({
    fullName,
    email,
    phone,
    companyName,
    serviceRequested,
    budgetRange,
    message
  });

  // Async dispatch email notifications
  sendContactNotificationEmail({ fullName, email, phone, serviceRequested, message });
  sendLeadConfirmationEmail(email, fullName);

  return ApiResponse.created(
    res,
    'Your message has been received! Our team will get in touch shortly.',
    submission
  );
});

export const getContactSubmissions = asyncHandler(async (req: Request, res: Response) => {
  const { status, page = 1, limit = 15 } = req.query;
  const pageNum = parseInt(page as string, 10);
  const limitNum = parseInt(limit as string, 10);

  const filter: any = {};
  if (status) filter.status = status;

  const [submissions, total] = await Promise.all([
    ContactSubmission.find(filter)
      .sort({ createdAt: -1 })
      .skip((pageNum - 1) * limitNum)
      .limit(limitNum),
    ContactSubmission.countDocuments(filter)
  ]);

  return ApiResponse.success(res, 'Contact submissions retrieved', submissions, 200, {
    page: pageNum,
    limit: limitNum,
    total,
    totalPages: Math.ceil(total / limitNum)
  });
});

export const updateSubmissionStatus = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status, note } = req.body;

  const submission = await ContactSubmission.findById(id);
  if (!submission) throw ApiError.notFound('Submission not found');

  if (status) submission.status = status;
  if (note && req.user) {
    submission.notes.push({
      note,
      author: req.user.userId as any,
      createdAt: new Date()
    });
  }

  await submission.save();
  return ApiResponse.success(res, 'Submission updated', submission);
});

export const deleteSubmission = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const submission = await ContactSubmission.findByIdAndDelete(id);
  if (!submission) throw ApiError.notFound('Submission not found');

  return ApiResponse.success(res, 'Submission deleted', null);
});
