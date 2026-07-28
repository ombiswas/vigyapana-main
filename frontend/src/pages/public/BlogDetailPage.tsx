import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CTA } from '@/components/sections/CTA';
import { NotFoundView } from '@/components/views/NotFoundView';
import { blogData } from '@/data/blogData';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  Share2,
  Tag,
} from 'lucide-react';

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const post = slug ? blogData[slug] : undefined;

  // Scroll Reading Progress Bar Listener
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!post) {
    return <NotFoundView />;
  }

  // Related posts (excluding current post)
  const relatedPosts = Object.values(blogData)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const handleShare = () => {
    void navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  // Basic Markdown Renderer for article body
  const renderMarkdown = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      if (line.startsWith('## ')) {
        return (
          <h2 key={idx} className="font-display text-2xl sm:text-3xl font-bold text-foreground mt-10 mb-4">
            {line.replace('## ', '')}
          </h2>
        );
      }
      if (line.startsWith('### ')) {
        return (
          <h3 key={idx} className="font-display text-xl sm:text-2xl font-bold text-foreground mt-8 mb-3">
            {line.replace('### ', '')}
          </h3>
        );
      }
      if (line.startsWith('- ') || line.startsWith('* ')) {
        return (
          <li key={idx} className="text-muted-foreground text-base leading-relaxed ml-6 list-disc my-1">
            {line.substring(2)}
          </li>
        );
      }
      if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || line.startsWith('4. ')) {
        return (
          <li key={idx} className="text-muted-foreground text-base leading-relaxed ml-6 list-decimal my-1">
            {line.substring(3)}
          </li>
        );
      }
      if (line.startsWith('---')) {
        return <hr key={idx} className="my-8 border-border" />;
      }
      if (line.trim() === '') {
        return <div key={idx} className="h-4" />;
      }
      return (
        <p key={idx} className="text-muted-foreground text-base sm:text-lg leading-relaxed my-3">
          {line}
        </p>
      );
    });
  };

  return (
    <>
      <Helmet>
        <title>{`${post.title} | Vigyapana Blog`}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.coverImage.url} />
      </Helmet>

      {/* 1. Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1.5 bg-muted">
        <div
          className="h-full bg-accent transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. Article Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-background overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/20 via-accent/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

        <Container size="sm">
          <div className="space-y-6">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Back to All Articles
            </Link>

            <div className="flex items-center gap-3">
              <Badge variant="accent">{post.category}</Badge>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {post.readingTime}
              </span>
              <span className="text-xs text-muted-foreground">• {post.publishedAt}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              {post.title}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author Profile Strip */}
            <div className="flex items-center justify-between pt-4 border-t border-border/80">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatarUrl}
                  alt={post.author.name}
                  className="h-11 w-11 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <div className="font-display text-sm font-bold text-foreground">{post.author.name}</div>
                  <div className="text-xs text-muted-foreground">{post.author.role}</div>
                </div>
              </div>

              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-1.5" /> {copied ? 'Link Copied!' : 'Share Article'}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Article Cover Image */}
      <section className="py-8 bg-background">
        <Container size="sm">
          <div className="relative rounded-3xl overflow-hidden border border-border bg-card shadow-2xl max-h-[500px]">
            <img
              src={post.coverImage.url}
              alt={post.coverImage.alt ?? post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </Container>
      </section>

      {/* 4. Article Body Content */}
      <section className="py-12 bg-background relative">
        <Container size="sm">
          <article className="prose prose-slate dark:prose-invert max-w-none">
            {renderMarkdown(post.content)}
          </article>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-10 mt-10 border-t border-border">
            <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1 mr-2">
              <Tag className="h-3.5 w-3.5" /> Article Tags:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg bg-secondary text-secondary-foreground text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Bio Box */}
          <div className="mt-12 p-8 rounded-3xl border border-primary/30 bg-card flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-xl">
            <img
              src={post.author.avatarUrl}
              alt={post.author.name}
              className="h-16 w-16 rounded-full object-cover border-2 border-accent shrink-0"
            />
            <div className="space-y-1">
              <div className="text-xs font-bold text-accent uppercase tracking-wider">Written By</div>
              <h4 className="font-display text-lg font-bold text-foreground">{post.author.name}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{post.author.bio}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Related Articles Grid */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-slate-950 text-white relative">
          <Container>
            <SectionHeading
              badge="More to Read"
              title="Related Articles & Playbooks"
              align="center"
              dark
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {relatedPosts.map((rel) => (
                <Card
                  key={rel.slug}
                  className="glass-card-dark border-slate-800 overflow-hidden flex flex-col justify-between hover:border-primary/40 transition-all duration-300 shadow-xl"
                >
                  <div className="p-6 space-y-3">
                    <Badge variant="accent">{rel.category}</Badge>
                    <Link to={`/blog/${rel.slug}`}>
                      <h3 className="font-display text-xl font-bold text-white hover:text-accent transition-colors leading-snug">
                        {rel.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                      {rel.excerpt}
                    </p>
                  </div>

                  <div className="p-6 pt-0 border-t border-slate-800/80 flex items-center justify-between mt-4">
                    <span className="text-xs text-slate-400">{rel.readingTime}</span>
                    <Link
                      to={`/blog/${rel.slug}`}
                      className="text-xs font-bold text-accent hover:underline flex items-center gap-1"
                    >
                      Read Article <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 6. Inline Newsletter Section */}
      <section className="py-16 bg-card border-t border-border/60">
        <Container size="sm">
          <div className="text-center space-y-4">
            <Mail className="h-8 w-8 text-primary mx-auto" />
            <h3 className="font-display text-2xl font-bold text-foreground">Enjoyed this article?</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Subscribe to get our newest digital growth playbooks delivered directly to your inbox every week.
            </p>

            {subscribed ? (
              <div className="inline-flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 text-emerald-500 text-sm font-semibold border border-emerald-500/30">
                <CheckCircle2 className="h-4 w-4" /> You are subscribed!
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button type="submit" variant="accent">
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </Container>
      </section>

      {/* 7. CTA Banner */}
      <CTA />
    </>
  );
}
