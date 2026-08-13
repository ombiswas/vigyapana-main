import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { PortfolioCard } from '@/components/cards/PortfolioCard';
import { CTA } from '@/components/sections/CTA';
import { portfolioData } from '@/data/portfolioData';
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  HeartHandshake,
  Lightbulb,
  Linkedin,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Twitter,
} from 'lucide-react';
import { Link } from 'react-router';
import { cn } from '@/lib/utils';

// Realistic Company Milestones Data
const companyMilestones = [
  {
    year: '2020',
    title: 'Founded in Noida, NCR',
    description: 'Started as a boutique performance marketing agency focused on digital ads for D2C brands and local businesses.',
  },
  {
    year: '2021',
    title: 'Google Ad Grants Initiative for NGOs',
    description: 'Launched our dedicated Non-Profit arm, unlocking over $500,000 in free Google Search Ads for registered 80G Indian trusts.',
  },
  {
    year: '2022',
    title: 'Crossed ₹20 Crores in NGO Fundraising',
    description: 'Engineered Meta & UPI donor funnels that helped child welfare and healthcare NGOs scale monthly recurring donations.',
  },
  {
    year: '2023',
    title: 'Expanded Tech & CRO Division',
    description: 'Built custom Next.js landing pages and automated WhatsApp donor retention workflows, achieving 3.8x average client ROAS.',
  },
  {
    year: '2024 - Present',
    title: 'India’s Premier Purpose-Driven Agency',
    description: 'Over ₹50 Crores in donations raised, 150+ active campaigns, and a team of 35+ growth strategists, media buyers, and developers.',
  },
];

// Realistic Core Values
const coreValues = [
  {
    icon: Target,
    title: 'Purpose-Driven Impact',
    description: 'We believe digital marketing should do more than generate clicks — it should fund lifesaving NGO programs and build sustainable businesses.',
  },
  {
    icon: ShieldCheck,
    title: 'Uncompromising Transparency',
    description: 'No hidden fees or vanity reports. You get live dashboard access to exact Cost Per Donation (CPD), Cost Per Lead (CPL), and ROAS.',
  },
  {
    icon: Rocket,
    title: 'Relentless Optimization',
    description: 'We test ad copy, creatives, and landing page elements continuously to ensure every rupee of ad spend yields maximum return.',
  },
  {
    icon: Lightbulb,
    title: 'First-Principles Innovation',
    description: 'We stay ahead of ad algorithm shifts, iOS privacy updates, and tracking changes to keep your campaigns performing consistently.',
  },
];

// Realistic Team Data
const teamMembers = [
  {
    name: 'Om Biswas',
    role: 'Founder & Managing Director',
    bio: 'Pioneered Vigyapana’s dual-impact growth model. 8+ years experience in performance marketing and NGO digital transformation.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  {
    name: 'Ananya Deshmukh',
    role: 'Head of NGO Growth & Ad Grants',
    bio: 'Google Certified Ad Grants specialist who has unlocked over $1.2M in free search ad credits for Indian non-profits.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Rohan Verma',
    role: 'Lead Performance Marketer',
    bio: 'Managed ₹15Cr+ in Meta & Google ad spend across e-commerce, healthcare, and real estate verticals with 3.5x+ average ROAS.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  {
    name: 'Kavita Sundaram',
    role: 'Head of Creative & Video Ads',
    bio: 'Award-winning visual designer specializing in direct-response video ad edits and high-converting donor landing page UI.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
  },
];

// Realistic Office Gallery
const officeImages = [
  {
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    caption: 'Collaborative Growth Hub - Noida HQ',
  },
  {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    caption: 'Strategy & Campaign Brainstorming Sessions',
  },
  {
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    caption: 'Creative Studio & Video Editing Bay',
  },
  {
    url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
    caption: 'Quarterly Team Celebrations & Client Spotlights',
  },
];

