export interface ImageSlotConfig {
  src: string;
  alt: string;
  width: number;
  height: number;
  focalPoint?: { x: number; y: number };
}

export interface ServiceSubTopic {
  title: string;
  description: string;
  icon: string;
}

export interface FeatureHighlight {
  title: string;
  description: string;
  imageKey: string;
}

export interface ServiceConfig {
  slug: string;
  /** Category drives the base path: /residential/[slug] or /commercial/[slug] */
  category: "residential" | "commercial";
  title: string;
  /** Unique <title> tag; falls back to a generated one if omitted */
  metaTitle?: string;
  /** Unique meta description; falls back to excerpt */
  metaDescription?: string;
  excerpt: string;
  icon: string;
  cardImage: string;
  heroImage: string;
  description: string[];
  /** H2 for the intro/overview section (replaces generic "Why Choose Our X") */
  overviewHeading: string;
  /** H2 + subtitle for the Key Benefits section — unique per service */
  benefitsHeading: string;
  benefitsSubtitle: string;
  benefits: BenefitItem[];
  /** Alternating feature showcase — 2 unique items per service, each with its own image */
  featureHighlights: FeatureHighlight[];
  /** H2 for the Scope/What's Included section (replaces generic "Complete Service Scope") */
  scopeHeading: string;
  features: string[];
  /** Inline page-specific FAQs (preferred — keeps copy unique per page) */
  faqs?: FAQItem[];
  faqKeys?: string[];
  ctaHeading: string;
  ctaText: string;
  // SEO-focused sub-topic sections for service pages
  // These provide keyword-rich content with icon cards
  topicSectionA: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: ServiceSubTopic[];
  };
  topicSectionB: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: ServiceSubTopic[];
  };
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialItem {
  name: string;
  title: string;
  quote: string;
  rating: number;
  image?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  /** Render dropdown children in a multi-column grid (for long lists) */
  columns?: 2 | 3;
  /** Lucide icon key rendered next to the label in nav dropdowns (see Header.tsx icon map) */
  icon?: string;
}

export interface ServiceAreaConfig {
  slug: string;
  city: string;
  county: "Hillsborough" | "Merrimack" | "Rockingham";
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroImageKey: string;
  featureImageKey: string;
  /** Eyebrow + heading for the intro split section — must vary per city */
  introEyebrow: string;
  introHeading: string;
  intro: string[];
  /** Heading + short paragraph tying services to this specific town */
  servicesHeading: string;
  servicesSubtitle: string;
  servicesHighlight: { title: string; description: string; icon: string; href: string }[];
  whyHeading: string;
  whyUs: BenefitItem[];
  faqHeading: string;
  faqs: FAQItem[];
  mapEmbedSrc: string;
  mapHeading: string;
  /** Slugs of nearby area pages for the internal-link mesh */
  nearbyAreas: string[];
  ctaHeading: string;
  ctaText: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  initials: string;
  /** Cycles through brand colors for the initials avatar */
  avatarColorIndex: number;
  rating: number;
  relativeDate: string;
  text: string;
  source: "google";
}

export interface FooterGroup {
  title: string;
  links: { label: string; href: string }[];
}
