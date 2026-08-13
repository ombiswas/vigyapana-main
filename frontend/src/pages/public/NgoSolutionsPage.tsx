import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTA } from '@/components/sections/CTA';
import { Button } from '@/components/ui/Button';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from 'lucide-react';

export default function NgoSolutionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const stats = [
    { label: 'Raised for NGOs', value: '₹1.5+ Cr', detail: 'Direct online collections' },
    { label: 'Free Search Ads / Mo', value: '$10,000', detail: 'Google Ad Grants management' },
    { label: 'Average ROAS', value: '3.18X - 4.5X', detail: 'Return on ad spend' },
    { label: 'Active Partners', value: '25+', detail: 'Trusts & foundations' },
  ];

  const ngoSolutionsList = [
    {
      id: 'fundraising',
      title: 'Digital Fundraising Strategy',
      badge: 'Core Ecosystem',
      icon: HeartHandshake,
      description:
        'Custom-engineered, mobile-first donation pages with instant Razorpay/Stripe integration, urgency-driven festival appeals, and 80G tax exemption trust badges.',
      highlights: [
        'Mobile-optimized Razorpay donation funnels',
        '80G Tax Exemption & Instant Tax Receipt Generation',
        'Urgency-driven festival & medical emergency appeals',
        'Transparent donor trust & impact video storytelling',
      ],
      impactMetric: '₹44.85 Lakhs Gross Raised for Nageshwar Bimla Foundation',
    },
    {
      id: 'ad-grants',
      title: 'Google Ad Grants Management',
      badge: '$10,000/mo Free Ads',
      icon: Sparkles,
      description:
        'We help registered 80G / 501(c)(3) non-profits acquire and manage $10,000/month (over ₹8 Lakhs/mo) in free Google Search advertising to drive continuous donor traffic.',
      highlights: [
        'End-to-end Google Ad Grants application & approval',
        'High-intent keyword strategy targeting active donors',
        'Strict policy compliance & 5%+ CTR maintenance',
        'Custom Google Analytics 4 conversion event tracking',
      ],
      impactMetric: 'Zero Ad Spend Cost for 120,000+ Annual Website Impressions',
    },
    {
      id: 'meta-ads',
      title: 'Meta Donation Ads & Scaling',
      badge: 'High ROAS',
      icon: TrendingUp,
      description:
        'High-ROAS Facebook & Instagram campaigns engineered for donor acquisition, dynamic budget allocation (CBO), lookalike audience modeling, and retargeting.',
      highlights: [
        'Emotional video storytelling ad creatives',
        'Custom 1%-3% Lookalike audiences built from donor lists',
        'Dynamic retargeting for abandoned donation carts',
        'Real-time daily ROAS tracking & campaign scaling',
      ],
      impactMetric: '3.18X Net Return across 120+ Meta Ad Sets',
    },
    {
      id: 'donor-journey',
      title: 'Donor Journey & Retention Automation',
      badge: 'Recurring Donations',
      icon: Zap,
      description:
        'Turn one-time donors into long-term monthly supporters through automated WhatsApp & Email nurturing sequences, impact updates, and tax receipt dispatches.',
      highlights: [
        'Instant automated WhatsApp thank-you & receipt messages',
        'Monthly photo/video impact reporting broadcasts',
        'Recurring subscription payment retention funnels',
        'Automated annual 80G summary tax certificates',
      ],
      impactMetric: '45% Increase in Recurring Monthly Donors for Sahadeva Foundation',
    },
  ];

  const caseStudies = [
    {
      title: 'Nageshwar Bimla Foundation',
      category: 'Healthcare & Cancer Patient Relief',
      raised: '₹44,85,345',
      roas: '3.18X',
      adSpend: '₹14,08,047',
      summary:
        'Established a sustainable online fundraising funnel for daily meals, medical aid, and education support with direct Razorpay online collection.',
    },
    {
      title: 'Sahadeva Foundation',
      category: 'Child Welfare & Education',
      raised: '₹28,50,000+',
      roas: '4.10X',
      adSpend: '₹6,90,000',
      summary:
        'Scaled daily donor support for 200+ coal miners children while increasing monthly recurring subscriptions by 45%.',
    },
    {
      title: 'Roti Charity Trust',
      category: 'Nationwide Hunger Relief',
      raised: '₹35,20,000+',
      roas: '3.85X',
      adSpend: '₹9,14,000',
      summary:
        'Deployed viral visual creative design and automated WhatsApp funnels, scaling daily donation intake by 320% within 90 days.',
    },
  ];

  const faqs = [
    {
      q: 'How does the $10,000/month Google Ad Grant work for NGOs?',
      a: 'Google provides eligible registered non-profits (with 80G / 12A / DARPAN registration) with up to $10,000 per month in in-kind Google Search advertising credit. Vigyapana handles the entire process—from initial application and website compliance to ongoing keyword optimization and policy maintenance.',
    },
    {
      q: 'What return on ad spend (ROAS) can our NGO expect from online fundraising?',
      a: 'Across our active NGO partners, we consistently achieve a net ROAS between 3.18X and 4.5X. This means for every ₹1 spent on Meta/Google campaigns, our funnels generate ₹3.18 to ₹4.50 in gross online donations.',
    },
    {
      q: 'How do you handle 80G tax exemption certificates and donor receipts?',
      a: 'We integrate custom Razorpay/Stripe donation checkout forms that capture the donor’s PAN number and contact details. Our automated backend dispatches an instant WhatsApp and Email 80G tax receipt within seconds of a successful transaction.',
    },
    {
      q: 'What is the pricing model for Vigyapana’s NGO services?',
      a: 'We offer structured fixed management packages as well as hybrid ROAS-linked growth models designed specifically for non-profit budget constraints. Schedule a free consultation to review tailored package options.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>NGO Digital Fundraising & Growth Solutions | Vigyapana</title>
        <meta
          name="description"
          content="Scale your non-profit's online donations with Vigyapana's expert Google Ad Grants management, Meta donation ads, mobile funnels, and donor retention automation."
        />
      </Helmet>

      {/* ── 1. Hero Section ────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-background overflow-hidden">
        {/* Soft green radial background glow from center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,hsl(161_93%_40%/0.12)_0%,hsl(161_93%_40%/0.03)_45%,transparent_70%)] pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider">
              <HeartHandshake className="h-4 w-4" />
              Specialized Non-Profit & NGO Growth Engine
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
              Empowering NGOs to <span className="text-primary">Raise More Funds</span> & Scale Social Impact.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-sans">
              We build high-converting donation funnels, secure $10,000/month in free Google Ad Grants, execute high-ROAS Meta ads, and automate donor retention workflows.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact?type=ngo-audit">
                <Button variant="default" size="lg" className="shadow-md font-semibold">
                  <ShieldCheck className="h-4.5 w-4.5 mr-2" /> Request Free NGO Audit
                </Button>
              </Link>
              <Link to="/contact?type=book-consultation">
                <Button variant="outline" size="lg" className="border-border/80 hover:border-primary/40 hover:text-primary">
                  Book Strategy Call <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl border border-border/80 bg-card shadow-[0_6px_40px_-12px_rgba(0,0,0,0.1),0_2px_8px_-2px_rgba(0,0,0,0.04)]">
            {stats.map((item) => (
              <div key={item.label} className="text-center p-4">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground font-display tabular-nums">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-primary mt-1">{item.label}</div>
                <div className="text-[11px] text-muted-foreground font-semibold mt-0.5">{item.detail}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 2. Core NGO Solutions Grid (Light Mode) ────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-card border-t border-border/70 relative overflow-hidden">
        <Container>
          <SectionHeading
            badge="Tailored Capabilities"
            title="End-to-End NGO Digital Growth Verticals"
            description="Explore our specialized services designed specifically for trusts, foundations, and registered non-profits."
            align="center"
          />

          <div className="mt-16 space-y-12">
            {ngoSolutionsList.map((sol) => {
              const IconComp = sol.icon;
              return (
                <div
                  key={sol.id}
                  id={sol.id}
                  className="scroll-mt-32 p-8 md:p-12 rounded-2xl border border-border/80 bg-background shadow-[0_6px_40px_-12px_rgba(0,0,0,0.1),0_2px_8px_-2px_rgba(0,0,0,0.04)] hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                    <div className="space-y-4 max-w-2xl">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary">
                          <IconComp className="h-6 w-6" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                          {sol.badge}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                        {sol.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed text-base font-sans">
                        {sol.description}
                      </p>

                      <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {sol.highlights.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-sm text-foreground font-medium">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:w-80 shrink-0 p-6 rounded-xl border border-border/80 bg-card space-y-4 text-center shadow-sm">
                      <div className="text-[10px] uppercase font-bold tracking-[0.14em] text-muted-foreground">
                        Proven Verified Impact
                      </div>
                      <div className="text-sm font-bold text-primary leading-snug font-sans">
                        {sol.impactMetric}
                      </div>
                      <Link to="/contact?type=ngo-audit" className="block w-full">
                        <Button variant="default" size="sm" className="w-full justify-center shadow-sm">
                          Get Started for Your NGO
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

      {/* ── 3. Verified NGO Case Studies ──────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-background relative">
        <Container>
          <SectionHeading
            badge="Verified Impact"
            title="Real NGO Campaign Case Studies"
            description="Explore how our performance marketing funnels generate daily donations and scale non-profit impact."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <div
                key={cs.title}
                className="rounded-2xl border border-border/80 bg-card p-6 shadow-[0_6px_40px_-12px_rgba(0,0,0,0.1),0_2px_8px_-2px_rgba(0,0,0,0.04)] hover:border-primary/30 transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-[10px] font-bold text-primary uppercase tracking-[0.14em]">
                    {cs.category}
                  </div>
                  <h4 className="font-display text-xl font-bold text-foreground">{cs.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans">{cs.summary}</p>
                </div>

                <div className="pt-4 border-t border-border/60 grid grid-cols-2 gap-2 text-center bg-muted/40 p-3 rounded-xl">
                  <div>
                    <div className="text-[10px] text-muted-foreground font-semibold uppercase">Gross Raised</div>
                    <div className="text-base font-extrabold text-foreground">{cs.raised}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground font-semibold uppercase">Fundraising ROAS</div>
                    <div className="text-base font-extrabold text-primary">{cs.roas}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/case-studies">
              <Button variant="outline" size="lg" className="border-border/80 hover:border-primary/40 hover:text-primary">
                View All Performance Case Studies <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* ── 4. FAQs ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-card border-t border-border/80 relative">
        <Container>
          <SectionHeading
            badge="Frequently Asked Questions"
            title="Everything You Need to Know About NGO Growth"
            description="Clear guidance on Google Ad Grants approval, 80G tax receipt automation, and ROAS benchmarks."
            align="center"
          />

          <div className="mt-12 max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={faq.q}
                className="rounded-xl border border-border/80 bg-background overflow-hidden shadow-sm hover:border-primary/30 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left font-semibold text-foreground flex items-center justify-between gap-4 hover:bg-muted/40 transition-colors"
                >
                  <span className="font-display text-base">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="h-5 w-5 text-primary shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-sm text-muted-foreground border-t border-border/60 leading-relaxed font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 5. CTA ────────────────────────────────────────────────────────────── */}
      <CTA
        title="Ready to Scale Your Non-Profit's Online Donations?"
        subtitle="Schedule a free strategy call with our NGO growth team. We will audit your current campaigns and deliver an actionable 90-day donation roadmap."
      />
    </>
  );
}
