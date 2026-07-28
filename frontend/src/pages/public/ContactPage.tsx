import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ContactForm } from '@/components/forms/ContactForm';
import { NgoAuditForm } from '@/components/forms/NgoAuditForm';
import { ConsultationForm } from '@/components/forms/ConsultationForm';
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalTrigger } from '@/components/ui/Modal';
import {
  Briefcase,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Sparkles,
} from 'lucide-react';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'contact' | 'ngo-audit'>('contact');
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      toast.success('Successfully subscribed to Vigyapana Newsletter!');
      setNewsletterEmail('');
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Vigyapana Services Pvt. Ltd.</title>
        <meta
          name="description"
          content="Get in touch with Vigyapana Services. Book a 1-on-1 growth consultation, request a free 80G NGO audit, or visit our Noida HQ."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-background overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/20 via-accent/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              Let’s Connect
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Let&apos;s Build Your <span className="bg-gradient-to-r from-accent via-amber-500 to-orange-500 bg-clip-text text-transparent">Digital Growth</span> Engine.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Have questions about NGO fundraising, Google Ad Grants, or performance ads? Our strategists are ready to help.
            </p>

            <div className="pt-2">
              <Modal open={consultModalOpen} onOpenChange={setConsultModalOpen}>
                <ModalTrigger asChild>
                  <Button variant="accent" size="lg" className="shadow-xl">
                    <Phone className="h-4 w-4 mr-2" /> Book 1-on-1 Strategy Call
                  </Button>
                </ModalTrigger>
                <ModalContent>
                  <ModalHeader>
                    <ModalTitle>Book Strategy Call with Vigyapana</ModalTitle>
                  </ModalHeader>
                  <ConsultationForm onSuccess={() => setConsultModalOpen(false)} />
                </ModalContent>
              </Modal>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Contact Grid: Info Cards + Interactive Form */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info Cards & Map */}
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                badge="Direct Touchpoints"
                title="Get in Touch with Our Team"
                align="left"
                dark
              />

              <div className="space-y-4">
                {/* Office Location */}
                <Card className="glass-card-dark border-slate-800 p-6 flex items-start gap-4 text-slate-100 shadow-xl">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/20 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">Noida HQ Office</h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Plot B-14, Sector 62, Institutional Area, Noida, NCR, Uttar Pradesh 201309, India
                    </p>
                  </div>
                </Card>

                {/* Direct WhatsApp & Phone */}
                <Card className="glass-card-dark border-slate-800 p-6 flex items-start gap-4 text-slate-100 shadow-xl">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display text-lg font-bold text-white">WhatsApp & Direct Phone</h3>
                    <p className="text-xs text-slate-300">+91 98765 43210 / +91 120 4567890</p>
                    <a
                      href="https://wa.me/919876543210?text=Hello%20Vigyapana%20Team,%20I%20would%20like%20to%20discuss%20a%20digital%20growth%20project."
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline pt-1"
                    >
                      Chat on WhatsApp Now &rarr;
                    </a>
                  </div>
                </Card>

                {/* Email Support */}
                <Card className="glass-card-dark border-slate-800 p-6 flex items-start gap-4 text-slate-100 shadow-xl">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/20 text-accent">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">Email Inquiries</h3>
                    <p className="text-xs text-slate-300 mt-1">info@vigyapana.com / support@vigyapana.com</p>
                  </div>
                </Card>

                {/* Business Hours */}
                <Card className="glass-card-dark border-slate-800 p-6 flex items-start gap-4 text-slate-100 shadow-xl">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-400">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">Operating Hours</h3>
                    <p className="text-xs text-slate-300 mt-1">Monday – Saturday: 9:30 AM – 7:00 PM IST</p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Right: Interactive Form with Tab Switcher */}
            <div className="lg:col-span-7">
              <Card className="glass-card-dark border-slate-800 p-8 sm:p-10 shadow-2xl text-slate-100 space-y-6">
                {/* Form Switcher */}
                <div className="flex items-center gap-3 p-1.5 rounded-2xl bg-slate-900 border border-slate-800">
                  <button
                    onClick={() => setActiveTab('contact')}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      activeTab === 'contact'
                        ? 'bg-primary text-white shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Briefcase className="h-4 w-4" /> Business & General Inquiry
                  </button>
                  <button
                    onClick={() => setActiveTab('ngo-audit')}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      activeTab === 'ngo-audit'
                        ? 'bg-accent text-slate-950 shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <HeartHandshake className="h-4 w-4" /> Free 80G NGO Growth Audit
                  </button>
                </div>

                {activeTab === 'contact' ? (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white">Send Us a Message</h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Fill out the details below. Our team responds to all inquiries within 2 business hours.
                      </p>
                    </div>
                    <ContactForm />
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white">Request Free NGO Audit</h3>
                      <p className="text-xs text-slate-400 mt-1">
                        We will evaluate your 80G compliance, Google Ad Grants eligibility, and donor conversion pages.
                      </p>
                    </div>
                    <NgoAuditForm />
                  </div>
                )}
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Embedded Google Map Section */}
      <section className="py-16 bg-background relative border-y border-border/60">
        <Container>
          <SectionHeading
            badge="Visit Our HQ"
            title="Office Location & Directions"
            align="center"
          />

          <div className="mt-8 rounded-3xl overflow-hidden border border-border shadow-2xl h-[420px] bg-muted relative">
            <iframe
              title="Vigyapana Services HQ Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.56209806894!2d77.36214531508216!3d28.61287798242502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456e36d715%3A0x2649b5c391307!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>

      {/* Newsletter Subscription Block */}
      <section className="py-20 bg-slate-950 text-white relative">
        <Container size="sm">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 sm:p-12 text-center space-y-6 shadow-2xl backdrop-blur-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 text-accent mx-auto">
              <Mail className="h-7 w-7" />
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Subscribe to Our Weekly Growth Dispatch
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                No spam. Only actionable Google Ad Grants strategies, Meta ad benchmarks, and web engineering updates.
              </p>
            </div>

            {subscribed ? (
              <div className="inline-flex items-center gap-2 p-4 rounded-2xl bg-emerald-500/20 text-emerald-400 text-sm font-semibold border border-emerald-500/40">
                <CheckCircle2 className="h-5 w-5" />
                You are subscribed! We will send you our next digital growth release.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button type="submit" variant="accent" className="shrink-0">
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
