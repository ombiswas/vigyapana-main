import type React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { HeartHandshake, PhoneCall, Sparkles } from 'lucide-react';
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
  subtitle = 'Schedule a complimentary strategy call with our digital growth team. We will audit your current campaigns and deliver an actionable 90-day roadmap.',
  primaryCtaText = 'Book Free Consultation',
  primaryCtaLink = '/contact?type=book-consultation',
  secondaryCtaText = 'Request Free NGO Audit',
  secondaryCtaLink = '/contact?type=ngo-audit',
}) => {
  return (
    <section className="py-20 relative overflow-hidden bg-background">
      <Container>
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 border border-slate-800 p-8 sm:p-12 lg:p-16 text-center text-white overflow-hidden shadow-2xl">
          {/* Ambient Lighting Layers */}
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              Start Your Growth Journey
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {title}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to={primaryCtaLink}>
                <Button variant="accent" size="lg" className="w-full sm:w-auto shadow-xl shadow-accent/20">
                  <PhoneCall className="h-4 w-4 mr-2" />
                  {primaryCtaText}
                </Button>
              </Link>

              <Link to={secondaryCtaLink}>
                <Button variant="glass" size="lg" className="w-full sm:w-auto">
                  <HeartHandshake className="h-4 w-4 mr-2 text-accent" />
                  {secondaryCtaText}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
