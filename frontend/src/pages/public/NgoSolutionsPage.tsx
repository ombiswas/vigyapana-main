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
  DollarSign,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-background overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-accent/20 via-amber-500/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent uppercase tracking-wider">
              <HeartHandshake className="h-4 w-4" />
              Specialized Non-Profit & NGO Growth Engine
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Empowering NGOs to <span className="bg-gradient-to-r from-accent via-amber-500 to-orange-500 bg-clip-text text-transparent">Raise More Funds</span> & Scale Social Impact.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We build high-converting donation funnels, secure $10,000/month in free Google Ad Grants, execute high-ROAS Meta ads, and automate donor retention workflows.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact?type=ngo-audit">
                <Button variant="accent" size="lg" className="shadow-xl font-semibold">
                  <ShieldCheck className="h-4.5 w-4.5 mr-2" /> Request Free NGO Audit
                </Button>
              </Link>
              <Link to="/contact?type=book-consultation">
                <Button variant="outline" size="lg" className="shadow-lg">
                  Book Strategy Call <ArrowRight className="h-4 w-4 ml-2" />
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
                <div className="text-xs sm:text-sm font-bold text-accent mt-1">{item.label}</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">{item.detail}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Core NGO Solutions Grid */}
      <section className="py-20 md:py-28 bg-slate-950 text-white relative">
        <Container>
          <SectionHeading
            badge="Tailored Capabilities"
            title="End-to-End NGO Digital Growth Verticals"
            description="Explore our specialized services designed specifically for trusts, foundations, and registered non-profits."
            align="center"
            dark
          />

          <div className="mt-16 space-y-16">
            {ngoSolutionsList.map((sol, idx) => {
              const IconComp = sol.icon;
              return (
                <div
                  key={sol.id}
                  id={sol.id}
                  className="scroll-mt-32 p-8 md:p-12 rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-accent/40"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                    <div className="space-y-4 max-w-2xl">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-2xl bg-accent/15 border border-accent/30 text-accent">
                          <IconComp className="h-6 w-6" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
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
                            <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:w-80 shrink-0 p-6 rounded-2xl border border-slate-800 bg-slate-950/80 space-y-4 text-center">
                      <div className="text-xs uppercase font-semibold tracking-wider text-slate-400">
                        Proven Verified Impact
                      </div>
                      <div className="text-sm font-bold text-accent leading-snug">
                        {sol.impactMetric}
                      </div>
                      <Link to="/contact?type=ngo-audit" className="block w-full">
                        <Button variant="accent" size="sm" className="w-full justify-center">
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

      {/* Verified NGO Case Studies */}
      <section className="py-20 md:py-28 bg-background relative">
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
                className="rounded-3xl border border-border/80 bg-card p-6 shadow-xl space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {cs.category}
                  </div>
                  <h4 className="font-display text-xl font-bold text-foreground">{cs.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cs.summary}</p>
                </div>

                <div className="pt-4 border-t border-border/60 grid grid-cols-2 gap-2 text-center bg-muted/30 p-3 rounded-2xl">
                  <div>
                    <div className="text-xs text-muted-foreground">Gross Raised</div>
                    <div className="text-base font-extrabold text-foreground">{cs.raised}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Fundraising ROAS</div>
                    <div className="text-base font-extrabold text-accent">{cs.roas}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/case-studies">
              <Button variant="outline" size="lg">
                View All Performance Case Studies <ArrowRight className="h-4 w-4 ml-2" />
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
            title="Everything You Need to Know About NGO Growth"
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
                    <ChevronUp className="h-5 w-5 text-accent shrink-0" />
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
        title="Ready to Scale Your Non-Profit's Online Donations?"
        subtitle="Schedule a free strategy call with our NGO growth team. We will audit your current campaigns and deliver an actionable 90-day donation roadmap."
      />
    </>
  );
}
