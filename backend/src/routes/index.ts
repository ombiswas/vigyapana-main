import { Router } from 'express';
import authRoutes from './auth.routes';
import portfolioRoutes from './portfolio.routes';
import serviceRoutes from './service.routes';
import caseStudyRoutes from './case-study.routes';
import blogRoutes from './blog.routes';
import teamRoutes from './team.routes';
import testimonialRoutes from './testimonial.routes';
import contactRoutes from './contact.routes';
import newsletterRoutes from './newsletter.routes';
import careerRoutes from './career.routes';
import mediaRoutes from './media.routes';
import settingsRoutes from './settings.routes';
import analyticsRoutes from './analytics.routes';

const router = Router();

// Primary & Alias Endpoints
router.use('/auth', authRoutes);

router.use('/portfolios', portfolioRoutes);
router.use('/portfolio', portfolioRoutes);

router.use('/services', serviceRoutes);
router.use('/case-studies', caseStudyRoutes);

router.use('/blogs', blogRoutes);
router.use('/blog', blogRoutes);

router.use('/team', teamRoutes);
router.use('/testimonials', testimonialRoutes);

router.use('/contacts', contactRoutes);
router.use('/contact', contactRoutes);
router.use('/inquiries', contactRoutes);

router.use('/newsletter', newsletterRoutes);
router.use('/careers', careerRoutes);

router.use('/media', mediaRoutes);
router.use('/uploads', mediaRoutes);

router.use('/settings', settingsRoutes);
router.use('/analytics', analyticsRoutes);

export default router;
