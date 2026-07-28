import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  keywords?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  structuredData?: Record<string, any>;
}

const DEFAULT_TITLE = 'Vigyapana Services Pvt. Ltd. | NGO Growth & Digital Marketing Agency';
const DEFAULT_DESCRIPTION =
  'India’s premier digital agency empowering non-profits to unlock $120,000/yr in free Google Search Ad Grants and driving 3.8x+ ROAS for businesses.';
const DEFAULT_OG_IMAGE =
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&h=630&q=80';
const DEFAULT_DOMAIN = 'https://vigyapana.com';

export function SEOHead({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  keywords = 'NGO Fundraising India, Google Ad Grants Management, Meta Ads Agency, Performance Marketing, Next.js Development',
  structuredData,
}: SEOHeadProps) {
  const pageTitle = title ? `${title} | Vigyapana Services` : DEFAULT_TITLE;
  const canonicalUrl = canonical ? `${DEFAULT_DOMAIN}${canonical}` : DEFAULT_DOMAIN;

  const defaultOrganizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Vigyapana Services Pvt. Ltd.',
    url: DEFAULT_DOMAIN,
    logo: `${DEFAULT_DOMAIN}/logo.png`,
    description: DEFAULT_DESCRIPTION,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plot B-14, Sector 62',
      addressLocality: 'Noida',
      addressRegion: 'Uttar Pradesh',
      postalCode: '201309',
      addressCountry: 'IN',
    },
    telephone: '+91 98765 43210',
    priceRange: '₹₹₹',
  };

  const schemaToRender = structuredData ?? defaultOrganizationSchema;

  return (
    <Helmet>
      {/* Title & Basics */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Vigyapana Services" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">{JSON.stringify(schemaToRender)}</script>
    </Helmet>
  );
}
