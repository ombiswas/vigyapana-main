import { type FC, useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  HeartHandshake,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { Link } from 'react-router';

export const AgencyIntro: FC = () => {
  const [activeTab, setActiveTab] = useState<'ngo' | 'business'>('ngo');

  return (
    <section className="py-20 lg:py-28 bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[140px] pointer-events-none" />

      <Container>
        {/* Intro Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            Who We Are
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            India&apos;s Leading Digital Growth Agency Designed for Dual Impact
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            At Vigyapana Services Pvt. Ltd., we bridge the gap between social cause and commercial growth. Whether you are an NGO seeking monthly recurring donors or a business scaling online sales, we build custom digital growth engines that convert.
          </p>
        </div>

        {/* Interactive Dual-Audience Tab Switcher */}
        <div className="mt-16 max-w-5xl mx-auto">
          {/* Tab Controls */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <button
              onClick={() => setActiveTab('ngo')}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-display text-sm font-bold transition-all duration-300 ${
                activeTab === 'ngo'
                  ? 'bg-accent text-slate-950 shadow-lg shadow-accent/25 scale-105'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <HeartHandshake className="h-5 w-5" />
              <span>For NGOs & Non-Profits</span>
            </button>

            <button
              onClick={() => setActiveTab('business')}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-display text-sm font-bold transition-all duration-300 ${
                activeTab === 'business'
                  ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Briefcase className="h-5 w-5" />
              <span>For Businesses & Brands</span>
            </button>
          </div>

          {/* Tab Content Cards */}
          {activeTab === 'ngo' ? (
            <motion.div
              key="ngo"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 sm:p-12 shadow-2xl backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                  <HeartHandshake className="h-4 w-4" /> Dedicated NGO Growth Partner
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  Unlock $120,000/Year in Free Ads & Build Recurring Donor Funnels
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  We specialize in helping registered Indian trusts and non-profits leverage Google Ad Grants, run high-converting Meta donation ads, and create seamless 80G tax receipt workflows.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-200 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>$10,000/mo Free Search Ads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>80G Donor Tax Receipt Pages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>Meta Donation Campaign ROAS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>WhatsApp Donor Retention</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Link to="/ngo-solutions">
                    <Button variant="accent">
                      Explore NGO Solutions <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                  <Link to="/contact?type=ngo-audit">
                    <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800">
                      Request Free NGO Audit
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-72 rounded-2xl overflow-hidden border border-slate-700/60">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
                  alt="NGO Fundraising Impact"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-bold text-accent">Real Impact</span>
                  <p className="text-sm font-semibold text-white">Over ₹50 Crores raised for healthcare, education, and child welfare NGOs.</p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="business"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 sm:p-12 shadow-2xl backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                  <TrendingUp className="h-4 w-4" /> Performance Growth Engine
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  Scale Revenue with High-ROAS Meta & Google Ad Engineering
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  For D2C brands, healthcare providers, real estate, and B2B services, we build full-funnel ad strategies, custom web applications, and SEO campaigns that lower your cost per lead.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-200 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>3.8x Average Campaign ROAS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>High-Speed Next.js Websites</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>Google Organic #1 Rankings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>Graphic & Video Ad Production</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Link to="/business-solutions">
                    <Button variant="default">
                      Explore Business Solutions <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                  <Link to="/contact?type=book-consultation">
                    <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800">
                      Book Growth Call
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-72 rounded-2xl overflow-hidden border border-slate-700/60">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                  alt="Business Growth Analytics"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-bold text-primary">Proven Growth</span>
                  <p className="text-sm font-semibold text-white">Consistent revenue scaling across 150+ paid ad accounts.</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
};
