import type { FAQItem } from "@/types";

// Site-wide FAQs (homepage, contact, about). Service and service-area pages
// carry their own inline FAQs inside their config entries.
export const faqs: FAQItem[] = [
  {
    id: "faq-general-1",
    question: "Do you really answer the phone 24/7?",
    answer:
      "Yes. Electrical problems don't wait for business hours, and neither do we. Call (603) 661-8432 any time — nights, weekends, and holidays. Emergencies like burning smells, sparking panels, or total power loss jump straight to the front of the line.",
  },
  {
    id: "faq-general-2",
    question: "Which New Hampshire towns do you serve?",
    answer:
      "We're based in Manchester and cover eighteen towns across Hillsborough, Merrimack, and Rockingham counties — including Nashua, Concord, Bedford, Goffstown, Hooksett, Derry, Londonderry, Merrimack, and Salem. Not sure if you're in range? Call and we'll tell you straight.",
  },
  {
    id: "faq-general-3",
    question: "How much does an electrician cost in Manchester?",
    answer:
      "It depends on the job, but you'll always know the price before work starts. We quote up front after seeing the work — no hourly meter running, no surprise line items. Small repairs are often same-day; larger projects get a detailed written estimate, usually within 24 hours.",
  },
  {
    id: "faq-general-4",
    question: "Are you licensed and insured in New Hampshire?",
    answer:
      "Fully. The Speedy Sparky LLC holds New Hampshire Electrical License #15673, carries full liability insurance, and is an A-rated BBB-accredited business. Proof of license and insurance is available any time you ask.",
  },
  {
    id: "faq-general-5",
    question: "Do you handle permits and inspections?",
    answer:
      "Yes — we pull the electrical permits and coordinate inspections with your town's building department, whether that's Manchester, Bedford, Derry, or anywhere else we work. The job isn't done until it passes.",
  },
  {
    id: "faq-general-6",
    question: "Can you work on older homes with outdated wiring?",
    answer:
      "That's half of what we do. Manchester and the surrounding mill towns are full of homes with knob-and-tube remnants, aluminum branch circuits, and 60- or 100-amp services that struggle with modern loads. We diagnose what's actually there and give you safe, code-compliant options that fit your budget.",
  },
  {
    id: "faq-contact-1",
    question: "What's the fastest way to reach you?",
    answer:
      "Calling (603) 661-8432 is fastest — you'll usually get Aubrey directly. The quote form on this page goes straight to us too, and we respond quickly, typically the same day.",
  },
  {
    id: "faq-contact-2",
    question: "Are estimates really free?",
    answer:
      "Yes — quotes are free and carry zero obligation. We'll look at the work, explain your options in plain English, and put a firm price in writing. Whether you hire us or not is entirely up to you.",
  },
  {
    id: "faq-contact-3",
    question: "How soon can you get to my house?",
    answer:
      "For emergencies, we dispatch immediately — most of our service area is within 25 minutes of Manchester. For routine work, most jobs get scheduled within the week, and small repairs can often be bundled into a same-week visit.",
  },
  {
    id: "faq-contact-4",
    question: "Do you do both residential and commercial work?",
    answer:
      "Yes. Homes are our bread and butter, and we also handle commercial spaces — offices, restaurants, retail, and light industrial — including after-hours work so your business doesn't lose open hours.",
  },
];

export function getFaqsByKeys(keys: string[]): FAQItem[] {
  return faqs.filter((faq) => keys.includes(faq.id));
}

export const homepageFaqKeys = [
  "faq-general-1",
  "faq-general-2",
  "faq-general-3",
  "faq-general-4",
  "faq-general-5",
  "faq-general-6",
];

export const contactFaqKeys = [
  "faq-contact-1",
  "faq-contact-2",
  "faq-contact-3",
  "faq-contact-4",
];
