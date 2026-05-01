import type { MetadataRoute } from "next";

import { siteMetadata } from "@/lib/site-metadata";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteMetadata.legalName,
    short_name: siteMetadata.name,
    description: siteMetadata.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0186c8",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
