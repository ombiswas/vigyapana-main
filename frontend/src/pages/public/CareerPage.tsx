import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Modal, ModalContent, ModalHeader, ModalTitle } from '@/components/ui/Modal';
import apiClient from '@/services/apiClient';
import { API_ENDPOINTS } from '@/config/api';
import {
  CheckCircle2,
  Clock,
  Loader2,
  MapPin,
  Send,
  Sparkles,
  Upload,
  Zap,
} from 'lucide-react';
import toast from 'react-hot-toast';

// Active Job Openings Data
const openJobs = [
  {
    id: 'perf-marketer',
    title: 'Senior Performance Marketer',
    department: 'Paid Ads',
    location: 'Noida HQ / Hybrid',
    type: 'Full-Time',
    experience: '3-5 Years',
    description:
      'Lead high-ROAS Meta and Google ad campaigns across D2C brands and non-profit fundraising funnels. Deep expertise in CAPI, lookalike modeling, and A/B creative testing required.',
  },
  {
    id: 'ad-grants-spec',
    title: 'Google Ad Grants Specialist',
    department: 'NGO Growth',
    location: 'Remote / Noida HQ',
    type: 'Full-Time',
    experience: '2-4 Years',
    description:
      'Manage and maintain 100% policy compliance for $10,000/mo Google Ad Grant accounts for Indian 80G non-profits. Experience with SKAG structures and smart bidding strategies essential.',
  },
  {
    id: 'nextjs-dev',
    title: 'Full-Stack Next.js Developer',
    department: 'Tech & Web',
    location: 'Noida HQ',
    type: 'Full-Time',
    experience: '2+ Years',
    description:
      'Build lightning-fast Next.js, React, and Tailwind CSS web applications with integrated payment gateways (Razorpay, UPI) and automated 80G tax receipt PDF workflows.',
  },
  {
    id: 'video-editor',
    title: 'Creative Video Editor & Motion Designer',
    department: 'Content Studio',
    location: 'Noida HQ',
    type: 'Full-Time',
    experience: '2-4 Years',
    description:
      'Edit high-converting Instagram Reels, YouTube Shorts, and direct-response video ad hooks using Premiere Pro, After Effects, and kinetic typography.',
  },
];

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    portfolioUrl: '',
    coverLetter: '',
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setSubmittedSuccess(false);
    setModalOpen(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        toast.error('File size exceeds 10MB limit.');
        return;
      }
      setResumeFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedJob) return;
    if (!resumeFile) {
      toast.error('Please upload your resume (.pdf or .doc)');
      return;
    }

    setIsSubmitting(true);

    try {
      // Build FormData payload for multipart file upload
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('phone', formData.phone);
      payload.append('position', selectedJob);
      payload.append('experience', formData.experience);
      payload.append('portfolioUrl', formData.portfolioUrl);
      payload.append('coverLetter', formData.coverLetter);
      payload.append('resume', resumeFile);

      // Submit to backend API (/api/v1/careers/apply)
      await apiClient.post(`${API_ENDPOINTS.CAREERS}/apply`, payload, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setSubmittedSuccess(true);
      toast.success('Application submitted successfully! Confirmation email sent.');

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        experience: '',
        portfolioUrl: '',
        coverLetter: '',
      });
      setResumeFile(null);
    } catch (err: unknown) {
      const errorMsg =
        (err as { response?: { data?: { message?: string } } })?.response?.data?.message ??
        'Failed to submit application. Please try again.';
      toast.error(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Careers | Join Vigyapana Services Pvt. Ltd.</title>
        <meta
          name="description"
          content="Build your career at Vigyapana. Explore open roles in performance marketing, Google Ad Grants management, Next.js web development, and video production."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-background overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/20 via-accent/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              We Are Hiring
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Build Your Career at India&apos;s <span className="bg-gradient-to-r from-accent via-amber-500 to-orange-500 bg-clip-text text-transparent">Purpose-Driven</span> Digital Agency.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Join a team of media buyers, engineers, and creatives doing work that funds lifesaving NGO programs and scales fast-growing brands.
            </p>
          </div>
        </Container>
      </section>

      {/* Agency Perks & Culture Strip */}
      <section className="py-12 bg-slate-950 text-white border-y border-slate-800">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="font-display text-xl font-bold text-accent">Competitive Salary</div>
              <div className="text-xs text-slate-400 mt-1">Above industry benchmarks + performance bonuses</div>
            </div>
            <div className="p-4">
              <div className="font-display text-xl font-bold text-primary">Hybrid Flexibility</div>
              <div className="text-xs text-slate-400 mt-1">Work from Noida HQ or remote options</div>
            </div>
            <div className="p-4">
              <div className="font-display text-xl font-bold text-emerald-400">Direct Social Impact</div>
              <div className="text-xs text-slate-400 mt-1">Help NGOs raise crores for child welfare</div>
            </div>
            <div className="p-4">
              <div className="font-display text-xl font-bold text-amber-400">Fast Career Growth</div>
              <div className="text-xs text-slate-400 mt-1">Accelerated promotion pathways & training</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Open Positions Listing Grid */}
      <section className="py-20 bg-background relative">
        <Container>
          <SectionHeading
            badge="Current Opportunities"
            title="Explore Active Job Openings"
            description="Find a role that matches your skills and apply today."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {openJobs.map((job) => (
              <Card
                key={job.id}
                className="p-8 space-y-6 flex flex-col justify-between border-border/80 hover:border-primary/40 transition-all duration-300 shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <Badge variant="accent">{job.department}</Badge>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" /> {job.type}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-foreground">{job.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{job.description}</p>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                  <span className="text-xs font-semibold text-accent">Req: {job.experience}</span>
                  <Button variant="default" onClick={() => handleApplyClick(job.title)}>
                    Apply For Role <Zap className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Resume Upload & Job Application Modal */}
      <Modal open={modalOpen} onOpenChange={setModalOpen}>
        <ModalContent className="max-w-xl p-6 sm:p-8">
          <ModalHeader>
            <ModalTitle>Apply for {selectedJob}</ModalTitle>
          </ModalHeader>

          {submittedSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500 mx-auto">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">Application Received!</h3>
              <p className="text-sm text-muted-foreground">
                We have saved your resume and sent a confirmation email to <strong>{formData.email}</strong>. Our HR team will reach out shortly.
              </p>
              <Button variant="outline" onClick={() => setModalOpen(false)}>
                Close Window
              </Button>
            </div>
          ) : (
            <form onSubmit={(e) => void handleSubmit(e)} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-foreground block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-foreground block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-foreground block mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-foreground block mb-1">Years of Experience</label>
                  <input
                    type="text"
                    placeholder="e.g. 3 Years"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-foreground block mb-1">Portfolio or LinkedIn URL</label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/username or https://github.com/..."
                  value={formData.portfolioUrl}
                  onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Resume File Upload Input */}
              <div>
                <label className="text-xs font-semibold text-foreground block mb-1">
                  Upload Resume (.PDF, .DOC, .DOCX) *
                </label>
                <div className="relative rounded-2xl border-2 border-dashed border-border bg-muted/40 p-4 text-center hover:border-primary transition-colors">
                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col items-center gap-1.5 pointer-events-none">
                    <Upload className="h-6 w-6 text-primary" />
                    <span className="text-xs font-medium text-foreground">
                      {resumeFile ? resumeFile.name : 'Click or Drag & Drop Resume File'}
                    </span>
                    <span className="text-[10px] text-muted-foreground">Max file size: 10MB</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-foreground block mb-1">Cover Letter / Why Vigyapana?</label>
                <textarea
                  rows={3}
                  placeholder="Tell us briefly why you want to join our team..."
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="pt-2">
                <Button type="submit" variant="accent" className="w-full justify-center" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Uploading Resume & Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application <Send className="h-4 w-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
