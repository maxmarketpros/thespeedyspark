import type { APIRoute } from "astro";
import { siteConfig } from "@/config/site";

export const GET: APIRoute = () => {
  // Do not Disallow /_astro/ — Googlebot needs the CSS/JS bundles to render
  // pages, and blocked assets hurt mobile-friendliness evaluation.
  const body = `User-agent: *
Allow: /

Sitemap: ${siteConfig.url}/sitemap-index.xml
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
