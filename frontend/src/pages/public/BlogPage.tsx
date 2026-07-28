import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { CTA } from '@/components/sections/CTA';
import { blogData } from '@/data/blogData';
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Mail,
  Search,
  Sparkles,
  Tag,
} from 'lucide-react';
import { Link } from 'react-router';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState<boolean>(false);

  const postsList = Object.values(blogData);

  const categories = ['All', 'NGO Growth', 'Performance Marketing', 'SEO Strategy', 'Web Engineering'];

  const allTags = Array.from(new Set(postsList.flatMap((post) => post.tags)));

  // Filter posts
  const filteredPosts = postsList.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesTag && matchesSearch;
  });

  const featuredPost = postsList.find((post) => post.isFeatured) ?? postsList[0];

  // Simple Pagination Logic (4 items per page)
  const POSTS_PER_PAGE = 4;
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <>
      <Helmet>
        <title>Blog & Digital Growth Insights | Vigyapana</title>
        <meta
          name="description"
          content="Read actionable guides, ad strategies, Google Ad Grants playbooks, and web engineering tips from Vigyapana digital growth experts."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-background overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/20 via-accent/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              Insights & Playbooks
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Digital Growth Insights for <span className="bg-gradient-to-r from-accent via-amber-500 to-orange-500 bg-clip-text text-transparent">NGOs</span> &{' '}
              <span className="bg-gradient-to-r from-primary via-indigo-500 to-purple-500 bg-clip-text text-transparent">Growing Brands</span>.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Actionable guides on Google Ad Grants, Meta ad performance, high-speed web engineering, and conversion rate optimization.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Post Hero Banner */}
      {featuredPost && (
        <section className="pb-16 bg-background">
          <Container>
            <div className="rounded-3xl border border-primary/30 bg-card overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8">
              <div className="lg:col-span-6 relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-muted">
                <img
                  src={featuredPost.coverImage.url}
                  alt={featuredPost.coverImage.alt ?? featuredPost.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="accent">Featured Article</Badge>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="font-semibold text-primary">{featuredPost.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {featuredPost.readingTime}
                  </span>
                  <span>•</span>
                  <span>{featuredPost.publishedAt}</span>
                </div>

                <Link to={`/blog/${featuredPost.slug}`}>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground hover:text-primary transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>
                </Link>

                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <img
                    src={featuredPost.author.avatarUrl}
                    alt={featuredPost.author.name}
                    className="h-9 w-9 rounded-full object-cover border border-border"
                  />
                  <div>
                    <div className="text-xs font-bold text-foreground">{featuredPost.author.name}</div>
                    <div className="text-[10px] text-muted-foreground">{featuredPost.author.role}</div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link to={`/blog/${featuredPost.slug}`}>
                    <Button variant="default">
                      Read Full Article <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Main Blog Feed & Filters */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <Container>
          <SectionHeading
            badge="Articles Catalog"
            title="Explore Articles & Playbooks"
            align="center"
            dark
          />

          {/* Search & Category Filter */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setSelectedCategory(cat); setSelectedTag(null); setCurrentPage(1); }}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                    selectedCategory === cat && !selectedTag
                      ? 'bg-accent text-slate-950 shadow-md font-bold'
                      : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                className="w-full rounded-xl bg-slate-900 border border-slate-800 pl-10 pr-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Tag Cloud Filter */}
          {allTags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 py-6 border-b border-slate-800/60">
              <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 mr-2">
                <Tag className="h-3.5 w-3.5" /> Filter by Tag:
              </span>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setSelectedTag(selectedTag === tag ? null : tag);
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    selectedTag === tag
                      ? 'bg-primary text-white font-bold'
                      : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          )}

          {/* Articles Grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <p className="text-slate-400 text-lg">No articles match your search criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedTag(null);
                  setSearchQuery('');
                }}
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {paginatedPosts.map((post) => (
                <Card
                  key={post.slug}
                  className="glass-card-dark border-slate-800 overflow-hidden flex flex-col justify-between hover:border-primary/40 transition-all duration-300 shadow-xl"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden bg-slate-900">
                      <img
                        src={post.coverImage.url}
                        alt={post.coverImage.alt ?? post.title}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge variant="accent">{post.category}</Badge>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" /> {post.readingTime}
                        </span>
                        <span>•</span>
                        <span>{post.publishedAt}</span>
                      </div>

                      <Link to={`/blog/${post.slug}`}>
                        <h3 className="font-display text-xl font-bold text-white hover:text-accent transition-colors leading-snug">
                          {post.title}
                        </h3>
                      </Link>

                      <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-slate-800/80 flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.author.avatarUrl}
                        alt={post.author.name}
                        className="h-7 w-7 rounded-full object-cover border border-slate-700"
                      />
                      <span className="text-xs text-slate-300 font-medium">{post.author.name}</span>
                    </div>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-xs font-bold text-accent hover:underline flex items-center gap-1"
                    >
                      Read Story <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-12">
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              >
                <ChevronLeft className="h-4 w-4 mr-1" /> Previous
              </Button>

              <span className="text-xs font-semibold text-slate-400">
                Page {currentPage} of {totalPages}
              </span>

              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              >
                Next <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="py-20 bg-background relative border-t border-border/60">
        <Container size="sm">
          <div className="rounded-3xl border border-primary/30 bg-card p-8 sm:p-12 text-center space-y-6 shadow-2xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto">
              <Mail className="h-7 w-7" />
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                Get Weekly Digital Growth Playbooks
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
                Join 5,000+ NGO founders, marketing heads, and growth strategists receiving our actionable ad performance and fundraising updates.
              </p>
            </div>

            {newsletterSubscribed ? (
              <div className="inline-flex items-center gap-2 p-4 rounded-2xl bg-emerald-500/10 text-emerald-500 text-sm font-semibold border border-emerald-500/30">
                <CheckCircle2 className="h-5 w-5" />
                Thank you for subscribing! Check your inbox for our latest playbook.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button type="submit" variant="accent" className="shrink-0">
                  Subscribe Free
                </Button>
              </form>
            )}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTA />
    </>
  );
}
