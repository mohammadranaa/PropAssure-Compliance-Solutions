import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/JsonLd";
import Home from "@/site-pages/home";
import { buildMetadata, siteRoutes } from "@/lib/site-metadata";
import {
  buildBreadcrumbJsonLd,
  buildWebPageJsonLd,
} from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata(siteRoutes.home);

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          buildWebPageJsonLd({
            name: siteRoutes.home.title,
            description: siteRoutes.home.description,
            path: siteRoutes.home.path,
          }),
          buildBreadcrumbJsonLd([{ name: "Home", path: "/" }]),
        ]}
      />
      <Home />
    </>
  );
}
