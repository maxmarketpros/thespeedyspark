import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { siteConfig } from "./src/config/site.ts";

export default defineConfig({
  site: siteConfig.url,
  output: "static",
  trailingSlash: "ignore",
  build: { format: "directory" },
  // Respect PORT when a tool assigns one (parallel dev servers); default 4321
  server: { port: process.env.PORT ? Number(process.env.PORT) : 4321 },
  integrations: [
    react(),
    sitemap({
      changefreq: "monthly",
      priority: 0.8,
      lastmod: new Date(),
      // Thank-you page is a conversion-tracking destination — keep it out
      filter: (page) => !page.includes("/thank-you"),
      serialize(item) {
        const path = new URL(item.url).pathname;
        if (path === "/") return { ...item, priority: 1.0, changefreq: "weekly" };
        // Google Ads landing pages — high priority, checked often
        if (
          /^\/(ev-charger-installation|electrical-panel-upgrades|emergency-electrician)\/?$/.test(
            path,
          )
        ) {
          return { ...item, priority: 0.9, changefreq: "weekly" };
        }
        const sectionMatch = /^\/(residential|commercial|service-areas)\/.+/.test(path);
        if (sectionMatch) {
          return { ...item, priority: 0.9 };
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
