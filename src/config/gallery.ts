// ===== PROJECT GALLERY =====
// Real job photos from The Speedy Sparky's own work (not stock). Assets are
// produced by scripts/prepare-gallery.mjs, which writes both renditions:
//   /images/gallery/<slug>-thumb.jpg  (640w, grid tile)
//   /images/gallery/<slug>.jpg        (1600w, lightbox)
// Every source photo is portrait 3:4, so the grid can use a single aspect
// ratio and never letterbox.

export interface GalleryPhoto {
  /** Basename shared by the thumb and full renditions */
  slug: string;
  /** Short label shown on hover and as the lightbox title */
  title: string;
  /** Sentence shown under the photo in the lightbox; doubles as alt text */
  caption: string;
}

export const galleryAspectRatio = "3 / 4";

/** Number of tiles shown before the "show all" toggle */
export const galleryInitialCount = 12;

// Ordered for the grid — strongest, most recognizable work first.
export const galleryPhotos: GalleryPhoto[] = [
  {
    slug: "service-van-driveway",
    title: "On Site in the Neighborhood",
    caption:
      "The Speedy Sparky van parked at a New Hampshire home for a scheduled service call.",
  },
  {
    slug: "outdoor-subpanel-wiring",
    title: "Outdoor Subpanel",
    caption:
      "An exterior disconnect and subpanel wired out with new breakers, feeders, and grounding.",
  },
  {
    slug: "ev-charger-grizzle-install",
    title: "Level 2 EV Charger",
    caption:
      "A Grizzl-E Level 2 EV charger mounted on the garage wall and fed by its own dedicated circuit.",
  },
  {
    slug: "basement-panel-transfer-switch",
    title: "Panel & Transfer Switch",
    caption:
      "A new basement load center paired with a generator transfer switch and neatly dressed home runs.",
  },
  {
    slug: "over-range-microwave",
    title: "Over-the-Range Microwave",
    caption:
      "An over-the-range microwave hung and wired above a gas range during a kitchen update.",
  },
  {
    slug: "solar-gate-opener",
    title: "Solar Gate Opener",
    caption:
      "A solar-powered gate operator wired at the end of a new gravel driveway.",
  },
  {
    slug: "bedroom-ceiling-fan",
    title: "Bedroom Ceiling Fan",
    caption:
      "A ceiling fan with an integrated LED light installed and balanced in a bedroom.",
  },
  {
    slug: "exterior-meter-service",
    title: "Exterior Service Equipment",
    caption:
      "Meter socket and service equipment mounted and sealed on the side of a home.",
  },
  {
    slug: "kitchen-ceiling-light",
    title: "Kitchen Light Upgrade",
    caption:
      "An LED flush-mount fixture replacing a dated kitchen ceiling light.",
  },
  {
    slug: "ev-charger-driveway-install",
    title: "Driveway Charging Station",
    caption:
      "A Level 2 charging station set at reach height beside the driveway with the cord holster mounted alongside.",
  },
  {
    slug: "meter-socket-replacement",
    title: "Meter Socket Replacement",
    caption:
      "A replacement meter socket with new service conductors run down to the panel.",
  },
  {
    slug: "wall-oven-microwave-install",
    title: "Wall Oven Install",
    caption:
      "A stainless wall oven and microwave combo wired and set into the cabinet run during a kitchen remodel.",
  },
  {
    slug: "storefront-wall-pack",
    title: "Storefront Lighting",
    caption:
      "An LED wall pack lighting a storefront entry for a Manchester-area business.",
  },
  {
    slug: "breaker-panel-labeled",
    title: "Labeled Circuits",
    caption:
      "Fresh breakers landed and every circuit hand-labeled before the panel cover goes back on.",
  },
  {
    slug: "van-ladders-loaded",
    title: "Loaded and Ready",
    caption:
      "Ladders racked and the van staged in the driveway ahead of a full-day install.",
  },
  {
    slug: "exterior-camera-light",
    title: "Exterior Camera & Light",
    caption:
      "Camera and light work at the roofline of a commercial building, ladder set for safe access.",
  },
  {
    slug: "microwave-cabinet-outlet",
    title: "Hidden Appliance Outlet",
    caption:
      "A dedicated outlet installed inside the upper cabinet to feed an over-the-range microwave.",
  },
  {
    slug: "service-mast-meter",
    title: "Service Mast & Meter",
    caption:
      "Service mast, meter, and exterior devices tied together on a residential service upgrade.",
  },
  {
    slug: "gfci-outlet-install",
    title: "GFCI Protection",
    caption:
      "A tamper-resistant GFCI receptacle installed to bring an outlet up to current code.",
  },
  {
    slug: "circuit-directory-labels",
    title: "Circuit Directory",
    caption:
      "An older panel relabeled so every breaker in the house is easy to identify.",
  },
  {
    slug: "van-job-site-spring",
    title: "Residential Service Call",
    caption:
      "The van set up outside a home for an exterior lighting and wiring job.",
  },
];
