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
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/20 via-accent/15 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent uppercase tracking-wider mb-6 shadow-sm backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              India&apos;s Premier Digital Growth Partner
            </div>

            {/* Main Kinetic Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              <TextReveal text="Empowering NGOs to Raise Funds & Businesses to Scale." />
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              We engineer high-converting digital ad campaigns, manage Google Ad Grants for NGOs, and deliver end-to-end web & branding solutions for growing brands across India.
            </p>

            {/* Feature Checklist */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-foreground/90">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>$10,000/mo Free Google Ad Grants</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Meta & Google Ads Performance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>Conversion-Focused Landing Pages</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Dedicated Growth Strategist</span>
              </div>
            </div>

            {/* CTA Group with Magnetic Button Wrappers */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <MagneticButton>
                <Link to="/ngo-solutions">
                  <Button variant="accent" size="lg" className="w-full sm:w-auto shadow-xl shadow-accent/25">
                    <HeartHandshake className="h-5 w-5 mr-2" />
                    Explore NGO Solutions
                  </Button>
                </Link>
              </MagneticButton>

              <MagneticButton>
                <Link to="/business-solutions">
                  <Button variant="default" size="lg" className="w-full sm:w-auto shadow-xl shadow-primary/25">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Business Growth Solutions
                  </Button>
                </Link>
              </MagneticButton>
            </div>

            {/* Secondary Link */}
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <span>Looking for a custom strategy?</span>
              <Link to="/contact?type=book-consultation" className="text-primary font-semibold hover:underline flex items-center gap-1">
                Book a 1-on-1 Strategy Call <PhoneCall className="h-3 w-3" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Stack & Glass Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Banner Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-border/80 bg-card p-2 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80"
                  alt="Vigyapana Digital Marketing Team"
                  className="rounded-2xl w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-2xl" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    Proven Impact
                  </span>
                  <h3 className="font-display text-xl font-bold mt-1">
                    Driving Measurable ROI for NGOs & Enterprises
                  </h3>
                </div>
              </div>

              {/* Floating Stat Card 1: NGO Impact */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute -top-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl border border-white/20 bg-background/90 backdrop-blur-xl p-4 shadow-xl text-foreground"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent font-bold">
                  <HeartHandshake className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-display text-lg font-bold">₹50 Cr+</div>
                  <div className="text-xs text-muted-foreground">Raised for Indian NGOs</div>
                </div>
              </motion.div>

              {/* Floating Stat Card 2: Business ROAS */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 rounded-2xl border border-white/20 bg-background/90 backdrop-blur-xl p-4 shadow-xl text-foreground"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary font-bold">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-display text-lg font-bold">3.8x Avg ROAS</div>
                  <div className="text-xs text-muted-foreground">On Paid Ad Campaigns</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Client Trust Strip */}
        <div className="mt-16 pt-10 border-t border-border/60">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6">
            Trusted by Leading NGOs, Startups, D2C Brands & Healthcare Organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all">
            <span className="font-display text-lg font-bold text-foreground/80">CareIndia</span>
            <span className="font-display text-lg font-bold text-foreground/80">SmileFoundation</span>
            <span className="font-display text-lg font-bold text-foreground/80">HealthPlus</span>
            <span className="font-display text-lg font-bold text-foreground/80">EduReach</span>
            <span className="font-display text-lg font-bold text-foreground/80">UrbanD2C</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
