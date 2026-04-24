import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/JsonLd";
import HowItWorks from "@/site-pages/how-it-works";
import { buildMetadata, siteRoutes } from "@/lib/site-metadata";
import {
  buildBreadcrumbJsonLd,
  buildWebPageJsonLd,
} from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata(siteRoutes.howItWorks);

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd
        data={[
          buildWebPageJsonLd({
            name: siteRoutes.howItWorks.title,
            description: siteRoutes.howItWorks.description,
            path: siteRoutes.howItWorks.path,
          }),
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "How It Works", path: "/how-it-works" },
          ]),
        ]}
      />
      <HowItWorks />
    </>
  );
}