export default function AboutPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const portfolioList = Object.values(portfolioData);
  const categories = ['All', 'NGO Fundraising', 'Performance Marketing', 'Web Development', 'Branding'];

  const filteredProjects = portfolioList.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.industry.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>About Us & Portfolio | Vigyapana Services Pvt. Ltd.</title>
        <meta
          name="description"
          content="Learn about Vigyapana Services - India's premier purpose-driven digital growth agency. Explore our story, leadership, and complete portfolio of proven campaigns raising ₹50Cr+ for NGOs and delivering 3.8x+ ROAS."
        />
      </Helmet>

      {/* ── 1. Hero Section ────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-background overflow-hidden">
        {/* Soft greenish radial background glow from center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,hsl(161_93%_40%/0.12)_0%,hsl(161_93%_40%/0.03)_45%,transparent_70%)] pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              Our Story, Purpose & Track Record
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
              We Exist to Scale <span className="text-primary">Social Impact</span> & Accelerate{' '}
              <span className="text-foreground">Commercial Growth</span>.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-sans">
              Vigyapana Services Pvt. Ltd. is a premier digital growth agency headquartered in NCR, India. We unite ad performance engineering, Google Ad Grants management, and conversion web development to drive real ROI.
            </p>

            {/* Quick Stat Pill Bar */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-foreground">
              <div className="flex items-center gap-2 bg-card border border-border/80 px-4 py-2 rounded-2xl shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span><strong>₹50 Cr+</strong> Raised for NGOs</span>
              </div>
              <div className="flex items-center gap-2 bg-card border border-border/80 px-4 py-2 rounded-2xl shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span><strong>3.8x+ Avg ROAS</strong> Paid Ad Campaigns</span>
              </div>
              <div className="flex items-center gap-2 bg-card border border-border/80 px-4 py-2 rounded-2xl shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span><strong>$10,000/mo</strong> Ad Grants Allocation</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="default" size="lg" className="shadow-md">
                  Work With Us <Rocket className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <a href="#portfolio">
                <Button variant="outline" size="lg" className="border-border/80 hover:border-primary/40 hover:text-primary">
                  Explore Case Studies <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Company Story, Mission & Vision ─────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-card border-y border-border/70 relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Founded on Purpose
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                How Vigyapana Became India’s Trusted Growth Partner
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Founded in 2020, Vigyapana Services set out with a clear hypothesis: traditional digital agencies focused either purely on commercial brands or lacked the performance ad expertise required for effective non-profit fundraising.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                We built a dual-specialization agency model. On one side, we help Indian 80G non-profits secure $10,000/mo in free Google Search Ads and scale donor acquisitions. On the other side, we engineer performance ad campaigns for D2C brands, healthcare, and tech enterprises.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-background border border-border/80 shadow-[0_6px_40px_-12px_rgba(0,0,0,0.1),0_2px_8px_-2px_rgba(0,0,0,0.04)]">
                  <div className="font-display text-2xl font-bold text-primary">₹50 Cr+</div>
                  <div className="text-xs text-muted-foreground mt-1">Donations Raised for Indian NGOs</div>
                </div>
                <div className="p-5 rounded-2xl bg-background border border-border/80 shadow-[0_6px_40px_-12px_rgba(0,0,0,0.1),0_2px_8px_-2px_rgba(0,0,0,0.04)]">
                  <div className="font-display text-2xl font-bold text-foreground">3.8x Avg</div>
                  <div className="text-xs text-muted-foreground mt-1">ROAS for E-commerce & B2B</div>
                </div>
              </div>
            </div>

            {/* Right Mission & Vision Cards */}
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-3xl border border-primary/30 bg-primary/5 p-8 relative overflow-hidden shadow-[0_6px_40px_-12px_rgba(0,0,0,0.1),0_2px_8px_-2px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white font-bold">
                    <HeartHandshake className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To empower every NGO in India with high-performing digital donation funnels and unlock maximum Google Ad Grant funding, while enabling businesses to scale profitably through transparent ad engineering.
                </p>
              </div>

              <div className="rounded-3xl border border-border/90 bg-background p-8 relative overflow-hidden shadow-[0_6px_40px_-12px_rgba(0,0,0,0.1),0_2px_8px_-2px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To become South Asia’s benchmark digital growth agency — recognized globally for proving that performance marketing can drive both massive social impact and high-margin commercial revenue.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3. Merged Full Interactive Portfolio & Case Studies Showcase ───────── */}
      <section id="portfolio" className="py-24 lg:py-32 bg-background relative overflow-hidden scroll-mt-20">
        {/* Subtle green gradient starting from center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[750px] bg-[radial-gradient(ellipse_at_center,hsl(161_93%_40%/0.09)_0%,hsl(161_93%_40%/0.02)_45%,transparent_70%)] pointer-events-none" />
        <Container className="relative z-10">
          <SectionHeading
            badge="Proven Track Record"
            title="Signature Portfolio & Case Studies"
            description="Browse our real client campaigns delivering measurable ROI across NGO fundraising, performance marketing, web architecture, and branding."
            align="center"
          />

          {/* Filter Bar */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-border/70">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    'px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all',
                    selectedCategory === cat
                      ? 'bg-primary text-white shadow-sm font-bold'
                      : 'bg-card text-muted-foreground border border-border/80 hover:border-primary/40 hover:text-foreground'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Live Search */}
            <div className="relative w-full md:w-72">
              <Search className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by client or industry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl bg-card border border-border/90 pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
              />
            </div>
          </div>

          {/* Portfolio Grid */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <p className="text-muted-foreground text-base">No projects match your current search or category filter.</p>
              <Button variant="outline" onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}>
                Reset Search Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {filteredProjects.map((project) => (
                <PortfolioCard
                  key={project.slug}
                  title={project.title}
                  slug={project.slug}
                  clientName={project.clientName}
                  coverImage={project.coverImage}
                  industry={project.industry}
                  results={project.results}
                  tagline={project.tagline}
                />
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* ── 4. Core Operating Principles ────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-card border-y border-border/70 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-[radial-gradient(ellipse_at_center,hsl(161_93%_40%/0.08)_0%,transparent_70%)] pointer-events-none" />
        <Container className="relative z-10">
          <SectionHeading
            badge="What Guides Us"
            title="Our Core Operating Principles"
            description="The principles shaping every campaign we launch, every line of copy we write, and how we measure success."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-border/80 p-8 shadow-[0_6px_40px_-12px_rgba(0,0,0,0.1),0_2px_8px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_-8px_rgba(0,0,0,0.12)] hover:border-primary/30 transition-all duration-300 flex items-start gap-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">{val.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── 5. Company Growth Timeline (Light Mode) ────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <Container size="sm">
          <SectionHeading
            badge="Our Growth Journey"
            title="Milestones That Defined Us"
            description="From a NCR performance marketing startup to India's premier dual-impact agency."
            align="center"
          />

          <div className="mt-14 space-y-10 relative">
            {/* Vertical primary green accent line */}
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-primary/30" />

            {companyMilestones.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative pl-14"
              >
                <div className="absolute left-4 top-1.5 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background bg-primary shadow-sm" />
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  {m.year}
                </span>
                <h3 className="font-display text-xl font-bold text-foreground mt-0.5">
                  {m.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                  {m.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 6. Team Leadership Preview ─────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-card border-t border-border/70 relative ">
        <Container>
          <SectionHeading
            badge="Meet The Minds"
            title="Leadership & Growth Strategists"
            description="The multidisciplinary team of media buyers, copywriters, developers, and NGO specialists behind our client success."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="group rounded-3xl border border-border/80 bg-background overflow-hidden shadow-[0_6px_40px_-12px_rgba(0,0,0,0.1),0_2px_8px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex gap-2">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="h-9 w-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noreferrer"
                          className="h-9 w-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors"
                        >
                          <Twitter className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider block mt-0.5">
                    {member.role}
                  </span>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 7. Office Gallery & Culture ────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-background relative">
        <Container>
          <SectionHeading
            badge="Agency Culture"
            title="Where Strategy Meets Creativity"
            description="A glimpse inside our Noida headquarters and team environment built for performance."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {officeImages.map((img, idx) => (
              <div
                key={idx}
                className="group relative h-64 rounded-3xl overflow-hidden border border-border/80 bg-card shadow-[0_6px_40px_-12px_rgba(0,0,0,0.1),0_2px_8px_-2px_rgba(0,0,0,0.04)]"
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-semibold text-white">{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 8. Final Call to Action ───────────────────────────────────────────── */}
      <CTA
        title="Ready to Partner with India’s Premier Digital Growth Agency?"
        subtitle="Schedule a free strategy call to discuss your NGO fundraising goals or business performance ad targets."
      />
    </>
  );
}
