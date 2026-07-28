import { useState } from 'react';
import { Link, useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { CTA } from '@/components/sections/CTA';
import { Modal, ModalContent } from '@/components/ui/Modal';
import { NotFoundView } from '@/components/views/NotFoundView';
import { portfolioData } from '@/data/portfolioData';
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Maximize2,
  Quote,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

export default function PortfolioDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const project = slug ? portfolioData[slug] : undefined;

  if (!project) {
    return <NotFoundView />;
  }

  return (
    <>
      <Helmet>
        <title>{`${project.title} | Case Study | Vigyapana`}</title>
        <meta name="description" content={project.tagline} />
      </Helmet>

      {/* 1. Project Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-background overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/20 via-accent/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex items-center justify-center gap-3">
              <Badge variant="accent" className="text-xs uppercase tracking-wider">
                {project.industry}
              </Badge>
              <Badge variant="outline" className="text-xs uppercase tracking-wider">
                {project.category}
              </Badge>
            </div>

            <div className="text-xs font-semibold uppercase tracking-wider text-accent">
              Client Case Study: {project.clientName}
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {project.tagline}
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact?type=book-consultation">
                <Button variant="accent" size="lg" className="shadow-xl">
                  Schedule Similar Strategy Call <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="lg">
                  Back to All Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Key Results Metrics Strip */}
      {project.results.length > 0 && (
        <section className="py-12 bg-slate-950 text-white border-y border-slate-800 relative">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {project.results.map((res, idx) => (
                <div key={idx} className="flex flex-col items-center p-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent flex items-center gap-1 mb-1">
                    <TrendingUp className="h-3.5 w-3.5" /> {res.metric}
                  </span>
                  <span className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                    {res.value}
                  </span>
                  {res.desc && (
                    <span className="text-xs text-slate-400 mt-1">
                      {res.desc}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 3. Main Project Cover Image */}
      <section className="py-16 bg-background">
        <Container>
          <div className="relative rounded-3xl overflow-hidden border border-border/80 bg-card shadow-2xl max-h-[550px]">
            <img
              src={project.coverImage.url}
              alt={project.coverImage.alt ?? project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </Container>
      </section>

      {/* 4. Challenge & Solution Narrative */}
      <section className="py-20 bg-card border-y border-border/60 relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Overview & Story */}
            <div className="lg:col-span-8 space-y-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Project Background
                </span>
                <h2 className="font-display text-3xl font-bold text-foreground mt-1 mb-4">
                  Overview
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div className="p-8 rounded-3xl border border-destructive/20 bg-destructive/5 space-y-3">
                <h3 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-destructive" /> The Challenge
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-8 rounded-3xl border border-emerald-500/30 bg-emerald-500/5 space-y-3">
                <h3 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" /> Vigyapana Strategy & Solution
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Sidebar Details: Tech Used & Info */}
            <div className="lg:col-span-4 space-y-8">
              <Card className="p-6 space-y-6">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-primary" /> Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-secondary text-secondary-foreground text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/60 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Client:</span>
                    <span className="font-semibold text-foreground">{project.clientName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <span className="font-semibold text-foreground">{project.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Industry:</span>
                    <span className="font-semibold text-foreground">{project.industry}</span>
                  </div>
                </div>
              </Card>

              {/* Client Testimonial Box if available */}
              {project.testimonial && (
                <div className="rounded-3xl border border-primary/30 bg-primary/5 p-6 space-y-4 relative">
                  <Quote className="h-8 w-8 text-primary/30 absolute top-4 right-4" />
                  <p className="text-sm font-medium italic text-foreground leading-relaxed">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <div className="font-display text-sm font-bold text-foreground">
                      {project.testimonial.authorName}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {project.testimonial.authorRole}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Image Gallery Section with Lightbox */}
      {project.gallery.length > 0 && (
        <section className="py-20 bg-slate-950 text-white relative">
          <Container>
            <SectionHeading
              badge="Visual Showcase"
              title="Campaign & Interface Gallery"
              description="Click any image to view in high resolution."
              align="center"
              dark
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {project.gallery.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(img.url)}
                  className="group relative h-64 rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 cursor-pointer shadow-lg hover:border-accent transition-all duration-300"
                >
                  <img
                    src={img.url}
                    alt={img.caption ?? `Gallery image ${idx + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <Maximize2 className="h-5 w-5" />
                    </div>
                  </div>
                  {img.caption && (
                    <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-sm p-2 rounded-xl text-xs text-white">
                      {img.caption}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Fullscreen Image Lightbox Modal */}
      <Modal open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <ModalContent className="max-w-4xl p-2 bg-slate-950 border-slate-800">
          {selectedImage && (
            <div className="relative rounded-2xl overflow-hidden">
              <img src={selectedImage} alt="Fullscreen Preview" className="w-full max-h-[80vh] object-contain mx-auto" />
            </div>
          )}
        </ModalContent>
      </Modal>

      {/* 6. CTA Banner */}
      <CTA
        title="Want Results Like This for Your Organization?"
        subtitle="Book a complimentary strategy session with our senior digital marketers today."
        primaryCtaText="Book Strategy Call"
      />
    </>
  );
}
