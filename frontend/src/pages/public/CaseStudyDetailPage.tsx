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
  ArrowRight,
  BarChart3,
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

      {/* 1. Case Study Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-background overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/20 via-accent/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex items-center justify-center gap-3">
              <Badge variant="accent" className="text-xs uppercase tracking-wider">
                {cs.industry}
              </Badge>
              <Badge variant="outline" className="text-xs uppercase tracking-wider flex items-center gap-1">
                <Clock className="h-3 w-3" /> {cs.duration} Campaign
              </Badge>
            </div>

            <div className="text-xs font-semibold uppercase tracking-wider text-accent">
              In-Depth Growth Playbook: {cs.clientName}
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              {cs.title}
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {cs.heroSummary}
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact?type=book-consultation">
                <Button variant="accent" size="lg" className="shadow-xl">
                  Schedule Strategy Call <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button variant="outline" size="lg">
                  Back to All Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Key Metrics Bar */}
      <section className="py-12 bg-slate-950 text-white border-y border-slate-800 relative">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {cs.metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col items-center p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent flex items-center gap-1 mb-1">
                  <TrendingUp className="h-3.5 w-3.5" /> {m.label}
                </span>
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                  {m.value}
                </span>
                <span className="text-xs text-emerald-400 font-medium mt-1">
                  {m.growth}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. The Challenge Section */}
      <section className="py-20 bg-card border-b border-border/60 relative">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-destructive">
                <ShieldAlert className="h-4 w-4" /> The Initial Challenge
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground">
                Roadblocks & Pain Points Before Vigyapana
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                {cs.challenge.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {cs.challenge.keyPainPoints.map((pain, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 space-y-2"
                >
                  <div className="font-display text-lg font-bold text-destructive">0{idx + 1}.</div>
                  <p className="text-sm text-foreground leading-relaxed">{pain}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Strategy & 3 Pillars Section */}
      <section className="py-20 bg-background relative">
        <Container>
          <SectionHeading
            badge="Strategic Blueprint"
            title={cs.strategy.headline}
            description="Our 3-part strategic framework engineered for sustainable growth."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {cs.strategy.pillars.map((pillar, idx) => (
              <Card
                key={idx}
                className="p-8 space-y-4 hover:border-primary/40 transition-all duration-300 shadow-lg"
              >
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-display text-xl font-bold">
                  0{idx + 1}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Phased Execution & Timeline Section */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Phased Execution Steps */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Execution Playbook
                </span>
                <h2 className="font-display text-3xl font-bold text-white mt-1">
                  Tactical Implementation Steps
                </h2>
              </div>

              <div className="space-y-6">
                {cs.execution.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 space-y-2 backdrop-blur-md"
                  >
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">
                      {step.phase}
                    </span>
                    <h3 className="font-display text-lg font-bold text-white">{step.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Campaign Milestone Timeline */}
            <div className="lg:col-span-5 space-y-6">
              <Card className="glass-card-dark border-slate-800 p-8 space-y-6 text-slate-100 shadow-2xl">
                <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
                  <Zap className="h-5 w-5 text-accent" /> Campaign Milestone Progression
                </h3>

                <div className="space-y-6 relative pl-6 border-l border-slate-700">
                  {cs.timeline.map((item, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-accent border-2 border-slate-950" />
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">
                        {item.date}
                      </span>
                      <p className="text-sm text-slate-200 mt-0.5 font-medium">{item.milestone}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Visual Performance Comparison (Graphs & Before/After Matrix) */}
      <section className="py-20 bg-background relative">
        <Container>
          <SectionHeading
            badge="Performance Metrics"
            title="Before vs. After Vigyapana Comparison"
            description="Empirical metrics demonstrating clear performance uplift."
            align="center"
          />

          {/* Bar Chart Visual Representation */}
          <div className="mt-12 max-w-4xl mx-auto rounded-3xl border border-border/80 bg-card p-8 shadow-xl space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" /> Key Performance Uplift
              </h3>
              <div className="flex items-center gap-4 text-xs font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-muted-foreground/40" /> Before
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-accent" /> After Vigyapana
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
                      <span className="text-accent">
                        {graph.afterValue} {graph.unit} (vs {graph.beforeValue} {graph.unit})
                      </span>
                    </div>

                    {/* Bar comparison */}
                    <div className="space-y-1.5">
                      <div className="h-3 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full bg-muted-foreground/40 rounded-full transition-all duration-1000"
                          style={{ width: `${beforePct}%` }}
                        />
                      </div>
                      <div className="h-4 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full bg-accent rounded-full transition-all duration-1000"
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
                className="rounded-3xl border border-border/80 bg-card p-6 space-y-4 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {item.metric}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Before:</span>
                    <span className="line-through">{item.before}</span>
                  </div>
                  <div className="flex justify-between font-bold text-foreground">
                    <span>After:</span>
                    <span className="text-accent">{item.after}</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-border/60 text-xs font-bold text-emerald-500">
                  ⚡ {item.improvement} Uplift
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Campaign Creative Gallery */}
      {cs.gallery.length > 0 && (
        <section className="py-20 bg-slate-950 text-white relative">
          <Container>
            <SectionHeading
              badge="Visual Showcase"
              title="Campaign Creatives & Interface Gallery"
              align="center"
              dark
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              {cs.gallery.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(img.url)}
                  className="group relative h-80 rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 cursor-pointer shadow-xl"
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <Maximize2 className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-3 rounded-2xl text-xs text-white font-medium">
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
        <ModalContent className="max-w-4xl p-2 bg-slate-950 border-slate-800">
          {selectedImage && (
            <div className="relative rounded-2xl overflow-hidden">
              <img src={selectedImage} alt="Campaign Creative Preview" className="w-full max-h-[80vh] object-contain mx-auto" />
            </div>
          )}
        </ModalContent>
      </Modal>

      {/* 8. Client Testimonial Section */}
      <section className="py-20 bg-background relative">
        <Container size="sm">
          <div className="rounded-3xl border border-accent/40 bg-accent/5 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-2xl">
            <Quote className="h-16 w-16 text-accent/20 absolute top-4 left-4" />
            <Sparkles className="h-16 w-16 text-accent/20 absolute bottom-4 right-4" />

            <p className="text-lg sm:text-xl font-medium italic text-foreground leading-relaxed max-w-2xl mx-auto">
              &ldquo;{cs.testimonial.quote}&rdquo;
            </p>

            <div className="flex flex-col items-center gap-2 pt-2">
              <img
                src={cs.testimonial.avatarUrl}
                alt={cs.testimonial.authorName}
                className="h-14 w-14 rounded-full object-cover border-2 border-accent"
              />
              <div className="font-display text-base font-bold text-foreground">
                {cs.testimonial.authorName}
              </div>
              <div className="text-xs font-semibold text-accent uppercase tracking-wider">
                {cs.testimonial.authorRole}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. Final Call to Action */}
      <CTA
        title="Ready to Build Your Next High-Impact Growth Story?"
        subtitle="Schedule a 1-on-1 strategy call with our digital marketers today."
        primaryCtaText="Book Strategy Call"
      />
    </>
  );
}
