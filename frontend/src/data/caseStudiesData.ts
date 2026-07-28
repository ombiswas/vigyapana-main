export interface CaseStudyData {
  slug: string;
  title: string;
  clientName: string;
  clientLogo?: string;
  industry: string;
  category: 'NGO Fundraising' | 'E-commerce Scaling' | 'B2B Lead Generation' | 'Healthcare Growth';
  duration: string;
  heroSummary: string;
  challenge: {
    description: string;
    keyPainPoints: string[];
  };
  strategy: {
    headline: string;
    pillars: { title: string; description: string }[];
  };
  execution: {
    steps: { phase: string; title: string; description: string }[];
  };
  timeline: { date: string; milestone: string }[];
  metrics: { label: string; value: string; growth: string }[];
  graphData: { label: string; beforeValue: number; afterValue: number; unit: string }[];
  beforeAfter: {
    metric: string;
    before: string;
    after: string;
    improvement: string;
  }[];
  results: {
    headline: string;
    summary: string;
    points: string[];
  };
  gallery: { url: string; title: string }[];
  testimonial: {
    quote: string;
    authorName: string;
    authorRole: string;
    avatarUrl: string;
  };
}

export const caseStudiesData: Record<string, CaseStudyData> = {
  'ngo-healthcare-fundraising-surge': {
    slug: 'ngo-healthcare-fundraising-surge',
    title: 'How Hope Trust Raised ₹1.4 Crores in 6 Months with Google Ad Grants & Meta Ads',
    clientName: 'Hope Trust India',
    industry: 'Child Healthcare Non-Profit',
    category: 'NGO Fundraising',
    duration: '6 Months',
    heroSummary:
      'Engineered an integrated Google Ad Grants and Meta video donation funnel that scaled monthly recurring donors by 310% and unlocked $60,000 in free search ad spend.',
    challenge: {
      description:
        'Hope Trust faced stagnant individual donor growth. Their legacy website suffered from a 7.2-second mobile load time, causing 80% checkout drop-off rates on UPI and credit card payments.',
      keyPainPoints: [
        '80%+ mobile donor drop-off rate on legacy payment gateway',
        'Google Ad Grant account suspended due to Quality Score drops under 5',
        'High donor acquisition cost (CPD ₹850) eroding fundraising net margins',
      ],
    },
    strategy: {
      headline: 'Omnichannel Donor Funnel Strategy',
      pillars: [
        {
          title: 'Google Ad Grants Restoration',
          description:
            'Audited 300+ keywords, restructured campaigns into SKAGs (Single Keyword Ad Groups), and restored 100% compliance with Google Policy.',
        },
        {
          title: 'High-Converting Next.js Checkout',
          description:
            'Rebuilt the donation page on Next.js, reducing load time to 0.7s with 1-click Razorpay UPI and automated 80G tax receipt PDF generation.',
        },
        {
          title: 'Direct-Response Meta Video Ads',
          description:
            'Produced emotional 30-second beneficiary video stories paired with WhatsApp retargeting automation for donor retention.',
        },
      ],
    },
    execution: {
      steps: [
        {
          phase: 'Phase 1: Month 1',
          title: 'Tech & Compliance Overhaul',
          description: 'Restored Google Ad Grant compliance and launched high-speed Next.js donor landing pages.',
        },
        {
          phase: 'Phase 2: Months 2-3',
          title: 'Meta Video Ad Creative Testing',
          description: 'Tested 12 direct-response video hooks across Meta Feed, Stories, and Reels.',
        },
        {
          phase: 'Phase 3: Months 4-6',
          title: 'Scaling & WhatsApp Retention',
          description: 'Scaled winning ad sets and deployed automated WhatsApp updates to increase monthly recurring subscriptions.',
        },
      ],
    },
    timeline: [
      { date: 'Month 1', milestone: 'Ad Grant restored & Next.js page deployed' },
      { date: 'Month 2', milestone: '₹25 Lakhs raised in first 30 days' },
      { date: 'Month 4', milestone: 'Crossed ₹75 Lakhs in total donations' },
      { date: 'Month 6', milestone: 'Achieved ₹1.41 Crores milestone & 5.2x ROAS' },
    ],
    metrics: [
      { label: 'Total Donations', value: '₹1.41 Cr', growth: '+310%' },
      { label: 'Campaign ROAS', value: '5.2x', growth: '3.1x baseline' },
      { label: 'Cost Per Donation', value: '₹210', growth: '-75% reduction' },
      { label: 'Free Search Credits', value: '$60,000', growth: '100% Grant' },
    ],
    graphData: [
      { label: 'Monthly Donations (₹ Lakhs)', beforeValue: 5.5, afterValue: 24.8, unit: 'L' },
      { label: 'Mobile Page Speed (Score)', beforeValue: 28, afterValue: 99, unit: '/100' },
      { label: 'Cost Per Donation (₹)', beforeValue: 850, afterValue: 210, unit: '₹' },
    ],
    beforeAfter: [
      { metric: 'Monthly Donations Raised', before: '₹5.5 Lakhs/mo', after: '₹24.8 Lakhs/mo', improvement: '+350%' },
      { metric: 'Mobile Page Speed', before: '7.2 seconds', after: '0.7 seconds', improvement: '90% faster' },
      { metric: 'Checkout Conversion Rate', before: '1.8%', after: '7.4%', improvement: '4.1x higher' },
      { metric: 'Cost Per Donation (CPD)', before: '₹850', after: '₹210', improvement: '75% savings' },
    ],
    results: {
      headline: 'Empowered Over 12,000 Individual Donors',
      summary:
        'The campaign enabled Hope Trust to fund critical surgeries for 450+ children across India while building a self-sustaining donor pipeline.',
      points: [
        'Unintentionally generated 45,000+ free Google search clicks via Ad Grants',
        'Increased monthly recurring subscriptions from 120 to 1,450 supporters',
        'Automated 100% of 80G tax receipt distribution via instant email/WhatsApp',
      ],
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
        title: 'High-Converting Mobile Donation Interface',
      },
      {
        url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
        title: 'Beneficiary Impact Video Creative Production',
      },
    ],
    testimonial: {
      quote:
        'Vigyapana delivered results beyond our wildest expectations. Raising ₹1.4 Crores in 6 months allowed us to save hundreds of children. Their technical & ad execution is unparalleled.',
      authorName: 'Ramesh Sharma',
      authorRole: 'Executive Director, Hope Trust India',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    },
  },

  'aura-organic-d2c-scaling': {
    slug: 'aura-organic-d2c-scaling',
    title: 'Scaling Aura Organic D2C Revenue by 240% with Meta CAPI & Creator Ads',
    clientName: 'Aura Organic',
    industry: 'E-commerce & Skincare',
    category: 'E-commerce Scaling',
    duration: '90 Days',
    heroSummary:
      'Re-engineered Meta ad account structure, deployed 15+ User-Generated Content (UGC) video ads, and set up Meta Conversions API (CAPI) to achieve 4.2x blended ROAS.',
    challenge: {
      description:
        'Aura Organic hit a growth plateau at ₹15 Lakhs monthly revenue with Meta ROAS hovering at an unprofitable 1.4x due to iOS privacy signal loss and creative exhaustion.',
      keyPainPoints: [
        '1.4x Meta ROAS eroding profit margins',
        '50%+ ad tracking loss post iOS 14.5 updates',
        'Creative fatigue from running static image ads for 4 consecutive months',
      ],
    },
    strategy: {
      headline: 'Full-Funnel Ad Engineering & Creator Engine',
      pillars: [
        {
          title: 'Meta Conversions API (CAPI)',
          description: 'Configured server-side event tracking to bypass iOS privacy blocks and recover 35%+ lost purchase events.',
        },
        {
          title: 'Creator UGC Ad Pipeline',
          description: 'Partnered with 10 micro-creators to produce authentic skincare routine videos, unboxings, and problem-solution hooks.',
        },
        {
          title: 'Advantage+ Catalog Retargeting',
          description: 'Structured dynamic product ads targeting website cart abandoners with exclusive 10% coupon codes.',
        },
      ],
    },
    execution: {
      steps: [
        {
          phase: 'Days 1-15',
          title: 'Tracking & Creative Briefing',
          description: 'Installed server-side Meta CAPI and scripted 10 creator video briefs.',
        },
        {
          phase: 'Days 16-45',
          title: 'Hook & Angle Testing',
          description: 'Ran 15 creative variations across broad, lookalike, and interest audiences.',
        },
        {
          phase: 'Days 46-90',
          title: 'Aggressive Scale & Retention',
          description: 'Scaled winning ad sets 3x while automating SMS & WhatsApp abandoned cart flows.',
        },
      ],
    },
    timeline: [
      { date: 'Day 15', milestone: 'CAPI tracking live & first UGC videos launched' },
      { date: 'Day 30', milestone: 'ROAS increased from 1.4x to 2.8x' },
      { date: 'Day 60', milestone: 'Monthly revenue crossed ₹35 Lakhs' },
      { date: 'Day 90', milestone: 'Achieved 4.2x ROAS & 240% total revenue growth' },
    ],
    metrics: [
      { label: 'Blended ROAS', value: '4.2x', growth: 'from 1.4x' },
      { label: 'Revenue Growth', value: '+240%', growth: 'in 90 days' },
      { label: 'Cost Per Acquisition', value: '₹340', growth: '-48% CAC' },
      { label: 'Recovered Orders', value: '1,280+', growth: 'via CAPI' },
    ],
    graphData: [
      { label: 'Return on Ad Spend (ROAS)', beforeValue: 1.4, afterValue: 4.2, unit: 'x' },
      { label: 'Monthly Revenue (₹ Lakhs)', beforeValue: 15, afterValue: 51, unit: 'L' },
      { label: 'Customer Acquisition Cost (₹)', beforeValue: 650, afterValue: 340, unit: '₹' },
    ],
    beforeAfter: [
      { metric: 'Campaign ROAS', before: '1.4x', after: '4.2x', improvement: '3x higher' },
      { metric: 'Monthly Revenue', before: '₹15 Lakhs/mo', after: '₹51 Lakhs/mo', improvement: '+240%' },
      { metric: 'Cost Per Acquisition (CAC)', before: '₹650', after: '₹340', improvement: '48% reduction' },
      { metric: 'Ad Tracking Accuracy', before: '52%', after: '94%', improvement: '+42% precision' },
    ],
    results: {
      headline: 'Scaled Monthly Revenue to ₹50+ Lakhs',
      summary:
        'Aura Organic transitioned from a struggling D2C brand into a highly profitable skincare business with predictable customer acquisition.',
      points: [
        'Generated over 6,500 new customer orders in 90 days',
        'Achieved 22% repeat purchase rate via automated email/SMS flows',
        'Built an ongoing pipeline of 20+ creator ad assets per month',
      ],
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
        title: 'Meta Ads Manager Live Performance Dashboard',
      },
      {
        url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
        title: 'UGC Creator Video Ad Content Showcase',
      },
    ],
    testimonial: {
      quote:
        'Vigyapana completely turned our business around. Going from 1.4x to 4.2x ROAS in 90 days gave us the confidence to launch 5 new product lines.',
      authorName: 'Priya Mehta',
      authorRole: 'Co-Founder & CMO, Aura Organic',
      avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    },
  },
};
