import { useState } from 'react';
import { Link, useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { CTA } from '@/components/sections/CTA';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalTrigger } from '@/components/ui/Modal';
import { ConsultationForm } from '@/components/forms/ConsultationForm';
import { ProposalForm } from '@/components/forms/ProposalForm';
import { NotFoundView } from '@/components/views/NotFoundView';
import { servicesData } from '@/data/servicesData';
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  PhoneCall,
  Sparkles,
} from 'lucide-react';
import * as Icons from 'lucide-react';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [proposalModalOpen, setProposalModalOpen] = useState(false);

  const service = slug ? servicesData[slug] : undefined;

  if (!service) {
    return <NotFoundView />;
  }

  // Resolve Lucide Icon dynamically
  const IconComponent = (Icons as unknown as Record<string, React.FC<{ className?: string }>>)[service.iconName] ?? Sparkles;

  return (
    <>
      <Helmet>
        <title>{`${service.title} | Vigyapana Services`}</title>
        <meta name="description" content={service.summary} />
      </Helmet>

      {/* ── 1. Service Hero Section ───────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-background overflow-hidden">
        {/* Soft green radial background glow from center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,hsl(161_93%_40%/0.12)_0%,hsl(161_93%_40%/0.03)_45%,transparent_70%)] pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm">
                <IconComponent className="h-6 w-6" />
              </div>
              <Badge variant="outline" className="text-xs uppercase tracking-wider bg-primary/10 text-primary border-primary/30 font-bold px-3.5 py-1">
                {service.badge}
              </Badge>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-sans">
              {service.summary}
            </p>

            {service.startingPrice && (
              <div className="pt-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
                  Starting from
                </span>
                <div className="font-display text-3xl font-extrabold text-foreground tabular-nums">
                  ₹{service.startingPrice.toLocaleString('en-IN')} <span className="text-sm font-semibold text-muted-foreground font-sans">/ month</span>
                </div>
              </div>
            )}

            {/* Modal Actions */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Modal open={consultModalOpen} onOpenChange={setConsultModalOpen}>
                <ModalTrigger asChild>
                  <Button variant="default" size="lg" className="shadow-md font-semibold">
                    <PhoneCall className="h-4 w-4 mr-2" /> Book Strategy Session
                  </Button>
                </ModalTrigger>
                <ModalContent>
                  <ModalHeader>
                    <ModalTitle>Book Strategy Call for {service.title}</ModalTitle>
                  </ModalHeader>
                  <ConsultationForm onSuccess={() => setConsultModalOpen(false)} />
                </ModalContent>
              </Modal>

              <Modal open={proposalModalOpen} onOpenChange={setProposalModalOpen}>
                <ModalTrigger asChild>
                  <Button variant="outline" size="lg" className="border-border/80 hover:border-primary/40 hover:text-primary">
                    <FileText className="h-4 w-4 mr-2 text-primary" /> Request Custom Proposal
                  </Button>
                </ModalTrigger>
                <ModalContent>
                  <ModalHeader>
                    <ModalTitle>Request Proposal for {service.title}</ModalTitle>
                  </ModalHeader>
                  <ProposalForm onSuccess={() => setProposalModalOpen(false)} />
                </ModalContent>
              </Modal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Overview & Deliverables Section (Light Mode) ──────────────────── */}
      <section className="py-20 lg:py-28 bg-card border-t border-border/70 relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Strategy & Execution
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                Service Overview & Deliverables
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed font-sans">
                {service.overview}
              </p>

              <div className="pt-4 border-t border-border/70 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Key Scope Deliverables:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-foreground font-medium">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border/80 bg-background p-8 space-y-6 shadow-[0_6px_40px_-12px_rgba(0,0,0,0.1),0_2px_8px_-2px_rgba(0,0,0,0.04)]">
                <h3 className="font-display text-2xl font-bold text-foreground">Why Vigyapana?</h3>
                <ul className="space-y-4 text-sm text-muted-foreground font-sans">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">100% Data Transparency:</strong> Live dashboard access to exact CPC, CPL, CPD, and ROAS.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Dual Specialization:</strong> Proven experience across NGO donor acquisition and business e-commerce scaling.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">No Lock-in Contracts:</strong> Flexible month-to-month performance retainers.</span>
                  </li>
                </ul>

                <Link to="/contact" className="block w-full">
                  <Button variant="default" className="w-full justify-center shadow-md">
                    Get Started Today <ArrowRight className="h-4 w-4 ml-1.5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3. Benefits Section ──────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-background relative">
        <Container>
          <SectionHeading
            badge="Expected Impact"
            title="Core Benefits & Expected ROI"
            description="Empirical advantages engineered into every strategy execution."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {service.benefits.map((ben, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border/80 bg-card p-8 shadow-[0_6px_40px_-12px_rgba(0,0,0,0.1),0_2px_8px_-2px_rgba(0,0,0,0.04)] hover:border-primary/30 transition-all duration-300 space-y-3"
              >
                <div className="font-display text-3xl font-black text-primary">0{idx + 1}</div>
                <h3 className="font-display text-xl font-bold text-foreground">{ben.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">{ben.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 4. Workflow Timeline Section ─────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-card border-y border-border/80 relative">
        <Container size="sm">
          <SectionHeading
            badge="Execution Process"
            title={`Our Step-by-Step ${service.title} Workflow`}
            description="Clear phase-by-phase execution timeline from kickoff to optimization."
            align="center"
          />

          <div className="mt-12 space-y-8 relative">
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-primary/30" />

            {service.workflow.map((wf, idx) => (
              <div key={idx} className="relative pl-14">
                <div className="absolute left-4 top-1.5 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-background bg-primary shadow-sm" />
                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.14em]">
                  Step {wf.step}
                </span>
                <h3 className="font-display text-xl font-bold text-foreground mt-0.5">
                  {wf.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed font-sans">
                  {wf.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 5. Service-Specific FAQs ─────────────────────────────────────────── */}
      {service.faqs.length > 0 && (
        <section className="py-20 lg:py-28 bg-background relative">
          <Container size="sm">
            <SectionHeading
              badge="Got Questions?"
              title={`Frequently Asked Questions (${service.title})`}
              align="center"
            />

            <div className="mt-8 rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.06)]">
              <Accordion type="single" collapsible className="w-full">
                {service.faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left font-display text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base font-sans">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Container>
        </section>
      )}

      {/* ── 6. CTA Section ───────────────────────────────────────────────────── */}
      <CTA
        title={`Ready to Scale with ${service.title}?`}
        subtitle="Talk with our growth strategists today to get a customized proposal and ROI forecast."
        primaryCtaText="Book Strategy Session"
        secondaryCtaText="Request Proposal"
      />
    </>
  );
}
