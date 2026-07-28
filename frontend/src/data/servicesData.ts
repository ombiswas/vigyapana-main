export interface ServiceDetail {
  slug: string;
  title: string;
  category: 'Branding & Design' | 'Performance & Ads' | 'Content & Video' | 'Tech & Web';
  badge: string;
  iconName: string;
  summary: string;
  overview: string;
  startingPrice?: number;
  benefits: { title: string; desc: string }[];
  deliverables: string[];
  workflow: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: Record<string, ServiceDetail> = {
  'brand-identity': {
    slug: 'brand-identity',
    title: 'Brand Identity & Positioning',
    category: 'Branding & Design',
    badge: 'Strategic Branding',
    iconName: 'Palette',
    summary: 'Build a unforgettable brand presence with distinct visual guidelines, messaging frameworks, and positioning strategies.',
    overview: 'Our Brand Identity service shapes how your audience perceives your organization. We combine market research, competitor benchmarking, and visual design to craft brand books, typography systems, color palettes, and verbal positioning that stand out in crowded markets.',
    startingPrice: 40000,
    benefits: [
      { title: 'Higher Brand Recall', desc: 'Consistent visual touchpoints across web, social, and print increase customer trust and recognition.' },
      { title: 'Premium Market Positioning', desc: 'Position your brand to command higher price points or attract major donor partnerships.' },
      { title: 'Scalable Style Guide', desc: 'Empower your internal team with a comprehensive brand book for seamless content creation.' },
    ],
    deliverables: ['Full Brand Style Guide (PDF)', 'Logo Suite & Mark Variations', 'Typography & Color Hierarchy', 'Stationery & Presentation Templates'],
    workflow: [
      { step: '01', title: 'Brand Audit & Research', desc: 'We analyze your target market, audience personas, and industry competitors.' },
      { step: '02', title: 'Concept & Positioning', desc: 'Developing core brand pillars, tone of voice, and visual direction concepts.' },
      { step: '03', title: 'Design & Guideline Build', desc: 'Crafting logo systems, color palettes, typography, and application mockups.' },
      { step: '04', title: 'Delivery & Asset Handoff', desc: 'Exporting vector logo suites, brand books, and digital asset templates.' },
    ],
    faqs: [
      { question: 'How long does a brand identity project take?', answer: 'Typical brand identity projects take between 2 to 4 weeks depending on the number of brand collateral assets required.' },
      { question: 'Do you provide editable vector files?', answer: 'Yes, we provide full AI, EPS, SVG, PNG, and PDF source files along with usage guidelines.' },
    ],
  },

  'logo-design': {
    slug: 'logo-design',
    title: 'Custom Logo Design',
    category: 'Branding & Design',
    badge: 'Visual Identity',
    iconName: 'Sparkles',
    summary: 'Distinctive, vector-crafted logos designed to embody your company or NGO core values across all digital and print mediums.',
    overview: 'Your logo is the primary visual anchor of your organization. We design iconic, memorable logos that look stunning on everything from mobile screens to giant billboards and donor impact reports.',
    startingPrice: 20000,
    benefits: [
      { title: 'Memorable First Impressions', desc: 'Instantly communicate quality, reliability, and modern aesthetic to new visitors.' },
      { title: 'Versatile Across Formats', desc: 'Tested across dark/light backgrounds, small app icons, and large print banners.' },
    ],
    deliverables: ['Primary & Secondary Logo Marks', 'App Icon & Favicon Suite', 'Monochrome & Vector Formats'],
    workflow: [
      { step: '01', title: 'Briefing', desc: 'Understanding your mission, audience, and aesthetic preferences.' },
      { step: '02', title: 'Sketching Concepts', desc: 'Presenting 3 to 4 distinct conceptual directions.' },
      { step: '03', title: 'Refinement', desc: 'Polishing your chosen design with precision geometry and color.' },
    ],
    faqs: [
      { question: 'How many logo concepts will we receive?', answer: 'You will receive 3 to 4 distinct initial concepts, followed by unlimited revisions on the selected mark.' },
    ],
  },

  'graphic-design': {
    slug: 'graphic-design',
    title: 'Graphic & Marketing Design',
    category: 'Branding & Design',
    badge: 'Visual Collateral',
    iconName: 'Layout',
    summary: 'High-converting ad graphics, brochures, pitch decks, and social media banners crafted by senior visual designers.',
    overview: 'From eye-catching ad banners that stop the scroll to annual NGO reports and investor pitch decks, our design team produces polished graphic assets that drive engagement.',
    startingPrice: 25000,
    benefits: [
      { title: 'Scroll-Stopping Ad Creatives', desc: 'Higher click-through rates (CTR) on Meta and Google display ad campaigns.' },
      { title: 'Investor & Donor Pitch Decks', desc: 'Professional slide decks that convey credibility and complex data clearly.' },
    ],
    deliverables: ['Social Media Ad Banners', 'Pitch Decks & Presentation Slides', 'Brochures & Annual Reports'],
    workflow: [
      { step: '01', title: 'Asset Request', desc: 'Defining dimensions, copy, and visual references for the graphics.' },
      { step: '02', title: 'Creative Execution', desc: 'Designing high-resolution graphics using brand guidelines.' },
      { step: '03', title: 'Review & Handoff', desc: 'Delivering web-optimized and print-ready files.' },
    ],
    faqs: [
      { question: 'Can we hire you on a monthly retainer for continuous design?', answer: 'Yes! We offer monthly design retainers for ongoing social media and ad creative needs.' },
    ],
  },

  'social-media': {
    slug: 'social-media',
    title: 'Social Media Management',
    category: 'Content & Video',
    badge: 'Organic Growth',
    iconName: 'Share2',
    summary: 'Turn your social channels into community hubs with strategic content planning, graphic posts, Reels, and active engagement.',
    overview: 'We manage your presence across Instagram, LinkedIn, Facebook, and Twitter. Our social team plans monthly content calendars, writes engaging captions, designs custom graphics, and monitors community interactions to build brand authority.',
    startingPrice: 30000,
    benefits: [
      { title: 'Consistent Community Presence', desc: 'Never worry about empty profiles or delayed post schedules.' },
      { title: 'Organically Qualified Leads', desc: 'Attract donors and clients who align with your brand values.' },
    ],
    deliverables: ['Monthly Content Calendar', '15-20 Custom Posts / Carousel Graphic Sets', 'Caption Writing & Hashtag Research', 'Community Engagement & Monthly Analytics'],
    workflow: [
      { step: '01', title: 'Pillar Strategy', desc: 'Defining content buckets (Educational, Impact, Promotional, Behind-The-Scenes).' },
      { step: '02', title: 'Creation & Approval', desc: 'Designing visuals and drafting captions for client review.' },
      { step: '03', title: 'Scheduling & Growth', desc: 'Publishing at peak engagement hours and analyzing post reach.' },
    ],
    faqs: [
      { question: 'Which platforms do you manage?', answer: 'We manage Instagram, LinkedIn, Facebook, Twitter (X), and YouTube community tabs.' },
    ],
  },

  'content-strategy': {
    slug: 'content-strategy',
    title: 'Content Strategy & Copywriting',
    category: 'Content & Video',
    badge: 'Conversion Copy',
    iconName: 'FileText',
    summary: 'Compelling storytelling and persuasive copywriting for websites, landing pages, email campaigns, and NGO donor appeals.',
    overview: 'Great design needs powerful copy. We write conversion-focused website copy, email sequences, ad copy, and donor appeals that resonate emotionally and drive readers to take action.',
    startingPrice: 25000,
    benefits: [
      { title: 'Higher Conversion Rates', desc: 'Persuasive headlines and clear call-to-actions that turn readers into buyers/donors.' },
      { title: 'SEO-Optimized Copy', desc: 'Seamless keyword integration that ranks naturally on search engine result pages.' },
    ],
    deliverables: ['Landing Page & Website Copy', 'Email Lead Nurture Sequences', 'Direct-Response Ad Copy'],
    workflow: [
      { step: '01', title: 'Audience Research', desc: 'Understanding customer pain points, desires, and donor motivations.' },
      { step: '02', title: 'Copy Drafting', desc: 'Writing punchy, benefit-driven headlines and clear body copy.' },
      { step: '03', title: 'Optimization', desc: 'Refining tone of voice and aligning with SEO target keywords.' },
    ],
    faqs: [
      { question: 'Do you write donor appeal letters for NGOs?', answer: 'Yes! We craft emotionally resonant fundraising appeals for online donation pages and direct mailers.' },
    ],
  },

  'video-editing': {
    slug: 'video-editing',
    title: 'Short-Form Video Editing (Reels/Shorts)',
    category: 'Content & Video',
    badge: 'Viral Video',
    iconName: 'Video',
    summary: 'Turn raw footage into engaging Instagram Reels, YouTube Shorts, and TikTok video ads with dynamic captions and sound design.',
    overview: 'Short-form video is the #1 driver of organic reach today. Our video editors add kinetic captions, sound effects, B-roll overlays, and pacing that hold viewer attention from the first second.',
    startingPrice: 25000,
    benefits: [
      { title: 'Massive Organic Reach', desc: 'Capitalize on algorithm recommendation feeds across Instagram Reels and YouTube Shorts.' },
      { title: 'Higher Ad Engagement', desc: 'Dynamic video ads deliver lower cost-per-click compared to static images.' },
    ],
    deliverables: ['10-15 Edited Short Videos / Month', 'Kinetic Subtitles & Sound Design', 'Hook Optimization & Visual Effects'],
    workflow: [
      { step: '01', title: 'Raw Footage Handoff', desc: 'Client uploads raw video clips or voiceovers.' },
      { step: '02', title: 'Editing & Captions', desc: 'Trimming fluff, adding captions, B-roll, and background music.' },
      { step: '03', title: 'Export & Delivery', desc: 'Delivering 9:16 vertical MP4 files ready for instant posting.' },
    ],
    faqs: [
      { question: 'What is the turnaround time for edited Reels?', answer: 'Standard turnaround is 48-72 hours per video batch.' },
    ],
  },

  'video-production': {
    slug: 'video-production',
    title: 'Commercial Video Production',
    category: 'Content & Video',
    badge: 'Full Production',
    iconName: 'Film',
    summary: 'End-to-end video shoots for brand commercials, NGO impact documentaries, founder interviews, and product promos.',
    overview: 'From scripting and storyboard creation to multi-camera cinema shoots and color grading, our video production team delivers broadcast-quality video content.',
    startingPrice: 75000,
    benefits: [
      { title: 'Cinema-Quality Storytelling', desc: 'Evoke trust and emotional resonance with 4K cinematography and professional lighting.' },
      { title: 'Multi-Purpose Asset Library', desc: 'Repurpose one shoot into hero website videos, social reels, and ad snippets.' },
    ],
    deliverables: ['Script & Storyboard', 'Full-Day Cinema Production Shoot', '4K Final Master Video + Social Cutdowns'],
    workflow: [
      { step: '01', title: 'Pre-Production', desc: 'Concept development, scripting, location scouting, and talent casting.' },
      { step: '02', title: 'Production Shoot', desc: 'On-location filming with cinema cameras, audio recording, and lighting.' },
      { step: '03', title: 'Post-Production', desc: 'Color grading, audio mixing, music licensing, and final edits.' },
    ],
    faqs: [
      { question: 'Do you film on-location across India?', answer: 'Yes! Our camera crews travel across India for NGO impact stories and corporate shoots.' },
    ],
  },

  'motion-graphics': {
    slug: 'motion-graphics',
    title: 'Motion Graphics & 2D/3D Animation',
    category: 'Branding & Design',
    badge: 'Animated Visuals',
    iconName: 'Layers',
    summary: 'Explain complex products, SaaS workflows, or NGO impact metrics with smooth 2D and 3D animated explainer videos.',
    overview: 'Animation breaks down intricate ideas into visual stories that captivate viewers. We create animated explainer videos, logo stings, and UI product walkthroughs.',
    startingPrice: 35000,
    benefits: [
      { title: 'Simplify Complex Products', desc: 'Explain software features or complex non-profit initiatives in under 90 seconds.' },
      { title: 'High Viewer Retention', desc: 'Animated visuals maintain higher completion rates than text-heavy landing pages.' },
    ],
    deliverables: ['Custom 2D/3D Animated Videos', 'Voiceover Recording & Sound FX', 'Animated Logo Ident/Stingers'],
    workflow: [
      { step: '01', title: 'Script & Styleframe', desc: 'Writing the voiceover script and designing visual styleframes.' },
      { step: '02', title: 'Storyboard & Voiceover', desc: 'Creating frame-by-frame sketches and recording professional voiceover.' },
      { step: '03', title: 'Animation & Sound', desc: 'Keyframing character/object movements and adding sound effects.' },
    ],
    faqs: [
      { question: 'What software do you use for animation?', answer: 'We build animations using Adobe After Effects, Cinema 4D, and Blender.' },
    ],
  },

  'influencer-marketing': {
    slug: 'influencer-marketing',
    title: 'Influencer & Creator Marketing',
    category: 'Content & Video',
    badge: 'Creator Campaigns',
    iconName: 'Users',
    summary: 'Connect your brand or NGO with trusted creators for authentic product reviews, unboxings, and fundraising awareness.',
    overview: 'We handle end-to-end creator partnerships — from vetting relevant micro/macro influencers to contract negotiation, brief creation, content approval, and tracking promo code ROI.',
    startingPrice: 50000,
    benefits: [
      { title: 'Authentic Peer Endorsements', desc: 'Tap into established trust between creators and their dedicated follower bases.' },
      { title: 'User-Generated Content (UGC)', desc: 'Obtain rights to use creator videos directly in your Meta ad campaigns.' },
    ],
    deliverables: ['Vetted Creator Roster', 'Campaign Brief & Contract Management', 'UGC Ad Rights & Performance Report'],
    workflow: [
      { step: '01', title: 'Creator Selection', desc: 'Vetting influencers for fake followers, engagement rate, and niche alignment.' },
      { step: '02', title: 'Briefing & Product Delivery', desc: 'Sending briefs and products to creators for content production.' },
      { step: '03', title: 'Content Launch & Amplification', desc: 'Coordinating post schedules and running boosted creator ads.' },
    ],
    faqs: [
      { question: 'Do you work with micro-influencers?', answer: 'Yes! Micro-influencers (10k-50k followers) often deliver 3x higher engagement and better ROI for niche brands.' },
    ],
  },

  'performance-marketing': {
    slug: 'performance-marketing',
    title: 'Performance Marketing (Paid Ads)',
    category: 'Performance & Ads',
    badge: 'High-ROAS Campaigns',
    iconName: 'TrendingUp',
    summary: 'Data-driven paid ad management across Meta, Google, and LinkedIn engineered to maximize revenue and lower acquisition costs.',
    overview: 'Performance marketing is at the core of Vigyapana. We manage full-funnel ad campaigns — combining audience segmentation, creative A/B testing, dynamic retargeting, and server-side tracking to achieve high Return on Ad Spend.',
    startingPrice: 35000,
    benefits: [
      { title: 'Scalable Revenue Engine', desc: 'Predictably scale daily ad spend while maintaining profitability benchmarks.' },
      { title: 'Server-Side Conversions API', desc: 'Bypass iOS privacy restrictions with robust Conversion API tracking.' },
    ],
    deliverables: ['Meta & Google Ad Account Audit', 'Custom Campaign Architecture', 'Ad Copy & Creative Production', 'Live KPI Dashboard & Weekly Calls'],
    workflow: [
      { step: '01', title: 'Pixel & CAPI Audit', desc: 'Ensuring 100% accurate conversion data tracking.' },
      { step: '02', title: 'Creative Testing Phase', desc: 'Testing 5-10 ad variations (hooks, copy, angles) to identify winners.' },
      { step: '03', title: 'Scaling & Optimization', desc: 'Increasing budget on winning ad sets and pruning low performers.' },
    ],
    faqs: [
      { question: 'What ad spend budget do you recommend starting with?', answer: 'We recommend starting with a minimum ad budget of ₹30,000/month for testing and scaling.' },
    ],
  },

  'meta-ads': {
    slug: 'meta-ads',
    title: 'Meta & Instagram Ads',
    category: 'Performance & Ads',
    badge: 'Social Commerce',
    iconName: 'HeartHandshake',
    summary: 'Targeted Facebook & Instagram ad campaigns optimized for D2C sales, B2B lead generation, and NGO donor acquisitions.',
    overview: 'Meta Ads remain the most powerful tool for impulse purchases, donor appeals, and brand awareness. We write direct-response copy, design high-CTR image/video ads, and build custom lookalike audiences.',
    startingPrice: 30000,
    benefits: [
      { title: 'Precise Demographic Targeting', desc: 'Reach donors and buyers based on interests, behaviors, and lookalike modeling.' },
      { title: 'High-CTR Visual Creatives', desc: 'Custom video ads and carousel graphics designed to stop the thumb scroll.' },
    ],
    deliverables: ['Custom Campaign Structure', 'A/B Creative & Angle Testing', 'Lookalike & Retargeting Audiences'],
    workflow: [
      { step: '01', title: 'Audience Mapping', desc: 'Identifying core customer avatars and donor demographics.' },
      { step: '02', title: 'Creative Production', desc: 'Designing high-impact video and carousel ad assets.' },
      { step: '03', title: 'Daily Optimization', desc: 'Adjusting bids, audience parameters, and budget allocation.' },
    ],
    faqs: [
      { question: 'Do Meta Ads work for NGO fundraising?', answer: 'Absolutely! Meta Ads are our top channel for generating single and monthly recurring NGO donations in India.' },
    ],
  },

  'google-ads': {
    slug: 'google-ads',
    title: 'Google Search & Shopping Ads',
    category: 'Performance & Ads',
    badge: 'High-Intent Traffic',
    iconName: 'Award',
    summary: 'Capture high-intent search traffic on Google Search, Shopping, YouTube, and Display networks with high conversion rates.',
    overview: 'When users search on Google, they have clear intent. We build tightly targeted keyword campaigns, negative keyword lists, and high-converting landing page extensions to capture users ready to donate or buy.',
    startingPrice: 30000,
    benefits: [
      { title: 'Capture High-Intent Buyers', desc: 'Show up at the exact moment customers search for your product or cause.' },
      { title: 'Google Ad Grants Expertise', desc: 'Specialized setup for NGOs to utilize $10,000/mo in free Google search credits.' },
    ],
    deliverables: ['Keyword & Match Type Strategy', 'Negative Keyword Exclusions', 'Ad Extension & Responsive Search Ads'],
    workflow: [
      { step: '01', title: 'Keyword Research', desc: 'Identifying commercial and donor search queries with high conversion intent.' },
      { step: '02', title: 'Campaign Setup', desc: 'Structuring Single Keyword Ad Groups (SKAGs) and responsive search ads.' },
      { step: '03', title: 'Bid Management', desc: 'Optimizing target CPA and Target ROAS bidding strategies.' },
    ],
    faqs: [
      { question: 'Can you manage our existing Google Ad Grant account?', answer: 'Yes! We audit existing non-compliant Ad Grant accounts and restore 100% policy compliance.' },
    ],
  },

  'website-development': {
    slug: 'website-development',
    title: 'High-Conversion Web & App Development',
    category: 'Tech & Web',
    badge: 'Modern Web Tech',
    iconName: 'Code',
    summary: 'Lightning-fast Next.js, React, and Tailwind CSS websites engineered for high speed, SEO, and maximum conversion rates.',
    overview: 'A slow or poorly designed website kills your ad conversions. We build modern, sub-second loading web applications with integrated payment gateways (Razorpay, Stripe, UPI), automated 80G tax receipts for NGOs, and seamless admin CMS controls.',
    startingPrice: 45000,
    benefits: [
      { title: 'Sub-Second Page Load Speed', desc: 'Fast loading speeds reduce bounce rate and boost Google search rankings.' },
      { title: 'Seamless Payment Integration', desc: 'Accept UPI, Credit Cards, Netbanking, and international currencies effortlessly.' },
      { title: 'Mobile-First UI/UX Design', desc: 'Optimized for 90%+ of mobile traffic with intuitive tap targets.' },
    ],
    deliverables: ['Custom UI/UX Figma Design', 'Next.js / React Web Application', 'Integrated Payment Gateways & Admin CMS', 'Full On-Page SEO & Speed Optimization'],
    workflow: [
      { step: '01', title: 'Wireframing & UI Design', desc: 'Creating interactive Figma prototypes tailored for conversion.' },
      { step: '02', title: 'Frontend & API Build', desc: 'Developing clean, type-safe Next.js code with responsive CSS.' },
      { step: '03', title: 'Testing & Launch', desc: 'Speed auditing, payment gateway testing, and server deployment.' },
    ],
    faqs: [
      { question: 'Will we be able to edit text and content ourselves?', answer: 'Yes! We integrate easy-to-use CMS admin controls so you can update blogs, services, and team members.' },
    ],
  },
};
