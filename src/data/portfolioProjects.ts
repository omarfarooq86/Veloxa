export interface PortfolioProject {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  client: string;
  timeline: string;
  services: string[];
  results: { metric: string; label: string }[];
  challenge: string;
  solution: string;
  impact: string;
  contentImages: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'fintech-dashboard-redesign',
    title: 'FinTech Dashboard Re-design',
    category: 'Web Design & Development',
    description: 'A complete overhaul of a legacy financial dashboard, resulting in a 40% increase in user retention and significantly faster load times.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80',
    client: 'Vaulta Financial',
    timeline: '12 Weeks',
    services: ['UX/UI Design', 'Frontend Development', 'User Testing'],
    results: [
      { metric: '40%', label: 'Increase in User Retention' },
      { metric: '1.2s', label: 'Average Load Time' },
      { metric: '65%', label: 'Reduction in Support Tickets' }
    ],
    challenge: `Vaulta Financial's legacy web application was severely outdated. Built on an aging tech stack, the interface was cluttered, slow, and non-intuitive, leading to high user churn and a massive influx of support tickets. Users were struggling to find basic account information, and the onboarding process for new features was virtually non-existent. Vaulta needed a complete architectural and visual rebuild to stay competitive in the rapidly evolving fintech space.`,
    solution: `We initiated the project with an intensive two-week discovery phase, conducting user interviews and analyzing heatmaps to identify primary friction points. We then rebuilt the platform's frontend using React and a modular component system. The new interface introduced a clean, dark-mode-first aesthetic with customizable widget dashboards, allowing users to prioritize the financial metrics most relevant to them. We also implemented a subtle micro-animation system to guide users through complex transactions without feeling overwhelmed.`,
    impact: `The redesigned dashboard launched to overwhelmingly positive feedback from Vaulta's user base. The streamlined architecture cut initial load times down to 1.2 seconds. Most importantly, the intuitive new layout empowered users to resolve their own issues, resulting in a 65% drop in UI-related support tickets within the first month.`,
    contentImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=800&q=80'
    ]
  },
  {
    slug: 'omnichannel-saas-campaign',
    title: 'Omnichannel SaaS Campaign',
    category: 'Digital Marketing',
    description: 'Generated a 300% increase in qualified leads for a B2B SaaS company through targeted LinkedIn ads and automated email funnels.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    client: 'Lumina Tech',
    timeline: '6 Months',
    services: ['Performance Marketing', 'Lead Generation', 'Email Automation'],
    results: [
      { metric: '300%', label: 'Increase in MQLs' },
      { metric: '60%', label: 'Lower Cost Per Acquisition' },
      { metric: '$2.4M', label: 'Pipeline Generated' }
    ],
    challenge: `Lumina Tech possessed a powerful enterprise software product, but their sales pipeline was drying up. Their existing marketing efforts relied heavily on broad Google Search campaigns that were driving high traffic but yielding low-quality, unqualified leads. They needed a hyper-targeted strategy to reach C-level decision-makers in the logistics sector.`,
    solution: `We pivoted Lumina's entire acquisition strategy. First, we developed three high-value gated assets (whitepapers and proprietary data reports) tailored specifically to the pain points of logistics executives. We then launched highly segmented LinkedIn account-based marketing (ABM) campaigns targeting specific job titles within a curated list of 500 target accounts. Once a prospect engaged, they were entered into a sophisticated, 5-touchpoint automated email nurture sequence designed to educate and qualify them before a sales rep reached out.`,
    impact: `By shifting the focus from quantity to absolute quality, the results were dramatic. While total traffic decreased, the conversion rate skyrocketed. We generated over $2.4M in qualified sales pipeline within six months, while simultaneously slashing their overall cost-per-acquisition by 60%.`,
    contentImages: [
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80'
    ]
  },
  {
    slug: 'eco-brand-identity',
    title: 'Eco-Brand Identity',
    category: 'Creative Branding',
    description: 'Developed a cohesive, modern visual identity and packaging design for a sustainable startup, securing national retail placement.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80',
    client: 'Aura Botanics',
    timeline: '8 Weeks',
    services: ['Brand Identity', 'Packaging Design', 'Brand Guidelines'],
    results: [
      { metric: '12', label: 'National Retail Partners Secured' },
      { metric: '150%', label: 'Increase in Social Engagement' },
      { metric: 'Award', label: 'Design Excellence 2025' }
    ],
    challenge: `Aura Botanics had a phenomenal, sustainably sourced skincare product, but their branding was holding them back. Their homemade, rustic logo and inconsistent packaging made it difficult for high-end retailers to take them seriously. They needed a brand identity that communicated both their commitment to the environment and their premium market positioning.`,
    solution: `We stepped away from the clichéd "green leaf" eco-branding and developed a sophisticated, minimalist identity centered around earthy terracotta and deep ocean hues. We designed a custom, elegant serif logotype and created a comprehensive packaging system utilizing 100% recycled, textured paper stocks. The design language was then codified into a strict set of brand guidelines to ensure consistency across their website, social media, and physical retail displays.`,
    impact: `The rebrand elevated Aura Botanics from a niche farmer's market product to a premium retail brand. Within three months of the relaunch, the company secured placement in 12 national boutique retail chains. The new visual direction also resonated deeply with their online audience, driving a 150% increase in organic social media engagement.`,
    contentImages: [
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80',
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80'
    ]
  },
  {
    slug: 'global-ecommerce-seo',
    title: 'Global E-commerce SEO',
    category: 'SEO & Technical',
    description: 'Scaled organic traffic by 150% in 6 months for a global apparel brand by optimizing technical architecture and producing localized content.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    client: 'Thread & Co.',
    timeline: 'Ongoing',
    services: ['Technical SEO', 'Content Strategy', 'International SEO'],
    results: [
      { metric: '150%', label: 'Organic Traffic Growth' },
      { metric: '#1', label: 'Ranking for 45 Core Keywords' },
      { metric: '210%', label: 'Increase in Non-Branded Search Revenue' }
    ],
    challenge: `Thread & Co. was expanding into European markets but failing to gain organic traction outside of the US. Their massive Magento-based store was plagued by duplicate content issues due to poor faceted navigation handling, and they lacked localized content for their new target regions. They were bleeding potential revenue to established local competitors.`,
    solution: `We executed a comprehensive technical overhaul of their e-commerce architecture. We implemented strict canonical tags, optimized their crawl budget by blocking low-value parameter URLs, and deployed proper hreflang tags to serve the correct regional variations of their store. Concurrently, we launched a localized content strategy, rewriting category pages and buying guides to match regional search intent rather than simply translating the English copy.`,
    impact: `The technical cleanup alone resulted in a 40% bump in indexed pages within weeks. Over six months, the localized content strategy took hold, driving a 150% overall increase in international organic traffic. Thread & Co. now dominates the first page for 45 of their most competitive non-branded product keywords across three European markets.`,
    contentImages: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    ]
  },
  {
    slug: 'lifestyle-app-launch',
    title: 'Lifestyle App Launch',
    category: 'UX/UI & Marketing',
    description: 'Designed the mobile application interface and executed the go-to-market strategy, achieving 100k downloads in the first month.',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&q=80',
    client: 'Mindful Moment',
    timeline: '4 Months',
    services: ['App Design', 'Go-To-Market Strategy', 'Influencer Marketing'],
    results: [
      { metric: '100k+', label: 'First Month Downloads' },
      { metric: '4.9', label: 'App Store Rating' },
      { metric: '42%', label: 'Day 7 Retention Rate' }
    ],
    challenge: `The meditation and mindfulness app market is incredibly saturated. When Mindful Moment approached us with their prototype, it was functional but lacked the polish and unique positioning required to stand out. They needed a world-class UI that felt calming rather than clinical, and a launch strategy that could break through the noise of established giants like Headspace and Calm.`,
    solution: `We completely redesigned the app's interface, utilizing a soft, fluid design system with deep, immersive colors and spatial audio cues. For the launch, we bypassed traditional paid search and focused entirely on an influencer-led go-to-market strategy. We partnered with 25 micro-influencers in the wellness and productivity spaces, orchestrating a synchronized launch week where they shared their personal experiences using the beta version of the app.`,
    impact: `The aesthetic and intuitive design of the app earned it an immediate "App of the Day" feature from Apple. Combined with the synchronized influencer push, Mindful Moment achieved over 100,000 downloads in its first 30 days. The frictionless onboarding experience designed by our UX team also resulted in an industry-leading 42% Day 7 retention rate.`,
    contentImages: [
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80'
    ]
  },
  {
    slug: 'b2b-enterprise-portal',
    title: 'B2B Enterprise Portal',
    category: 'Web Development',
    description: 'Engineered a highly secure, scalable React-based enterprise portal handling over 10,000 concurrent active users.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
    client: 'Apex Logistics',
    timeline: '10 Months',
    services: ['Custom Web App', 'System Integration', 'Cloud Architecture'],
    results: [
      { metric: '99.99%', label: 'Uptime Achieved' },
      { metric: '10k+', label: 'Concurrent Users Supported' },
      { metric: '3x', label: 'Faster Data Processing' }
    ],
    challenge: `Apex Logistics managed their global freight forwarding operations through a patchwork of fragmented legacy systems. Their internal teams and external vendor partners were forced to use different portals that rarely communicated in real-time, leading to data silos, severe operational delays, and frequent security vulnerabilities. They required a unified, high-performance portal capable of handling massive data throughput securely.`,
    solution: `We architected a custom enterprise application from the ground up using a modern React frontend and a robust Node.js microservices backend, deployed on AWS. We integrated their various legacy databases into a single source of truth using secure APIs. The new portal featured role-based access control (RBAC), real-time WebSocket data streams for live shipment tracking, and a highly optimized data-grid component built to render thousands of rows without browser lag.`,
    impact: `The unified portal transformed Apex's operational efficiency. Data processing speeds tripled, and the reduction in manual data entry saved an estimated 4,000 man-hours per quarter. The platform now securely supports over 10,000 concurrent active users globally while maintaining a flawless 99.99% uptime record.`,
    contentImages: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
    ]
  }
];
