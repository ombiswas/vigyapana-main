import type React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';
import { BarChart3, Compass, Rocket, Search } from 'lucide-react';

export interface TimelineStep {
  number: string;
  title: string;
  description: string;
  icon: React.FC<{ className?: string }>;
}

export interface TimelineProps {
  title?: string;
  badge?: string;
  description?: string;
  steps?: TimelineStep[];
}

const defaultSteps: TimelineStep[] = [
  {
    number: '01',
    title: 'Audit & Goal Alignment',
    description: 'We analyze your current digital presence, target audience, ad accounts, and donor/customer acquisition metrics to define clear KPI benchmarks.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Funnel & Creative Blueprint',
    description: 'Our creative team designs high-converting landing pages, copy, and ad creatives tailored for donor trust or customer purchasing intent.',
    icon: Compass,
  },
  {
    number: '03',
    title: 'Omnichannel Launch',
    description: 'We deploy targeted campaign structures on Meta Ads, Google Ads, and Google Ad Grants with real-time conversion pixel tracking.',
    icon: Rocket,
  },
  {
    number: '04',
    title: 'Scaling & Optimization',
    description: 'Continuous A/B testing of creatives, bidding strategies, and audience segments to maximize ROAS and lower donor acquisition cost.',
    icon: BarChart3,
  },
];

export const Timeline: React.FC<TimelineProps> = ({
  title = 'Our Proven Growth Methodology',
  badge = 'How We Work',
  description = 'A transparent 4-step framework engineered for maximum conversion, donor acquisition, and sustainable scaling.',
  steps = defaultSteps,
}) => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <Container>
        <SectionHeading badge={badge} title={title} description={description} align="center" />

        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical Center Line for Desktop */}
          <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block -translate-x-1/2" />

          <div className="space-y-12 relative">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const IconComp = step.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Content Card */}
                  <div className="w-full md:w-1/2">
                    <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-lg hover:border-primary/40 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-display text-2xl font-black text-accent">
                          {step.number}
                        </span>
                        <h3 className="font-display text-xl font-bold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon Badge */}
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-primary to-accent text-white shadow-xl">
                    <IconComp className="h-6 w-6" />
                  </div>

                  {/* Empty Spacer Column for Desktop Grid Symmetry */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
