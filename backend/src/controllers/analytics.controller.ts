import { Request, Response } from 'express';
import { ContactSubmission } from '../models/contact-submission.model';
import { Portfolio } from '../models/portfolio.model';
import { CaseStudy } from '../models/case-study.model';
import { Blog } from '../models/blog.model';
import { Service } from '../models/service.model';
import { NewsletterSubscriber } from '../models/newsletter-subscriber.model';
import { CareerApplication } from '../models/career-application.model';
import { Media } from '../models/media.model';
import { asyncHandler } from '../utils/async-handler';
import { ApiResponse } from '../utils/api-response';
import { SubmissionStatus } from '../constants/roles';

export const getDashboardAnalytics = asyncHandler(async (_req: Request, res: Response) => {
  const [
    totalLeads,
    newLeads,
    totalPortfolios,
    totalCaseStudies,
    totalBlogs,
    totalServices,
    totalSubscribers,
    totalApplications,
    totalMedia,
    recentLeads
  ] = await Promise.all([
    ContactSubmission.countDocuments(),
    ContactSubmission.countDocuments({ status: SubmissionStatus.NEW }),
    Portfolio.countDocuments(),
    CaseStudy.countDocuments({ status: 'PUBLISHED' }),
    Blog.countDocuments({ status: 'PUBLISHED' }),
    Service.countDocuments({ isActive: true }),
    NewsletterSubscriber.countDocuments({ isActive: true }),
    CareerApplication.countDocuments(),
    Media.countDocuments(),
    ContactSubmission.find().sort({ createdAt: -1 }).limit(5)
  ]);

  return ApiResponse.success(res, 'Dashboard analytics retrieved successfully', {
    metrics: {
      totalLeads,
      newLeads,
      totalPortfolios,
      totalCaseStudies,
      totalBlogs,
      totalServices,
      totalSubscribers,
      totalApplications,
      totalMedia
    },
    chartData: [
      { month: 'Jan', leads: 42, conversions: 18 },
      { month: 'Feb', leads: 58, conversions: 24 },
      { month: 'Mar', leads: 66, conversions: 31 },
      { month: 'Apr', leads: 82, conversions: 40 },
      { month: 'May', leads: 95, conversions: 48 },
      { month: 'Jun', leads: 112, conversions: 59 }
    ],
    recentLeads
  });
});
