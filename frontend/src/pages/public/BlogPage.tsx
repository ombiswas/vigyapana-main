import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CTA } from '@/components/sections/CTA';
import { blogData } from '@/data/blogData';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  Search,
  Sparkles,
  Tag,
} from 'lucide-react';
import { Link } from 'react-router';
import { cn } from '@/lib/utils';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

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

  // Pagination Logic (4 items per page)
  const POSTS_PER_PAGE = 4;
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );


  return (
    <>
      <Helmet>
        <title>Blog & Digital Growth Insights | Vigyapana</title>
        <meta
          name="description"
          content="Read actionable guides, ad strategies, Google Ad Grants playbooks, and web engineering tips from Vigyapana digital growth experts."
        />
      </Helmet>

      {/* ── 1. Hero Section ────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-background overflow-hidden">
        {/* Soft green radial background glow from center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,hsl(161_93%_40%/0.12)_0%,hsl(161_93%_40%/0.03)_45%,transparent_70%)] pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              Digital Growth Insights & Playbooks
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
              Digital Growth Insights for <span className="text-primary">NGOs</span> &{' '}
              <span className="text-foreground">Growing Brands</span>.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-sans">
              Actionable guides on Google Ad Grants, Meta ad performance, high-speed web engineering, and conversion rate optimization.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 2. Featured Article Banner ────────────────────────────────────────── */}
      {featuredPost && (
        <section className="pb-16 bg-background">
          <Container>
            <div className="group rounded-3xl border border-border/90 bg-card overflow-hidden shadow-[0_4px_24px_-6px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] hover:border-primary/30 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10">
              <div className="lg:col-span-6 relative h-72 sm:h-84 lg:h-[380px] rounded-2xl overflow-hidden bg-muted">
                <img
                  src={featuredPost.coverImage.url}
                  alt={featuredPost.coverImage.alt ?? featuredPost.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                {/* Dark vignette to ensure top image badge text pops crystal clear */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-background/95 text-foreground backdrop-blur-md border border-border/80 font-bold text-[11px] uppercase tracking-wider px-3.5 py-1 shadow-sm">
                    Featured Article
                  </Badge>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium">
                  <span className="font-bold text-primary uppercase tracking-wider">{featuredPost.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-primary" /> {featuredPost.readingTime}
                  </span>
                  <span>•</span>
                  <span>{featuredPost.publishedAt}</span>
                </div>

                <Link to={`/blog/${featuredPost.slug}`}>
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground group-hover:text-primary transition-colors leading-[1.18]">
                    {featuredPost.title}
                  </h2>
                </Link>

                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed line-clamp-3 font-sans">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <img
                    src={featuredPost.author.avatarUrl}
                    alt={featuredPost.author.name}
                    className="h-10 w-10 rounded-full object-cover border border-border/80 shadow-sm"
                  />
                  <div>
                    <div className="text-xs font-bold text-foreground">{featuredPost.author.name}</div>
                    <div className="text-[10px] text-muted-foreground font-semibold">{featuredPost.author.role}</div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link to={`/blog/${featuredPost.slug}`}>
                    <Button variant="default" size="lg" className="shadow-md">
                      Read Full Article <ArrowRight className="h-4 w-4 ml-1.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* ── 3. Main Articles Catalog (Light Mode) ─────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-card border-t border-border/70 relative overflow-hidden">
        <Container>
          <SectionHeading
            badge="Articles Catalog"
            title="Explore Latest Articles & Playbooks"
            description="Filtered by category and topics — click any article to read our growth strategies."
            align="center"
          />

          {/* Search & Category Filter */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border/70">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setSelectedCategory(cat); setSelectedTag(null); setCurrentPage(1); }}
                  className={cn(
                    'px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all',
                    selectedCategory === cat && !selectedTag
                      ? 'bg-primary text-white shadow-sm font-bold'
                      : 'bg-background text-muted-foreground border border-border/80 hover:border-primary/40 hover:text-foreground'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                className="w-full rounded-xl bg-background border border-border/90 pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
              />
            </div>
          </div>

          {/* Tag Cloud Filter */}
          {allTags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 py-6 border-b border-border/60">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1 mr-2">
                <Tag className="h-3.5 w-3.5 text-primary" /> Filter by Tag:
              </span>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setSelectedTag(selectedTag === tag ? null : tag);
                    setCurrentPage(1);
                  }}
                  className={cn(
                    'px-3 py-1 rounded-lg text-xs font-medium transition-all',
                    selectedTag === tag
                      ? 'bg-primary text-white font-bold shadow-sm'
                      : 'bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-foreground'
                  )}
                >
                  #{tag}
                </button>
              ))}
            </div>
          )}

          {/* Articles Grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <p className="text-muted-foreground text-base">No articles match your search criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedTag(null);
                  setSearchQuery('');
                }}
              >
                Reset Search Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {paginatedPosts.map((post) => (
                <div
                  key={post.slug}
                  className="group rounded-2xl border border-border/90 bg-background overflow-hidden flex flex-col justify-between shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_-10px_rgba(0,0,0,0.12)] hover:border-primary/30 transition-all duration-300"
                >
                  <div>
                    <div className="relative h-56 overflow-hidden bg-muted">
                      <img
                        src={post.coverImage.url}
                        alt={post.coverImage.alt ?? post.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                      {/* Dark vignette to ensure top image badge pops cleanly */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

                      <div className="absolute top-3.5 left-3.5 z-10">
                        <Badge className="bg-background/95 text-foreground backdrop-blur-md border border-border/80 font-bold text-[11px] uppercase tracking-wider px-3 py-1 shadow-sm">
                          {post.category}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-primary" /> {post.readingTime}
                        </span>
                        <span>•</span>
                        <span>{post.publishedAt}</span>
                      </div>

                      <Link to={`/blog/${post.slug}`}>
                        <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                          {post.title}
                        </h3>
                      </Link>

                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 font-sans">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-4 border-t border-border/60 flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={post.author.avatarUrl}
                        alt={post.author.name}
                        className="h-7 w-7 rounded-full object-cover border border-border/80"
                      />
                      <span className="text-xs text-foreground font-semibold">{post.author.name}</span>
                    </div>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-xs font-bold text-primary hover:text-primary/75 transition-colors flex items-center gap-1.5 group/link"
                    >
                      Read Story <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
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
                className="border-border/80 hover:border-primary/40"
              >
                <ChevronLeft className="h-4 w-4 mr-1" /> Previous
              </Button>

              <span className="text-xs font-semibold text-muted-foreground px-2">
                Page <strong className="text-foreground">{currentPage}</strong> of {totalPages}
              </span>

              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                className="border-border/80 hover:border-primary/40"
              >
                Next <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* CTA Section */}
      <CTA />
    </>
  );
}
