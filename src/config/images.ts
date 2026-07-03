import type { ImageSlotConfig } from "@/types";

// ===== IMAGE MANIFEST =====
// Every image on the site has a named slot keyed by its filename basename.
// All photos live in /public/images/ (processed from the client's stock set
// by scripts/prepare-assets.mjs). Rule enforced across page templates: a page
// never renders the same image twice (hero background excluded).

export const imageManifest: Record<string, ImageSlotConfig> = {
  // ===== PANELS / DIAGNOSTICS =====
  "panel-testing-clamp-meter": {
    src: "/images/panel-testing-clamp-meter.jpg",
    alt: "Licensed electrician testing a breaker panel with a clamp meter",
    width: 1920,
    height: 1080,
  },
  "industrial-panel-multimeter": {
    src: "/images/industrial-panel-multimeter.jpg",
    alt: "Technician measuring voltage on a commercial electrical panel with a multimeter",
    width: 1400,
    height: 788,
  },
  "home-panel-troubleshooting": {
    src: "/images/home-panel-troubleshooting.jpg",
    alt: "Electrician troubleshooting a residential breaker panel in a New Hampshire home",
    width: 1400,
    height: 788,
    focalPoint: { x: 0.65, y: 0.5 },
  },
  "circuit-testing-distribution-panel": {
    src: "/images/circuit-testing-distribution-panel.jpg",
    alt: "Close-up of circuit testing at an electrical distribution panel",
    width: 1400,
    height: 788,
  },
  "panel-breaker-wiring": {
    src: "/images/panel-breaker-wiring.jpg",
    alt: "Electrician wiring circuit breakers inside an electrical panel",
    width: 1400,
    height: 788,
  },
  // NOTE: photo actually shows an EV wallbox circuit being clamp-meter tested
  "live-panel-testing": {
    src: "/images/live-panel-testing.jpg",
    alt: "Electrician clamp-meter testing the dedicated circuit for a wall-mounted home EV charger",
    width: 1400,
    height: 788,
  },
  "commercial-panel-inspection": {
    src: "/images/commercial-panel-inspection.jpg",
    alt: "Commercial electrician in safety gear inspecting an industrial electrical panel",
    width: 1920,
    height: 1080,
  },
  "industrial-control-panel": {
    src: "/images/industrial-control-panel.jpg",
    alt: "Electrician operating push-button controls on an industrial panel",
    width: 1400,
    height: 788,
  },

  // ===== EV CHARGING =====
  // NOTE: photo actually shows a rooftop technician near heat-pump units (not EV)
  "home-ev-charging-dusk": {
    src: "/images/home-ev-charging-dusk.jpg",
    alt: "Technician in safety gear preparing equipment beside rooftop heat pump units",
    width: 1920,
    height: 1080,
  },
  "ev-charger-wall-install": {
    src: "/images/ev-charger-wall-install.jpg",
    alt: "Electrician installing a wall-mounted EV charging station on a modern home",
    width: 1920,
    height: 1080,
    // Keeps the charger and the electrician's hands in portrait crops
    focalPoint: { x: 0.65, y: 0.45 },
  },
  "ev-charging-homeowner": {
    src: "/images/ev-charging-homeowner.jpg",
    alt: "Homeowner plugging an EV charging cable in at home in southern New Hampshire",
    width: 1920,
    height: 1080,
    focalPoint: { x: 0.45, y: 0.4 },
  },
  // Aliases with EV-accurate framing (same files as live-panel-testing /
  // garage-equipment-install — never render an alias and its original on one page)
  "ev-charger-unit-closeup": {
    src: "/images/live-panel-testing.jpg",
    alt: "Load-testing a freshly wired Level 2 EV charging station with a clamp meter",
    width: 1400,
    height: 788,
  },
  "ev-charger-garage-mount": {
    src: "/images/garage-equipment-install.jpg",
    alt: "Electrician verifying breaker connections beside a wall-mounted EV charger",
    width: 1400,
    height: 788,
  },

  // ===== EMERGENCY / FIELD WORK =====
  "emergency-field-technician": {
    src: "/images/emergency-field-technician.jpg",
    alt: "Emergency electrician in hard hat and safety vest opening an outdoor electrical enclosure",
    width: 1920,
    height: 1080,
  },
  // NOTE: photo actually shows an indoor wall-switch repair closeup
  "outdoor-control-cabinet": {
    src: "/images/outdoor-control-cabinet.jpg",
    alt: "Electrician repairing a wall switch with insulated gloves and screwdriver",
    width: 1400,
    height: 788,
  },
  // NOTE: photo actually shows a pendant light installation
  "electrical-safety-testing": {
    src: "/images/electrical-safety-testing.jpg",
    alt: "Electrician installing cylinder pendant light fixtures in a bright living space",
    width: 1400,
    height: 788,
  },
  // NOTE: photo actually shows a finished marble bathroom interior
  "wiring-multimeter-test": {
    src: "/images/wiring-multimeter-test.jpg",
    alt: "Finished bathroom remodel with marble tile and glass shower enclosure",
    width: 1400,
    height: 788,
  },

  // ===== WIRING / OUTLETS =====
  // NOTE: photo is a flat lay of a wiring diagram, multimeter, and connectors
  "outlet-wiring-closeup": {
    src: "/images/outlet-wiring-closeup.jpg",
    alt: "Wiring diagram, multimeter, and connectors laid out to plan an electrical repair",
    width: 1400,
    height: 788,
  },
  "wire-connection-work": {
    src: "/images/wire-connection-work.jpg",
    alt: "Close-up of an electrician securing a wire connector with pliers",
    width: 1400,
    height: 788,
  },
  "copper-wiring-macro": {
    src: "/images/copper-wiring-macro.jpg",
    alt: "Macro view of copper electrical wiring strands",
    width: 1400,
    height: 788,
  },
  "light-switch-closeup": {
    src: "/images/light-switch-closeup.jpg",
    alt: "Newly installed wall light switch with a clean white cover plate",
    width: 1400,
    height: 788,
  },
  "gfci-outlet-install": {
    src: "/images/gfci-outlet-install.jpg",
    alt: "Electrician installing a GFCI outlet in a residential wall",
    width: 1400,
    height: 788,
  },

  // ===== LIGHTING — INTERIOR =====
  "kitchen-pendant-lighting-install": {
    src: "/images/kitchen-pendant-lighting-install.jpg",
    alt: "Electrician installing pendant lights in a bright modern kitchen",
    width: 1400,
    height: 788,
  },
  "modern-kitchen-pendants": {
    src: "/images/modern-kitchen-pendants.jpg",
    alt: "Kitchen island with designer pendant lighting and marble counters",
    width: 1400,
    height: 788,
  },
  "under-cabinet-lighting": {
    src: "/images/under-cabinet-lighting.jpg",
    alt: "Under-cabinet LED lighting in a dark modern kitchen",
    width: 1400,
    height: 788,
  },
  "dramatic-kitchen-lighting": {
    src: "/images/dramatic-kitchen-lighting.jpg",
    alt: "Dramatic accent lighting in a black marble kitchen",
    width: 1400,
    height: 788,
  },
  "kitchen-lighting-renovation": {
    src: "/images/kitchen-lighting-renovation.jpg",
    alt: "Electrician installing multiple pendant fixtures during a kitchen renovation",
    width: 1400,
    height: 788,
  },
  "recessed-lighting-install": {
    src: "/images/recessed-lighting-install.jpg",
    alt: "Recessed ceiling light fixtures being installed in a residential ceiling",
    width: 1400,
    height: 788,
  },
  "ceiling-light-installation": {
    src: "/images/ceiling-light-installation.jpg",
    alt: "Electrician in hard hat installing a recessed light in a drywall ceiling",
    width: 1400,
    height: 788,
  },
  "vanity-mirror-lighting": {
    src: "/images/vanity-mirror-lighting.jpg",
    alt: "Bathroom vanity with warm backlit mirror lighting",
    width: 1400,
    height: 788,
  },
  "led-mirror-bathroom": {
    src: "/images/led-mirror-bathroom.jpg",
    alt: "Modern bathroom with LED backlit wall mirror",
    width: 1400,
    height: 788,
  },
  "gold-vanity-lighting": {
    src: "/images/gold-vanity-lighting.jpg",
    alt: "Elegant vanity mirror with gold accent lighting",
    width: 1400,
    height: 788,
  },

  // ===== LIGHTING — OUTDOOR =====
  "landscape-lighting-dusk": {
    src: "/images/landscape-lighting-dusk.jpg",
    alt: "Illuminated landscape pathway lighting in a garden at dusk",
    width: 1920,
    height: 1080,
  },
  "deck-uplighting-evening": {
    src: "/images/deck-uplighting-evening.jpg",
    alt: "Deck and facade uplighting on a home at evening",
    width: 1400,
    height: 788,
  },
  "home-exterior-night-lighting": {
    src: "/images/home-exterior-night-lighting.jpg",
    alt: "Modern New Hampshire home exterior with professional landscape lighting at night",
    width: 1920,
    height: 1080,
  },
  "outdoor-pavilion-lighting": {
    src: "/images/outdoor-pavilion-lighting.jpg",
    alt: "Covered outdoor pavilion with ceiling and deck lighting at dusk",
    width: 1400,
    height: 788,
  },
  "garden-post-lighting": {
    src: "/images/garden-post-lighting.jpg",
    alt: "Garden post lights illuminating plants and walkways at dusk",
    width: 1400,
    height: 788,
  },

  // ===== GENERATORS / POWER =====
  "home-generator-install": {
    src: "/images/home-generator-install.jpg",
    alt: "Electrician installing a standby generator outside a residential home",
    width: 1400,
    height: 788,
  },
  "generator-maintenance-team": {
    src: "/images/generator-maintenance-team.jpg",
    alt: "Two technicians servicing a backup generator at a residential property",
    width: 1400,
    height: 788,
  },
  "commercial-generator-delivery": {
    src: "/images/commercial-generator-delivery.jpg",
    alt: "Commercial generator being delivered by forklift to a property",
    width: 1400,
    height: 788,
  },

  // ===== SMART HOME / LOW VOLTAGE =====
  "security-camera-install": {
    src: "/images/security-camera-install.jpg",
    alt: "Technicians installing a security camera on an interior wall",
    width: 1400,
    height: 788,
  },
  "smart-home-control-panel": {
    src: "/images/smart-home-control-panel.jpg",
    alt: "Wall-mounted smart home control panel showing temperature and automation settings",
    width: 1400,
    height: 788,
  },
  "smart-home-network": {
    src: "/images/smart-home-network.jpg",
    alt: "Connected smart home devices visualized across a bright home interior",
    width: 1400,
    height: 788,
  },

  // ===== SOLAR / ROOF =====
  "solar-roof-aerial": {
    src: "/images/solar-roof-aerial.jpg",
    alt: "Aerial view of a residential rooftop solar panel array",
    width: 1920,
    height: 1080,
  },
  "roof-crew-bright-sky": {
    src: "/images/roof-crew-bright-sky.jpg",
    alt: "Electrical crew working on a residential roof under a bright blue sky",
    width: 1920,
    height: 1080,
  },
  "rooftop-hvac-electrical": {
    src: "/images/rooftop-hvac-electrical.jpg",
    alt: "Technician wiring rooftop HVAC equipment on a commercial building",
    width: 1400,
    height: 788,
  },

  // ===== COMMERCIAL SPACES =====
  "office-recessed-lighting": {
    src: "/images/office-recessed-lighting.jpg",
    alt: "Modern open-plan office with recessed LED ceiling lighting",
    width: 1920,
    height: 1080,
  },
  "conference-room-electrical": {
    src: "/images/conference-room-electrical.jpg",
    alt: "Glass-walled conference room with skyline views and integrated lighting",
    width: 1400,
    height: 788,
  },
  "corporate-office-lighting": {
    src: "/images/corporate-office-lighting.jpg",
    alt: "Corporate office floor with workstations and recessed lighting",
    width: 1400,
    height: 788,
  },

  // ===== RESIDENTIAL INTERIORS =====
  "ceiling-fan-installation": {
    src: "/images/ceiling-fan-installation.jpg",
    alt: "Technician installing a white ceiling fan in a bright modern room",
    width: 1400,
    height: 788,
  },
  // NOTE: photo actually shows an EV charger install check in a garage
  "garage-equipment-install": {
    src: "/images/garage-equipment-install.jpg",
    alt: "Electrician testing a garage subpanel beside a wall-mounted EV charging unit",
    width: 1400,
    height: 788,
  },
  "luxury-bathroom-skylights": {
    src: "/images/luxury-bathroom-skylights.jpg",
    alt: "Luxury bathroom with soaking tub, marble shower, and skylights",
    width: 1400,
    height: 788,
  },
  "luxury-bath-remodel": {
    src: "/images/luxury-bath-remodel.jpg",
    alt: "Remodeled luxury bathroom with freestanding tub and walk-in shower",
    width: 1400,
    height: 788,
  },
  "master-bath-electrical": {
    src: "/images/master-bath-electrical.jpg",
    alt: "Master bathroom with marble finishes and natural light",
    width: 1400,
    height: 788,
  },

  // ===== ALIASES USED BY FIXED COMPONENT SLOTS =====
  "hero-home": {
    src: "/images/home-exterior-night-lighting.jpg",
    alt: "Manchester NH home glowing with professionally installed exterior lighting at night",
    width: 1920,
    height: 1080,
    focalPoint: { x: 0.5, y: 0.45 },
  },
  // Same file as ev-charging-homeowner — never render both on one page
  "hero-ev": {
    src: "/images/ev-charging-homeowner.jpg",
    alt: "Homeowner charging an EV with a wall-mounted Level 2 charger at their Manchester NH home",
    width: 1920,
    height: 1080,
    focalPoint: { x: 0.58, y: 0.45 },
  },
  // Same file as panel-testing-clamp-meter — never render both on one page
  "hero-panel": {
    src: "/images/panel-testing-clamp-meter.jpg",
    alt: "Licensed NH electrician load-testing a breaker panel with a clamp meter during a 200-amp upgrade",
    width: 1920,
    height: 1080,
    focalPoint: { x: 0.4, y: 0.45 },
  },
  // Same file as emergency-field-technician — never render both on one page
  "hero-emergency": {
    src: "/images/emergency-field-technician.jpg",
    alt: "Emergency electrician in hi-vis gear diagnosing a fault in an outdoor electrical enclosure at a NH home",
    width: 1920,
    height: 1080,
    focalPoint: { x: 0.3, y: 0.4 },
  },

  // ===== BRANDING =====
  logo: {
    src: "/images/logo.png",
    alt: "The Speedy Sparky LLC logo",
    width: 517,
    height: 501,
  },
  "logo-white": {
    src: "/images/logo-white.png",
    alt: "The Speedy Sparky LLC logo",
    width: 517,
    height: 501,
  },
};
