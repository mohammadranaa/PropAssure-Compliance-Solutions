import type { Metadata } from "next";

export const siteMetadata = {
  name: "PropAssure",
  legalName: "PropAssure Ltd",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.propassure.co.uk",
  description:
    "PropAssure helps UK property professionals manage electrical, gas, fire, environmental, and energy compliance across entire portfolios.",
  ogImage: "/opengraph.jpg",
  locale: "en_GB",
  country: "GB",
  phone: "0800 123 4567",
  email: "hello@propassure.co.uk",
  address: {
    streetAddress: "120 Compliance Way",
    addressLocality: "London",
    postalCode: "EC1V 2NX",
    addressCountry: "GB",
  },
  businessType: "ProfessionalService",
  logo: "/favicon.svg",
  keywords: [
    "property compliance",
    "UK property compliance",
    "EICR",
    "gas safety certificate",
    "fire risk assessment",
    "EPC certificate",
    "asbestos survey",
    "portfolio compliance",
    "block management compliance",
    "estate agent compliance",
  ],
} as const;

export const siteRoutes = {
  home: {
    title: "UK Property Compliance Services",
    description:
      "Property compliance services for UK agents, landlords, block managers, and facilities teams. EICR, EPC, gas safety, fire risk, asbestos, and portfolio compliance support.",
    path: "/",
    priority: 1,
    changeFrequency: "weekly",
    keywords: [
      "property compliance services",
      "portfolio compliance UK",
      "landlord compliance",
      "property management compliance",
    ],
  },
  services: {
    title: "Property Compliance Services",
    description:
      "Explore PropAssure's electrical, gas, fire, asbestos, and energy compliance services for residential and commercial property portfolios across the UK.",
    path: "/services",
    priority: 0.9,
    changeFrequency: "monthly",
    keywords: [
      "electrical compliance",
      "gas safety certificate",
      "fire risk assessment",
      "EPC services",
      "asbestos survey UK",
    ],
  },
  industries: {
    title: "Industries We Serve",
    description:
      "Compliance support for estate agents, block managers, housing associations, facilities management providers, and commercial property operators.",
    path: "/industries",
    priority: 0.8,
    changeFrequency: "monthly",
    keywords: [
      "estate agent compliance",
      "block management compliance",
      "housing association compliance",
      "facilities management compliance",
    ],
  },
  howItWorks: {
    title: "How It Works",
    description:
      "See how PropAssure handles quoting, scheduling, inspections, certification, and renewal tracking for property compliance across the UK.",
    path: "/how-it-works",
    priority: 0.8,
    changeFrequency: "monthly",
    keywords: [
      "property compliance process",
      "compliance scheduling",
      "renewal tracking",
      "compliance certificates UK",
    ],
  },
  about: {
    title: "About PropAssure",
    description:
      "Learn about PropAssure's accredited UK compliance team, service model, and portfolio support for property professionals.",
    path: "/about",
    priority: 0.7,
    changeFrequency: "monthly",
    keywords: [
      "about PropAssure",
      "accredited compliance team",
      "UK property compliance company",
    ],
  },
  contact: {
    title: "Contact PropAssure",
    description:
      "Request a quote, arrange an inspection, or speak with PropAssure's compliance team about UK property compliance requirements.",
    path: "/contact",
    priority: 0.7,
    changeFrequency: "monthly",
    keywords: [
      "contact property compliance company",
      "request compliance quote",
      "book property inspection",
    ],
  },
} as const;

export const sitemapRoutes = Object.values(siteRoutes);

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
};

export function absoluteUrl(path: string) {
  return new URL(path, siteMetadata.url).toString();
}

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataInput): Metadata {
  const mergedKeywords = [...siteMetadata.keywords, ...keywords];

  return {
    title,
    description,
    keywords: mergedKeywords,
    category: "Property Compliance",
    alternates: {
      canonical: path,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: siteMetadata.locale,
      title,
      description,
      url: path,
      siteName: siteMetadata.name,
      images: [
        {
          url: siteMetadata.ogImage,
          width: 1200,
          height: 630,
          alt: siteMetadata.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteMetadata.ogImage],
    },
  };
}
