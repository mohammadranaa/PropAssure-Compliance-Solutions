import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/JsonLd";
import Industries from "@/site-pages/industries";
import { buildMetadata, siteRoutes } from "@/lib/site-metadata";
import {
  buildBreadcrumbJsonLd,
  buildWebPageJsonLd,
} from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata(siteRoutes.industries);

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={[
          buildWebPageJsonLd({
            name: siteRoutes.industries.title,
            description: siteRoutes.industries.description,
            path: siteRoutes.industries.path,
          }),
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
          ]),
        ]}
      />
      <Industries />
    </>
  );
}
