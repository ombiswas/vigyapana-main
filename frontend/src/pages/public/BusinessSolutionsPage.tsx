import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTA } from '@/components/sections/CTA';
import { Button } from '@/components/ui/Button';
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Laptop,
  Palette,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

export default function BusinessSolutionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const stats = [
    { label: 'Client Revenue Generated', value: '₹3.8+ Cr', detail: 'Corporate & D2C Brands' },
    { label: 'Avg Blended ROAS', value: '4.25X', detail: 'Meta & Google Ads' },
    { label: 'CAC Reduction', value: '-38%', detail: 'Customer Acquisition Cost' },
    { label: 'High-Intent Leads', value: '1,450+', detail: 'Verified B2B & Realty' },
  ];

  const businessSolutionsList = [
    {
      id: 'performance',
      title: 'Performance Marketing & Paid Ads',
      badge: 'High ROAS',
      icon: BarChart3,
      description:
        'Meta Advantage+ Shopping, Google Search PPC, and YouTube Video ads targeted for maximum sales conversions and high-value lead acquisition.',
      highlights: [
        'High-converting UGC (User Generated Content) video ad production',
        'Shopify landing page conversion rate optimization (CRO)',
        'Advantage+ catalog retargeting campaigns',
        'CRM lead sync & automated call booking funnels',
      ],
      impactMetric: '₹1.82 Crore Sales Generated for D2C Brand in 6 Months',
    },
    {
      id: 'web-dev',
      title: 'Web & App Development',
      badge: 'Conversion CRO',
      icon: Laptop,
      description:
        'High-speed Next.js / React 19 web applications and Shopify e-commerce platforms built for sub-second load times and seamless checkout flows.',
      highlights: [
        'Modern React 19 + TypeScript + Vite architecture',
        'Lenis smooth scroll & GSAP cinematic motion graphics',
        'Headless CMS content management for easy updates',
        'Stripe & Razorpay payment gateway integration',
      ],
      impactMetric: '99+ PageSpeed Score & 65% Higher Checkout Conversion',
    },
    {
      id: 'social-media',
      title: 'Social Media & Brand Identity',
      badge: 'Brand Authority',
      icon: Palette,
      description:
        'Complete brand identity design, logo design, graphic design guidelines, and viral social media content strategies to dominate your industry.',
      highlights: [
        'Custom logo & brand typography style guides',
        'Commercial video editing & Instagram Reels production',
        'Full social media grid curation & post design',
        'Influencer campaign management & UGC sourcing',
      ],
      impactMetric: '10M+ Organic & Paid Ad Views across Client Networks',
    },
    {
      id: 'seo',
      title: 'SEO & Content Marketing',
      badge: 'Organic Search',
      icon: Search,
      description:
        'Rank #1 on Google organically for high-intent commercial search keywords without relying exclusively on paid ad spend.',
      highlights: [
        'Technical SEO audits & core web vitals optimization',
        'High-intent commercial keyword clustering',
        'Authoritative backlink building & digital PR',
        'SEO blog article creation & content funnels',
      ],
      impactMetric: '#1 Google Rankings for Competitive Industry Keywords',
    },
  ];

  const caseStudies = [
    {
      title: 'Artisanal Lifestyle & Apparel Brand',
      category: 'D2C E-Commerce (Meta & Google Ads)',
      metric1Label: 'Sales Generated',
      metric1Val: '₹1.82 Crore',
      metric2Label: 'Blended ROAS',
      metric2Val: '4.25X',
      summary:
        'Executed high-converting UGC video ads, Shopify CRO, and Advantage+ retargeting campaigns, scaling monthly revenue while cutting CAC by 38%.',
    },
    {
      title: 'Apex Infrastructure & Realty',
      category: 'High-Ticket Lead Generation',
      metric1Label: 'Property Value Closed',
      metric1Val: '₹14.5 Crore',
      metric2Label: 'Verified Leads',
      metric2Val: '1,450+',
      summary:
        'Hyper-targeted Meta lead forms with multi-step qualification filters and Google Search Ads targeting luxury buyers, reducing CPQL by 42%.',
    },
    {
      title: 'HealthPlus Diagnostic Chain',
      category: 'Local Search & WhatsApp Booking',
      metric1Label: 'Package Bookings',
      metric1Val: '3,200+',
      metric2Label: 'Campaign ROI',
      metric2Val: '4.5X',
      summary:
        'Geo-targeted Facebook location ads connected to a direct Click-to-WhatsApp home test booking funnel with 65% direct conversion rate.',
    },
  ];

  const faqs = [
    {
      q: 'How quickly can our business expect results from performance marketing?',
      a: 'Initial ad campaigns launch within 3 to 5 business days after strategy approval. You will begin seeing verified leads and traffic within 24–48 hours of ad launch, with campaign machine learning optimizing for peak ROAS over the first 14 days.',
    },
    {
      q: 'What industries does Vigyapana specialize in?',
      a: 'We specialize in D2C E-Commerce, Real Estate & Property Development, Healthcare & Diagnostics, B2B SaaS, Professional Services, and Startups seeking accelerated revenue growth.',
    },
    {
      q: 'Do you offer custom multi-channel growth packages?',
      a: 'Yes! We customize integrated packages combining Web Development, Meta/Google Ads, Social Media Branding, and SEO tailored to your specific monthly revenue goals.',
    },
    {
      q: 'How is campaign performance tracked and reported?',
      a: 'We provide real-time dashboard analytics tracking ad spend, impressions, cost-per-lead (CPL), CAC, ROAS, and net revenue. You also receive weekly performance summary reports and dedicated strategy calls.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Corporate Growth & Performance Marketing Solutions | Vigyapana</title>
        <meta
          name="description"
          content="Scale your corporate revenue with Vigyapana's performance marketing, Meta & Google Ads, high-speed Web Development, Branding, and SEO."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-background overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/20 via-indigo-500/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider">
              <Briefcase className="h-4 w-4" />
              Corporate & Commercial Growth Engine
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Performance Marketing & Digital Infrastructure to <span className="bg-gradient-to-r from-primary via-indigo-500 to-purple-500 bg-clip-text text-transparent">Scale Revenue Fast</span>.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We engineer high-ROAS Meta & Google ad campaigns, build high-speed web platforms, generate verified high-ticket leads, and elevate brand authority.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact?type=book-consultation">
                <Button variant="default" size="lg" className="shadow-xl font-semibold">
                  <Rocket className="h-4.5 w-4.5 mr-2" /> Book Free Strategy Call
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="lg" className="shadow-lg">
                  Explore Work <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xl shadow-2xl">
            {stats.map((item) => (
              <div key={item.label} className="text-center p-4">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground font-display">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-primary mt-1">{item.label}</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">{item.detail}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Core Business Solutions Grid */}
      <section className="py-20 md:py-28 bg-slate-950 text-white relative">
        <Container>
          <SectionHeading
            badge="Full-Stack Capabilities"
            title="Commercial Growth Verticals"
            description="Explore our specialized services tailored for D2C brands, B2B enterprises, real estate developers, and startups."
            align="center"
            dark
          />

          <div className="mt-16 space-y-16">
            {businessSolutionsList.map((sol) => {
              const IconComp = sol.icon;
              return (
                <div
                  key={sol.id}
                  id={sol.id}
                  className="scroll-mt-32 p-8 md:p-12 rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-primary/40"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                    <div className="space-y-4 max-w-2xl">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-2xl bg-primary/15 border border-primary/30 text-primary">
                          <IconComp className="h-6 w-6" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                          {sol.badge}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                        {sol.title}
                      </h3>

                      <p className="text-slate-300 leading-relaxed text-base">
                        {sol.description}
                      </p>

                      <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {sol.highlights.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-sm text-slate-200">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:w-80 shrink-0 p-6 rounded-2xl border border-slate-800 bg-slate-950/80 space-y-4 text-center">
                      <div className="text-xs uppercase font-semibold tracking-wider text-slate-400">
                        Proven Verified Impact
                      </div>
                      <div className="text-sm font-bold text-primary leading-snug">
                        {sol.impactMetric}
                      </div>
                      <Link to="/contact?type=book-consultation" className="block w-full">
                        <Button variant="default" size="sm" className="w-full justify-center">
                          Get Custom Proposal
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Commercial Case Studies */}
      <section className="py-20 md:py-28 bg-background relative">
        <Container>
          <SectionHeading
            badge="Proven Case Studies"
            title="Commercial Client Success Stories"
            description="Explore how our performance marketing funnels generate verified leads and scale revenue."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <div
                key={cs.title}
                className="rounded-3xl border border-border/80 bg-card p-6 shadow-xl space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {cs.category}
                  </div>
                  <h4 className="font-display text-xl font-bold text-foreground">{cs.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cs.summary}</p>
                </div>

                <div className="pt-4 border-t border-border/60 grid grid-cols-2 gap-2 text-center bg-muted/30 p-3 rounded-2xl">
                  <div>
                    <div className="text-xs text-muted-foreground">{cs.metric1Label}</div>
                    <div className="text-base font-extrabold text-foreground">{cs.metric1Val}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{cs.metric2Label}</div>
                    <div className="text-base font-extrabold text-primary">{cs.metric2Val}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/case-studies">
              <Button variant="outline" size="lg">
                View All Case Studies <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-950 text-white border-t border-slate-800">
        <Container>
          <SectionHeading
            badge="Frequently Asked Questions"
            title="Everything You Need to Know About Business Scaling"
            align="center"
            dark
          />

          <div className="mt-12 max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left font-semibold text-white flex items-center justify-between gap-4 hover:bg-slate-800/50 transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="h-5 w-5 text-primary shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-300 border-t border-slate-800/60 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to Accelerate Your Commercial Revenue?"
        subtitle="Schedule a free strategy consultation with our growth team. We will analyze your acquisition funnel and deliver a 90-day scaling roadmap."
      />
    </>
  );
}
