import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { CTA } from '@/components/sections/CTA';
import { Button } from '@/components/ui/Button';
import { servicesData } from '@/data/servicesData';
import { Briefcase, HeartHandshake, Search, Sparkles } from 'lucide-react';
import { Link } from 'react-router';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const servicesList = Object.values(servicesData);

  const categories = ['All', 'Performance & Ads', 'Branding & Design', 'Content & Video', 'Tech & Web'];

  const filteredServices = servicesList.filter((service) => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Our Digital Services | Vigyapana Services Pvt. Ltd.</title>
        <meta
          name="description"
          content="Explore Vigyapana's end-to-end digital growth services: Google Ad Grants Management, Meta Ads, Website Development, SEO, Branding, and Commercial Video Production."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-background overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/20 via-accent/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              Comprehensive Digital Capabilities
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Services Built for <span className="bg-gradient-to-r from-accent via-amber-500 to-orange-500 bg-clip-text text-transparent">NGO Fundraising</span> &{' '}
              <span className="bg-gradient-to-r from-primary via-indigo-500 to-purple-500 bg-clip-text text-transparent">Business Scaling</span>.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              From managing $10,000/month Google Ad Grants to executing high-ROAS Meta ad campaigns and building high-speed Next.js web applications.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link to="/ngo-solutions">
                <Button variant="accent" size="lg" className="shadow-xl">
                  <HeartHandshake className="h-4 w-4 mr-2" /> NGO Specific Packages
                </Button>
              </Link>
              <Link to="/business-solutions">
                <Button variant="default" size="lg" className="shadow-xl">
                  <Briefcase className="h-4 w-4 mr-2" /> Business Growth Packages
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Filter & Grid */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <Container>
          <SectionHeading
            badge="Full Service Catalog"
            title="Choose the Strategy That Fits Your Goals"
            align="center"
            dark
          />

          {/* Search & Category Filter Controls */}
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
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl bg-slate-900 border border-slate-800 pl-10 pr-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Service Cards Grid */}
          {filteredServices.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <p className="text-slate-400 text-lg">No services match your current filter.</p>
              <Button variant="outline" onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}>
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.slug}
                  title={service.title}
                  slug={service.slug}
                  category={service.category}
                  description={service.summary}
                  iconName={service.iconName}
                  features={service.deliverables}
                  startingPrice={service.startingPrice}
                />
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* CTA Section */}
      <CTA
        title="Need a Custom Growth Package for Your Organization?"
        subtitle="Schedule a free strategy call with our digital growth team. We will audit your current campaigns and deliver an actionable 90-day roadmap."
      />
    </>
  );
}
