import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CaseStudyCard } from '@/components/cards/CaseStudyCard';
import { CTA } from '@/components/sections/CTA';
import { Button } from '@/components/ui/Button';
import { caseStudiesData } from '@/data/caseStudiesData';
import { Briefcase, HeartHandshake, Search, Sparkles } from 'lucide-react';
import { Link } from 'react-router';

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const caseStudiesList = Object.values(caseStudiesData);

  const categories = ['All', 'NGO Fundraising', 'E-commerce Scaling'];

  const filteredCaseStudies = caseStudiesList.filter((cs) => {
    const matchesCategory = selectedCategory === 'All' || cs.category === selectedCategory;
    const matchesSearch =
      cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.industry.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Deep Dive Case Studies | Vigyapana Services</title>
        <meta
          name="description"
          content="In-depth case studies detailing how Vigyapana helped NGOs raise crores in donations and enabled brands to scale revenue by 240%+."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-background overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/20 via-accent/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              In-Depth Growth Breakdown
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Detailed Case Studies & <span className="bg-gradient-to-r from-accent via-amber-500 to-orange-500 bg-clip-text text-transparent">Proven Playbooks</span>.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Explore step-by-step breakdowns of how we solve complex donor acquisition, performance ad tracking, and web conversion challenges.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact?type=ngo-audit">
                <Button variant="accent" size="lg" className="shadow-xl">
                  <HeartHandshake className="h-4 w-4 mr-2" /> Request Free NGO Audit
                </Button>
              </Link>
              <Link to="/contact?type=book-consultation">
                <Button variant="default" size="lg" className="shadow-xl">
                  <Briefcase className="h-4 w-4 mr-2" /> Book Growth Call
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Filter & Case Study Grid */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <Container>
          <SectionHeading
            badge="Success Playbooks"
            title="Choose a Case Study to Explore"
            align="center"
            dark
          />

          {/* Filter Bar */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-slate-800">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                    selectedCategory === cat
                      ? 'bg-accent text-slate-950 shadow-md font-bold'
                      : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Live Search */}
            <div className="relative w-full md:w-72">
              <Search className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl bg-slate-900 border border-slate-800 pl-10 pr-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Case Studies Grid */}
          {filteredCaseStudies.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <p className="text-slate-400 text-lg">No case studies match your current filter.</p>
              <Button variant="outline" onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}>
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="space-y-10 mt-12">
              {filteredCaseStudies.map((cs) => (
                <CaseStudyCard
                  key={cs.slug}
                  title={cs.title}
                  slug={cs.slug}
                  clientName={cs.clientName}
                  industry={cs.industry}
                  summary={cs.heroSummary}
                  coverImage={{ url: cs.gallery[0]?.url ?? '', alt: cs.title }}
                  results={cs.metrics.map((m) => ({ metric: m.label, value: m.value }))}
                />
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Final CTA Banner */}
      <CTA
        title="Ready to Build Your Own Success Case Study?"
        subtitle="Schedule a free strategy session with our digital growth strategists today."
      />
    </>
  );
}
