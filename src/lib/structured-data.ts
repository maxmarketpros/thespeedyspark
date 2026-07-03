import { siteConfig } from "@/config/site";
import { businessConfig } from "@/config/business";
import type { ServiceAreaConfig, ServiceConfig, FAQItem } from "@/types";

/** Base path for a service page, e.g. /residential/lighting-installation */
export function serviceBasePath(service: Pick<ServiceConfig, "category" | "slug">): string {
  return `/${service.category}/${service.slug}`;
}

export function generateLocalBusinessSchema() {
  const address: Record<string, string> = {
    "@type": "PostalAddress",
    addressLocality: businessConfig.address.city,
    addressRegion: businessConfig.address.state,
    addressCountry: "US",
  };
  if (businessConfig.address.street) {
    address.streetAddress = businessConfig.address.street;
  }
  if (businessConfig.address.zip) {
    address.postalCode = businessConfig.address.zip;
  }

  return {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: businessConfig.phone,
    email: businessConfig.email,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    logo: `${siteConfig.url}/images/logo.png`,
    priceRange: "$$",
    address,
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessConfig.coordinates.lat,
      longitude: businessConfig.coordinates.lng,
    },
    openingHoursSpecification: businessConfig.hours.structured.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...h.days],
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: businessConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: `${area}, NH`,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: businessConfig.googleRating,
      reviewCount: businessConfig.googleReviewCount,
      bestRating: "5",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: businessConfig.license,
    },
    founder: {
      "@type": "Person",
      name: businessConfig.ownerName,
    },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#business` },
    inLanguage: "en-US",
  };
}

export function generateServiceSchema(service: ServiceConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription || service.excerpt,
    serviceType: service.title,
    provider: { "@id": `${siteConfig.url}/#business` },
    areaServed: businessConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: `${area}, NH`,
    })),
    url: `${siteConfig.url}${serviceBasePath(service)}`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} Features`,
      itemListElement: service.features.map((feature, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: { "@type": "Service", name: feature },
      })),
    },
  };
}

/** Service schema scoped to a single service-area city page */
export function generateAreaServiceSchema(area: ServiceAreaConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Electrician Services in ${area.city}, NH`,
    description: area.metaDescription,
    serviceType: "Electrical Services",
    provider: { "@id": `${siteConfig.url}/#business` },
    areaServed: {
      "@type": "City",
      name: `${area.city}, NH`,
    },
    url: `${siteConfig.url}/service-areas/${area.slug}`,
  };
}

/** Standalone landing-page service schema (EV chargers, panels, emergency) */
export function generateLandingServiceSchema(options: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: options.name,
    description: options.description,
    serviceType: options.name,
    provider: { "@id": `${siteConfig.url}/#business` },
    areaServed: businessConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: `${area}, NH`,
    })),
    url: `${siteConfig.url}${options.path}`,
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; href: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
