import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { Suspense, lazy } from 'react';

import { SmoothScrollProvider } from '@/providers/SmoothScrollProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { AuthProvider } from '@/providers/AuthProvider';
import { useAuthStore } from '@/stores/authStore';
import { ROUTES } from '@/config/routes';

import PublicLayout from '@/layouts/PublicLayout';
import AdminLayout from '@/layouts/AdminLayout';
import { PageLoader } from '@/components/ui/PageLoader';

// ── Lazy-loaded Public Pages ───────────────────────────────────────────────────
const HomePage             = lazy(() => import('@/pages/public/HomePage'));
const AboutPage            = lazy(() => import('@/pages/public/AboutPage'));
const NgoSolutionsPage     = lazy(() => import('@/pages/public/NgoSolutionsPage'));
const BusinessSolutionsPage= lazy(() => import('@/pages/public/BusinessSolutionsPage'));
const ServicesPage         = lazy(() => import('@/pages/public/ServicesPage'));
const ServiceDetailPage    = lazy(() => import('@/pages/public/ServiceDetailPage'));
const PortfolioPage        = lazy(() => import('@/pages/public/PortfolioPage'));
const PortfolioDetail      = lazy(() => import('@/pages/public/PortfolioDetailPage'));
const CaseStudiesPage      = lazy(() => import('@/pages/public/CaseStudiesPage'));
const CaseStudyDetail      = lazy(() => import('@/pages/public/CaseStudyDetailPage'));
const BlogPage             = lazy(() => import('@/pages/public/BlogPage'));
const BlogDetailPage       = lazy(() => import('@/pages/public/BlogDetailPage'));
const CareerPage           = lazy(() => import('@/pages/public/CareerPage'));
const ContactPage          = lazy(() => import('@/pages/public/ContactPage'));
const NotFoundPage         = lazy(() => import('@/pages/public/NotFoundPage'));

// ── Lazy-loaded Auth Pages ─────────────────────────────────────────────────────
const LoginPage = lazy(() => import('@/pages/auth/LoginPage'));

// ── Lazy-loaded Admin Pages ────────────────────────────────────────────────────
const AdminDashboard       = lazy(() => import('@/pages/admin/DashboardPage'));
const AdminServices        = lazy(() => import('@/pages/admin/services/ServicesPage'));
const AdminServiceForm     = lazy(() => import('@/pages/admin/services/ServiceFormPage'));
const AdminPortfolio       = lazy(() => import('@/pages/admin/portfolio/PortfolioPage'));
const AdminPortfolioForm   = lazy(() => import('@/pages/admin/portfolio/PortfolioFormPage'));
const AdminBlog            = lazy(() => import('@/pages/admin/blog/BlogPage'));
const AdminBlogForm        = lazy(() => import('@/pages/admin/blog/BlogFormPage'));
const AdminTeam            = lazy(() => import('@/pages/admin/team/TeamPage'));
const AdminTestimonials    = lazy(() => import('@/pages/admin/testimonials/TestimonialsPage'));
const AdminContacts        = lazy(() => import('@/pages/admin/contacts/ContactsPage'));
const AdminNewsletter      = lazy(() => import('@/pages/admin/newsletter/NewsletterPage'));
const AdminCareers         = lazy(() => import('@/pages/admin/careers/CareersPage'));
const AdminMedia           = lazy(() => import('@/pages/admin/media/MediaPage'));
const AdminSettings        = lazy(() => import('@/pages/admin/settings/SettingsPage'));
const AdminProfile         = lazy(() => import('@/pages/admin/ProfilePage'));

// ── Route Guard ────────────────────────────────────────────────────────────────
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? <>{children}</> : <Navigate to={ROUTES.LOGIN} replace />;
};

const GuestRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuthStore();
  return !isAuthenticated ? <>{children}</> : <Navigate to={ROUTES.ADMIN.DASHBOARD} replace />;
};

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <SmoothScrollProvider>
          <AuthProvider>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                {/* ── Public Routes ──────────────────────────────────────── */}
                <Route element={<PublicLayout />}>
                  <Route index                                  element={<HomePage />} />
                  <Route path={ROUTES.ABOUT}                   element={<AboutPage />} />
                  <Route path={ROUTES.NGO_SOLUTIONS}           element={<NgoSolutionsPage />} />
                  <Route path={ROUTES.BUSINESS_SOLUTIONS}      element={<BusinessSolutionsPage />} />
                  <Route path={ROUTES.SERVICES}                element={<ServicesPage />} />
                  <Route path={ROUTES.SERVICE_DETAIL}          element={<ServiceDetailPage />} />
                  <Route path={ROUTES.PORTFOLIO}               element={<PortfolioPage />} />
                  <Route path={ROUTES.PORTFOLIO_DETAIL}        element={<PortfolioDetail />} />
                  <Route path={ROUTES.CASE_STUDIES}            element={<CaseStudiesPage />} />
                  <Route path={ROUTES.CASE_STUDY_DETAIL}       element={<CaseStudyDetail />} />
                  <Route path={ROUTES.BLOG}                    element={<BlogPage />} />
                  <Route path={ROUTES.BLOG_DETAIL}             element={<BlogDetailPage />} />
                  <Route path={ROUTES.CAREERS}                 element={<CareerPage />} />
                  <Route path={ROUTES.CONTACT}                 element={<ContactPage />} />
                </Route>

                {/* ── Auth Routes ────────────────────────────────────────── */}
                <Route path={ROUTES.LOGIN} element={
                  <GuestRoute><LoginPage /></GuestRoute>
                } />

                {/* ── Admin Routes ───────────────────────────────────────── */}
                <Route path={ROUTES.ADMIN.ROOT} element={
                  <ProtectedRoute><AdminLayout /></ProtectedRoute>
                }>
                  <Route index                                  element={<AdminDashboard />} />
                  <Route path="services"                        element={<AdminServices />} />
                  <Route path="services/new"                    element={<AdminServiceForm />} />
                  <Route path="services/:id/edit"              element={<AdminServiceForm />} />
                  <Route path="portfolio"                       element={<AdminPortfolio />} />
                  <Route path="portfolio/new"                   element={<AdminPortfolioForm />} />
                  <Route path="portfolio/:id/edit"             element={<AdminPortfolioForm />} />
                  <Route path="blog"                            element={<AdminBlog />} />
                  <Route path="blog/new"                        element={<AdminBlogForm />} />
                  <Route path="blog/:id/edit"                  element={<AdminBlogForm />} />
                  <Route path="team"                            element={<AdminTeam />} />
                  <Route path="testimonials"                    element={<AdminTestimonials />} />
                  <Route path="contacts"                        element={<AdminContacts />} />
                  <Route path="newsletter"                      element={<AdminNewsletter />} />
                  <Route path="careers"                         element={<AdminCareers />} />
                  <Route path="media"                           element={<AdminMedia />} />
                  <Route path="settings"                        element={<AdminSettings />} />
                  <Route path="profile"                         element={<AdminProfile />} />
                </Route>

                {/* ── 404 ───────────────────────────────────────────────── */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </AuthProvider>
        </SmoothScrollProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
