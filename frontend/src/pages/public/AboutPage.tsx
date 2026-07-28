import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { CTA } from '@/components/sections/CTA';
import {
  HeartHandshake,
  Lightbulb,
  Linkedin,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Twitter,
} from 'lucide-react';
import { Link } from 'react-router';

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

// Realistic Team Preview Data
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

// Realistic Office & Culture Gallery
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
  return (
    <>
      <Helmet>
        <title>About Us | Vigyapana Services Pvt. Ltd.</title>
        <meta
          name="description"
          content="Learn about Vigyapana Services - India's leading digital growth agency empowering NGOs through Google Ad Grants & fundraising campaigns, and driving performance ads for growing brands."
        />
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-background overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/20 via-accent/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              Our Story & Purpose
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              We Exist to Scale <span className="bg-gradient-to-r from-accent via-amber-500 to-orange-500 bg-clip-text text-transparent">Social Impact</span> & Accelerate{' '}
              <span className="bg-gradient-to-r from-primary via-indigo-500 to-purple-500 bg-clip-text text-transparent">Commercial Revenue</span>.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Vigyapana Services Pvt. Ltd. is a full-service performance marketing agency headquartered in NCR, India. We combine data science, ad engineering, and creative storytelling to help non-profits and brands thrive.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="accent" size="lg" className="shadow-xl">
                  Work With Us <Rocket className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="lg">
                  View Our Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Company Story, Mission & Vision */}
      <section className="py-20 bg-card border-y border-border/60 relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                Founded on Purpose
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                How Vigyapana Became India’s Trusted Growth Partner
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Founded in 2020, Vigyapana Services set out with a clear hypothesis: traditional digital agencies focused either purely on commercial brands or lacked the performance ad expertise required for effective non-profit fundraising.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                We built a dual-specialization agency model. On one side, we help Indian 80G non-profits secure $10,000/mo in free Google Search Ads and scale donor acquisitions. On the other side, we engineer performance ad campaigns for D2C brands, healthcare, and tech enterprises.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-background border border-border/80">
                  <div className="font-display text-2xl font-bold text-primary">₹50 Cr+</div>
                  <div className="text-xs text-muted-foreground mt-1">Donations Raised for NGOs</div>
                </div>
                <div className="p-4 rounded-2xl bg-background border border-border/80">
                  <div className="font-display text-2xl font-bold text-accent">3.8x Avg</div>
                  <div className="text-xs text-muted-foreground mt-1">ROAS for Businesses</div>
                </div>
              </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-3xl border border-primary/30 bg-primary/5 p-8 relative overflow-hidden shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                    <HeartHandshake className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To empower every NGO in India with high-performing digital donation funnels and unlock maximum Google Ad Grant funding, while enabling businesses to scale profitably through transparent ad engineering.
                </p>
              </div>

              <div className="rounded-3xl border border-accent/30 bg-accent/5 p-8 relative overflow-hidden shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-slate-950 font-bold">
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

      {/* 3. Core Values Section */}
      <section className="py-20 bg-background relative">
        <Container>
          <SectionHeading
            badge="What Guides Us"
            title="Our Core Operating Principles"
            description="The values that shape every campaign we build, every line of ad copy we write, and how we interact with our clients."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-border/80 bg-card p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-5"
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

      {/* 4. Company Journey Timeline */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <Container size="sm">
          <SectionHeading
            badge="Our Growth Journey"
            title="Milestones That Defined Us"
            align="center"
            dark
          />

          <div className="mt-12 space-y-8 relative">
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

            {companyMilestones.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative pl-14"
              >
                <div className="absolute left-4 top-1 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-slate-950 bg-accent" />
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  {m.year}
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-0.5">
                  {m.title}
                </h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  {m.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Team Leadership Preview */}
      <section className="py-20 bg-background relative">
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
                className="group rounded-3xl border border-border/80 bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
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
                  <span className="text-xs font-medium text-accent uppercase tracking-wider block mt-0.5">
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

      {/* 6. Office Gallery & Culture */}
      <section className="py-20 bg-card border-t border-border/60 relative">
        <Container>
          <SectionHeading
            badge="Agency Culture"
            title="Where Strategy Meets Creativity"
            description="A glimpse inside our Noida headquarters and team environment built for innovation and performance."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {officeImages.map((img, idx) => (
              <div
                key={idx}
                className="group relative h-64 rounded-3xl overflow-hidden border border-border/80 bg-muted shadow-md"
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-semibold text-white/90">{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Final Call to Action */}
      <CTA
        title="Ready to Partner with India’s Premier Digital Growth Agency?"
        subtitle="Schedule a free strategy call to discuss your NGO fundraising goals or business performance ad targets."
      />
    </>
  );
}
