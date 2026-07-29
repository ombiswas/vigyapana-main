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
    <footer className="section-alt pt-20 pb-12 border-t section-alt-border relative overflow-hidden">
      {/* Background Glow Overlay */}
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

      <Container>
        {/* Top Newsletter CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-primary/10 via-background to-accent/10 border section-alt-border p-8 lg:p-12 mb-16 relative overflow-hidden backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" />
                Vigyapana Insights
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                Stay Ahead in Digital Growth & Fundraising
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Join 5,000+ NGO leaders and business founders receiving our monthly marketing breakdowns and donor conversion strategies.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-medium">
                  <CheckCircle2 className="h-6 w-6 shrink-0" />
                  <span>You&apos;re subscribed! Check your inbox for our latest insights.</span>
                </div>
              ) : (
                <form onSubmit={(e) => { void handleSubscribe(e); }} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 rounded-xl section-alt-input px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                  <Button type="submit" variant="accent" isLoading={loading} className="shrink-0">
                    Subscribe <Send className="h-4 w-4 ml-1" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b section-alt-border">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-accent shadow-lg shadow-primary/30">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-foreground">
                Vigyapana<span className="text-accent">.</span>
              </span>
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Vigyapana Services Pvt. Ltd. is India’s leading digital growth partner. We empower NGOs with high-ROI fundraising campaigns and help businesses scale through performance marketing.
            </p>

            <div className="space-y-2.5 text-xs text-foreground/80">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent shrink-0" />
                <span>Noida, Uttar Pradesh / New Delhi, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:hello@vigyapana.in" className="hover:text-white transition-colors">
                  hello@vigyapana.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          {/* NGO Solutions */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground flex items-center gap-2">
              <HeartHandshake className="h-4 w-4 text-accent" /> NGO Solutions
            </h4>
            <ul className="space-y-2.5 text-sm section-alt-muted">
              <li>
                <Link to="/ngo-solutions#fundraising" className="hover:text-white transition-colors">
                  Fundraising Strategy
                </Link>
              </li>
              <li>
                <Link to="/ngo-solutions#ad-grants" className="hover:text-white transition-colors">
                  Google Ad Grants
                </Link>
              </li>
              <li>
                <Link to="/ngo-solutions#meta-ads" className="hover:text-white transition-colors">
                  Meta Donor Ads
                </Link>
              </li>
              <li>
                <Link to="/ngo-solutions#donor-journey" className="hover:text-white transition-colors">
                  Donor Journey Funnels
                </Link>
              </li>
              <li>
                <Link to="/contact?type=ngo-audit" className="text-accent hover:underline flex items-center gap-1 font-medium">
                  Free NGO Audit <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Solutions */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Business Solutions
            </h4>
            <ul className="space-y-2.5 text-sm section-alt-muted">
              <li>
                <Link to="/business-solutions#performance" className="hover:text-white transition-colors">
                  Meta & Google Ads
                </Link>
              </li>
              <li>
                <Link to="/business-solutions#web-dev" className="hover:text-white transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/business-solutions#social-media" className="hover:text-white transition-colors">
                  Graphic & Video Ads
                </Link>
              </li>
              <li>
                <Link to="/business-solutions#seo" className="hover:text-white transition-colors">
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  All Digital Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm section-alt-muted">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Vigyapana
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">
                  Portfolio & Client Work
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Articles & Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Vigyapana Services Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium flex items-center gap-1"
            >
              WhatsApp Us <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
