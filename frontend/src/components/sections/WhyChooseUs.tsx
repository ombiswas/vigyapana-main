import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  Award,
  BarChart3,
  HeartHandshake,
  ShieldCheck,
  Target,
  Zap,
} from 'lucide-react';

const features = [
  {
    icon: HeartHandshake,
    color: 'text-accent bg-accent/10 border-accent/30',
    title: 'NGO Fundraising Expertise',
    description:
      'Deep domain knowledge in Indian NGO compliance (80G, 12A, FCRA), donor psychology, and digital fundraising funnels.',
  },
  {
    icon: Award,
    color: 'text-primary bg-primary/10 border-primary/30',
    title: 'Google Ad Grants Management',
    description:
      'We unlock and maintain $10,000/month (₹8.3+ Lakhs/mo) in 100% free Google Search Ads for eligible non-profits.',
  },
  {
    icon: Target,
    color: 'text-amber-500 bg-amber-500/10 border-amber-500/30',
    title: 'High-ROAS Performance Ads',
    description:
      'Laser-targeted Meta (Facebook & Instagram) and Google Ads designed to deliver 3x+ Return on Ad Spend for businesses.',
  },
  {
    icon: Zap,
    color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/30',
    title: 'Conversion-Optimized Web Design',
    description:
      'Lightning-fast Next.js & React landing pages engineered for instant donor checkout and high lead-form conversions.',
  },
  {
    icon: BarChart3,
    color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30',
    title: 'Transparent Real-Time Dashboards',
    description:
      'No vanity metrics. Track cost per donation (CPD), cost per lead (CPL), revenue, and ROAS with 100% live reporting.',
  },
  {
    icon: ShieldCheck,
    color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/30',
    title: 'Dedicated Growth Strategist',
    description:
      'Direct access to senior digital marketers and campaign managers — no account manager runarounds.',
  },
];

export const WhyChooseUs: FC = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 h-96 w-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <Container>
        <SectionHeading
          badge="The Vigyapana Advantage"
          title="Why NGOs & Growing Brands"
          highlightedTitle="Trust Vigyapana"
          description="We combine creative storytelling with performance ad engineering to deliver measurable digital impact."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'translateZ(0)',
                }}
                className="group rounded-3xl border border-border/80 bg-card p-8 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between transform-gpu will-change-[transform,opacity]"
              >
                <div>
                  <div
                    className={`h-14 w-14 rounded-2xl border flex items-center justify-center mb-6 ${item.color} shadow-sm transition-transform group-hover:scale-110 transform-gpu`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
