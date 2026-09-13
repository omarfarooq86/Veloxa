export interface PortfolioProject {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  client: string;
  timeline: string;
  url?: string;
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
    slug: 'bazaarnow-marketplace',
    title: 'BazaarNow Marketplace',
    category: 'E-commerce Development',
    description: 'Designed and developed a full-featured multi-category online marketplace, scaling to 1,400+ products, 100+ cities, and nationwide delivery across Pakistan.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
    client: 'BazaarNow',
    timeline: '14 Weeks',
    url: 'https://www.bazaarnow.net',
    services: ['E-commerce Development', 'UI/UX Design', 'Payment Integration', 'SEO'],
    results: [
      { metric: '1,419+', label: 'Products Listed at Launch' },
      { metric: '100+', label: 'Cities Served' },
      { metric: '7', label: 'Product Categories' }
    ],
    challenge: `BazaarNow came to us with a vision: to build Pakistan's most trusted online marketplace that could compete with established international platforms while remaining distinctly Pakistani. They needed a scalable, mobile-first e-commerce platform that could support multiple vendors, integrate local payment gateways like JazzCash and EasyPaisa, and handle nationwide logistics — all while loading fast on Pakistan's diverse range of devices and network conditions.`,
    solution: `We architected a high-performance Next.js e-commerce platform with a modular component system for easy category scaling. The site was built mobile-first with aggressive image optimization, lazy loading, and a lightweight CSS framework to ensure sub-3-second loads even on 3G connections. We integrated COD, JazzCash, and EasyPaisa payment gateways natively, and built a custom order-tracking dashboard. The SEO architecture included programmatic category pages, rich product snippets, and a fully optimized blog engine to capture long-tail search traffic across electronics, fashion, beauty, and home & living categories.`,
    impact: `BazaarNow launched with 1,419 products across 7 categories and immediately began serving customers in over 100 cities. The mobile-first design drove a 68% mobile conversion rate, and the local payment integrations removed friction for cash-preferred customers. Within the first quarter, organic search became the #1 traffic source, outperforming paid channels by 3x.`,
    contentImages: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80'
    ]
  },
  {
    slug: 'casewalay-ecommerce',
    title: 'CaseWalay E-commerce',
    category: 'E-commerce & Digital Marketing',
    description: 'Built a premium phone case brand from scratch — complete e-commerce site, WhatsApp-first ordering flow, and SEO strategy that captured the Pakistani mobile accessories market.',
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=1200&q=80',
    client: 'CaseWalay',
    timeline: '8 Weeks',
    url: 'https://casewalay.com',
    services: ['E-commerce Development', 'Brand Identity', 'WhatsApp Commerce', 'SEO'],
    results: [
      { metric: '8', label: 'Phone Brands Supported' },
      { metric: '85%', label: 'Orders via WhatsApp' },
      { metric: '#1', label: 'Ranking for "Phone Cases Pakistan"' }
    ],
    challenge: `CaseWalay needed to carve out a niche in Pakistan's competitive phone accessories market. The key challenge was unique: most Pakistani consumers prefer ordering via WhatsApp rather than traditional e-commerce checkouts. The site needed to function as both a beautiful product catalog and a seamless bridge to WhatsApp ordering, while still maintaining strong SEO performance to capture search demand for phone cases across every major brand — iPhone, Samsung, OnePlus, Xiaomi, Oppo, and Vivo.`,
    solution: `We designed a visually rich, brand-forward e-commerce experience with crystal-clear product photography and intuitive brand-based navigation. Each phone model page was built with SEO-optimized content, schema markup, and high-quality lifestyle imagery. The innovative "Order on WhatsApp" flow pre-populates the customer's selected model, color, and quantity into a WhatsApp message, creating a frictionless ordering experience. We also implemented a dynamic inventory system that allows CaseWalay to manage hundreds of SKUs across multiple brands without admin overhead.`,
    impact: `The WhatsApp-first ordering model proved to be a massive competitive advantage — 85% of all orders flow through WhatsApp, with an average response-to-order time of under 3 minutes. The SEO strategy secured the #1 ranking for "phone cases Pakistan" and top-3 positions for brand-specific queries. CaseWalay launched with 8 major phone brands covered and has since expanded to serve the entire Pakistani smartphone market.`,
    contentImages: [
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80',
      'https://images.unsplash.com/photo-1535157412991-2ef801c1748b?w=800&q=80'
    ]
  },
  {
    slug: 'customdesignsnow-ecommerce',
    title: 'Custom Designs Now',
    category: 'E-commerce & Branding',
    description: 'Launched a premium custom mug brand with a complete e-commerce site, brand identity, and content strategy — free delivery nationwide with local payment integration.',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=1200&q=80',
    client: 'Custom Designs Now',
    timeline: '6 Weeks',
    url: 'https://www.customdesignsnow.com',
    services: ['E-commerce Development', 'Brand Identity', 'Content Strategy', 'Payment Integration'],
    results: [
      { metric: '5', label: 'Design Categories Launched' },
      { metric: '100%', label: 'Nationwide Delivery Coverage' },
      { metric: '40%', label: 'Return Customer Rate' }
    ],
    challenge: `Custom Designs Now wanted to transform Pakistan's gifting culture by making premium custom mugs accessible to everyone. The challenge was twofold: first, design a brand and e-commerce experience that elevated custom mugs from a commodity to a premium, gift-worthy product; second, build a site that could beautifully showcase five distinct design categories — typographic, photo, minimalist, Islamic, and Pakistani culture — each with its own visual identity and target audience.`,
    solution: `We crafted a warm, inviting brand identity with a custom logo, curated color palette, and consistent typography that communicated premium quality without feeling unapproachable. The e-commerce site was built with a shop-by-design-category architecture, each category featuring its own curated landing page with lifestyle photography and targeted copy. We integrated WhatsApp ordering alongside COD, JazzCash, and EasyPaisa payment options. A content-rich blog was launched to capture gift-idea search traffic, and every product page was armed with structured data for rich search results.`,
    impact: `The brand resonated immediately with Pakistani consumers. The category-based shopping architecture improved average session duration by 2.5x compared to a standard product grid. Free nationwide delivery and local payment options eliminated all purchase barriers, contributing to a 40% return customer rate. The site now ranks on the first page for high-intent searches like "custom mugs Pakistan" and "personalized gifts Pakistan," driving consistent organic revenue.`,
    contentImages: [
      'https://images.unsplash.com/photo-1572119865084-43c285814d63?w=800&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=80'
    ]
  },
  {
    slug: 'dr-abid-ali-child-specialist',
    title: 'Dr Abid Ali Malik — Child Specialist',
    category: 'Web Design & Development',
    description: 'Designed and built a complete digital practice for a pediatric cardiologist in Islamabad — 12 specialist service lines, WhatsApp-first appointment booking, and a bilingual education hub with books, videos and patient resources.',
    image: '/images/drabidali-hero.jpg',
    client: 'Dr Abid Ali Malik',
    timeline: '6 Weeks',
    url: 'https://drabidali.com',
    services: ['WordPress Development', 'UI/UX Design', 'SEO & Content Architecture', 'WhatsApp Booking Integration'],
    results: [
      { metric: '12', label: 'Service Lines with Direct Booking' },
      { metric: '2', label: 'Published Books on Amazon' },
      { metric: 'Same-Day', label: 'Appointment Confirmation via WhatsApp' }
    ],
    challenge: `Dr. Abid Ali Malik is a pediatric interventional cardiologist with credentials most clinics would envy — FCPS in Paediatrics, an interventional cardiology fellowship at NICVD, and specialist training in Ireland under the Royal College of Physicians. But his practice is far more than a clinic: he runs a neuro-cardiac service line, leads the My Child Heart Foundation, teaches through his ECG Club / Echo Academy, and publishes books for families and clinicians alike. The challenge was to build a website that could carry all of this at once — while still speaking directly to a parent who has just been told their child may have a heart problem and is searching for answers on a phone. Complex medical trust signals had to sit alongside plain, reassuring language, and booking had to work the way Pakistani families actually communicate: through WhatsApp.`,
    solution: `We designed and developed a custom WordPress theme tailored to the practice. The homepage opens with his credentials and a clear promise — "Care for young hearts, guided by experience" — before guiding visitors into the twelve specialist service lines (nine cardiac, three neuro-cardiac), each with its own structured page and a direct booking CTA. The appointment flow is WhatsApp-first: parents submit a booking form and receive same-day confirmation. Around the clinical core, we built an education ecosystem — patient FAQs, a bilingual video library in English and Urdu, a books section linked to Amazon, foundation pages for MCHF, and a home for the ECG Club / Echo Academy. For search, we implemented schema markup, breadcrumbs, and healthcare-grade trust pages including a privacy policy and medical disclaimer to support E-E-A-T.`,
    impact: `The launch transformed a fragmented practice — clinic, teaching, publishing and charity work — into a single, cohesive digital presence. Every clinical service now has a clear, bookable path, and families across Pakistan can learn about congenital heart disease in English or Urdu. The site gives the doctor's international-level expertise the online presence it deserves, while keeping every conversion path WhatsApp-first with same-day confirmation.`,
    contentImages: [
      '/images/drabidali-services.jpg',
      '/images/drabidali-about.jpg'
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
