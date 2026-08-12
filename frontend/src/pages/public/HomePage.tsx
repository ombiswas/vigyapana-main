import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/sections/Hero';
import { Counter } from '@/components/sections/Counter';
import { AgencyIntro } from '@/components/sections/AgencyIntro';
import { Timeline } from '@/components/sections/Timeline';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Carousel } from '@/components/sections/Carousel';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { PortfolioCard } from '@/components/cards/PortfolioCard';
import { MarqueeTicker } from '@/components/effects/MarqueeTicker';
import { HorizontalPortfolio } from '@/components/sections/HorizontalPortfolio';

const marqueeTechStack = [
  'Google Ad Grants Certified',
  'Meta Conversions API (CAPI)',
  '80G Tax Compliance',
  'Next.js 15 Web Apps',
  'Razorpay & UPI Gateways',
  'Cloudinary CDN',
  '3.8x+ ROAS Paid Ads',
];
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ArrowRight, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router';

// Sample Realistic Featured Services Data
const featuredServices = [
  {
    title: 'Google Ad Grants Management',
    slug: 'google-ad-grants',
    category: 'NGO Solutions',
    description: 'We unlock, setup, and optimize $10,000/month (₹8.3+ Lakhs/mo) in 100% free Google Search Ads for eligible Indian 80G non-profits.',
    iconName: 'Award',
    features: ['$120,000/Yr Free Search Ad Spend', 'Full Application & Policy Compliance', 'High-Intent Keyword Targeting'],
    isFeatured: true,
  },
  {
    title: 'Meta & Instagram Donation Ads',
    slug: 'meta-donation-ads',
    category: 'NGO Solutions',
    description: 'High-converting Facebook & Instagram ad creative campaigns designed to drive single and monthly recurring donor acquisitions.',
    iconName: 'HeartHandshake',
    features: ['High-ROAS Donor Retargeting', 'Video & Graphic Ad Production', 'WhatsApp & UPI Donor Funnels'],
    isFeatured: true,
  },
  {
    title: 'Performance Marketing (Paid Ads)',
    slug: 'performance-marketing',
    category: 'Business Growth',
    description: 'Full-funnel Meta & Google Search/Shopping ads engineered to deliver 3.8x+ ROAS and lower your customer acquisition cost.',
    iconName: 'TrendingUp',
    features: ['Meta & Google Search/Shopping Ads', 'Dynamic Retargeting & Pixel Setup', 'Conversion Rate Optimization (CRO)'],
    isFeatured: true,
    startingPrice: 35000,
  },
  {
    title: 'Conversion Web & App Development',
    slug: 'web-development',
    category: 'Business Growth',
    description: 'High-speed, SEO-optimized custom web applications and landing pages built using Next.js, React, and Tailwind CSS.',
    iconName: 'Code',
    features: ['Sub-Second Page Load Speed', 'Integrated Payment Gateways (Razorpay/UPI)', 'Mobile-First Responsive Layouts'],
    startingPrice: 45000,
  },
  {
    title: 'Search Engine Optimization (SEO)',
    slug: 'seo-optimization',
    category: 'Business Growth',
    description: 'Rank #1 on Google organically for high-intent business keywords through technical SEO, authority building, and content strategy.',
    iconName: 'Search',
    features: ['Technical & On-Page Audit', 'High-Authority Backlink Building', 'Local & National Keyword Strategy'],
    startingPrice: 25000,
  },
  {
    title: 'Social Media & Brand Identity',
    slug: 'branding-social-media',
    category: 'Business Growth',
    description: 'Complete brand positioning, logo design, graphic templates, and viral short-form video content creation for social media.',
    iconName: 'Palette',
    features: ['Brand Style Guide & Logos', 'Reels & Short Video Editing', 'Monthly Social Content Calendar'],
    startingPrice: 30000,
  },
];

