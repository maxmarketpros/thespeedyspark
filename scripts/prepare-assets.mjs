// One-time asset pipeline for The Speedy Sparky site.
// - Resizes/renames the client's stock photos from images/stock-photos → public/images
// - Extracts the two logo variants embedded in images/logo/Finalized-Logo.svg
// - Generates favicons + apple-touch-icon + android-chrome icons + favicon.ico
// - Composites the 1200x630 OpenGraph image
// Run: node scripts/prepare-assets.mjs

import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC = path.join(ROOT, "images", "stock-photos");
const OUT = path.join(ROOT, "public", "images");
const PUB = path.join(ROOT, "public");

// number → { name, width } (heroes get 1920, everything else 1400)
// Photo 50 is blank/corrupted — intentionally skipped.
const PHOTOS = {
  1: { name: "panel-testing-clamp-meter", width: 1920 },
  2: { name: "kitchen-pendant-lighting-install", width: 1400 },
  3: { name: "industrial-panel-multimeter", width: 1400 },
  4: { name: "emergency-field-technician", width: 1920 },
  5: { name: "home-panel-troubleshooting", width: 1400 },
  6: { name: "circuit-testing-distribution-panel", width: 1400 },
  7: { name: "outlet-wiring-closeup", width: 1400 },
  8: { name: "rooftop-hvac-electrical", width: 1400 },
  9: { name: "home-ev-charging-dusk", width: 1920 },
  10: { name: "home-generator-install", width: 1400 },
  11: { name: "wire-connection-work", width: 1400 },
  12: { name: "panel-breaker-wiring", width: 1400 },
  13: { name: "ceiling-fan-installation", width: 1400 },
  14: { name: "copper-wiring-macro", width: 1400 },
  15: { name: "outdoor-control-cabinet", width: 1400 },
  16: { name: "live-panel-testing", width: 1400 },
  17: { name: "garage-equipment-install", width: 1400 },
  18: { name: "ev-charger-wall-install", width: 1920 },
  19: { name: "ev-charging-homeowner", width: 1400 },
  20: { name: "generator-maintenance-team", width: 1400 },
  21: { name: "commercial-generator-delivery", width: 1400 },
  22: { name: "solar-roof-aerial", width: 1920 },
  23: { name: "roof-crew-bright-sky", width: 1920 },
  24: { name: "security-camera-install", width: 1400 },
  25: { name: "smart-home-control-panel", width: 1400 },
  26: { name: "smart-home-network", width: 1400 },
  27: { name: "landscape-lighting-dusk", width: 1920 },
  28: { name: "deck-uplighting-evening", width: 1400 },
  29: { name: "modern-kitchen-pendants", width: 1400 },
  30: { name: "under-cabinet-lighting", width: 1400 },
  31: { name: "home-exterior-night-lighting", width: 1920 },
  32: { name: "outdoor-pavilion-lighting", width: 1400 },
  33: { name: "garden-post-lighting", width: 1400 },
  34: { name: "luxury-bathroom-skylights", width: 1400 },
  35: { name: "vanity-mirror-lighting", width: 1400 },
  36: { name: "dramatic-kitchen-lighting", width: 1400 },
  37: { name: "led-mirror-bathroom", width: 1400 },
  38: { name: "luxury-bath-remodel", width: 1400 },
  39: { name: "electrical-safety-testing", width: 1400 },
  40: { name: "kitchen-lighting-renovation", width: 1400 },
  41: { name: "commercial-panel-inspection", width: 1920 },
  42: { name: "office-recessed-lighting", width: 1920 },
  43: { name: "conference-room-electrical", width: 1400 },
  44: { name: "corporate-office-lighting", width: 1400 },
  45: { name: "gold-vanity-lighting", width: 1400 },
  46: { name: "master-bath-electrical", width: 1400 },
  47: { name: "recessed-lighting-install", width: 1400 },
  48: { name: "wiring-multimeter-test", width: 1400 },
  49: { name: "industrial-control-panel", width: 1400 },
  51: { name: "ceiling-light-installation", width: 1400 },
  52: { name: "light-switch-closeup", width: 1400 },
  53: { name: "gfci-outlet-install", width: 1400 },
};

async function processPhotos() {
  await mkdir(OUT, { recursive: true });
  const manifest = {};
  for (const [num, { name, width }] of Object.entries(PHOTOS)) {
    const input = path.join(SRC, `${num}.jpg`);
    const output = path.join(OUT, `${name}.jpg`);
    const img = sharp(input).rotate(); // respect EXIF orientation
    const meta = await img.metadata();
    const targetWidth = Math.min(width, meta.width ?? width);
    const info = await img
      .resize({ width: targetWidth, withoutEnlargement: true })
      .jpeg({ quality: 78, progressive: true, mozjpeg: true })
      .toFile(output);
    manifest[num] = { name: `${name}.jpg`, width: info.width, height: info.height };
    console.log(`photo ${num} → ${name}.jpg (${info.width}x${info.height})`);
  }
  await writeFile(
    path.join(ROOT, "scripts", "photo-dimensions.json"),
    JSON.stringify(manifest, null, 2),
  );
}

