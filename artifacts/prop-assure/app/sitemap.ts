import type { MetadataRoute } from "next";

import { absoluteUrl, sitemapRoutes } from "@/lib/site-metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
