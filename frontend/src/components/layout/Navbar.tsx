import { type FC, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  ChevronDown,
  HeartHandshake,
  Layers,
  Menu,
  PhoneCall,
  Sparkles,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

export const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const lastScrollY = useRef(0);
  const location = useLocation();


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else {
        if (currentScrollY > lastScrollY.current + 5) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY.current - 5) {
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const ngoSolutions = [
    { title: 'Fundraising Strategy', desc: 'Digital donation campaigns & donor funnels', href: '/ngo-solutions#fundraising' },
    { title: 'Google Ad Grants', desc: '$10,000/mo free Google ad management', href: '/ngo-solutions#ad-grants' },
    { title: 'Meta Donation Ads', desc: 'High-ROAS Facebook & Instagram fundraising', href: '/ngo-solutions#meta-ads' },
    { title: 'Donor Journey Automation', desc: 'Email/WhatsApp retention workflows', href: '/ngo-solutions#donor-journey' },
  ];

  const businessSolutions = [
    { title: 'Performance Marketing', desc: 'Meta & Google Ads targeted for sales', href: '/business-solutions#performance' },
    { title: 'Web & App Development', desc: 'High-speed conversion-optimized websites', href: '/business-solutions#web-dev' },
    { title: 'Social Media & Branding', desc: 'Brand identity & viral content strategies', href: '/business-solutions#social-media' },
    { title: 'SEO & Content Marketing', desc: 'Rank #1 on Google organically', href: '/business-solutions#seo' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out transform',
        !isVisible && !mobileMenuOpen ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100',
        isScrolled
          ? 'bg-background/85 backdrop-blur-xl border-b border-border/60 py-3 shadow-md'
          : 'bg-transparent py-5'
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-accent shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              Vigyapana<span className="text-accent">.</span>
            </span>
            <span className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground -mt-1">
              Digital Growth
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            to="/"
            className={cn(
              'px-3.5 py-2 text-sm font-medium rounded-lg transition-colors hover:text-primary hover:bg-primary/5',
              location.pathname === '/' ? 'text-primary font-semibold bg-primary/5' : 'text-foreground/80'
            )}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={cn(
              'px-3.5 py-2 text-sm font-medium rounded-lg transition-colors hover:text-primary hover:bg-primary/5',
              location.pathname === '/about' ? 'text-primary font-semibold bg-primary/5' : 'text-foreground/80'
            )}
          >
            About Us
          </Link>

          {/* NGO Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('ngo')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className={cn(
                'flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors hover:text-primary hover:bg-primary/5',
                location.pathname.startsWith('/ngo-solutions') ? 'text-primary font-semibold bg-primary/5' : 'text-foreground/80'
              )}
            >
              <HeartHandshake className="h-4 w-4 text-accent" />
              <span>NGO Solutions</span>
              <ChevronDown className="h-3.5 w-3.5 opacity-60" />
            </button>

            <AnimatePresence>
              {activeDropdown === 'ngo' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full pt-2 w-80"
                >
                  <div className="rounded-2xl border border-border/80 bg-background/95 backdrop-blur-2xl p-3 shadow-2xl">
                    <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-border/40 mb-1">
                      NGO Growth & Fundraising
                    </div>
                    {ngoSolutions.map((item) => (
                      <Link
                        key={item.title}
                        to={item.href}
                        className="flex flex-col p-2.5 rounded-xl hover:bg-primary/10 transition-colors group"
                      >
                        <span className="text-sm font-semibold text-foreground group-hover:text-primary">
                          {item.title}
                        </span>
                        <span className="text-xs text-muted-foreground mt-0.5">
                          {item.desc}
                        </span>
                      </Link>
                    ))}
                    <div className="mt-2 pt-2 border-t border-border/40 text-center">
                      <Link
                        to="/ngo-solutions"
                        className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                      >
                        Explore All NGO Solutions <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Business Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('business')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className={cn(
                'flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors hover:text-primary hover:bg-primary/5',
                location.pathname.startsWith('/business-solutions') ? 'text-primary font-semibold bg-primary/5' : 'text-foreground/80'
              )}
            >
              <Briefcase className="h-4 w-4 text-primary" />
              <span>Business Solutions</span>
              <ChevronDown className="h-3.5 w-3.5 opacity-60" />
            </button>

            <AnimatePresence>
              {activeDropdown === 'business' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full pt-2 w-80"
                >
                  <div className="rounded-2xl border border-border/80 bg-background/95 backdrop-blur-2xl p-3 shadow-2xl">
                    <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-border/40 mb-1">
                      Business Scaling & Digital Ads
                    </div>
                    {businessSolutions.map((item) => (
                      <Link
                        key={item.title}
                        to={item.href}
                        className="flex flex-col p-2.5 rounded-xl hover:bg-primary/10 transition-colors group"
                      >
                        <span className="text-sm font-semibold text-foreground group-hover:text-primary">
                          {item.title}
                        </span>
                        <span className="text-xs text-muted-foreground mt-0.5">
                          {item.desc}
                        </span>
                      </Link>
                    ))}
                    <div className="mt-2 pt-2 border-t border-border/40 text-center">
                      <Link
                        to="/business-solutions"
                        className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                      >
                        Explore All Business Solutions <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/portfolio"
            className={cn(
              'px-3.5 py-2 text-sm font-medium rounded-lg transition-colors hover:text-primary hover:bg-primary/5',
              location.pathname.startsWith('/portfolio') ? 'text-primary font-semibold bg-primary/5' : 'text-foreground/80'
            )}
          >
            Portfolio
          </Link>

          <Link
            to="/case-studies"
            className={cn(
              'px-3.5 py-2 text-sm font-medium rounded-lg transition-colors hover:text-primary hover:bg-primary/5',
              location.pathname.startsWith('/case-studies') ? 'text-primary font-semibold bg-primary/5' : 'text-foreground/80'
            )}
          >
            Case Studies
          </Link>

          <Link
            to="/blog"
            className={cn(
              'px-3.5 py-2 text-sm font-medium rounded-lg transition-colors hover:text-primary hover:bg-primary/5',
              location.pathname.startsWith('/blog') ? 'text-primary font-semibold bg-primary/5' : 'text-foreground/80'
            )}
          >
            Blog
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Contact Us Button */}
          <Link to="/contact">
            <Button variant="accent" size="sm" className="shadow-md font-semibold">
              <PhoneCall className="h-3.5 w-3.5 mr-1.5" />
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border border-border bg-background/50 backdrop-blur-sm text-foreground hover:bg-primary/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-2xl border-b border-border px-4 pt-4 pb-6 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="px-4 py-3 rounded-xl font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="px-4 py-3 rounded-xl font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/ngo-solutions"
                className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <HeartHandshake className="h-4 w-4 text-accent" />
                NGO Solutions
              </Link>
              <Link
                to="/business-solutions"
                className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Briefcase className="h-4 w-4 text-primary" />
                Business Solutions
              </Link>
              <Link
                to="/services"
                className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Layers className="h-4 w-4 text-primary" />
                All Services
              </Link>
              <Link
                to="/portfolio"
                className="px-4 py-3 rounded-xl font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                Portfolio & Work
              </Link>
              <Link
                to="/case-studies"
                className="px-4 py-3 rounded-xl font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                Case Studies
              </Link>
              <Link
                to="/blog"
                className="px-4 py-3 rounded-xl font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                Insights & Blog
              </Link>
              <Link
                to="/contact"
                className="px-4 py-3 rounded-xl font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                Contact
              </Link>

              <div className="pt-4 border-t border-border/60 flex flex-col gap-3 mt-2">
                <Link to="/contact" className="w-full">
                  <Button variant="accent" className="w-full justify-center font-semibold">
                    <PhoneCall className="h-4 w-4 mr-2" />
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

