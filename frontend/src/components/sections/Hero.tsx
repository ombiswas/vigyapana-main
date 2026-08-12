import type React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { TextReveal } from '@/components/effects/TextReveal';
import { MagneticButton } from '@/components/effects/MagneticButton';
import {
  CheckCircle2,
  HeartHandshake,
  PhoneCall,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { Link } from 'react-router';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-background">
      {/* Soft ambient gradient — one layer, subtle */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,hsl(161_93%_40%/0.07)_0%,transparent_70%)] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* ── Left Column ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Eyebrow badge — no pulsing dot, no pill */}
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                <Sparkles className="h-3 w-3" />
                India's Premier Digital Growth Partner
              </span>
              <div className="h-px flex-1 max-w-[48px] bg-border" />
            </div>

            {/* Main headline — Fraunces gives editorial authority */}
            <h1 className="font-display text-[2.6rem] sm:text-5xl lg:text-[3.4rem] font-bold tracking-[-0.02em] text-foreground leading-[1.1]">
              <TextReveal text="Empowering NGOs to Raise Funds & Businesses to Scale." />
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-[1.7] max-w-xl font-sans font-normal">
              We engineer high-converting digital campaigns, manage Google Ad Grants for NGOs, and deliver end-to-end web & branding solutions across India.
            </p>

            {/* Feature checklist — clean, no icon color switching */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-foreground/80">
              {[
                '$10,000/mo Free Google Ad Grants',
                'Meta & Google Ads Performance',
                'Conversion-Focused Landing Pages',
                'Dedicated Growth Strategist',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <MagneticButton>
                <Link to="/ngo-solutions">
                  <Button variant="accent" size="lg" className="w-full sm:w-auto">
                    <HeartHandshake className="h-4.5 w-4.5 mr-2" />
                    Explore NGO Solutions
                  </Button>
                </Link>
              </MagneticButton>

              <MagneticButton>
                <Link to="/business-solutions">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-border/60 hover:border-primary/30 hover:bg-primary/5 hover:text-primary">
                    <TrendingUp className="h-4.5 w-4.5 mr-2" />
                    Business Growth Solutions
                  </Button>
                </Link>
              </MagneticButton>
            </div>

            {/* Micro-link */}
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <span>Looking for a custom strategy?</span>
              <Link
                to="/contact?type=book-consultation"
                className="text-primary font-semibold hover:underline underline-offset-2 inline-flex items-center gap-1"
              >
                Book a 1-on-1 Strategy Call <PhoneCall className="h-3 w-3" />
              </Link>
            </div>
          </motion.div>

          {/* ── Right Column: Hero Visual ────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Outer padding wrapper — adds space for floating cards */}
            <div className="relative mx-auto max-w-md lg:max-w-none pt-10 pb-10 pl-4 pr-4 sm:pl-8 sm:pr-0">

              {/* Main image — no massive shadow, just a crisp border */}
              <div className="relative rounded-2xl overflow-hidden border border-border/60 bg-card">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80"
                  alt="Vigyapana Digital Marketing Team"
                  className="w-full h-[400px] object-cover"
                />
                {/* Gradient overlay only at the very bottom — doesn't block content */}
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />

                {/* Image caption — sits clear of the floating cards */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                    Proven Impact
                  </span>
                  <h3 className="font-display text-lg font-semibold mt-0.5 leading-tight">
                    Driving Measurable ROI for NGOs & Enterprises
                  </h3>
                  <h3 className="font-display text-lg font-semibold mt-0.5 leading-tight">
                    NGOs & Enterprises
                  </h3>
                </div>
              </div>

              {/* Floating Stat Card 1 — positioned ABOVE the image, outside it */}
              <motion.div
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-0 -left-2 sm:-left-8 hidden sm:flex items-center gap-3 rounded-xl border border-border/70 bg-card/95 backdrop-blur-sm p-3.5 shadow-sm text-foreground"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent shrink-0">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-base font-bold leading-tight">₹50 Cr+</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">Raised for Indian NGOs</div>
                </div>
              </motion.div>

              {/* Floating Stat Card 2 — positioned BELOW the image, outside it */}
              <motion.div
                initial={{ y: -16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 -right-2 sm:-right-8 hidden sm:flex items-center gap-3 rounded-xl border border-border/70 bg-card/95 backdrop-blur-sm p-3.5 shadow-sm text-foreground"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-base font-bold leading-tight">3.8× Avg ROAS</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">On Paid Ad Campaigns</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Client Trust Strip ───────────────────────────────── */}
        <div className="mt-16 pt-10 border-t border-border/50">
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-6">
            Trusted by Leading NGOs, Startups, D2C Brands & Healthcare Organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14 opacity-50 hover:opacity-80 transition-opacity duration-500">
            {['CareIndia', 'SmileFoundation', 'HealthPlus', 'EduReach', 'UrbanD2C'].map((name) => (
              <span key={name} className="font-display text-sm font-semibold tracking-tight text-foreground">
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
