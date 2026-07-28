// Gallery asset pipeline for The Speedy Sparky site.
// Processes the client's real job photos from images/gallery → public/images/gallery
// Each photo gets two renditions:
//   - <slug>-thumb.jpg (640w)  → grid tile (~300px slot, 2x DPR)
//   - <slug>.jpg       (1600w) → lightbox
// Run: node scripts/prepare-gallery.mjs

import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC = path.join(ROOT, "images", "gallery");
const OUT = path.join(ROOT, "public", "images", "gallery");

// source number → output slug (source files are the client's dated phone photos,
// all shot portrait at 1703x2271)
export const GALLERY = {
  1: "wall-oven-microwave-install",
  2: "exterior-meter-service",
  3: "outdoor-subpanel-wiring",
  4: "ev-charger-grizzle-install",
  5: "ev-charger-driveway-install",
  6: "microwave-cabinet-outlet",
  7: "solar-gate-opener",
  8: "basement-panel-transfer-switch",
  9: "breaker-panel-labeled",
  10: "service-van-driveway",
  11: "kitchen-ceiling-light",
  12: "gfci-outlet-install",
  13: "exterior-camera-light",
  14: "service-mast-meter",
  15: "bedroom-ceiling-fan",
  16: "storefront-wall-pack",
  17: "circuit-directory-labels",
  18: "van-job-site-spring",
  19: "meter-socket-replacement",
  20: "over-range-microwave",
  21: "van-ladders-loaded",
};

await mkdir(OUT, { recursive: true });

const dimensions = {};
for (const [num, slug] of Object.entries(GALLERY)) {
  const input = path.join(SRC, `${num}.jpg`);

  const full = await sharp(input)
    .rotate() // respect EXIF orientation
    .resize({ width: 1600, withoutEnlargement: true })
    .jpeg({ quality: 80, progressive: true, mozjpeg: true })
    .toFile(path.join(OUT, `${slug}.jpg`));

  const thumb = await sharp(input)
    .rotate()
    .resize({ width: 640, withoutEnlargement: true })
    .jpeg({ quality: 72, progressive: true, mozjpeg: true })
    .toFile(path.join(OUT, `${slug}-thumb.jpg`));

  dimensions[slug] = {
    width: full.width,
    height: full.height,
    thumbWidth: thumb.width,
    thumbHeight: thumb.height,
  };
  console.log(`${num} → ${slug}.jpg (${full.width}x${full.height})`);
}

await writeFile(
  path.join(ROOT, "scripts", "gallery-dimensions.json"),
  JSON.stringify(dimensions, null, 2),
);
console.log("Gallery assets prepared.");
