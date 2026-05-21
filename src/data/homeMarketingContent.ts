/**
 * Industries + section titles aligned with zeracreative.com.
 * Testimonial wording follows their public page; agency references use Veloxa for this site.
 */

export const industriesIntro =
  'While we love to say we love all of our clients and there is no doubt our portfolio is extensive, there are a few industries we have extreme command over. Here are those, if you are among them, you know we fit the bill.';

export type IndustryItem = {
  label: string;
  /** Remote stock photo (Unsplash); swap for your own assets in `/public` if preferred. */
  imageSrc: string;
  imageAlt: string;
};

export const industryItems: readonly IndustryItem[] = [
  {
    label: 'Fashion',
    imageSrc: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Clothing racks and fashion retail space',
  },
  {
    label: 'Food',
    imageSrc: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Prepared dishes on a dining table',
  },
  {
    label: 'Retail',
    imageSrc: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Retail store interior with clothing displays',
  },
  {
    label: 'Technology',
    imageSrc: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Circuit board and electronic components',
  },
  {
    label: 'Startups',
    imageSrc: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Team collaborating around a laptop',
  },
  {
    label: 'Healthcare',
    imageSrc: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Healthcare professional with medical technology',
  },
  {
    label: 'Hospitality',
    imageSrc: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Hotel resort pool and lounge area',
  },
  {
    label: 'Education',
    imageSrc: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Students studying together with a laptop',
  },
] as const;

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "We wanted a modern, dynamic website for our business. After exploring options, we chose Veloxa. Their communication was excellent—they were quick to respond, brought fresh ideas, and made the process smooth. The project was completed on time with multiple revisions. Veloxa truly knows their work and delivers with professionalism. It's been a pleasure working with them!",
    name: 'Sarmad Idrees',
    role: 'Brand Compliance Executive, HCC Consulting',
  },
  {
    quote:
      'Good work, Veloxa team! Happy with all your services—website audit, domain registration, site migration, server setup, and more. Best wishes.',
    name: 'Mush Panjwani',
    role: 'Founder & CEO, Coffee Wagera',
  },
  {
    quote:
      'As an educational institute that has a very different set of variables for the end-user to experience. Veloxa consistently meets our expectations in providing the best value for the services we provide. Very professional and highly responsive—web development services are excellent. Thank you for being a partner of Credo.',
    name: 'Yousuf Zahid',
    role: 'Credo School & College System',
  },
  {
    quote:
      'We have engaged Veloxa for more than 6 months now in many areas from company branding to website development, company profile, brochures, flyers & tech support for our websites. Veloxa is a reliable, honest & trusted agency that delivers what they promise. It has been a real pleasure working with them and I am hoping for a long-term relationship.',
    name: 'Akif M. Shaikh',
    role: 'CEO, Waiiz and Techarabiya',
  },
  {
    quote:
      'We came to Veloxa with a vision for our corporate website. They listened, combined that vision with constructive criticism and insight, and produced a very attractive website! We hear nothing but positive comments! The process was smooth and we also got 3 months free tech and maintenance support. Totally satisfied—thank you!',
    name: 'Ahmad Hussain',
    role: 'CEO, BroteTech and AXPulse',
  },
  {
    quote:
      "We've been very happy with IT and security services since partnering with Veloxa. Consultants do an excellent job with ongoing maintenance and support, and they've been great about taking on extra assignments. When it comes to creative and IT support, Veloxa really offers a complete solution—consummate problem solvers who stay current.",
    name: 'Fahrran Abdullah',
    role: 'Owner, Mobile Masters Texas',
  },
  {
    quote:
      'Very professional in their work. The team was very responsive to my ideas and focused on creating a product that met my expectations and vision. I would highly recommend their services.',
    name: 'Owais Tahir',
    role: 'Managing Partner, Regalien Gold Marquee',
  },
  {
    quote:
      'Very impressed by the core knowledge and dedication of the leadership team. Veloxa is simply the best solution provider for a beginner in the digital world as well as totally professional for those who already have digital footprints.',
    name: 'Muhammad Junaid Vohra',
    role: 'CEO, Essential Element Leather',
  },
];

export const ourClientsIntro =
  'Our clients are some of the most forward-looking companies, startups, and SMEs—working with Veloxa locally and globally.';

export const clientLogos = [
  { src: '/logos/cafe-verde.svg', alt: 'Cafe Verde' },
  { src: '/logos/tech-smith.svg', alt: 'TechSmith Solutions' },
  { src: '/logos/nexus-fitness.svg', alt: 'Nexus Fitness' },
  { src: '/logos/bloom-bakery.svg', alt: 'Bloom Bakery' },
  { src: '/logos/urban-realty.svg', alt: 'Urban Realty' },
  { src: '/logos/cafe-verde.svg', alt: 'Cafe Verde' },
  { src: '/logos/tech-smith.svg', alt: 'TechSmith Solutions' },
  { src: '/logos/nexus-fitness.svg', alt: 'Nexus Fitness' },
  { src: '/logos/bloom-bakery.svg', alt: 'Bloom Bakery' },
  { src: '/logos/urban-realty.svg', alt: 'Urban Realty' },
];

export const googleReviews = {
  title: 'Real Client Testimonials on Google',
  body: 'See verified reviews from teams we have supported—feedback on delivery, communication, and ongoing partnership.',
  ctaLabel: 'View on Google',
  ctaHref: 'https://www.google.com/maps',
};
