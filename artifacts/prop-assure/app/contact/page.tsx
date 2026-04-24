import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/JsonLd";
import Contact from "@/site-pages/contact";
import { buildMetadata, siteRoutes } from "@/lib/site-metadata";
import {
  buildBreadcrumbJsonLd,
  buildContactPageJsonLd,
  buildWebPageJsonLd,
} from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata(siteRoutes.contact);

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          buildWebPageJsonLd({
            name: siteRoutes.contact.title,
            description: siteRoutes.contact.description,
            path: siteRoutes.contact.path,
          }),
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          buildContactPageJsonLd(),
        ]}
      />
      <Contact />
    </>
  );
}
