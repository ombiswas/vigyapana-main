import { type FC, useState } from 'react';
import { Link } from 'react-router';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import {
  ArrowUpRight,
  CheckCircle2,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from 'lucide-react';
import toast from 'react-hot-toast';
import axios from 'axios';

export const Footer: FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      await axios.post('/api/v1/newsletter/subscribe', { email, source: 'footer' });
      setSubscribed(true);
      toast.success('Thank you for subscribing to Vigyapana Insights!');
      setEmail('');
    } catch {
      toast.error('Subscription failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[#0e110f] text-white pt-20 pb-12 relative overflow-hidden">
      {/* Very subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_10%_0%,hsl(161_93%_40%/0.06)_0%,transparent_70%)] pointer-events-none" />

      <Container>

        {/* ── Newsletter Subscribe Block ─────────────────────────── */}
        <div className="relative rounded-2xl border border-white/8 bg-white/4 backdrop-blur-sm overflow-hidden mb-16">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 lg:p-10">
            {/* Left: Headline */}
            <div className="lg:col-span-7 space-y-2.5">
              <div className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                  Vigyapana Insights
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-[1.75rem] font-bold tracking-tight text-white leading-tight">
                Stay Ahead in Digital Growth & Fundraising
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Join 5,000+ NGO leaders and founders receiving monthly marketing breakdowns and donor conversion strategies.
              </p>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20 text-primary font-medium text-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  <span>You're subscribed! Check your inbox for our latest insights.</span>
                </div>
              ) : (
                <form onSubmit={(e) => { void handleSubscribe(e); }} className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 pointer-events-none" />
                    <input
                      type="email"
                      required
                      placeholder="Your work email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl bg-[#1a201d] border-0 pl-10 pr-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                    />
                  </div>
                  <Button type="submit" variant="default" isLoading={loading} className="shrink-0 gap-2">
                    Subscribe <Send className="h-3.5 w-3.5" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ── Main Footer Links ─────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 border border-primary/20">
                <Sparkles className="h-4.5 w-4.5 text-primary" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                Vigyapana<span className="text-primary">.</span>
              </span>
            </Link>

            <p className="text-sm text-white/45 leading-relaxed max-w-sm">
              India's leading digital growth partner. We empower NGOs with high-ROI fundraising campaigns and help businesses scale through performance marketing.
            </p>

            <div className="space-y-2.5 text-xs text-white/50">
              <div className="flex items-center gap-3">
                <MapPin className="h-3.5 w-3.5 text-primary/70 shrink-0" />
                <span>Noida, Uttar Pradesh / New Delhi, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-3.5 w-3.5 text-primary/70 shrink-0" />
                <a href="mailto:hello@vigyapana.in" className="hover:text-white transition-colors">
                  hello@vigyapana.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-3.5 w-3.5 text-primary/70 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          {/* NGO Solutions */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60 flex items-center gap-2">
              <HeartHandshake className="h-3.5 w-3.5 text-primary" /> NGO Solutions
            </h4>
            <ul className="space-y-2.5 text-sm text-white/45">
              {[
                { label: 'Fundraising Strategy', href: '/ngo-solutions#fundraising' },
                { label: 'Google Ad Grants', href: '/ngo-solutions#ad-grants' },
                { label: 'Meta Donor Ads', href: '/ngo-solutions#meta-ads' },
                { label: 'Donor Journey Funnels', href: '/ngo-solutions#donor-journey' },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contact?type=ngo-audit" className="text-primary hover:underline underline-offset-2 flex items-center gap-1 font-medium">
                  Free NGO Audit <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Solutions */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
              Business
            </h4>
            <ul className="space-y-2.5 text-sm text-white/45">
              {[
                { label: 'Meta & Google Ads', href: '/business-solutions#performance' },
                { label: 'Website Development', href: '/business-solutions#web-dev' },
                { label: 'Graphic & Video Ads', href: '/business-solutions#social-media' },
                { label: 'Search Engine Optimization', href: '/business-solutions#seo' },
                { label: 'All Digital Services', href: '/services' },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-white/45">
              {[
                { label: 'About Vigyapana', href: '/about' },
                { label: 'Portfolio & Work', href: '/about#portfolio' },
                { label: 'Case Studies', href: '/case-studies' },
                { label: 'Articles & Insights', href: '/blog' },
                { label: 'Contact Us', href: '/contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom Legal Bar ──────────────────────────────────── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Vigyapana Services Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-white/70 transition-colors">
              Terms of Service
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/80 hover:text-primary transition-colors font-medium flex items-center gap-1"
            >
              WhatsApp Us <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
