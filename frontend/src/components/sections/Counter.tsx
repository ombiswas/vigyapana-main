import type React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { AnimatedCounter } from '@/components/effects/AnimatedCounter';

export interface StatItem {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  sublabel?: string;
}

export interface CounterProps {
  stats?: StatItem[];
  dark?: boolean;
}

const defaultStats: StatItem[] = [
  { target: 50, prefix: '₹', suffix: 'Cr+', label: 'Donations Raised', sublabel: 'For registered Indian NGOs' },
  { target: 3.8, suffix: 'x', decimals: 1, label: 'Average Campaign ROAS', sublabel: 'Across Meta & Google Ads' },
  { target: 150, suffix: '+', label: 'Clients Empowered', sublabel: 'NGOs, D2C, Healthcare & SMEs' },
  { target: 98, suffix: '%', label: 'Client Retention Rate', sublabel: 'Long-term growth partnership' },
];

export const Counter: React.FC<CounterProps> = ({ stats = defaultStats, dark = false }) => {
  return (
    <section className={`py-16 ${dark ? 'bg-slate-950 text-white' : 'bg-primary/5 text-foreground'} border-y border-border/60 relative`}>
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-4"
            >
              <AnimatedCounter
                target={stat.target}
                prefix={stat.prefix ?? ''}
                suffix={stat.suffix ?? ''}
                decimals={stat.decimals ?? 0}
                className="font-display text-4xl sm:text-5xl font-black tracking-tight text-primary drop-shadow-sm"
              />
              <span className="mt-2 text-base font-bold tracking-tight text-foreground">
                {stat.label}
              </span>
              {stat.sublabel && (
                <span className="mt-1 text-xs text-muted-foreground">
                  {stat.sublabel}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
