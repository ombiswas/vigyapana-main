import type React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  title?: string;
  badge?: string;
  description?: string;
  items?: FAQItem[];
}

const defaultFaqs: FAQItem[] = [
  {
    question: 'How does Vigyapana help NGOs raise funds through digital marketing?',
    answer:
      'We design end-to-end donor acquisition funnels, manage Google Ad Grants ($10,000/month free ad credit), run targeted Meta (Facebook & Instagram) ads, and set up automated donor retention workflows to maximize monthly recurring donations.',
  },
  {
    question: 'What is the Google Ad Grants program and can Vigyapana apply for us?',
    answer:
      'Google offers eligible 80G registered NGOs $10,000/month (approx ₹8.3 Lakhs/month) in free search ads. We manage the entire application process, setup, policy compliance, and keyword optimization for your organization.',
  },
  {
    question: 'What performance metrics do you track for business ad campaigns?',
    answer:
      'For businesses, we focus on revenue-driven metrics: Return on Ad Spend (ROAS), Cost Per Acquisition (CPA), Customer Lifetime Value (LTV), Qualified Lead Volume, and Conversion Rates across Google, Meta, and LinkedIn.',
  },
  {
    question: 'How long does it take to see results from digital marketing?',
    answer:
      'Paid advertising campaigns (Meta & Google Ads) typically generate leads and donations within 24 to 48 hours of launch. Organic SEO and Content Marketing strategies show significant exponential growth within 3 to 6 months.',
  },
  {
    question: 'Do you offer custom pricing packages?',
    answer:
      'Yes! We tailor our pricing according to your organization type (NGO or Business), campaign scope, and growth goals. Contact us for a free consultation and proposal.',
  },
];

export const FAQ: React.FC<FAQProps> = ({
  title = 'Frequently Asked Questions',
  badge = 'Got Questions?',
  description = 'Everything you need to know about our services, campaign management, and working with Vigyapana.',
  items = defaultFaqs,
}) => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <Container size="sm">
        <SectionHeading badge={badge} title={title} description={description} align="center" />

        <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-[0_6px_40px_-12px_rgba(0,0,0,0.1),0_2px_8px_-2px_rgba(0,0,0,0.04)]">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left font-display text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
};
