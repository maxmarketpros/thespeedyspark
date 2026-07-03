export const businessConfig = {
  phone: "(603) 661-8432",
  phoneRaw: "+16036618432",
  email: "thespeedysparkyllc@gmail.com",
  // Service-area business: city-level address only (matches Google Business Profile)
  address: {
    street: "",
    city: "Manchester",
    state: "NH",
    zip: "03103",
    full: "Manchester, NH 03103",
  },
  hours: {
    display: "Open 24/7 — Emergency Service Available",
    structured: [
      {
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
  },

  license: "NH Electrical License #15673",
  licenseNumber: "15673",

  // ===== SERVICE AREAS =====
  // Primary list used in footer, structured data, etc.
  serviceAreas: [
    "Manchester",
    "Nashua",
    "Concord",
    "Bedford",
    "Goffstown",
    "Hooksett",
    "Derry",
    "Londonderry",
    "Merrimack",
    "Salem",
    "Amherst",
    "Milford",
    "Auburn",
    "Candia",
    "Litchfield",
    "Pembroke",
    "Bow",
    "Weare",
  ],

  // Expanded city list for the Service Areas section — each links to its area page.
  serviceAreaCities: [
    { name: "Manchester", href: "/service-areas/manchester" },
    { name: "Nashua", href: "/service-areas/nashua" },
    { name: "Concord", href: "/service-areas/concord" },
    { name: "Bedford", href: "/service-areas/bedford" },
    { name: "Goffstown", href: "/service-areas/goffstown" },
    { name: "Hooksett", href: "/service-areas/hooksett" },
    { name: "Derry", href: "/service-areas/derry" },
    { name: "Londonderry", href: "/service-areas/londonderry" },
    { name: "Merrimack", href: "/service-areas/merrimack" },
    { name: "Salem", href: "/service-areas/salem" },
    { name: "Amherst", href: "/service-areas/amherst" },
    { name: "Milford", href: "/service-areas/milford" },
    { name: "Auburn", href: "/service-areas/auburn" },
    { name: "Candia", href: "/service-areas/candia" },
    { name: "Litchfield", href: "/service-areas/litchfield" },
    { name: "Pembroke", href: "/service-areas/pembroke" },
    { name: "Bow", href: "/service-areas/bow" },
    { name: "Weare", href: "/service-areas/weare" },
  ],

  // Service areas section content
  serviceAreasHeading: "Serving Manchester & Southern New Hampshire",
  serviceAreasSubtitle:
    "From our home base in Manchester we cover Hillsborough, Merrimack, and Rockingham counties — including Nashua, Concord, Bedford, Derry, and the towns in between.",

  // ===== MAP EMBED =====
  // Google Business Profile embed for The Speedy Sparky LLC
  googleBusinessMapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d744209.6946675767!2d-71.33261999999999!3d43.229010450000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ebb8bf1c99700ad%3A0x94865dea9fd8561d!2sThe%20Speedy%20Sparky%20LLC!5e0!3m2!1sen!2sus!4v1783033638291!5m2!1sen!2sus",

  // ===== FORM EMBED =====
  // LeadConnector (GoHighLevel) quote form — rendered by FormEmbed.astro
  formEmbedUrl:
    "https://api.leadconnectorhq.com/widget/form/OFBgoeScR3kXURnO4052",
  formEmbedHeight: "683px",
  formEmbedId: "inline-OFBgoeScR3kXURnO4052",
  formEmbedTitle: "WebSite Form Template",

  // ===== REVIEWS =====
  googleRating: "5.0",
  googleReviewCount: 46,
  googleReviewsUrl: "https://maps.app.goo.gl/g6UYc5JTeihgRC9RA",

  coordinates: { lat: 42.9956, lng: -71.4548 },
  yearEstablished: 2023,
  yearsExperience: "10+",
  ownerName: "Aubrey Taylor",
} as const;

// Helper: returns the map embed URL — Google Business embed if set, otherwise a generic city map
export function getMapEmbedUrl(): string {
  if (businessConfig.googleBusinessMapEmbed) {
    return businessConfig.googleBusinessMapEmbed;
  }
  // Fallback: generic Google Maps embed centered on the business city
  const { city, state } = businessConfig.address;
  return `https://maps.google.com/maps?q=${encodeURIComponent(`${city}, ${state}`)}&output=embed`;
}
