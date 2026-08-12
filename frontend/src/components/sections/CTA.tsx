import type React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ArrowRight, HeartHandshake, PhoneCall } from 'lucide-react';
import { Link } from 'react-router';

export interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export const CTA: React.FC<CTAProps> = ({
  title = 'Ready to Scale Your NGO Donations or Business Revenue?',
  subtitle = "Schedule a complimentary strategy call with our digital growth team. We'll audit your current campaigns and deliver an actionable 90-day roadmap.",
  primaryCtaText = 'Book Free Consultation',
  primaryCtaLink = '/contact?type=book-consultation',
  secondaryCtaText = 'Request Free NGO Audit',
  secondaryCtaLink = '/contact?type=ngo-audit',
}) => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[0_6px_40px_-12px_rgba(0,0,0,0.1),0_2px_8px_-2px_rgba(0,0,0,0.04)]"
        >
          {/* Left accent bar */}
          {/* <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" /> */}

          {/* Subtle inner tint — green top-left quadrant only */}
          <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-primary/8 blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-16">

            {/* Left: Text */}
            <div className="lg:col-span-7 space-y-5">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-primary/60" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                  Start Your Growth Journey
                </span>
              </div>

              <h2 className="font-display text-[2rem] sm:text-[2.4rem] lg:text-[2.8rem] font-bold tracking-[-0.02em] text-foreground leading-[1.1]">
                {title}
              </h2>

              <p className="text-base text-muted-foreground leading-[1.75] max-w-xl">
                {subtitle}
              </p>

              {/* Trust signals */}
              <ul className="flex flex-col sm:flex-row gap-3 sm:gap-6 pt-1">
                {[
                  'Free 30-minute strategy session',
                  'Custom 90-day roadmap',
                  'No obligation required',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[13px] text-foreground/70 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Actions */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <Link to={primaryCtaLink}>
                <Button
                  variant="default"
                  size="lg"
                  className="w-full justify-between group"
                >
                  <span className="flex items-center gap-2.5">
                    <PhoneCall className="h-4 w-4" />
                    {primaryCtaText}
                  </span>
                  <ArrowRight className="h-4 w-4 opacity-60 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link to={secondaryCtaLink}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full justify-between group border-border/60 hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                >
                  <span className="flex items-center gap-2.5">
                    <HeartHandshake className="h-4 w-4" />
                    {secondaryCtaText}
                  </span>
                  <ArrowRight className="h-4 w-4 opacity-60 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <p className="text-[11px] text-muted-foreground text-center mt-1 leading-relaxed">
                Trusted by 120+ NGOs & brands across India.{' '}
                <Link to="/case-studies" className="text-primary hover:underline underline-offset-2">
                  See results →
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
