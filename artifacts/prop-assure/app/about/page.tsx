import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/JsonLd";
import About from "@/site-pages/about";
import { buildMetadata, siteRoutes } from "@/lib/site-metadata";
import {
  buildBreadcrumbJsonLd,
  buildWebPageJsonLd,
} from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata(siteRoutes.about);

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          buildWebPageJsonLd({
            name: siteRoutes.about.title,
            description: siteRoutes.about.description,
            path: siteRoutes.about.path,
          }),
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <About />
    </>
  );
}
