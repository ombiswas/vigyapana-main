import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PortfolioCard } from '@/components/cards/PortfolioCard';
import { CTA } from '@/components/sections/CTA';
import { Button } from '@/components/ui/Button';
import { portfolioData } from '@/data/portfolioData';
import { Briefcase, HeartHandshake, Search, Sparkles } from 'lucide-react';
import { Link } from 'react-router';

export default function PortfolioPage() {
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
        <title>Portfolio & Case Studies | Vigyapana Services</title>
        <meta
          name="description"
          content="Explore Vigyapana's proven client portfolio: ₹50Cr+ raised for NGOs, 3.8x+ ROAS for D2C & B2B brands, high-speed Next.js web development, and Google Ad Grants campaigns."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-background overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/20 via-accent/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              Proven Impact & ROI
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Real Campaigns. <span className="bg-gradient-to-r from-accent via-amber-500 to-orange-500 bg-clip-text text-transparent">Extraordinary Results</span>.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              From raising ₹1.4 Crores for child healthcare to delivering 4.2x ROAS for growing D2C brands. Browse our work across India.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact?type=ngo-audit">
                <Button variant="accent" size="lg" className="shadow-xl">
                  <HeartHandshake className="h-4 w-4 mr-2" /> Request Free NGO Audit
                </Button>
              </Link>
              <Link to="/contact?type=book-consultation">
                <Button variant="default" size="lg" className="shadow-xl">
                  <Briefcase className="h-4 w-4 mr-2" /> Book Growth Consultation
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Filter & Portfolio Grid Section */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <Container>
          <SectionHeading
            badge="Work Showcase"
            title="Featured Case Studies & Projects"
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
                placeholder="Search by client or industry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl bg-slate-900 border border-slate-800 pl-10 pr-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Portfolio Grid */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <p className="text-slate-400 text-lg">No projects match your current filter criteria.</p>
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

      {/* Final CTA Banner */}
      <CTA
        title="Ready to Achieve Similar Results for Your Cause or Business?"
        subtitle="Talk to our digital growth strategists today for a complimentary performance audit."
      />
    </>
  );
}
