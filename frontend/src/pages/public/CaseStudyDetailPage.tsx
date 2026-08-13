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
import { caseStudiesData } from '@/data/caseStudiesData';
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock,
  Maximize2,
  Quote,
  ShieldAlert,
  Sparkles,
  TrendingUp,
  Zap,
} from 'lucide-react';

export default function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const cs = slug ? caseStudiesData[slug] : undefined;

  if (!cs) {
    return <NotFoundView />;
  }

  return (
    <>
      <Helmet>
        <title>{`${cs.clientName} Case Study | Vigyapana`}</title>
        <meta name="description" content={cs.heroSummary} />
      </Helmet>

      {/* ── 1. Case Study Hero ────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-background overflow-hidden">
        {/* Soft green radial background glow from center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,hsl(161_93%_40%/0.12)_0%,hsl(161_93%_40%/0.03)_45%,transparent_70%)] pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex items-center justify-center gap-3">
              <Badge variant="outline" className="text-xs uppercase tracking-wider bg-primary/10 text-primary border-primary/30 font-bold px-3.5 py-1">
                {cs.industry}
              </Badge>
              <Badge variant="outline" className="text-xs uppercase tracking-wider flex items-center gap-1 bg-card border-border/80 text-muted-foreground font-semibold px-3.5 py-1">
                <Clock className="h-3 w-3 text-primary" /> {cs.duration} Campaign
              </Badge>
            </div>

            <div className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
              In-Depth Growth Playbook: {cs.clientName}
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
              {cs.title}
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-sans">
              {cs.heroSummary}
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact?type=book-consultation">
                <Button variant="default" size="lg" className="shadow-md">
                  Schedule Strategy Call <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button variant="outline" size="lg" className="border-border/80 hover:border-primary/40 hover:text-primary">
                  <ArrowLeft className="h-4 w-4 mr-2" /> All Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Key Metrics Bar (Light Mode) ────────────────────────────────────── */}
      <section className="py-12 bg-card border-y border-border/80 relative">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {cs.metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col items-center p-4 bg-background border border-border/80 rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary flex items-center gap-1 mb-1">
                  <TrendingUp className="h-3.5 w-3.5" /> {m.label}
                </span>
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-foreground tabular-nums">
                  {m.value}
                </span>
                <span className="text-xs text-primary font-bold mt-1">
                  {m.growth}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 3. The Challenge Section ───────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600">
                <ShieldAlert className="h-4 w-4" /> The Initial Challenge
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                Roadblocks & Pain Points Before Vigyapana
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-sans">
                {cs.challenge.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              {cs.challenge.keyPainPoints.map((pain, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-rose-200 bg-rose-50/50 p-6 space-y-2 shadow-sm"
                >
                  <div className="font-display text-lg font-bold text-rose-600">0{idx + 1}.</div>
                  <p className="text-sm text-foreground leading-relaxed font-medium">{pain}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4. Strategy & 3 Pillars Section ────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-card border-y border-border/80 relative">
        <Container>
          <SectionHeading
            badge="Strategic Framework"
            title={cs.strategy.headline}
            description="Our 3-part strategic framework engineered for sustainable growth."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {cs.strategy.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border/80 bg-background p-8 space-y-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-8px_rgba(0,0,0,0.12)] hover:border-primary/30 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-display text-xl font-bold">
                  0{idx + 1}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">{pillar.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 5. Phased Execution & Timeline Section (Light Mode) ────────────────── */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Phased Execution Steps */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Execution Playbook
                </span>
                <h2 className="font-display text-3xl font-bold text-foreground mt-1">
                  Tactical Implementation Steps
                </h2>
              </div>

              <div className="space-y-5">
                {cs.execution.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-border/80 bg-card p-6 space-y-2 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]"
                  >
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.14em]">
                      {step.phase}
                    </span>
                    <h3 className="font-display text-lg font-bold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-sans">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Campaign Milestone Timeline */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl border border-border/80 bg-card p-8 space-y-6 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.07)]">
                <h3 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" /> Milestone Progression
                </h3>

                <div className="space-y-6 relative pl-6 border-l border-primary/30">
                  {cs.timeline.map((item, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full bg-primary border-2 border-background shadow-sm" />
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                        {item.date}
                      </span>
                      <p className="text-sm text-foreground mt-0.5 font-semibold leading-snug">{item.milestone}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 6. Visual Performance Comparison ──────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-card border-y border-border/80 relative">
        <Container>
          <SectionHeading
            badge="Performance Metrics"
            title="Before vs. After Vigyapana Comparison"
            description="Empirical metrics demonstrating clear performance uplift."
            align="center"
          />

          {/* Bar Chart Visual Representation */}
          <div className="mt-12 max-w-4xl mx-auto rounded-2xl border border-border/80 bg-background p-8 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.07)] space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" /> Key Performance Uplift
              </h3>
              <div className="flex items-center gap-4 text-xs font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-muted-foreground/30" /> Baseline
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-primary" /> Vigyapana Result
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {cs.graphData.map((graph, idx) => {
                const maxVal = Math.max(graph.beforeValue, graph.afterValue);
                const beforePct = (graph.beforeValue / maxVal) * 100;
                const afterPct = (graph.afterValue / maxVal) * 100;

                return (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-foreground">
                      <span>{graph.label}</span>
                      <span className="text-primary">
                        {graph.afterValue} {graph.unit} (vs {graph.beforeValue} {graph.unit})
                      </span>
                    </div>

                    {/* Bar comparison */}
                    <div className="space-y-1.5">
                      <div className="h-3 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full bg-muted-foreground/30 rounded-full transition-all duration-1000"
                          style={{ width: `${beforePct}%` }}
                        />
                      </div>
                      <div className="h-4 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-1000"
                          style={{ width: `${afterPct}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Before / After Matrix Table */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {cs.beforeAfter.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border/80 bg-background p-6 space-y-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-all"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {item.metric}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Before:</span>
                    <span className="line-through">{item.before}</span>
                  </div>
                  <div className="flex justify-between font-bold text-foreground">
                    <span>After:</span>
                    <span className="text-primary">{item.after}</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-border/60 text-xs font-bold text-primary">
                  ⚡ {item.improvement} Uplift
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 7. Campaign Creative Gallery (Light Mode) ─────────────────────────── */}
      {cs.gallery.length > 0 && (
        <section className="py-20 lg:py-28 bg-background relative">
          <Container>
            <SectionHeading
              badge="Visual Showcase"
              title="Campaign Creatives & Interface Gallery"
              description="High-resolution preview of campaign creatives and donor checkout interfaces."
              align="center"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              {cs.gallery.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(img.url)}
                  className="group relative h-80 rounded-2xl overflow-hidden border border-border/90 bg-card cursor-pointer shadow-[0_4px_20px_-6px_rgba(0,0,0,0.07)] hover:shadow-xl hover:border-primary/30 transition-all"
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-foreground shadow-md">
                      <Maximize2 className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-md p-3 rounded-xl border border-border/80 text-xs text-foreground font-semibold shadow-sm">
                    {img.title}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Fullscreen Lightbox Modal */}
      <Modal open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <ModalContent className="max-w-4xl p-2 bg-background border-border/80">
          {selectedImage && (
            <div className="relative rounded-xl overflow-hidden">
              <img src={selectedImage} alt="Campaign Creative Preview" className="w-full max-h-[80vh] object-contain mx-auto" />
            </div>
          )}
        </ModalContent>
      </Modal>

      {/* ── 8. Client Testimonial Section ────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-card border-t border-border/80 relative">
        <Container size="sm">
          <div className="rounded-3xl border border-primary/30 bg-primary/5 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-[0_4px_20px_-6px_rgba(0,0,0,0.07)]">
            <Quote className="h-16 w-16 text-primary/15 absolute top-4 left-4 pointer-events-none" />
            <Sparkles className="h-16 w-16 text-primary/15 absolute bottom-4 right-4 pointer-events-none" />

            <p className="text-lg sm:text-xl font-medium italic text-foreground leading-relaxed max-w-2xl mx-auto font-serif">
              &ldquo;{cs.testimonial.quote}&rdquo;
            </p>

            <div className="flex flex-col items-center gap-2 pt-2">
              <img
                src={cs.testimonial.avatarUrl}
                alt={cs.testimonial.authorName}
                className="h-14 w-14 rounded-full object-cover border-2 border-primary shadow-sm"
              />
              <div className="font-display text-base font-bold text-foreground">
                {cs.testimonial.authorName}
              </div>
              <div className="text-xs font-bold text-primary uppercase tracking-wider">
                {cs.testimonial.authorRole}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 9. Final Call to Action ───────────────────────────────────────────── */}
      <CTA
        title="Ready to Build Your Next High-Impact Growth Story?"
        subtitle="Schedule a 1-on-1 strategy call with our digital marketers today."
        primaryCtaText="Book Strategy Call"
      />
    </>
  );
}
