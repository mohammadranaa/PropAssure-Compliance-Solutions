import { absoluteUrl, siteMetadata } from "@/lib/site-metadata";

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": siteMetadata.businessType,
    "@id": `${siteMetadata.url}#organization`,
    name: siteMetadata.legalName,
    alternateName: siteMetadata.name,
    url: siteMetadata.url,
    logo: absoluteUrl(siteMetadata.logo),
    image: absoluteUrl(siteMetadata.ogImage),
    telephone: siteMetadata.phone,
    email: siteMetadata.email,
    areaServed: "United Kingdom",
    address: {
      "@type": "PostalAddress",
      ...siteMetadata.address,
    },
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteMetadata.url}#website`,
    url: siteMetadata.url,
    name: siteMetadata.name,
    description: siteMetadata.description,
    publisher: {
      "@id": `${siteMetadata.url}#organization`,
    },
    inLanguage: "en-GB",
  };
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildWebPageJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      "@id": `${siteMetadata.url}#website`,
    },
    about: {
      "@id": `${siteMetadata.url}#organization`,
    },
    primaryImageOfPage: absoluteUrl(siteMetadata.ogImage),
    inLanguage: "en-GB",
  };
}

export function buildServiceCollectionJsonLd() {
  const services = [
    "Electrical Compliance",
    "Gas Safety",
    "Fire Risk Assessment",
    "Emergency Lighting Testing",
    "Energy Performance Certificates",
    "Asbestos Surveys",
    "Portfolio Compliance Management",
  ];

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Property Compliance Services",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service,
    })),
  };
}

export function buildContactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact PropAssure",
    url: absoluteUrl("/contact"),
    mainEntity: {
      "@id": `${siteMetadata.url}#organization`,
    },
  };
}