async function extractLogos() {
  const svg = await readFile(
    path.join(ROOT, "images", "logo", "Finalized-Logo.svg"),
    "utf8",
  );
  const payloads = [...svg.matchAll(/data:image\/png;base64,([A-Za-z0-9+/=]+)/g)].map(
    (m) => Buffer.from(m[1], "base64"),
  );
  // Payloads 0/1 are duplicates of the white knockout; 2/3 of the color logo.
  const unique = [];
  const seen = new Set();
  for (const buf of payloads) {
    const key = `${buf.length}`;
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(buf);
    }
  }
  if (unique.length < 2) throw new Error("Expected 2 unique embedded logo PNGs");
  const [white, color] = unique; // order in file: white first, color second

  // Both embedded PNGs sit on an opaque black background — inside the SVG the
  // white knockout is used as a luminance mask. Reproduce that: alpha channel
  // = luminance of the white version, applied to both variants.
  const whiteMeta = await sharp(white).metadata();
  const colorMeta = await sharp(color).metadata();
  if (whiteMeta.width !== colorMeta.width || whiteMeta.height !== colorMeta.height) {
    throw new Error("Logo variants have mismatched dimensions — cannot mask");
  }
  const alpha = await sharp(white)
    .flatten({ background: "#000000" })
    .grayscale()
    .toBuffer();

  // Note: inputs are 3-channel RGB; removeAlpha/flatten must NOT be chained here
  // because sharp applies removeAlpha after joinChannel and would strip the mask.
  const withMask = async (buf) => sharp(buf).joinChannel(alpha).png().toBuffer();

  // White version: solid white artwork carrying the mask as alpha
  const whiteOut = await sharp({
    create: {
      width: whiteMeta.width,
      height: whiteMeta.height,
      channels: 3,
      background: { r: 255, g: 255, b: 255 },
    },
  })
    .joinChannel(alpha)
    .png()
    .toBuffer();
  const colorOut = await withMask(color);

  for (const [buf, file] of [
    [whiteOut, "logo-white.png"],
    [colorOut, "logo.png"],
  ]) {
    const out = path.join(OUT, file);
    await sharp(buf)
      .trim()
      .resize({ width: 720, withoutEnlargement: true })
      .png({ compressionLevel: 9 })
      .toFile(out);
    const meta = await sharp(out).metadata();
    console.log(`${file}: ${meta.width}x${meta.height}`);
  }
  return { colorLogo: path.join(OUT, "logo.png") };
}

async function makeFavicons(colorLogoPath) {
  const logo = await readFile(colorLogoPath);
  // Square canvas with transparent padding so the bolt mark isn't distorted
  const square = async (size, background = { r: 0, g: 0, b: 0, alpha: 0 }) =>
    sharp(logo)
      .resize({
        width: Math.round(size * 0.88),
        height: Math.round(size * 0.88),
        fit: "contain",
        background,
      })
      .extend({
        top: Math.round(size * 0.06),
        bottom: Math.round(size * 0.06),
        left: Math.round(size * 0.06),
        right: Math.round(size * 0.06),
        background,
      })
      .resize(size, size)
      .png()
      .toBuffer();

  await writeFile(path.join(PUB, "favicon-16x16.png"), await square(16));
  await writeFile(path.join(PUB, "favicon-32x32.png"), await square(32));
  await writeFile(path.join(PUB, "android-chrome-192x192.png"), await square(192));
  await writeFile(path.join(PUB, "android-chrome-512x512.png"), await square(512));
  // Apple touch icons look wrong with transparency — use white background
  await writeFile(
    path.join(PUB, "apple-touch-icon.png"),
    await square(180, { r: 255, g: 255, b: 255, alpha: 1 }),
  );
  const ico = await pngToIco([
    path.join(PUB, "favicon-16x16.png"),
    path.join(PUB, "favicon-32x32.png"),
  ]);
  await writeFile(path.join(PUB, "favicon.ico"), ico);
  console.log("favicons written");
}

async function makeOgImage() {
  const W = 1200;
  const H = 630;
  const photo = await sharp(path.join(SRC, "31.jpg"))
    .rotate()
    .resize(W, H, { fit: "cover", position: "attention" })
    .toBuffer();

  const overlay = Buffer.from(`
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#101a33" stop-opacity="0.92"/>
          <stop offset="0.55" stop-color="#101a33" stop-opacity="0.72"/>
          <stop offset="1" stop-color="#101a33" stop-opacity="0.35"/>
        </linearGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#g)"/>
      <text x="80" y="455" font-family="Arial, Helvetica, sans-serif" font-size="52" font-weight="bold" fill="#ffffff">Top Electrician in Manchester, NH</text>
      <text x="80" y="512" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#63cffb">Licensed &#183; Insured &#183; 24/7 Emergency Service</text>
      <text x="80" y="562" font-family="Arial, Helvetica, sans-serif" font-size="25" fill="#ffffff" opacity="0.85">(603) 661-8432 &#183; thespeedyspark.com</text>
    </svg>
  `);

  const logo = await sharp(path.join(OUT, "logo-white.png"))
    .resize({ width: 330, withoutEnlargement: true })
    .toBuffer();
  const logoMeta = await sharp(logo).metadata();

  await sharp(photo)
    .composite([
      { input: overlay, top: 0, left: 0 },
      { input: logo, top: 55, left: 80 },
    ])
    .jpeg({ quality: 85, progressive: true })
    .toFile(path.join(OUT, "og-image.jpg"));
  console.log(`og-image.jpg written (logo ${logoMeta.width}x${logoMeta.height})`);
}

await processPhotos();
const { colorLogo } = await extractLogos();
await makeFavicons(colorLogo);
await makeOgImage();
console.log("All assets prepared.");
