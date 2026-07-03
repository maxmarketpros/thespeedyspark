import type { ServiceConfig } from "@/types";

export const residentialServices: ServiceConfig[] = [
  {
    slug: "electrical-repairs",
    category: "residential",
    title: "Electrical Repairs & Troubleshooting",
    metaTitle: "Electrical Repairs in Manchester, NH | The Speedy Sparky",
    metaDescription:
      "Flickering lights, dead outlets, or tripping breakers? Get fast, honest electrical repairs for your Manchester NH home. Call The Speedy Sparky today.",
    excerpt:
      "Flickering lights, warm switch plates, breakers that won't reset — we track down the real cause and fix it right the first time.",
    icon: "Wrench",
    cardImage: "home-panel-troubleshooting",
    heroImage: "outlet-wiring-closeup",
    description: [
      "Most electrical problems announce themselves quietly: a light that dims when the microwave runs, an outlet that died last winter, a breaker that trips every few days. We start every repair call with real diagnostics — multimeter readings, circuit tracing, and load testing — instead of guessing and swapping parts. That approach finds the loose neutral or overloaded circuit behind the symptom, so the fix actually holds.",
      "Manchester's housing stock keeps a troubleshooting electrician busy. Mill-era homes near the Amoskeag Millyard often hide brittle insulation, buried junction boxes, and decades of handyman splices behind their plaster, and those shortcuts eventually show up as flickering, buzzing, or heat. After 10+ years opening up exactly these kinds of walls, very little surprises us anymore.",
      "You'll get a clear explanation of what failed, a flat price approved before any work starts, and a tested, labeled circuit when we leave. If we spot a bigger issue along the way — an undersized service or a recalled panel brand — we'll tell you straight and let you decide, with zero pressure.",
    ],
    overviewHeading: "Small Electrical Problems Rarely Stay Small",
    benefitsHeading: "Why Manchester Homeowners Call Us First for Repairs",
    benefitsSubtitle:
      "Real diagnostics, upfront pricing, and repairs that hold — not band-aids that fail again next season.",
    benefits: [
      {
        title: "Root-Cause Diagnostics",
        description:
          "We trace faults with multimeters, circuit tracers, and amp-clamp readings so the underlying problem gets fixed — not just the symptom you noticed.",
        icon: "SearchCheck",
      },
      {
        title: "Flat Pricing Before Work Starts",
        description:
          "You approve a fixed price after diagnosis. No hourly meter running while we hunt down the fault behind your walls.",
        icon: "Receipt",
      },
      {
        title: "Answered Around the Clock",
        description:
          "A burning smell or a dead heating circuit can't wait for Monday morning. We pick up 24/7 across greater Manchester.",
        icon: "Clock",
      },
      {
        title: "Code-Correct Fixes",
        description:
          "Every repair is brought up to current NEC standards — proper wire sizing, listed connectors, and grounded, protected circuits.",
        icon: "BadgeCheck",
      },
    ],
    featureHighlights: [
      {
        title: "Testing Before Touching",
        description:
          "Every repair begins with voltage, continuity, and load measurements at the affected devices and at the panel. Ten minutes of testing routinely saves hours of exploratory wall-opening — and often uncovers hazards you didn't know you had.",
        imageKey: "electrical-safety-testing",
      },
      {
        title: "Connections Rebuilt to Spec",
        description:
          "Most residential faults come down to a bad connection: a backstabbed receptacle, a loose wire nut, or an overheated splice. We rebuild every suspect connection with proper torque and listed connectors so the repair outlasts the original work.",
        imageKey: "wire-connection-work",
      },
    ],
    scopeHeading: "What Every Repair Visit Includes",
    features: [
      "Full-circuit troubleshooting with multimeter and tracer",
      "Breaker testing and like-for-like replacement",
      "Dead outlet and switch diagnosis and repair",
      "Loose, burned, or corroded connection rebuilds",
      "Buried and overfilled junction box corrections",
      "Failed GFCI and AFCI device replacement",
      "Circuit mapping and panel directory labeling",
      "Post-repair voltage and load verification",
    ],
    faqs: [
      {
        id: "faq-repairs-1",
        question: "How much does an electrical repair visit cost in Manchester?",
        answer:
          "Most single-circuit repairs land in the low hundreds, and we quote a flat price after diagnosis so there's no surprise at the end. Cost drivers are access (plaster walls take longer than drywall), the age of the wiring, and whether damaged cable has to be replaced rather than re-terminated. You approve the number before we open a single box.",
      },
      {
        id: "faq-repairs-2",
        question: "Why does my breaker keep tripping even after I reset it?",
        answer:
          "A breaker that re-trips is doing its job — it's telling you the circuit has an overload, a short, or a ground fault. Repeatedly resetting it without finding the cause can overheat wiring inside the walls. We isolate the leg of the circuit that's faulting and fix it, which is safer and usually cheaper than living with a nuisance trip.",
      },
      {
        id: "faq-repairs-3",
        question: "Are flickering lights actually dangerous or just annoying?",
        answer:
          "Whole-house flickering often points to a loose service neutral — an Eversource-side or panel-side issue that can damage appliances and deserves same-day attention. Single-fixture flicker is usually a worn switch or connection. Either way it's worth a diagnostic visit, because loose connections are a leading cause of residential electrical fires.",
      },
      {
        id: "faq-repairs-4",
        question: "Do small electrical repairs in Manchester need a permit?",
        answer:
          "Like-for-like device swaps and minor repairs generally don't require one, but new circuits, service work, or wiring extensions do. As a licensed NH electrician (license #15673) we handle the City of Manchester permit and inspection whenever the job calls for it, and we'll tell you up front which category your repair falls into.",
      },
    ],
    ctaHeading: "Got a Circuit Acting Up?",
    ctaText:
      "Describe the symptom over the phone and we can usually tell you what we suspect before we roll out. Call (603) 661-8432 any hour, any day.",
    topicSectionA: {
      eyebrow: "Common Repairs",
      heading: "The Electrical Faults We Fix Every Week",
      subtitle:
        "If you're searching for one of these symptoms, we've almost certainly repaired it on your street already.",
      items: [
        {
          title: "Breaker Keeps Tripping",
          description:
            "We pinpoint overloads, shorts, and ground faults instead of just upsizing the breaker — which is never the right answer.",
          icon: "Zap",
        },
        {
          title: "Dead Outlets & Switches",
          description:
            "Half-hot receptacles, failed backstab connections, and open neutrals traced and repaired with the drywall kept intact wherever possible.",
          icon: "Plug",
        },
        {
          title: "Flickering or Dimming Lights",
          description:
            "From worn dimmers to loose service neutrals, we isolate why your lights pulse when big appliances kick on.",
          icon: "Lightbulb",
        },
        {
          title: "Buzzing Panels & Burning Smells",
          description:
            "Arcing connections make noise and heat before they make fire. These calls get priority same-day scheduling.",
          icon: "AlertCircle",
        },
        {
          title: "Damaged or Chewed Wiring",
          description:
            "Rodent-damaged cable in attics and basements replaced and protected, a common find in older Manchester homes.",
          icon: "Cable",
        },
        {
          title: "Partial Power Loss",
          description:
            "Half the house dark while the other half works usually means a lost leg at the service or panel — we test both and coordinate with the utility when needed.",
          icon: "Activity",
        },
      ],
    },
    topicSectionB: {
      eyebrow: "Local Know-How",
      heading: "A Repair Electrician Who Knows Manchester's Wiring",
      subtitle:
        "Owner-operated service means the licensed electrician who answers your call is the one who shows up at your door.",
      items: [
        {
          title: "Old-Plaster Experience",
          description:
            "We repair circuits in lath-and-plaster walls without tearing rooms apart, using fish tapes and existing chases first.",
          icon: "Home",
        },
        {
          title: "Owner on Every Job",
          description:
            "Aubrey Taylor performs the diagnostic and the repair personally — no apprentice sent alone to guess at your problem.",
          icon: "HardHat",
        },
        {
          title: "Straight Answers",
          description:
            "If a $40 device swap solves it, that's what we'll recommend. Upsells don't build a reputation in a city this size.",
          icon: "ThumbsUp",
        },
        {
          title: "Fast Dispatch Countywide",
          description:
            "Based in Manchester and serving all of Hillsborough County, most repair calls get a same-day or next-day slot.",
          icon: "Route",
        },
        {
          title: "Licensed & Insured in NH",
          description:
            "NH master license #15673 with full insurance, so every repair is documented work you can show a future buyer.",
          icon: "FileCheck",
        },
        {
          title: "Clean, Documented Work",
          description:
            "Drop cloths down, boxes vacuumed out, panel directory updated, and photos of the repair provided on request.",
          icon: "Sparkles",
        },
      ],
    },
  },
  {
    slug: "whole-home-rewiring",
    category: "residential",
    title: "Whole-Home Rewiring",
    metaTitle: "Manchester Whole-Home Rewiring — Licensed NH Electrician",
    metaDescription:
      "Replace aging knob-and-tube and cloth wiring with safe modern copper circuits. Whole-home rewiring for older Manchester NH houses. Get a free quote.",
    excerpt:
      "Knob-and-tube, cloth-insulated cable, and overloaded two-wire circuits replaced with grounded modern copper — planned to keep your household running while we work.",
    icon: "Cable",
    cardImage: "wire-connection-work",
    heroImage: "copper-wiring-macro",
    description: [
      "A rewire is the most consequential electrical project a homeowner can take on, and it's one we plan room by room before a single cable gets pulled. We map every existing circuit, design the new layout around how you actually live — dedicated kitchen appliance circuits, AFCI protection in living areas, grounded outlets everywhere — and stage the work so you keep lights and refrigeration each night. Old knob-and-tube and cloth-jacketed cable come out or get permanently decommissioned, never just abandoned hot in the walls.",
      "The need is real in this city. Rimmon Heights multifamilies and other pre-1970 Manchester homes commonly run on 60- or 100-amp services with two-wire ungrounded branch circuits that were never meant to feed modern kitchens, mini-splits, and home offices. Insurers have noticed too: several carriers now decline or surcharge policies on homes with knob-and-tube, which makes a documented rewire an investment that pays back at renewal time and at resale.",
      "Our crews fish new cable through existing bays wherever possible, keeping wall openings small, square, and easy for a plasterer to patch. Every circuit is tested, labeled, and signed off by the Manchester inspector before we call the job done, and you receive a complete circuit directory and permit record for your files.",
    ],
    overviewHeading: "Is Your Home's Wiring Older Than You Are?",
    benefitsHeading: "What a Full Rewire Does for an Older Home",
    benefitsSubtitle:
      "The 5.0-star rewiring process Manchester homeowners recommend to their neighbors — safety, capacity, and paperwork all handled.",
    benefits: [
      {
        title: "Fire Risk Removed at the Source",
        description:
          "Brittle insulation, ungrounded splices, and overfused circuits are the classic ignition points in old homes. A rewire eliminates them wholesale.",
        icon: "Shield",
      },
      {
        title: "Insurance-Ready Documentation",
        description:
          "Permit records, inspection sign-offs, and a licensed electrician's completion letter — exactly what carriers ask for on older properties.",
        icon: "FileCheck",
      },
      {
        title: "Capacity for Modern Loads",
        description:
          "Dedicated 20-amp kitchen circuits, laundry circuits, and room-by-room AFCI protection sized for how households run in 2026.",
        icon: "Gauge",
      },
      {
        title: "Phased to Fit Your Life",
        description:
          "We can rewire floor by floor or system by system, so occupied homes and tenanted multifamilies stay livable throughout.",
        icon: "Layers",
      },
    ],
    featureHighlights: [
      {
        title: "New Homeruns, Cleanly Landed",
        description:
          "Every new circuit gets its own properly torqued termination and clearly labeled breaker position. A rewire is only as good as its panel work, so we treat the landing of each homerun with the same care as the cable runs themselves.",
        imageKey: "panel-breaker-wiring",
      },
      {
        title: "Verified Circuit by Circuit",
        description:
          "Before closeout we test insulation resistance, polarity, and grounding on every single run, then load-test the distribution as a whole. You get a written test record — not just our word — that the new system performs.",
        imageKey: "circuit-testing-distribution-panel",
      },
    ],
    scopeHeading: "Inside a Whole-Home Rewiring Project",
    features: [
      "Room-by-room circuit design and load calculation",
      "Knob-and-tube and cloth-wire removal or decommissioning",
      "New grounded copper branch circuits throughout",
      "Dedicated kitchen, laundry, and bath circuits",
      "AFCI and GFCI protection per current NEC",
      "Minimal-cut cable fishing with mapped openings",
      "Manchester permit filing and inspection coordination",
      "Full circuit directory and test documentation",
    ],
    faqs: [
      {
        id: "faq-rewire-1",
        question: "How long does it take to rewire a house in Manchester?",
        answer:
          "A typical single-family rewire runs one to two weeks; a two- or three-unit multifamily takes longer since we stage around tenants. Plaster walls, finished basements, and blown-in insulation add time because fishing cable gets slower. We give you a day-by-day schedule with the quote so you know which rooms are affected when.",
      },
      {
        id: "faq-rewire-2",
        question: "Do we have to move out during a rewire?",
        answer:
          "Almost never. We sequence the work so you have functioning lights, refrigeration, and at least one bathroom circuit every night. Short planned shutdowns happen during cutover days, and we schedule those with you in advance — usually mid-morning to mid-afternoon while the house is empty anyway.",
      },
      {
        id: "faq-rewire-3",
        question: "Does a rewire include a new electrical panel?",
        answer:
          "They're separate scopes, though they often make sense together — an old 60-amp fuse box can't properly serve a new set of circuits. If your service needs upsizing we'll price it alongside the rewire; you can read more on our dedicated electrical panel upgrades page. Bundling the two saves on labor since the walls are already open.",
      },
      {
        id: "faq-rewire-4",
        question: "Will rewiring my old home lower my insurance premium?",
        answer:
          "Frequently, yes. Many NH carriers surcharge or refuse homes with active knob-and-tube, and eliminating it can restore standard rates or reopen coverage options. We provide the permit close-out and a signed completion letter, which is the documentation most underwriters want to see before adjusting the policy.",
      },
    ],
    ctaHeading: "Ready to Retire That Old Wiring?",
    ctaText:
      "Send us your address and a few photos of the panel and we'll come walk the house, map the circuits, and hand you a fixed rewiring price — free.",
    topicSectionA: {
      eyebrow: "Rewiring Services",
      heading: "Old Wiring We Replace Across Manchester",
      subtitle:
        "Every era of Manchester construction left its own wiring behind. We've replaced all of it.",
      items: [
        {
          title: "Knob-and-Tube Replacement",
          description:
            "Full removal of live K&T from attics, walls, and basements — the wiring most NH insurers now flag at renewal.",
          icon: "Cable",
        },
        {
          title: "Cloth-Insulated Wire Removal",
          description:
            "Mid-century cloth and rubber-jacketed cable turns brittle with age; we swap it for modern NM-B and MC cable.",
          icon: "Package",
        },
        {
          title: "Ungrounded Circuit Conversion",
          description:
            "Two-wire circuits rebuilt with proper equipment grounds so every outlet in the house is genuinely three-prong safe.",
          icon: "Plug",
        },
        {
          title: "Phased & Partial Rewires",
          description:
            "Kitchen-only, floor-by-floor, or renovation-driven rewiring scoped to your budget and your contractor's schedule.",
          icon: "Blocks",
        },
        {
          title: "Multifamily Rewiring",
          description:
            "Unit-by-unit rewires for duplexes and triplexes with separate metering kept clean and tenants kept powered.",
          icon: "Building",
        },
        {
          title: "Dedicated Circuit Additions",
          description:
            "New homeruns for mini-splits, ranges, dryers, and workshops added during the rewire while access is easy.",
          icon: "PlugZap",
        },
      ],
    },
    topicSectionB: {
      eyebrow: "Old-House Specialists",
      heading: "Rewiring Done Right in New Hampshire's Oldest Housing Stock",
      subtitle:
        "With 10+ years rewiring southern NH homes, we've learned where every era of builder hid the hard parts.",
      items: [
        {
          title: "Plaster-Friendly Methods",
          description:
            "Long fish bills beat big demolition. We route through basements, attics, and closets before we ever cut a wall.",
          icon: "Ruler",
        },
        {
          title: "Balloon-Frame Fluency",
          description:
            "Many pre-war Manchester homes are balloon-framed, which changes how cable drops run — and we plan for it from day one.",
          icon: "House",
        },
        {
          title: "Tenant-Aware Scheduling",
          description:
            "For multifamily owners we coordinate notice, access windows, and outage timing so units stay rented and tenants stay happy.",
          icon: "Users",
        },
        {
          title: "Permits Pulled, Every Time",
          description:
            "A rewire without a permit record is a resale problem waiting to happen. Ours close out with city inspection sign-off.",
          icon: "ClipboardCheck",
        },
        {
          title: "Utility Coordination Handled",
          description:
            "When the rewire touches the service, we schedule the Eversource disconnect and reconnect so you're not the one on hold.",
          icon: "PhoneCall",
        },
        {
          title: "Dust Control That Matters",
          description:
            "Plastic containment, floor protection, and a nightly vacuum-out — because you're living in the house while we work.",
          icon: "Wind",
        },
      ],
    },
  },
  {
    slug: "lighting-installation",
    category: "residential",
    title: "Lighting Installation",
    metaTitle: "Lighting Installation for NH Homes | The Speedy Sparky",
    metaDescription:
      "Recessed, pendant, and under-cabinet lighting installed clean and code-compliant. Brighten your southern NH home — book a lighting estimate today.",
    excerpt:
      "From recessed layouts and kitchen pendants to under-cabinet task lighting, we design and install lighting that makes every room work harder and look better.",
    icon: "Lightbulb",
    cardImage: "recessed-lighting-install",
    heroImage: "kitchen-lighting-renovation",
    description: [
      "Good lighting is a layout problem before it's a wiring problem. We start by asking how you use each room — where you prep food, read, or work — and then spec the layers: recessed cans for ambient light, pendants and sconces for character, and under-cabinet strips for task areas. Beam spread, color temperature, and dimming all get decided on paper first, so the finished ceiling looks intentional instead of improvised.",
      "Older Manchester homes reward that planning. North End colonials often have shallow ceiling cavities, blown-in insulation, and framing that never anticipated a six-can kitchen grid, so we use IC-rated, airtight wafer fixtures and fish wiring through existing chases to keep patching minimal. Every switch leg gets a proper box, every dimmer is matched to its LED load, and everything lands on a labeled, code-compliant circuit.",
      "Installation day is tidy and quick — most single-room lighting projects finish in one visit. We aim each fixture, set dimmer trim levels so LEDs don't flicker at low output, and walk the room with you at night settings before we leave.",
    ],
    overviewHeading: "Better Light Changes How Your Home Works",
    benefitsHeading: "The Payoff of Professionally Installed Lighting",
    benefitsSubtitle:
      "Thoughtful layouts, clean installs, and controls that behave — the difference between adding fixtures and adding value.",
    benefits: [
      {
        title: "Designed Layouts, Not Guesswork",
        description:
          "Fixture count, spacing, and beam angles calculated for each room's size and ceiling height, so light lands where you need it.",
        icon: "Ruler",
      },
      {
        title: "LED Efficiency Built In",
        description:
          "Modern LED fixtures cut lighting energy use dramatically compared to the incandescent cans they replace, and last 10 times longer.",
        icon: "Leaf",
      },
      {
        title: "Flicker-Free Dimming",
        description:
          "We pair every dimmer to its fixture's driver and set low-end trim, eliminating the strobe and buzz cheap installs are known for.",
        icon: "Settings",
      },
      {
        title: "Rooms That Show Beautifully",
        description:
          "Layered lighting is one of the highest-impact, lowest-cost upgrades for resale photos and everyday livability alike.",
        icon: "Sparkles",
      },
    ],
    featureHighlights: [
      {
        title: "Statement Fixtures, Hung Level and Safe",
        description:
          "Kitchen pendants and dining chandeliers need blocking, box ratings, and exact height math to look right. We verify every box is rated for the fixture's weight and center each pendant off the island — not off the old hole in the ceiling.",
        imageKey: "modern-kitchen-pendants",
      },
      {
        title: "Under-Cabinet Light Without the Clutter",
        description:
          "Hardwired under-cabinet LED runs on their own switched circuit, with drivers hidden and zero cords dangling onto the counter. It's the upgrade every Manchester kitchen renovation should include while the walls are open.",
        imageKey: "under-cabinet-lighting",
      },
    ],
    scopeHeading: "Our Lighting Installation Checklist",
    features: [
      "Room-by-room lighting layout and fixture spec",
      "IC-rated recessed and wafer LED installation",
      "Pendant, chandelier, and sconce hanging with rated boxes",
      "Hardwired under-cabinet and toe-kick LED systems",
      "Dimmer and multi-location switch installation",
      "New switch legs and lighting circuits as needed",
      "Color temperature matching across the room",
      "Nighttime aiming, trim, and dimmer calibration",
    ],
    faqs: [
      {
        id: "faq-lighting-1",
        question: "How much does recessed lighting cost per light in a finished ceiling?",
        answer:
          "In most Manchester homes, plan on a per-light price that drops as quantity goes up, since setup and circuit work is shared across the room. Finished plaster ceilings, insulation depth, and attic access are the main cost variables. A typical six-light kitchen with a new dimmer usually installs in a single day.",
      },
      {
        id: "faq-lighting-2",
        question: "Can recessed lights go in an insulated ceiling safely?",
        answer:
          "Yes, as long as the fixtures are IC-rated and airtight, which is all we install in insulated cavities. Older non-IC cans required clearance from insulation and were a real fire concern; modern wafer LEDs generate little heat and seal against air leakage, which also helps your heating bill.",
      },
      {
        id: "faq-lighting-3",
        question: "Do new light fixtures require a permit in New Hampshire?",
        answer:
          "Swapping a fixture on an existing box typically doesn't, but adding new switch legs, boxes, or circuits does fall under permitted work in Manchester. We fold the permit into the project when it's required — it protects you at resale and it's simply how licensed work should be done.",
      },
      {
        id: "faq-lighting-4",
        question: "What color temperature should I pick for kitchen lighting?",
        answer:
          "Most kitchens look best at 2700K to 3000K, warm enough to be inviting but crisp enough for prep work; bathrooms and task areas can push to 3500K. The bigger mistake is mixing temperatures in one room, so we spec every fixture and lamp together. Selectable-CCT fixtures let you fine-tune after living with it.",
      },
    ],
    ctaHeading: "Let's Brighten Up the Rooms You Use Most",
    ctaText:
      "Tell us which room needs help and we'll bring layout ideas, fixture samples, and a firm price to your free lighting consultation.",
    topicSectionA: {
      eyebrow: "What We Install",
      heading: "Lighting Upgrades for Every Room in the House",
      subtitle:
        "The searches people make at 10 p.m. under a dim ceiling fixture — we install the answers to all of them.",
      items: [
        {
          title: "Recessed Lighting Installation",
          description:
            "Low-profile LED cans and wafers laid out on proper spacing grids for kitchens, living rooms, and finished basements.",
          icon: "Lightbulb",
        },
        {
          title: "Kitchen Island Pendants",
          description:
            "Centered, level, and hung at the right height over islands and peninsulas, with dimming that sets the mood after dinner.",
          icon: "ChefHat",
        },
        {
          title: "Under-Cabinet Task Lighting",
          description:
            "Hardwired LED strips that erase counter shadows — the single most-thanked upgrade we do in kitchens.",
          icon: "Flashlight",
        },
        {
          title: "Bathroom Vanity Lighting",
          description:
            "Sconces and bars placed for shadow-free faces, on damp-rated fixtures and GFCI-protected circuits where code requires.",
          icon: "Bath",
        },
        {
          title: "Stairway & Hallway Lighting",
          description:
            "Three-way switched, evenly spaced lighting that removes the dark spots where falls happen in older homes.",
          icon: "DoorOpen",
        },
        {
          title: "Basement & Closet Lighting",
          description:
            "Bright, code-compliant LED fixtures that turn Manchester's stone-foundation basements into usable space.",
          icon: "Home",
        },
      ],
    },
    topicSectionB: {
      eyebrow: "The Sparky Standard",
      heading: "Why Neighbors Trust Us With Their Lighting",
      subtitle:
        "Lighting is finish work — it's judged every single evening. We install like we'll be back for dinner.",
      items: [
        {
          title: "Old-Ceiling Expertise",
          description:
            "Plaster medallions, shallow bays, and true-dimension framing don't scare us; we've wired lighting through all of it.",
          icon: "House",
        },
        {
          title: "Whole-Room Thinking",
          description:
            "We plan ambient, task, and accent layers together instead of just adding cans until the ceiling looks like Swiss cheese.",
          icon: "Layers",
        },
        {
          title: "Fixture-Agnostic Advice",
          description:
            "Bring your own fixtures or let us source them — our price is for craftsmanship, not markup on hardware.",
          icon: "ThumbsUp",
        },
        {
          title: "Respect for Finished Spaces",
          description:
            "Minimal, mapped openings and clean patch-ready cuts, because a lighting upgrade shouldn't cost you a repaint.",
          icon: "Sparkles",
        },
        {
          title: "One-Visit Efficiency",
          description:
            "Most single-room lighting projects are designed in one visit and installed in the next — no dragged-out timelines.",
          icon: "CalendarCheck",
        },
        {
          title: "Aftercare Included",
          description:
            "Dimmer tweaks, trim swaps, and lamp questions after the install are a phone call away, not a new service charge.",
          icon: "PhoneCall",
        },
      ],
    },
  },
  {
    slug: "outdoor-lighting",
    category: "residential",
    title: "Outdoor & Landscape Lighting",
    metaTitle: "Outdoor Lighting in Manchester, NH | The Speedy Sparky",
    metaDescription:
      "Landscape, deck, and security lighting built to survive NH winters. Add curb appeal and safety in Manchester — request a free outdoor lighting design.",
    excerpt:
      "Landscape, deck, path, and security lighting engineered for New England weather — so your property looks sharp and stays safe long after sunset.",
    icon: "Lamp",
    cardImage: "garden-post-lighting",
    heroImage: "landscape-lighting-dusk",
    description: [
      "Outdoor lighting has to do three jobs at once: make the house look good, make walkways safe, and make would-be intruders keep driving. We design systems that layer all three — low-voltage landscape fixtures grazing the architecture, path and step lights guiding footing, and motion-activated security floods covering the approaches. Photocells and astronomical timers run everything automatically, so the system earns its keep without you touching a switch.",
      "New Hampshire is hard on outdoor electrical work, and sunset comes before 4:30 in December, so the system needs to perform for long, cold nights. Frost heave shifts poorly set fixtures, plow banks bury cheap path lights, and freeze-thaw cycles destroy connections that weren't gel-filled and rated for wet locations. We bury cable at proper depth, use brass and composite fixtures instead of throwaway aluminum, and mount transformers and GFCI-protected circuits so everything shrugs off a Manchester winter.",
      "Every project starts with a nighttime-minded walk of your property. We'll flag what to light, what to leave dark, and where glare would annoy you or your neighbors — then install it cleanly with buried wiring you'll never see.",
    ],
    overviewHeading: "Curb Appeal After Dark, Built for NH Weather",
    benefitsHeading: "Why Outdoor Lighting Is Worth Doing Right",
    benefitsSubtitle:
      "Cheap kits fail by February. Professionally installed systems light your property for a decade-plus.",
    benefits: [
      {
        title: "Automated Dusk-to-Dawn Control",
        description:
          "Photocells, timers, and smart controls turn everything on and off for you — including while you're away in Florida for the winter.",
        icon: "Moon",
      },
      {
        title: "Cold-Climate Components",
        description:
          "Brass, copper, and composite fixtures with gel-filled connections, chosen specifically to survive frost heave and snow load.",
        icon: "Snowflake",
      },
      {
        title: "Security Where It Counts",
        description:
          "Motion floods aimed to cover doors, driveways, and blind corners — bright enough to matter, aimed so they don't blind the neighbors.",
        icon: "Lock",
      },
      {
        title: "Landscape That Shows at Night",
        description:
          "Uplights, wash lights, and moonlighting that flatter stonework, siding, and mature trees instead of flattening them.",
        icon: "TreePine",
      },
    ],
    featureHighlights: [
      {
        title: "Deck and Patio Zones You'll Actually Use",
        description:
          "Rail lights, step lights, and dimmable string-light circuits extend your outdoor season on both ends. We wire dedicated, switched outdoor zones so the deck can glow for dinner without floodlighting the whole yard.",
        imageKey: "deck-uplighting-evening",
      },
      {
        title: "Structures and Gathering Spaces, Properly Wired",
        description:
          "Pavilions, pergolas, and sheds get real circuits — wet-rated fixtures, in-use covers on receptacles, and switching back at the house. It's a permanent, code-compliant alternative to the extension-cord rig most backyards run on.",
        imageKey: "outdoor-pavilion-lighting",
      },
    ],
    scopeHeading: "What's Covered in an Outdoor Lighting Project",
    features: [
      "Nighttime design walk and fixture layout plan",
      "Low-voltage landscape lighting systems and transformers",
      "Path, step, and retaining wall lighting",
      "Motion-sensor and dusk-to-dawn security floodlights",
      "Deck, patio, and pergola lighting circuits",
      "Weatherproof GFCI outdoor receptacles with in-use covers",
      "Trenched, code-depth cable burial and conduit",
      "Timer, photocell, and smart control programming",
    ],
    faqs: [
      {
        id: "faq-outdoor-1",
        question: "Is low-voltage or line-voltage better for landscape lighting?",
        answer:
          "For most Manchester yards, 12-volt low-voltage systems win: they're safer to run near roots and beds, cheaper to expand, and the fixtures are easier to reposition as plantings mature. We reserve 120-volt line work for security floods, outbuildings, and long runs where voltage drop would starve a low-voltage system.",
      },
      {
        id: "faq-outdoor-2",
        question: "Will outdoor lighting survive New Hampshire winters and plowing?",
        answer:
          "It will if it's planned for. We set fixtures back from plow lines, bury cable below frost-vulnerable depth, and use solid brass or composite housings that don't crack in freeze-thaw cycles. The cheap stamped-aluminum kits from the box store are usually dead within two winters — that's the gap you're paying us to close.",
      },
      {
        id: "faq-outdoor-3",
        question: "How much does professional landscape lighting cost?",
        answer:
          "Small front-entry packages start modestly, while full-property designs with 15 to 25 fixtures scale up from there. The transformer, wire runs, and trenching are the fixed backbone, so adding fixtures during the initial install is far cheaper than adding them later. Every quote is itemized so you can phase the project if you'd like.",
      },
      {
        id: "faq-outdoor-4",
        question: "Do outdoor outlets and lighting circuits need GFCI protection?",
        answer:
          "Yes — the NEC requires GFCI protection on outdoor receptacles, and any outlet within reach of grade needs a weather-resistant device with an in-use cover. We bring existing non-compliant outdoor outlets up to code as part of most lighting projects, since we're already working the same circuits.",
      },
    ],
    ctaHeading: "Light Up Your Yard Before the Next Season Turns",
    ctaText:
      "Book a free evening design walk and see exactly what your property could look like after dark — no obligation, no pressure.",
    topicSectionA: {
      eyebrow: "Outdoor Options",
      heading: "Ways to Light Up Your Property After Sunset",
      subtitle:
        "From a single motion flood to a fully automated landscape system, every outdoor project is scoped to your property.",
      items: [
        {
          title: "Landscape & Garden Lighting",
          description:
            "Uplighting for trees and stone facades, wash lighting for beds, and accent lighting that makes the house glow from the street.",
          icon: "TreePine",
        },
        {
          title: "Pathway & Step Lighting",
          description:
            "Low-glare fixtures that mark walkways and stair edges — the difference between a welcome and a slip-and-fall in icy months.",
          icon: "Route",
        },
        {
          title: "Security & Motion Floodlights",
          description:
            "LED floods with motion sensing and smart notifications covering driveways, side yards, and back entries.",
          icon: "Eye",
        },
        {
          title: "Deck & Patio Lighting",
          description:
            "Rail, post-cap, and overhead string lighting on dimmable, switched circuits built for outdoor entertaining.",
          icon: "Sun",
        },
        {
          title: "Lamp Posts & Driveway Lights",
          description:
            "New post lights and pier-mounted fixtures, including repairs to the leaning, flickering posts older Manchester driveways collect.",
          icon: "Lamp",
        },
        {
          title: "Holiday Lighting Circuits",
          description:
            "Switched soffit outlets and roofline receptacles so December decorating never involves a cord through a window again.",
          icon: "Calendar",
        },
      ],
    },
    topicSectionB: {
      eyebrow: "Built for NH",
      heading: "Outdoor Lighting Built for New England Conditions",
      subtitle:
        "Anyone can stake lights in a lawn in June. Ours still work — and still look right — the following March.",
      items: [
        {
          title: "Frost-Line Discipline",
          description:
            "Cable depth, conduit sleeves under hardscape, and fixture footings all planned around ground that moves every winter.",
          icon: "Snowflake",
        },
        {
          title: "Glare-Conscious Design",
          description:
            "Shielded optics and careful aiming keep light on your property and out of bedroom windows — yours and your neighbors'.",
          icon: "Eye",
        },
        {
          title: "Serviceable Systems",
          description:
            "Labeled transformer zones and accessible connections mean future fixture swaps take minutes, not excavation.",
          icon: "Cog",
        },
        {
          title: "Energy-Sipping LEDs",
          description:
            "A full-property LED landscape system typically draws less power than two old halogen floods did on their own.",
          icon: "Leaf",
        },
        {
          title: "Local Property Sense",
          description:
            "Granite steps, stone walls, and mature maples are Manchester signatures — we know how to light each of them well.",
          icon: "MapPin",
        },
        {
          title: "One Accountable Installer",
          description:
            "Design, trenching, wiring, and programming handled by one licensed contractor, so nothing falls between trades.",
          icon: "HardHat",
        },
      ],
    },
  },
  {
    slug: "ceiling-fan-installation",
    category: "residential",
    title: "Ceiling Fan Installation",
    metaTitle: "Ceiling Fan Installation — Manchester NH Electrician",
    metaDescription:
      "Wobble-free, whisper-quiet ceiling fans hung on fan-rated boxes with proper controls. Year-round comfort for Manchester NH homes. Book your install.",
    excerpt:
      "Fans hung on properly rated boxes, balanced, and wired with the right controls — including new installs where no fixture exists today.",
    icon: "Fan",
    cardImage: "ceiling-light-installation",
    heroImage: "ceiling-fan-installation",
    description: [
      "A ceiling fan looks like a simple swap until you learn that most existing ceiling boxes were never rated to hold one. A standard light-fixture box can work loose under 40 pounds of spinning fan, which is why every install we do starts by verifying — or replacing — the box with a listed fan-rated brace anchored to framing. From there it's correct downrod length for the ceiling height, blade clearance checks, balancing, and wiring the switch setup you actually want, whether that's separate fan and light controls, a remote, or a smart wall control.",
      "Fans pull their weight year-round in New Hampshire. Run in reverse on low through the cold months, a fan pushes the warm air stratified at your ceiling back down into the room — a real comfort gain in colonials and capes with 9-foot ceilings, and it lets many homeowners nudge the thermostat down a degree or two through a long heating season. In summer the same fan lets you delay firing up window ACs for weeks.",
      "We also handle the harder versions of this job: installing fans where only a switch-less ceiling exists, fishing new switch legs down finished walls, and hanging large-diameter fans in vaulted great rooms with extended downrods and angled-ceiling mounts.",
    ],
    overviewHeading: "Comfort in Every Season, One Fan at a Time",
    benefitsHeading: "More Than Just a Summer Breeze",
    benefitsSubtitle:
      "Correct mounting, correct controls, correct sizing — the three things box-store installs most often get wrong.",
    benefits: [
      {
        title: "True Airflow, Sized to the Room",
        description:
          "Blade span and CFM matched to square footage and ceiling height, so bedrooms get quiet comfort and great rooms get real air movement.",
        icon: "Wind",
      },
      {
        title: "Heating-Season Savings",
        description:
          "Winter reverse mode destratifies warm air off the ceiling, letting NH homeowners trim thermostat settings during the coldest months.",
        icon: "Thermometer",
      },
      {
        title: "Fan-Rated Mounting, Guaranteed",
        description:
          "Every fan hangs from a listed fan-rated box braced to structure — never from the plastic light box the last fixture used.",
        icon: "ShieldCheck",
      },
      {
        title: "Controls Done Properly",
        description:
          "Separate switching for fan and light, wall-mounted speed controls, remotes, or smart controls — wired correctly, not jury-rigged.",
        icon: "Settings",
      },
    ],
    featureHighlights: [
      {
        title: "Switching That Matches How You Live",
        description:
          "A fan sharing one switch with its light is an everyday annoyance. Where the walls allow, we fish a second switch leg so fan and light run independently — and where they don't, we set up reliable remote or smart control instead.",
        imageKey: "light-switch-closeup",
      },
      {
        title: "Clean Wiring Inside Every Canopy",
        description:
          "Under the canopy is where rushed installs hide their sins. Our splices are made with listed connectors, conductors are dressed neatly, and grounds are landed properly — so the fan runs silent and safe for years.",
        imageKey: "wire-connection-work",
      },
    ],
    scopeHeading: "Every Ceiling Fan Install, Step by Step",
    features: [
      "Fan-rated box and brace installation or verification",
      "New fan installation where no fixture exists",
      "Old fan and fixture removal and disposal",
      "Downrod sizing for flat, sloped, and vaulted ceilings",
      "Independent fan and light switch wiring",
      "Remote and smart fan control setup",
      "Blade balancing and wobble elimination",
      "Damp-rated fan installs for porches and sunrooms",
    ],
    faqs: [
      {
        id: "faq-fan-1",
        question: "Can my existing ceiling box hold a ceiling fan?",
        answer:
          "Usually not — standard fixture boxes aren't listed for the weight and vibration of a fan, and it's the most common shortcut we find on wobbling fans. We check the box on every job and, when needed, install a fan-rated brace box that spans the joists. It adds little time and removes the one failure mode that actually drops fans.",
      },
      {
        id: "faq-fan-2",
        question: "What does it cost to install a fan where there's no existing fixture?",
        answer:
          "Adding a fan to a bare ceiling means a new box, new cable, and a new switch leg, so it prices above a simple swap — access from an attic above keeps it economical, while fishing through a finished second floor adds labor. We quote it flat after seeing the ceiling, so the number you approve is the number you pay.",
      },
      {
        id: "faq-fan-3",
        question: "Do ceiling fans really help in winter?",
        answer:
          "Yes. Warm air stacks at the ceiling, and in reverse at low speed a fan gently pushes it back down without a draft. In older Manchester homes with tall ceilings the temperature difference floor-to-ceiling can be several degrees, so reclaiming that heat is a genuinely useful trick during a long NH heating season.",
      },
      {
        id: "faq-fan-4",
        question: "What size ceiling fan should I buy for my room?",
        answer:
          "As a rule of thumb: 42- to 44-inch fans for rooms under 150 square feet, 52-inch for typical bedrooms and living rooms, and 60-inch or larger for great rooms. Ceiling height matters too — you need 7 feet minimum under the blades per code. Tell us the room dimensions before you buy and we'll confirm the right span and downrod.",
      },
    ],
    ctaHeading: "Add a Fan Where Your Home Needs Airflow",
    ctaText:
      "Whether it's a straight swap or a brand-new install in a vaulted ceiling, we'll quote it flat over the phone with a couple of photos. Rated 5.0 stars by Manchester homeowners on 46 Google reviews.",
    topicSectionA: {
      eyebrow: "Fan Services",
      heading: "Ceiling Fan Projects We Handle Day In, Day Out",
      subtitle:
        "Swaps, first-time installs, big rooms, odd ceilings — if it spins overhead, it's in our wheelhouse.",
      items: [
        {
          title: "Fan Replacement & Upgrades",
          description:
            "Out with the wobbling brass-era fan, in with a quiet DC-motor model — mounted on a verified fan-rated box.",
          icon: "Fan",
        },
        {
          title: "New Installs, No Existing Fixture",
          description:
            "We add the box, the cable, and the switch leg to put a fan exactly where the room needs it, patch-minimal.",
          icon: "Drill",
        },
        {
          title: "Vaulted & High-Ceiling Fans",
          description:
            "Extended downrods, angled-ceiling mounts, and large-diameter fans hung safely in two-story great rooms.",
          icon: "Home",
        },
        {
          title: "Porch & Sunroom Fans",
          description:
            "Damp-rated fans for covered outdoor spaces, wired to handle New England humidity and temperature swings.",
          icon: "Sun",
        },
        {
          title: "Smart Fan Controls",
          description:
            "Wall controls, remotes, and app or voice control retrofitted onto new and existing fans.",
          icon: "Cpu",
        },
        {
          title: "Fan Repair & Balancing",
          description:
            "Wobble diagnosis, capacitor and pull-chain switch replacement, and remounting for fans worth saving.",
          icon: "Wrench",
        },
      ],
    },
    topicSectionB: {
      eyebrow: "Neighborhood Trusted",
      heading: "The Local Difference on Every Fan Install",
      subtitle:
        "It's a small job, so we make it a flawless one — that's how a one-fan visit turns into a customer for life.",
      items: [
        {
          title: "Structure-First Mounting",
          description:
            "We anchor to framing every time, because a fan's mount matters more than its motor over a decade of use.",
          icon: "HardHat",
        },
        {
          title: "Old-Home Ceiling Fluency",
          description:
            "Plaster ceilings, true-dimension joists, and no attic access above — familiar territory in Manchester's older neighborhoods.",
          icon: "House",
        },
        {
          title: "Honest Swap-or-Repair Advice",
          description:
            "If your existing fan just needs a capacitor and a balance kit, we'll say so instead of selling you a new one.",
          icon: "ThumbsUp",
        },
        {
          title: "Tidy Single-Visit Jobs",
          description:
            "Most fan installs are done inside two hours, ladder marks wiped, packaging hauled away with us.",
          icon: "Timer",
        },
        {
          title: "Every Season Considered",
          description:
            "We set up reverse mode and explain the winter settings before we leave — most homeowners never knew their fan had them.",
          icon: "Snowflake",
        },
        {
          title: "Flat Quotes by Photo",
          description:
            "Snap the ceiling and the room, text it over, and get a firm installed price without waiting for an estimate visit.",
          icon: "MessageSquare",
        },
      ],
    },
  },
  {
    slug: "outlet-switch-installation",
    category: "residential",
    title: "Outlet & Switch Installation",
    metaTitle: "Outlet & Switch Installation for NH Homes | Speedy Sparky",
    metaDescription:
      "New outlets, GFCI and AFCI protection, dimmers, and smart switches installed right the first time in Manchester NH. Get an upfront quote in minutes.",
    excerpt:
      "New receptacles where you need them, GFCI protection where code demands it, and dimmers and smart switches that work exactly as they should.",
    icon: "Plug",
    cardImage: "outlet-wiring-closeup",
    heroImage: "gfci-outlet-install",
    description: [
      "Outlets and switches are the part of your electrical system you touch every day, and they're where age shows first. Loose receptacles that won't grip a plug, two-prong outlets with no ground path, switches that crackle — each one is a small, fixable safety issue. We install and replace devices with commercial-grade hardware, pigtailed connections instead of backstabs, and box fill done to code, so the work feels solid the day we leave and a decade later.",
      "Code has raised the bar on protection for good reason. GFCI protection is required within 6 feet of any sink and throughout kitchens, baths, garages, and outdoor locations; AFCI protection now covers most living areas; and tamper-resistant receptacles are standard anywhere kids can reach. Plenty of older Manchester homes — especially those still wearing their original two-prong devices — predate all of it, and we bring each location up to the current standard as we touch it.",
      "Adding outlets is just as common a request as fixing them: a home office that runs on a power strip daisy-chain, a garage with one receptacle for everything, a bedroom wall with nothing where the TV wants to hang. We fish new circuits and add receptacles with minimal wall disturbance and quote everything flat before starting.",
    ],
    overviewHeading: "Outlets and Switches That Match How You Actually Live",
    benefitsHeading: "Small Devices, Big Safety Upgrades",
    benefitsSubtitle:
      "Every receptacle and switch is a connection point — and connection points are where electrical trouble starts or gets stopped.",
    benefits: [
      {
        title: "GFCI Protection Where Water Lives",
        description:
          "Kitchens, baths, laundry, garages, and exteriors protected exactly as the NEC requires — the cheapest shock prevention there is.",
        icon: "Droplets",
      },
      {
        title: "Child-Safe by Default",
        description:
          "Tamper-resistant receptacles installed as standard, with shuttered slots that block anything that isn't an actual plug.",
        icon: "Baby",
      },
      {
        title: "Capacity Where You Need It",
        description:
          "New dedicated circuits for offices, garages, and appliances end the era of the overloaded power strip in your home.",
        icon: "Power",
      },
      {
        title: "Every Device Tested and Labeled",
        description:
          "Polarity, ground, and GFCI trip function verified on each device before we leave, with the circuit noted in your panel directory.",
        icon: "CheckCircle2",
      },
    ],
    featureHighlights: [
      {
        title: "Switches Upgraded Beyond the Toggle",
        description:
          "Dimmers matched to LED loads, three-way and four-way circuits wired correctly, and smart switches that don't flicker or drop offline. If a switch in your house buzzes, heats up, or needs jiggling, it's telling you it's ready for replacement.",
        imageKey: "light-switch-closeup",
      },
      {
        title: "Protection Devices, Verified Live",
        description:
          "We trip-test every GFCI and AFCI we install under real fault conditions, not just with the button. Protection you can't trust is worse than none, because you stop thinking about the risk.",
        imageKey: "electrical-safety-testing",
      },
    ],
    scopeHeading: "The Full Outlet & Switch Scope",
    features: [
      "New receptacle additions on existing or new circuits",
      "GFCI and AFCI device installation and testing",
      "Two-prong to grounded outlet upgrades",
      "Tamper-resistant and weather-resistant devices",
      "USB-A/USB-C combination outlet installation",
      "Dimmer, three-way, and four-way switch wiring",
      "Smart switch and smart dimmer installation",
      "Dedicated 20-amp circuits for offices and garages",
    ],
    faqs: [
      {
        id: "faq-outlet-1",
        question: "My house has two-prong outlets — what are my options?",
        answer:
          "Three legal paths: run a ground to each location (best), install GFCI protection and label the outlets \"No Equipment Ground\" (code-accepted and affordable), or rewire the circuit. Simply swapping in three-prong devices without a ground is both illegal and dangerous. We'll assess your wiring and price all the routes that apply to your home.",
      },
      {
        id: "faq-outlet-2",
        question: "How much does it cost to add a new outlet?",
        answer:
          "An outlet added near an existing circuit on an open basement ceiling is quick and inexpensive; a new receptacle high on a finished second-floor wall costs more because of the fishing involved. Dedicated new circuits price higher still since they include breaker and homerun work. Every location gets a firm flat price before we drill anything.",
      },
      {
        id: "faq-outlet-3",
        question: "Where does code actually require GFCI outlets?",
        answer:
          "Under the current NEC: kitchens, bathrooms, within 6 feet of any sink, laundry areas, garages, unfinished basements, crawl spaces, and all outdoor receptacles. Older homes are grandfathered until the wiring is touched — but since a GFCI device costs so little, upgrading these locations is some of the best safety money a homeowner can spend.",
      },
      {
        id: "faq-outlet-4",
        question: "Why won't my new smart switch work in my old house?",
        answer:
          "Most smart switches need a neutral conductor in the switch box, and many older Manchester homes wired with switch loops don't have one. Options include no-neutral smart switches, smart bulbs with the existing switch, or pulling a new cable to the box. We sort out which your wiring supports before you buy a drawer full of the wrong hardware.",
      },
    ],
    ctaHeading: "Need Power Where There Isn't Any?",
    ctaText:
      "Count the power strips in your house tonight — then call us and we'll put real outlets where they belong, at a flat price you approve first.",
    topicSectionA: {
      eyebrow: "Device Upgrades",
      heading: "Outlet & Switch Upgrades Homeowners Ask For Most",
      subtitle:
        "The everyday electrical improvements that make an older house feel like a current one.",
      items: [
        {
          title: "GFCI Outlet Installation",
          description:
            "Shock protection for kitchens, baths, garages, basements, and exteriors — installed, trip-tested, and labeled.",
          icon: "Droplets",
        },
        {
          title: "USB & USB-C Outlets",
          description:
            "Charge phones and tablets without wall warts, with high-wattage USB-C options for laptops in kitchens and offices.",
          icon: "PlugZap",
        },
        {
          title: "Dimmer Switch Installation",
          description:
            "LED-compatible dimmers matched to your fixtures so lights fade smoothly instead of flickering or buzzing.",
          icon: "Settings",
        },
        {
          title: "Three-Way & Four-Way Switching",
          description:
            "Control lights from both ends of a hall or stairway — including fixing the miswired three-ways previous owners left behind.",
          icon: "Cable",
        },
        {
          title: "Exterior & Garage Outlets",
          description:
            "Weather-resistant receptacles with in-use covers, plus dedicated garage circuits for tools and freezers.",
          icon: "Warehouse",
        },
        {
          title: "Smart Switch Installation",
          description:
            "App- and voice-controlled switches and dimmers, with neutral-wire workarounds sorted for older wiring.",
          icon: "Cpu",
        },
      ],
    },
    topicSectionB: {
      eyebrow: "Why Us",
      heading: "Why Manchester Picks Us for Device-Level Work",
      subtitle:
        "Anyone can swap a receptacle. Doing 30 of them in a 1920s two-family without surprises takes a specialist.",
      items: [
        {
          title: "No Backstabs, Ever",
          description:
            "Every device is wired with screw terminals or pigtails — the failure-prone push-in connections never leave our truck.",
          icon: "BadgeCheck",
        },
        {
          title: "Spec-Grade Hardware",
          description:
            "Commercial-grade receptacles and switches that grip plugs firmly for decades, not builder-grade devices that loosen in a year.",
          icon: "Award",
        },
        {
          title: "Whole-House Device Packages",
          description:
            "Flat-priced bundles to replace every dated outlet and switch in the house in one or two efficient visits.",
          icon: "Boxes",
        },
        {
          title: "Old-Wiring Judgment",
          description:
            "We recognize cloth insulation, bootleg grounds, and multiwire circuits on sight — and handle each one the code-correct way.",
          icon: "SearchCheck",
        },
        {
          title: "Renovation-Ready Coordination",
          description:
            "Adding devices during a remodel? We work directly with your GC's schedule so rough-in and finish stay on track.",
          icon: "Hammer",
        },
        {
          title: "Price-per-Location Clarity",
          description:
            "Our quotes list each outlet and switch as a line item, so you can trim or expand the scope and see exactly what changes.",
          icon: "Receipt",
        },
      ],
    },
  },
  {
    slug: "smart-home-installation",
    category: "residential",
    title: "Smart Home Installation",
    metaTitle: "Smart Home Installation in Manchester, NH | Speedy Sparky",
    metaDescription:
      "Smart lighting, thermostats, cameras, and video doorbells wired in by a licensed pro. Serving southern NH homes — start your smart home project today.",
    excerpt:
      "Smart lighting, thermostats, cameras, doorbells, and locks — installed on solid wiring and configured to work together, not as a drawer full of apps.",
    icon: "Cpu",
    cardImage: "smart-home-control-panel",
    heroImage: "smart-home-network",
    description: [
      "The difference between a smart home that delights and one that infuriates is almost always the installation. Devices need stable power, correct wiring (many smart switches require a neutral conductor older switch boxes lack), and a network that reaches every corner where a camera or lock lives. We handle the electrical layer properly — new switch legs, low-voltage cabling, PoE runs for cameras, C-wires for thermostats — then configure everything into one coherent system with scenes and schedules you'll actually use.",
      "We're platform-agnostic and brand-honest: whether your household runs on Apple Home, Google Home, or Alexa, we spec devices that are certified for it and skip the bargain hardware that drops offline weekly. Smart thermostats deserve special mention for New Hampshire homes, since heating dominates energy bills here and NH Saves rebates frequently offset part of the hardware cost — we'll point you to the current offers when we quote the job.",
      "Every project ends with a working walkthrough: apps installed, family members added, automations demonstrated, and a cheat sheet left on the counter. You shouldn't need a teenager or a support line to turn your own lights on.",
    ],
    overviewHeading: "A Smarter Home Starts Behind the Walls",
    benefitsHeading: "What You Gain with a Wired-Right Smart Home",
    benefitsSubtitle:
      "Convenience you notice daily, security you check from anywhere, and energy savings that show up on the Eversource bill.",
    benefits: [
      {
        title: "A Network That Reaches Everything",
        description:
          "Hardwired ethernet and PoE backbone where it matters, so cameras and hubs don't live or die on Wi-Fi signal strength.",
        icon: "Network",
      },
      {
        title: "Eyes on Home from Anywhere",
        description:
          "Doorbells, cameras, and smart locks that let you answer the door from work or check the house from a week away.",
        icon: "Eye",
      },
      {
        title: "One System, Not Twelve Apps",
        description:
          "Devices chosen and configured for a single ecosystem, with scenes and schedules that make the pieces act like a whole.",
        icon: "Home",
      },
      {
        title: "Rebate-Aware Recommendations",
        description:
          "We flag smart thermostats and controls that qualify for current NH Saves incentives, trimming your project cost.",
        icon: "Banknote",
      },
    ],
    featureHighlights: [
      {
        title: "Cameras Mounted and Wired for Keeps",
        description:
          "Battery cameras die in January cold; ours are hardwired or PoE-powered, mounted at heights that capture faces instead of hat brims, and aimed to cover approaches without spying on the neighbors. Footage records locally or to the cloud — your call.",
        imageKey: "security-camera-install",
      },
      {
        title: "Lighting That Thinks for Itself",
        description:
          "Smart switches, dimmers, and accent lighting scenes that follow your day: warm and dim at wind-down, everything-off with one tap at the door. Automated schedules also make an empty house look convincingly occupied.",
        imageKey: "under-cabinet-lighting",
      },
    ],
    scopeHeading: "What Your Smart Home Install Covers",
    features: [
      "Smart switch, dimmer, and scene controller installation",
      "Smart thermostat installation with C-wire runs",
      "Video doorbell installation with proper transformers",
      "Hardwired and PoE security camera systems",
      "Smart lock and garage-control integration",
      "Ethernet cabling and Wi-Fi access point placement",
      "Hub, bridge, and ecosystem configuration",
      "Family onboarding, scenes, and automation setup",
    ],
    faqs: [
      {
        id: "faq-smart-1",
        question: "Will smart switches work with my older home's wiring?",
        answer:
          "Often, but not always out of the box — many pre-1980s switch boxes lack the neutral conductor most smart switches require. We verify your wiring first, then either use quality no-neutral models, pull a neutral where practical, or place smart modules at the fixture instead. The audit takes minutes and prevents a pile of returned hardware.",
      },
      {
        id: "faq-smart-2",
        question: "Are there rebates for smart thermostats in New Hampshire?",
        answer:
          "Yes — NH Saves programs offered through the utilities regularly include instant or mail-in rebates on qualifying smart thermostats, and heating-dominated NH homes see some of the fastest paybacks in the country. Offers change seasonally, so we confirm what's current when we build your quote.",
      },
      {
        id: "faq-smart-3",
        question: "Do security cameras need their own circuit?",
        answer:
          "Not usually. Most residential systems run on PoE from a central switch or on plug-in power at each camera, and we typically put the recorder and network gear on one clean, surge-protected circuit. What matters more is wire routing — hardwired cameras beat battery models badly through a New Hampshire winter.",
      },
      {
        id: "faq-smart-4",
        question: "Which smart home platform should I build around?",
        answer:
          "Pick the one that matches the phones in your house: Apple Home for iPhone families, Google Home or Alexa otherwise, with Matter-certified devices keeping your options open long-term. We'll design around your choice and configure everything so it works on day one — no half-paired devices left blinking.",
      },
    ],
    ctaHeading: "Bring Your Home Into the Smart Era",
    ctaText:
      "Start with a doorbell or wire the whole house — either way, book a free consult and we'll map a system that fits your home and your budget.",
    topicSectionA: {
      eyebrow: "Smart Integrations",
      heading: "Smart Devices We Install and Integrate",
      subtitle:
        "Installed on proper wiring, joined into one system, and explained in plain English before we leave.",
      items: [
        {
          title: "Smart Lighting & Switches",
          description:
            "Whole-room scenes, schedules, and voice control built on quality switches that stay online.",
          icon: "Lightbulb",
        },
        {
          title: "Video Doorbell Installation",
          description:
            "Hardwired doorbells with correctly sized transformers — the fix for the laggy, always-dead battery unit you have now.",
          icon: "DoorOpen",
        },
        {
          title: "Security Camera Systems",
          description:
            "PoE and hardwired cameras covering driveways, entries, and yards, with local or cloud recording configured.",
          icon: "Eye",
        },
        {
          title: "Smart Thermostats",
          description:
            "Installed with proper C-wires and configured for NH heating systems, from forced hot water to heat pumps.",
          icon: "Thermometer",
        },
        {
          title: "Smart Locks & Access",
          description:
            "Keyless entry, guest codes, and auto-lock schedules integrated with your doorbell and cameras.",
          icon: "KeyRound",
        },
        {
          title: "Home Network Wiring",
          description:
            "Ethernet drops, access points, and structured wiring — the quiet backbone every reliable smart home sits on.",
          icon: "Network",
        },
      ],
    },
    topicSectionB: {
      eyebrow: "Local Advantage",
      heading: "Smart Home Wiring With a Local Electrician's Judgment",
      subtitle:
        "Gadget installers plug things in. A licensed electrician makes sure the whole electrical layer underneath is sound.",
      items: [
        {
          title: "Licensed Behind the Wallplate",
          description:
            "Every switch leg, transformer, and circuit we touch is handled to NH electrical code — not \"close enough\" DIY wiring.",
          icon: "BadgeCheck",
        },
        {
          title: "Cold-Climate Device Choices",
          description:
            "We spec cameras, doorbells, and locks rated for subzero New England winters, because plenty of popular models aren't.",
          icon: "Snowflake",
        },
        {
          title: "Privacy-Minded Setup",
          description:
            "Local storage options, sensible camera aiming, and account security walked through at handoff — your footage stays yours.",
          icon: "Lock",
        },
        {
          title: "Future-Proof Cabling",
          description:
            "We pull an extra drop while the wall's open and leave labeled service loops, so next year's upgrade doesn't need a new hole.",
          icon: "Cable",
        },
        {
          title: "Whole-Family Handoff",
          description:
            "Apps configured on everyone's phones, automations demoed live, and a written cheat sheet so nobody's locked out of the lights.",
          icon: "Users",
        },
        {
          title: "One Number for Support",
          description:
            "If a device misbehaves next month, you call the electrician who installed it — not an overseas support queue.",
          icon: "PhoneCall",
        },
      ],
    },
  },
  {
    slug: "whole-home-surge-protection",
    category: "residential",
    title: "Whole-Home Surge Protection",
    metaTitle: "Manchester Whole-Home Surge Protection — NH Electrician",
    metaDescription:
      "Stop storm surges and grid spikes at the panel before they cook your electronics. Whole-home surge protection for Manchester NH. Get protected today.",
    excerpt:
      "A panel-mounted surge protective device stands guard over every circuit in your house — stopping spikes from storms and grid events before they reach your electronics.",
    icon: "ShieldCheck",
    cardImage: "live-panel-testing",
    heroImage: "panel-breaker-wiring",
    description: [
      "Every home takes electrical hits you never see: nearby lightning, utility switching events, and even your own well pump or AC compressor kicking on and off thousands of times a year. Each spike shaves life off the sensitive electronics now built into everything — furnaces, induction ranges, heat pumps, TVs, garage door openers. A whole-home surge protective device (SPD) installed at the panel clamps those transients at the point of entry, protecting every circuit at once instead of only whatever happens to be on a power strip.",
      "The code world has caught up with the risk: the NEC now requires Type 1 or Type 2 surge protection on new and replaced residential services, which tells you how seriously the industry takes it. Southern New Hampshire's spring thunderstorm season delivers the dramatic spikes, but routine grid switching produces the constant small ones — and it's the accumulation that quietly kills appliance control boards years early.",
      "Installation is straightforward for a licensed electrician: we mount a quality Type 2 SPD at your panel, land it on a dedicated two-pole breaker with the shortest possible leads, and verify your grounding electrode system — because an SPD is only as good as the ground it dumps into. Most installs are complete within about an hour, with status indicators you can check at a glance.",
    ],
    overviewHeading: "One Lightning Strike Shouldn't Cost You Thousands",
    benefitsHeading: "Layered Protection for Everything You Plug In",
    benefitsSubtitle:
      "Panel-level defense first, point-of-use second — the strategy manufacturers and the NEC itself now recommend.",
    benefits: [
      {
        title: "Spikes Clamped at the Door",
        description:
          "A Type 2 SPD at the panel diverts surge energy to ground before it fans out through your branch circuits.",
        icon: "Zap",
      },
      {
        title: "Appliance Electronics Preserved",
        description:
          "Furnace boards, heat pump inverters, and range controls — the expensive parts modern surges actually destroy — stay protected.",
        icon: "CircuitBoard",
      },
      {
        title: "Defense in Layers",
        description:
          "We pair the panel SPD with quality point-of-use protection at home offices and entertainment centers for full coverage.",
        icon: "Layers",
      },
      {
        title: "Pennies Against Thousands",
        description:
          "A single fried heat pump board can cost more than the entire surge protection install — the math isn't close.",
        icon: "DollarSign",
      },
    ],
    featureHighlights: [
      {
        title: "Grounding Verified, Not Assumed",
        description:
          "Surge energy has to go somewhere, and that somewhere is your grounding electrode system. We inspect and test the ground rods, bonding, and connections during every SPD install, correcting the weak links that would otherwise leave the device fighting with one hand tied.",
        imageKey: "home-panel-troubleshooting",
      },
      {
        title: "Installed and Proven Under Power",
        description:
          "After mounting, we confirm the SPD's protection status indicators, verify lead length and breaker sizing, and document the install. You'll know exactly what the green lights mean — and what to do the day one turns red.",
        imageKey: "electrical-safety-testing",
      },
    ],
    scopeHeading: "Everything Included with Surge Protection",
    features: [
      "Type 2 SPD installation at the main panel",
      "Dedicated two-pole breaker with short-lead wiring",
      "Grounding electrode and bonding verification",
      "Subpanel SPD protection for detached garages",
      "Point-of-use protector recommendations by room",
      "Surge assessment for well pumps and HVAC",
      "Status indicator walkthrough and documentation",
      "Replacement module service after major strikes",
    ],
    faqs: [
      {
        id: "faq-surge-1",
        question: "Isn't a power strip surge protector enough?",
        answer:
          "Power strips only guard what's plugged into them, and most have modest ratings that a serious surge blows through. They also do nothing for hardwired equipment — your furnace, well pump, mini-splits, and oven have no cord to protect. The panel SPD covers all of it; good strips then serve as a second layer for sensitive electronics.",
      },
      {
        id: "faq-surge-2",
        question: "How long does a whole-home surge protector last?",
        answer:
          "Quality SPDs are rated in joules and sacrifice capacity with every event they absorb, so lifespan depends on what your grid throws at them — typically 5 to 10 years in normal service. Status lights show remaining protection at a glance, and after a direct or very close lightning strike the unit should be inspected and often replaced.",
      },
      {
        id: "faq-surge-3",
        question: "What does whole-home surge protection cost installed?",
        answer:
          "It's one of the most affordable protective upgrades in the trade — device plus licensed installation typically lands in the range of a nice dinner out for four, several times over, not thousands. Panel condition matters: if there's no breaker space we may add a quad breaker or tandem where permitted. You'll get an exact flat quote from a photo of your panel.",
      },
      {
        id: "faq-surge-4",
        question: "Is surge protection required by code in NH?",
        answer:
          "For new construction and whenever a service or panel is replaced, the current NEC requires surge protection on dwelling services — so if you're planning a panel replacement through our electrical panel upgrades service, an SPD is included in that scope. Adding one to an existing panel is voluntary but strongly recommended, especially before storm season.",
      },
    ],
    ctaHeading: "Protect Your Electronics Before the Next Storm Rolls In",
    ctaText:
      "Text us a photo of your panel and we'll confirm fit and quote the complete install — most homes can be protected within the week.",
    topicSectionA: {
      eyebrow: "Protection Points",
      heading: "Where Surge Protection Earns Its Keep",
      subtitle:
        "Surges hunt for expensive electronics. Here's where a panel SPD pays for itself.",
      items: [
        {
          title: "Heat Pumps & Mini-Splits",
          description:
            "Inverter-driven HVAC is the costliest surge casualty in modern NH homes — and it's hardwired, so only panel-level protection covers it.",
          icon: "Thermometer",
        },
        {
          title: "Furnace & Boiler Controls",
          description:
            "Modern heating systems run on circuit boards that a single spike can brick — in January, at the worst possible time.",
          icon: "Snowflake",
        },
        {
          title: "Well Pump Protection",
          description:
            "Pumps both suffer and generate surges; protecting the circuit extends the life of a very expensive motor down a very deep hole.",
          icon: "Droplets",
        },
        {
          title: "Home Office Equipment",
          description:
            "Computers, monitors, and network gear guarded by the panel SPD plus quality point-of-use protection at the desk.",
          icon: "Cpu",
        },
        {
          title: "Kitchen Appliance Boards",
          description:
            "Induction ranges, smart fridges, and dishwashers all carry control electronics that spikes degrade cumulatively.",
          icon: "ChefHat",
        },
        {
          title: "EV & Garage Circuits",
          description:
            "High-value charging equipment and garage subpanels brought under the same umbrella of protection.",
          icon: "PlugZap",
        },
      ],
    },
    topicSectionB: {
      eyebrow: "Grid-Smart",
      heading: "Surge Defense Tuned to Southern NH's Grid and Weather",
      subtitle:
        "We install surge protection with local knowledge of what the lines around here actually deliver.",
      items: [
        {
          title: "Storm-Season Readiness",
          description:
            "Spring and summer thunderstorm cells over the Merrimack Valley drive our busiest surge-install weeks — beat the rush.",
          icon: "Wind",
        },
        {
          title: "Rural Line Experience",
          description:
            "Homes at the end of long utility runs in outlying towns see more switching transients; we size protection accordingly.",
          icon: "Route",
        },
        {
          title: "Grounding-First Philosophy",
          description:
            "Plenty of older Manchester homes have corroded or missing ground rods — we fix the foundation before hanging the shield.",
          icon: "HardHat",
        },
        {
          title: "Quality Devices Only",
          description:
            "We install SPDs with published clamping specs, real warranties, and replaceable modules — not bargain-bin units.",
          icon: "BadgeCheck",
        },
        {
          title: "Whole-System View",
          description:
            "While we're in the panel we spot-check breakers, connections, and labeling, so you get a mini health check for free.",
          icon: "SearchCheck",
        },
        {
          title: "Honest Scope Sizing",
          description:
            "A single well-installed Type 2 device covers most homes; if that's all you need, that's all we'll sell you.",
          icon: "ThumbsUp",
        },
      ],
    },
  },
  {
    slug: "generator-installation",
    category: "residential",
    title: "Generator Installation",
    metaTitle: "Generator Installation for NH Homes | The Speedy Sparky",
    metaDescription:
      "Standby generators sized, permitted, and installed for New Hampshire outages. Keep heat and lights on in Manchester — schedule a free site assessment.",
    excerpt:
      "Automatic standby generators and portable-generator inlet systems — sized, permitted, and installed so the next outage is a non-event at your house.",
    icon: "BatteryCharging",
    cardImage: "generator-maintenance-team",
    heroImage: "home-generator-install",
    description: [
      "When a nor'easter drops lines across southern New Hampshire, the difference between a rough week and a normal one is backup power. An automatic standby generator senses the Eversource outage, starts itself within seconds, and carries your essential circuits — heat, well pump, refrigeration, sump pump, medical equipment — until utility power returns, whether you're home or three states away. For homeowners who'd rather start with less, a properly wired inlet and transfer switch turns a portable generator into a safe, code-legal backup instead of a tangle of extension cords through a cracked window.",
      "Sizing is where generator projects succeed or fail, and it starts with a load calculation, not a brochure. We measure what your heating system, well pump, and kitchen actually draw, decide together which circuits matter during an outage, and size the unit — commonly 10 to 26 kW for area homes — so it starts your largest motor loads without being oversold. Fuel matters too: we'll walk through natural gas versus propane based on what your street and lot offer.",
      "We manage the whole project: concrete or composite pad placement with proper clearances from windows and property lines, transfer switch installation, gas coordination with a licensed fuel contractor, City of Manchester permits, and a full-load test before handoff. You get a system that exercises itself weekly and a homeowner who never dreads a forecast again.",
    ],
    overviewHeading: "When Eversource Goes Down, Your House Doesn't Have To",
    benefitsHeading: "Standby Power, Handled Start to Finish",
    benefitsSubtitle:
      "One licensed contractor owning the electrical scope, the permits, and the coordination — no finger-pointing between trades.",
    benefits: [
      {
        title: "Seconds-Fast Automatic Transfer",
        description:
          "The transfer switch senses the outage and starts the generator on its own — no one needs to be home, awake, or handy.",
        icon: "Power",
      },
      {
        title: "Whole-Home or Essentials Coverage",
        description:
          "From full-house backup to a lean essentials panel covering heat, water, and refrigeration, sized to your budget.",
        icon: "Home",
      },
      {
        title: "Permits and Placement Managed",
        description:
          "Setback rules, sound considerations, gas coordination, and city inspections all handled — with 10+ years of installs behind our process.",
        icon: "CalendarCheck",
      },
      {
        title: "Proven Under Real Load",
        description:
          "Every install ends with a simulated outage and full-load test, so the first real storm isn't the first real test.",
        icon: "Activity",
      },
    ],
    featureHighlights: [
      {
        title: "Transfer Equipment Installed to Spec",
        description:
          "The automatic transfer switch is the brain of the system, and it has to isolate your home from the grid completely — protecting the line crews working outside as much as the equipment inside. We install, program, and label it so the changeover is seamless in both directions.",
        imageKey: "outdoor-control-cabinet",
      },
      {
        title: "Commissioned Like It's Storm Day",
        description:
          "Before we hand over a generator, we kill utility power and watch the whole sequence run: sense, start, transfer, carry load, retransfer, cool down. Any adjustment happens then — on a calm afternoon, not during an ice storm at 2 a.m.",
        imageKey: "emergency-field-technician",
      },
    ],
    scopeHeading: "Your Generator Project from Quote to Startup",
    features: [
      "On-site load calculation and generator sizing",
      "Automatic standby generator installation",
      "Automatic and manual transfer switch wiring",
      "Portable generator inlet and interlock installation",
      "Pad placement with code-required clearances",
      "Fuel contractor and utility coordination",
      "Manchester permitting and inspection sign-off",
      "Full-load commissioning and owner orientation",
    ],
    faqs: [
      {
        id: "faq-generator-1",
        question: "What size generator do I need for my Manchester home?",
        answer:
          "A typical area home backing up heat, well pump, refrigeration, and general lighting lands between 14 and 22 kW; essentials-only setups can run smaller, and all-electric homes with heat pumps run larger. The honest answer comes from a load calculation, which we perform at the free site visit — motor starting loads, not nameplate totals, drive the sizing.",
      },
      {
        id: "faq-generator-2",
        question: "How long does a standby generator installation take?",
        answer:
          "Plan on one to two days on site once equipment is in hand: pad and placement, transfer switch and wiring, then fuel hookup and commissioning. The longer pole is usually lead time — generator supply and permit scheduling — so the full timeline from deposit to startup typically runs a few weeks. We give you real dates at contract, not guesses.",
      },
      {
        id: "faq-generator-3",
        question: "Propane or natural gas — which is better for a generator?",
        answer:
          "If your street has natural gas, it usually wins on convenience: no tank to fill and effectively unlimited runtime. Propane suits homes beyond the gas mains and stores well, but tank capacity sets your outage endurance — we typically recommend sizing for a week or more. We'll assess your lot and coordinate the licensed gas work either way.",
      },
      {
        id: "faq-generator-4",
        question: "Is a cheaper interlock setup safe for a portable generator?",
        answer:
          "Done correctly, yes — a listed interlock kit or manual transfer switch with an exterior inlet is a code-legal, safe way to backfeed selected circuits from a portable unit. What's never safe is a \"suicide cord\" into a dryer outlet, which can kill a utility lineworker. The interlock route is a fraction of standby cost and a big step up from extension cords.",
      },
    ],
    ctaHeading: "Never Sit Through Another Outage in the Dark",
    ctaText:
      "Book a free site assessment and get a firm installed price with sizing math you can check — before the next storm makes the decision urgent.",
    topicSectionA: {
      eyebrow: "Backup Power",
      heading: "Backup Power Options for Every Home and Budget",
      subtitle:
        "There's more than one right answer to outages — we install the full spectrum and help you pick honestly.",
      items: [
        {
          title: "Automatic Standby Generators",
          description:
            "Permanently installed, self-starting, self-exercising units that carry your home through multi-day outages unattended.",
          icon: "BatteryCharging",
        },
        {
          title: "Manual Transfer Switches",
          description:
            "A budget-friendly panel that lets you power chosen circuits from a portable generator safely and legally.",
          icon: "Settings",
        },
        {
          title: "Generator Inlets & Interlocks",
          description:
            "Exterior 30- and 50-amp inlets with listed interlock kits — the code-compliant end of the extension-cord era.",
          icon: "Plug",
        },
        {
          title: "Generator Sizing & Load Studies",
          description:
            "Measured load calculations that prevent both undersized units that stall and oversized units that waste money.",
          icon: "Gauge",
        },
        {
          title: "Transfer Switch Replacement",
          description:
            "Aging or failed transfer equipment on existing systems replaced and reprogrammed without replacing the generator.",
          icon: "Wrench",
        },
        {
          title: "Maintenance & Load Testing",
          description:
            "Annual service, battery checks, and under-load testing so the unit that saved you last winter saves you next winter too.",
          icon: "CalendarCheck",
        },
      ],
    },
    topicSectionB: {
      eyebrow: "Winter-Ready",
      heading: "Generator Expertise Rooted in NH Winters",
      subtitle:
        "We install backup power in the same storms we live through — that changes how carefully the work gets done.",
      items: [
        {
          title: "Outage-Pattern Awareness",
          description:
            "Ice storms, nor'easters, and summer microbursts each stress the grid differently; our designs assume the multi-day worst case.",
          icon: "Snowflake",
        },
        {
          title: "Heating-First Circuit Design",
          description:
            "In NH the generator's first job is keeping the boiler or furnace running and pipes unfrozen — we build the circuit list around it.",
          icon: "Thermometer",
        },
        {
          title: "Well & Sump Coverage",
          description:
            "For homes on wells or with wet basements, water supply and sump circuits ride the backup panel by default.",
          icon: "Droplets",
        },
        {
          title: "Snow-Smart Placement",
          description:
            "Units sited above drift lines with intake clearance maintained — a generator buried by the plow guy protects no one.",
          icon: "MapPin",
        },
        {
          title: "Cold-Start Confidence",
          description:
            "Battery warmers and cold-weather kits specced by default, because minus-ten mornings are when starts matter most.",
          icon: "Battery",
        },
        {
          title: "Around-the-Clock Backup for Your Backup",
          description:
            "If the system ever fails to transfer during an outage, you call us directly — 24/7 — and we make it right.",
          icon: "PhoneCall",
        },
      ],
    },
  },
  {
    slug: "smoke-co-detector-installation",
    category: "residential",
    title: "Smoke & CO Detector Installation",
    metaTitle: "Smoke & CO Detectors in Manchester, NH | The Speedy Sparky",
    metaDescription:
      "Hardwired smoke and CO detectors placed to current code by a licensed NH electrician. Protect your Manchester family — book a detector upgrade today.",
    excerpt:
      "Hardwired, interconnected smoke and carbon monoxide detectors installed where code requires and life-safety science recommends — so one alarm wakes the whole house.",
    icon: "Siren",
    cardImage: "copper-wiring-macro",
    heroImage: "ceiling-light-installation",
    description: [
      "Detectors are the one electrical device in your home whose entire job is a single moment years from now. Getting that moment right means three things: correct placement (inside each bedroom, outside sleeping areas, and on every level, per code), interconnection so an alarm in the basement wakes someone sleeping two floors up, and hardwired power with battery backup so a dead 9-volt never becomes the reason nobody heard anything. We install complete systems to that standard and replace the aging patchwork of mismatched units most homes accumulate.",
      "Carbon monoxide deserves particular respect in New Hampshire, where months of heating season mean oil burners, gas furnaces, wood stoves, and idling cars in attached garages all near living space. CO is odorless and colorless, and the low-level exposure symptoms — headache, fatigue, nausea — imitate the flu that's circulating at exactly the same time of year. Properly placed CO detection near sleeping areas and fuel-burning appliances is cheap, required in NH dwellings, and genuinely lifesaving.",
      "We also retire time-expired units: smoke detectors have roughly a 10-year working life and CO sensors typically 7 to 10, after which they may chirp — or worse, silently stop sensing. If your detectors are yellowed, dated before 2016, or of unknown age, replacement is due regardless of how they respond to the test button.",
    ],
    overviewHeading: "Working Detectors Are the Cheapest Insurance in Your House",
    benefitsHeading: "Protection That's On Duty While You Sleep",
    benefitsSubtitle:
      "Placement, power, and interconnection — the three details that separate a real life-safety system from a few beeping discs.",
    benefits: [
      {
        title: "Earliest Possible Warning",
        description:
          "Photoelectric and dual-sensor units placed to catch both smoldering and fast-flame fires minutes sooner than aging ionization-only alarms.",
        icon: "AlertCircle",
      },
      {
        title: "One Alarm Wakes Everyone",
        description:
          "Interconnected detectors all sound together, so a basement fire doesn't stay a basement secret while the family sleeps upstairs.",
        icon: "Users",
      },
      {
        title: "Power That Doesn't Quit",
        description:
          "Hardwired units with sealed 10-year battery backup end the midnight chirp and the borrowed-battery gamble for good.",
        icon: "Battery",
      },
      {
        title: "Code-Verified Placement",
        description:
          "Locations mapped to current NH requirements — every bedroom, every level, and correct distances from kitchens and bathrooms to prevent nuisance trips.",
        icon: "BadgeCheck",
      },
    ],
    featureHighlights: [
      {
        title: "Interconnect Wiring Done Right",
        description:
          "True interconnection uses a third conductor between every unit, and in older homes we fish that cable cleanly through finished walls and ceilings. Where wiring runs aren't practical, we install listed wireless-interconnect units that meet the same standard.",
        imageKey: "wire-connection-work",
      },
      {
        title: "Tested as a System, Not One at a Time",
        description:
          "After installation we trigger each unit and confirm every other detector in the house responds, then verify battery backup by testing with the circuit de-energized. You watch it work before we call it done.",
        imageKey: "home-panel-troubleshooting",
      },
    ],
    scopeHeading: "What We Handle on Every Detector Job",
    features: [
      "Whole-home placement audit against current code",
      "Hardwired interconnected smoke detector installation",
      "Carbon monoxide and combination unit installation",
      "New interconnect wiring fished through finished spaces",
      "Wireless-interconnect systems where wiring isn't practical",
      "Expired and painted-over detector replacement",
      "Nuisance-alarm relocation away from kitchens and baths",
      "Full-system alarm and battery backup testing",
    ],
    faqs: [
      {
        id: "faq-detector-1",
        question: "Where are smoke and CO detectors required in NH homes?",
        answer:
          "Current standards call for a smoke detector inside every bedroom, outside each sleeping area, and on every level including the basement; CO detection is required in NH dwellings with fuel-burning appliances or attached garages, placed near sleeping areas. Rental properties face their own requirements, and we bring multifamily buildings up to spec regularly.",
      },
      {
        id: "faq-detector-2",
        question: "Why does my detector chirp even after a new battery?",
        answer:
          "A chirp that survives a battery change usually means the unit has reached end of life — the sensor is expiring, not the power. Check the manufacture date on the back: past 10 years for smoke units, it's done. If several are the same age, replacing the full set as an interconnected system costs little more than piecemeal swaps.",
      },
      {
        id: "faq-detector-3",
        question: "Are hardwired detectors really better than battery ones?",
        answer:
          "Yes, for two reasons: hardwired units can't be silently killed by a dead or borrowed battery, and they support interconnection so every alarm sounds together. Battery-only units still beat nothing, but when we're already wiring a home, hardwired interconnected protection is the standard we install — it's what code requires in new work.",
      },
      {
        id: "faq-detector-4",
        question: "Should CO detectors go high or low on the wall?",
        answer:
          "CO mixes evenly with room air rather than sinking or rising sharply, so knee-height to ceiling placement all works — following the specific model's instructions matters more than folklore about CO hugging the floor. What matters most is having them near sleeping areas and on levels with fuel-burning equipment, which is exactly what our placement audit maps.",
      },
    ],
    ctaHeading: "Is Every Bedroom in Your Home Protected Tonight?",
    ctaText:
      "A whole-home detector upgrade usually takes one visit and costs less than most people expect. Call (603) 661-8432 and sleep better this week.",
    topicSectionA: {
      eyebrow: "Detector Services",
      heading: "Detector Work That Keeps Your Family Covered",
      subtitle:
        "From single replacements to full interconnected systems, every job gets the same life-safety rigor.",
      items: [
        {
          title: "Hardwired Smoke Detector Systems",
          description:
            "Complete interconnected installations with battery backup — the configuration building codes require for good reason.",
          icon: "Siren",
        },
        {
          title: "Carbon Monoxide Detection",
          description:
            "CO units placed near bedrooms and fuel-burning appliances, critical through New Hampshire's long heating season.",
          icon: "Wind",
        },
        {
          title: "Combination Smoke/CO Units",
          description:
            "Dual-sensor devices that cut ceiling clutter while meeting both detection requirements in one listed unit.",
          icon: "ShieldCheck",
        },
        {
          title: "10-Year Sealed Battery Units",
          description:
            "Tamper-proof sealed detectors that never need a battery swap across their entire service life.",
          icon: "Battery",
        },
        {
          title: "Smart & Monitored Detectors",
          description:
            "Wi-Fi connected units that push alerts to your phone — invaluable for travel, rentals, and checking on aging parents' homes.",
          icon: "Cpu",
        },
        {
          title: "Rental Compliance Packages",
          description:
            "Whole-building detector installations and documentation for Manchester landlords ahead of inspections and turnovers.",
          icon: "Building",
        },
      ],
    },
    topicSectionB: {
      eyebrow: "Safety First",
      heading: "Life-Safety Work We Treat Like Our Own Family's",
      subtitle:
        "There's no callback on a detector that fails — so we install every one as if our kids slept down the hall.",
      items: [
        {
          title: "Placement Science, Not Guesswork",
          description:
            "Distances from walls, peaks, HVAC registers, and doorways all affect response time; we place units by the listing standard.",
          icon: "Ruler",
        },
        {
          title: "Heating-Season Perspective",
          description:
            "Wood stoves, oil burners, and attached garages define NH's CO risk profile — and where we concentrate detection.",
          icon: "Thermometer",
        },
        {
          title: "Nuisance-Alarm Elimination",
          description:
            "Detectors that cry wolf get unplugged; we relocate and re-spec units so alarms only sound when they should.",
          icon: "CheckCircle2",
        },
        {
          title: "Whole-System Records",
          description:
            "You receive a dated placement map and test log — useful for insurance, rentals, and future home sale disclosures.",
          icon: "ClipboardCheck",
        },
        {
          title: "Multifamily Experience",
          description:
            "Interconnection across units and common hallways in two- and three-families handled to code without guesswork.",
          icon: "Building2",
        },
        {
          title: "Bundled with Any Visit",
          description:
            "Already having us out for other work? Detector checks and swaps add minimal cost while we're on the ladder.",
          icon: "Package",
        },
      ],
    },
  },
  {
    slug: "electrical-inspections",
    category: "residential",
    title: "Electrical Safety Inspections",
    metaTitle: "Manchester Electrical Safety Inspections — NH Licensed",
    metaDescription:
      "A licensed electrician's top-to-bottom safety inspection for southern NH homes. Ideal before buying or renovating — schedule your inspection today.",
    excerpt:
      "A licensed, 5.0-star rated electrician's methodical top-to-bottom review of your home's electrical system — with a written report you can act on, negotiate with, or file away for peace of mind.",
    icon: "ClipboardCheck",
    cardImage: "circuit-testing-distribution-panel",
    heroImage: "live-panel-testing",
    description: [
      "A general home inspector looks at your electrical system for minutes; we look at nothing else for hours. Our safety inspection opens the panel and examines every breaker, termination, and bus connection, tests a representative sample of receptacles for polarity, grounding, and GFCI function, checks for the recalled panel brands still lurking in area basements, and evaluates the service entrance, grounding electrode system, and visible wiring throughout the attic and basement. Findings land in a written, photo-documented report ranked by urgency — what's dangerous now, what's aging, and what's merely cosmetic.",
      "The timing that brings most people to us: buying a home (especially one of southern NH's many pre-1970 houses, where original services and mystery renovations are the rule), satisfying an insurance carrier's request, planning a renovation, or noticing symptoms — warm plates, dimming, burning odors — that deserve a professional's eyes before they escalate. Buyers routinely use our reports to negotiate repairs worth many times the inspection fee.",
      "Just as valuable is what an inspection rules out. Most homes we inspect need a handful of modest corrections, not a rewire, and knowing that from a licensed electrician's written assessment beats years of low-grade worry about what's behind the walls.",
    ],
    overviewHeading: "Know Exactly What's Behind Your Walls",
    benefitsHeading: "What a Thorough Inspection Actually Buys You",
    benefitsSubtitle:
      "Findings ranked honestly, documented clearly, and never inflated to sell you repair work you don't need.",
    benefits: [
      {
        title: "Nothing Gets Skimmed",
        description:
          "Panel interior, service entrance, grounding, device sampling, and visible wiring all examined — a scope no general home inspection matches.",
        icon: "Eye",
      },
      {
        title: "A Report Worth Filing",
        description:
          "Photo-documented findings ranked by urgency, written to be understood by homeowners, insurers, and closing attorneys alike.",
        icon: "FileCheck",
      },
      {
        title: "Negotiating Power for Buyers",
        description:
          "A licensed electrician's itemized findings carry weight at the closing table that a checkbox report never will.",
        icon: "TrendingUp",
      },
      {
        title: "Inspected by the License Holder",
        description:
          "NH master electrician #15673 performs every inspection personally — the same eyes on every panel, every time.",
        icon: "HardHat",
      },
    ],
    featureHighlights: [
      {
        title: "Live Testing, Not Just Looking",
        description:
          "Visual checks catch some problems; measurements catch the rest. We take voltage readings, test GFCI and AFCI response, and clamp actual circuit loads to find the overloaded runs and weak connections a flashlight tour would miss.",
        imageKey: "panel-testing-clamp-meter",
      },
      {
        title: "Every Circuit Traced and Verified",
        description:
          "We verify that breakers match their labels and their wire sizes — 14-gauge wire on a 20-amp breaker is one of the most common and quietly dangerous finds in older homes. Your panel directory gets corrected as part of the visit.",
        imageKey: "wiring-multimeter-test",
      },
    ],
    scopeHeading: "What We Check During a Safety Inspection",
    features: [
      "Panel interior, breaker, and termination examination",
      "Recalled panel brand identification",
      "Service entrance and meter equipment review",
      "Grounding electrode and bonding verification",
      "Receptacle polarity, ground, and GFCI/AFCI testing",
      "Attic and basement wiring condition assessment",
      "Breaker-to-wire-gauge compatibility checks",
      "Written, photo-documented findings report",
    ],
    faqs: [
      {
        id: "faq-inspect-1",
        question: "How much does an electrical inspection cost and how long does it take?",
        answer:
          "A single-family inspection typically runs two to three hours on site, with multifamily buildings scaled per unit, and pricing is flat and quoted up front. Buyers often schedule it inside their due-diligence window alongside the general home inspection — tell us your deadline and we prioritize accordingly.",
      },
      {
        id: "faq-inspect-2",
        question: "Is this different from the city inspection when work is permitted?",
        answer:
          "Yes — municipal inspectors verify that specific permitted work meets code at rough-in and finish; they don't assess your whole system's health. Our inspection is a comprehensive owner-side review of everything, permitted or not, including the decades of unpermitted work older homes tend to accumulate.",
      },
      {
        id: "faq-inspect-3",
        question: "What happens if the inspection finds problems?",
        answer:
          "You get an itemized report with findings ranked urgent, recommended, and informational, plus flat pricing for any corrections — with zero obligation to use us for the repairs. If we find something an insurer or lender needs addressed, such as an obsolete panel, we'll note the fix and point you to our electrical panel upgrades page for that specific scope.",
      },
      {
        id: "faq-inspect-4",
        question: "My insurance company asked for an electrical inspection — can you help?",
        answer:
          "This is one of our most common requests, particularly for older Manchester homes at policy renewal. We perform the inspection, document the system's condition in the format carriers expect, and if corrections are required we complete them and issue updated documentation. Most insurance-driven inspections are scheduled within the week.",
      },
    ],
    ctaHeading: "Book Your Inspection Before Problems Find You",
    ctaText:
      "Buying, renewing insurance, or just done wondering about that panel? Schedule a comprehensive inspection and get answers in writing.",
    topicSectionA: {
      eyebrow: "Inspection Types",
      heading: "Inspection Services for Every Situation",
      subtitle:
        "Different milestones call for different depths of review — we scope the inspection to the decision you're making.",
      items: [
        {
          title: "Home-Purchase Inspections",
          description:
            "Deep electrical due diligence inside your contingency window, with findings you can bring straight to negotiations.",
          icon: "KeyRound",
        },
        {
          title: "Insurance & Carrier Inspections",
          description:
            "Condition documentation in the format underwriters request, plus corrections and re-certification when required.",
          icon: "FileCheck",
        },
        {
          title: "Pre-Renovation Assessments",
          description:
            "Know your panel capacity, circuit availability, and code obligations before the kitchen designer starts drawing.",
          icon: "Hammer",
        },
        {
          title: "Whole-Home Safety Audits",
          description:
            "The just-want-to-know inspection for owners of older homes who'd rather have facts than assumptions.",
          icon: "SearchCheck",
        },
        {
          title: "Rental & Multifamily Inspections",
          description:
            "Unit-by-unit reviews for Manchester landlords covering panels, detectors, GFCI compliance, and tenant-safety items.",
          icon: "Building2",
        },
        {
          title: "Post-Event Damage Checks",
          description:
            "After lightning, flooding, or a vehicle-pole strike, we verify what the surge or fault actually touched before you file the claim.",
          icon: "AlertCircle",
        },
      ],
    },
    topicSectionB: {
      eyebrow: "Trusted Eyes",
      heading: "The Inspector Homebuyers and Agents Call First",
      subtitle:
        "An inspection is only as good as the judgment behind it — ours is built on years inside this city's walls.",
      items: [
        {
          title: "Fluent in Old Housing Stock",
          description:
            "From 1890s balloon frames to 1960s ranches, we know what each era of local construction did — and hid — electrically.",
          icon: "House",
        },
        {
          title: "Deadline-Driven Scheduling",
          description:
            "Purchase contingencies don't wait, so inspection slots are held weekly for buyers on the clock.",
          icon: "CalendarClock",
        },
        {
          title: "Plain-English Reporting",
          description:
            "Every finding explained in terms of actual risk and actual cost — no scare language, no code-citation word salad.",
          icon: "MessageSquare",
        },
        {
          title: "No-Pressure Findings",
          description:
            "The report is the product; you're free to bid the repairs anywhere, which is exactly why people trust our findings.",
          icon: "ThumbsUp",
        },
        {
          title: "Agent & Attorney Friendly",
          description:
            "Reports formatted for real estate transactions, delivered fast enough to matter before your reply deadline.",
          icon: "Users",
        },
        {
          title: "Follow-Through Available",
          description:
            "If you do want the corrections handled, the electrician who found the issues is the one who fixes them.",
          icon: "CheckCircle2",
        },
      ],
    },
  },
];