// Sample Realistic Featured Portfolio Data
const featuredPortfolios = [
  {
    title: '₹1.4 Cr Raised for Child Healthcare Campaign',
    slug: 'hope-for-children-fundraising',
    clientName: 'Hope For Children NGO',
    tagline: 'Leveraged Google Ad Grants and Meta Donation Ads to drive 12,000+ individual donors.',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
      alt: 'NGO Child Healthcare Campaign',
    },
    industry: 'Healthcare NGO',
    results: [
      { metric: 'Donations Raised', value: '₹1.4 Crores' },
      { metric: 'Return on Ad Spend', value: '5.2x' },
    ],
  },
  {
    title: '4.2x ROAS Scaling for D2C Organic Brand',
    slug: 'aura-organic-performance-ads',
    clientName: 'Aura Organic India',
    tagline: 'Restructured Meta ad account and deployed UGC video ads, scaling monthly revenue by 240%.',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
      alt: 'D2C E-commerce Scaling',
    },
    industry: 'E-commerce D2C',
    results: [
      { metric: 'Campaign ROAS', value: '4.2x' },
      { metric: 'Monthly Revenue', value: '+240%' },
    ],
  },
  {
    title: '$120K Annual Ad Grant Utilization for Education Trust',
    slug: 'edureach-google-ad-grants',
    clientName: 'EduReach Foundation',
    tagline: 'Achieved 95%+ Google Ad Grant budget utilization and generated 45,000+ organic site visits.',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
      alt: 'Education Trust Ad Grants',
    },
    industry: 'Education NGO',
    results: [
      { metric: 'Free Search Clicks', value: '45,000+' },
      { metric: 'Grant Utilization', value: '98%' },
    ],
  },
];

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Vigyapana Services | NGO Fundraising & Business Growth Partner</title>
        <meta
          name="description"
          content="Vigyapana Services Pvt. Ltd. is India's leading digital agency empowering NGOs to raise funds via Google Ad Grants & Meta Ads, while driving 3.8x+ ROAS for businesses."
        />
        <meta
          name="keywords"
          content="NGO Fundraising India, Google Ad Grants Management, Meta Ads Agency, Performance Marketing India, Website Development, SEO Agency"
        />
      </Helmet>

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Animated Statistics Strip */}
      <Counter />

      {/* Infinite Marquee Ticker */}
      <div className="py-6 section-alt border-y section-alt-border">
        <MarqueeTicker items={marqueeTechStack} speed={30} />
      </div>

      {/* 3. Agency Introduction (Dual Audience Switcher) */}
      <AgencyIntro />

      {/* 4. Featured Services Grid */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        {/* Greenish gradient background starting from center and spreading outside */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[750px] bg-[radial-gradient(ellipse_at_center,hsl(161_93%_40%/0.14)_0%,hsl(161_93%_40%/0.04)_45%,transparent_70%)] pointer-events-none" />
        <Container className="relative z-10">
          <SectionHeading
            badge="Our Capabilities"
            title="End-to-End Digital Solutions Tailored for"
            highlightedTitle="Impact & Revenue"
            description="Explore our specialized service packages designed specifically for non-profit fundraising and commercial scaling."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {featuredServices.map((service, idx) => (
              <ServiceCard key={service.slug} {...service} index={idx} />
            ))}
          </div>

          <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/services">
              <Button variant="default" size="lg">
                View All Services <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Link to="/ngo-solutions">
              <Button variant="outline" size="lg">
                <HeartHandshake className="h-4 w-4 mr-2" /> NGO Specific Packages
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* 5. Featured Portfolio & Case Studies */}
      <section className="py-20 lg:py-28 section-alt relative overflow-hidden">
        <Container>
          <SectionHeading
            badge="Proven Case Studies"
            title="Real Campaigns."
            highlightedTitle="Extraordinary Results."
            description="Take a look at how we helped non-profits raise crores in donations and enabled brands to outperform their competition."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {featuredPortfolios.map((portfolio) => (
              <PortfolioCard key={portfolio.slug} {...portfolio} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/portfolio">
              <Button variant="accent" size="lg">
                Explore Complete Portfolio <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* 5.5 Pinned Horizontal Portfolio Showcase */}
      <HorizontalPortfolio />

      {/* 6. Working Process Timeline */}
      <Timeline />

      {/* 7. Why Choose Us */}
      <WhyChooseUs />

      {/* 8. Testimonials Carousel */}
      <Carousel />

      {/* 9. FAQ Section */}
      <FAQ />

      {/* 10. Final Call to Action */}
      <CTA />
    </>
  );
}
