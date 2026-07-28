import { type FC, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export interface TestimonialSlide {
  quote: string;
  authorName: string;
  authorRole: string;
  company: string;
  rating?: number;
  image?: string;
}

export interface CarouselProps {
  items?: TestimonialSlide[];
  title?: string;
  badge?: string;
}

const defaultTestimonials: TestimonialSlide[] = [
  {
    quote:
      'Vigyapana transformed our NGO fundraising completely. Their Google Ad Grants setup and Meta donation ads helped us raise over ₹1.2 Crores in just 6 months. Unbelievable ROI and dedication!',
    authorName: 'Ramesh Sharma',
    authorRole: 'Executive Director',
    company: 'Hope For Children Foundation',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'Our e-commerce brand was struggling with 1.4x ROAS on Meta ads. Vigyapana restructured our ad accounts, reworked our creatives, and scaled our ROAS to 4.2x in 60 days.',
    authorName: 'Priya Mehta',
    authorRole: 'Co-Founder & CMO',
    company: 'Aura Organic D2C',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'The team at Vigyapana understands performance marketing better than any agency we’ve worked with in India. Their data transparency and weekly reporting keep us aligned.',
    authorName: 'Vikramaditya Roy',
    authorRole: 'VP Marketing',
    company: 'Apex HealthTech',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
];

export const Carousel: FC<CarouselProps> = ({
  items = defaultTestimonials,
  title = 'What Our Clients Say',
  badge = 'Testimonials',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const current = items[currentIndex];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <Container size="sm">
        <SectionHeading badge={badge} title={title} align="center" />

        <div className="relative mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border border-border/80 bg-card p-8 sm:p-12 shadow-xl relative"
            >
              <Quote className="h-12 w-12 text-primary/20 absolute top-6 right-8 pointer-events-none" />

              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400 mb-6">
                {Array.from({ length: current?.rating ?? 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>

              {/* Quote text */}
              <p className="font-display text-lg sm:text-xl md:text-2xl font-medium text-foreground leading-relaxed italic">
                {`"${current?.quote ?? ''}"`}
              </p>

              {/* Author Footer */}
              <div className="mt-8 flex items-center gap-4 pt-6 border-t border-border/60">
                {current?.image && (
                  <img
                    src={current.image}
                    alt={current.authorName}
                    className="h-12 w-12 rounded-full object-cover border-2 border-primary"
                  />
                )}
                <div>
                  <div className="font-display text-base font-bold text-foreground">
                    {current?.authorName}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {current?.authorRole} · <span className="text-primary font-semibold">{current?.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-8 bg-primary' : 'w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="h-10 w-10 rounded-xl border border-border bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="h-10 w-10 rounded-xl border border-border bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
