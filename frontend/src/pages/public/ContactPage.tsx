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
  Clock,
  HeartHandshake,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'contact' | 'ngo-audit'>('contact');
  const [consultModalOpen, setConsultModalOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Contact Us | Vigyapana Services Pvt. Ltd.</title>
        <meta
          name="description"
          content="Get in touch with Vigyapana Services. Book a 1-on-1 growth consultation, request a free 80G NGO audit, or visit our Noida HQ."
        />
      </Helmet>

      {/* ── 1. Hero Section ────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-background overflow-hidden">
        {/* Soft green radial background glow from center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,hsl(161_93%_40%/0.12)_0%,hsl(161_93%_40%/0.03)_45%,transparent_70%)] pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              Let’s Connect & Scale
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
              Let&apos;s Build Your <span className="text-primary">Digital Growth</span> Engine.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-sans">
              Have questions about NGO fundraising, Google Ad Grants, or performance ads? Our strategists are ready to help.
            </p>

            <div className="pt-2">
              <Modal open={consultModalOpen} onOpenChange={setConsultModalOpen}>
                <ModalTrigger asChild>
                  <Button variant="default" size="lg" className="shadow-md">
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

      {/* ── 2. Main Contact Grid (Light Mode) ─────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-card border-t border-border/70 relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Touchpoint Cards */}
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                badge="Direct Touchpoints"
                title="Get in Touch with Our Team"
                description="Connect directly with our media buyers, technical leads, and NGO audit team."
                align="left"
              />

              <div className="space-y-4">
                {/* Office Location */}
                <div className="group rounded-2xl border border-border/80 bg-background p-6 flex items-start gap-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.1)] hover:border-primary/30 transition-all duration-300">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground">Noida HQ Office</h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed font-sans">
                      Plot B-14, Sector 62, Institutional Area, Noida, NCR, Uttar Pradesh 201309, India
                    </p>
                  </div>
                </div>

                {/* Direct WhatsApp & Phone */}
                <div className="group rounded-2xl border border-border/80 bg-background p-6 flex items-start gap-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.1)] hover:border-primary/30 transition-all duration-300">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display text-base font-bold text-foreground">WhatsApp & Direct Phone</h3>
                    <p className="text-xs text-muted-foreground font-sans">+91 98765 43210 / +91 120 4567890</p>
                    <a
                      href="https://wa.me/919876543210?text=Hello%20Vigyapana%20Team,%20I%20would%20like%20to%20discuss%20a%20digital%20growth%20project."
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary/75 transition-colors pt-1"
                    >
                      Chat on WhatsApp Now &rarr;
                    </a>
                  </div>
                </div>

                {/* Email Support */}
                <div className="group rounded-2xl border border-border/80 bg-background p-6 flex items-start gap-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.1)] hover:border-primary/30 transition-all duration-300">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground">Email Inquiries</h3>
                    <p className="text-xs text-muted-foreground mt-1 font-sans">info@vigyapana.com / support@vigyapana.com</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="group rounded-2xl border border-border/80 bg-background p-6 flex items-start gap-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.1)] hover:border-primary/30 transition-all duration-300">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground">Operating Hours</h3>
                    <p className="text-xs text-muted-foreground mt-1 font-sans">Monday – Saturday: 9:30 AM – 7:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form with Tab Switcher */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-border/90 bg-background p-8 sm:p-10 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.06)] space-y-6">
                {/* Form Tab Switcher */}
                <div className="flex items-center gap-2 p-1.5 rounded-xl bg-muted border border-border/80">
                  <button
                    onClick={() => setActiveTab('contact')}
                    className={cn(
                      'flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold transition-all',
                      activeTab === 'contact'
                        ? 'bg-primary text-white shadow-sm font-bold'
                        : 'text-muted-foreground hover:text-foreground font-semibold'
                    )}
                  >
                    <Briefcase className="h-4 w-4" /> Business & General Inquiry
                  </button>
                  <button
                    onClick={() => setActiveTab('ngo-audit')}
                    className={cn(
                      'flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold transition-all',
                      activeTab === 'ngo-audit'
                        ? 'bg-primary text-white shadow-sm font-bold'
                        : 'text-muted-foreground hover:text-foreground font-semibold'
                    )}
                  >
                    <HeartHandshake className="h-4 w-4" /> Free 80G NGO Growth Audit
                  </button>
                </div>

                {activeTab === 'contact' ? (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-foreground">Send Us a Message</h3>
                      <p className="text-xs text-muted-foreground mt-1 font-sans">
                        Fill out the details below. Our team responds to all inquiries within 2 business hours.
                      </p>
                    </div>
                    <ContactForm />
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-foreground">Request Free NGO Audit</h3>
                      <p className="text-xs text-muted-foreground mt-1 font-sans">
                        We will evaluate your 80G compliance, Google Ad Grants eligibility, and donor conversion pages.
                      </p>
                    </div>
                    <NgoAuditForm />
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3. Embedded Google Map Section ───────────────────────────────────── */}
      <section className="py-16 bg-background relative border-t border-border/70">
        <Container>
          <SectionHeading
            badge="Visit Our HQ"
            title="Office Location & Directions"
            description="Located in Sector 62 Institutional Area, Noida — at the heart of Delhi NCR’s digital hub."
            align="center"
          />

          <div className="mt-8 rounded-2xl overflow-hidden border border-border/90 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.06)] h-[420px] bg-muted relative">
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
    </>
  );
}
