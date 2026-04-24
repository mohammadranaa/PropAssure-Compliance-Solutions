import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/JsonLd";
import Services from "@/site-pages/services";
import { buildMetadata, siteRoutes } from "@/lib/site-metadata";
import {
  buildBreadcrumbJsonLd,
  buildServiceCollectionJsonLd,
  buildWebPageJsonLd,
} from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata(siteRoutes.services);

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          buildWebPageJsonLd({
            name: siteRoutes.services.title,
            description: siteRoutes.services.description,
            path: siteRoutes.services.path,
          }),
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          buildServiceCollectionJsonLd(),
        ]}
      />
      <Services />
    </>
  );
}
