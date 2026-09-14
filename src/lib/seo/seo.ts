import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";
import { skillNames } from "@/data/skills";

export function absoluteUrl(path = "/"): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}

export function robotsMetadata(allow = true): Metadata["robots"] {
  if (!allow) {
    return {
      index: false,
      follow: false,
      googleBot: { index: false, follow: false },
    };
  }
  return {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  };
}

export function truncate(value: string, max = 160): string {
  const clean = value.trim();
  if (clean.length <= max) return clean;
  const slice = clean.slice(0, max - 1);
  const lastSpace = slice.lastIndexOf(" ");
  const base = lastSpace > max * 0.6 ? slice.slice(0, lastSpace) : slice;
  return `${base.trim()}…`;
}

export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function ogImageUrl(): string {
  return siteConfig.ogImage || absoluteUrl("/opengraph-image");
}

export function personJsonLd() {
  return {
    "@type": "Person",
    "@id": absoluteUrl("/#person"),
    name: siteConfig.name,
    givenName: siteConfig.givenName,
    familyName: siteConfig.familyName,
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    image: ogImageUrl(),
    nationality: {
      "@type": "Country",
      name: siteConfig.location.countryName,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.locality,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.country,
    },
    telephone: siteConfig.phone,
    sameAs: [...siteConfig.sameAs],
    knowsAbout: [...skillNames, "Web Development", "Mobile Development"],
    hasOccupation: {
      "@type": "Occupation",
      name: siteConfig.jobTitle,
      occupationLocation: {
        "@type": "City",
        name: siteConfig.location.locality,
      },
      skills: skillNames.join(", "),
    },
  };
}

export function professionalServiceJsonLd() {
  return {
    "@type": "ProfessionalService",
    "@id": absoluteUrl("/#business"),
    name: `${siteConfig.name} — Desenvolvimento Web e Mobile`,
    url: siteConfig.url,
    description: siteConfig.description,
    image: ogImageUrl(),
    telephone: siteConfig.phone,
    areaServed: {
      "@type": "Country",
      name: siteConfig.location.countryName,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.locality,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.country,
    },
    founder: { "@id": absoluteUrl("/#person") },
    employee: { "@id": absoluteUrl("/#person") },
    sameAs: [...siteConfig.sameAs],
    knowsAbout: [...skillNames],
    serviceType: [
      "Criação de sites",
      "Aplicativos mobile",
      "Landing pages",
      "Desenvolvimento frontend",
      "Desenvolvimento backend",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de desenvolvimento",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Criação de sites",
            description:
              "Sites institucionais e aplicações web com React, Next.js e Node.js.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Aplicativos mobile",
            description:
              "Apps iOS e Android com React Native, integrados a APIs e GraphQL.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Landing pages",
            description:
              "Páginas de conversão rápidas, responsivas e otimizadas para SEO.",
          },
        },
      ],
    },
  };
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteConfig.name,
    alternateName: siteConfig.tagline,
    description: siteConfig.description,
    url: siteConfig.url,
    inLanguage: siteConfig.language,
    publisher: { "@id": absoluteUrl("/#person") },
  };
}

export function siteNavigationJsonLd() {
  return {
    "@type": "ItemList",
    "@id": absoluteUrl("/#site-navigation"),
    name: `Principais tópicos ${siteConfig.name}`,
    itemListElement: siteConfig.nav.map((topic, index) => ({
      "@type": "SiteNavigationElement",
      position: index + 1,
      name: topic.name,
      description: topic.group,
      url: absoluteUrl(topic.href),
    })),
  };
}

export function webPageJsonLd() {
  return {
    "@type": "ProfilePage",
    "@id": absoluteUrl("/#webpage"),
    url: absoluteUrl("/"),
    name: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    isPartOf: { "@id": absoluteUrl("/#website") },
    about: { "@id": absoluteUrl("/#person") },
    mainEntity: { "@id": absoluteUrl("/#person") },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: ogImageUrl(),
    },
    inLanguage: siteConfig.language,
  };
}

export function projectsJsonLd() {
  return {
    "@type": "ItemList",
    "@id": absoluteUrl("/#projects"),
    name: "Projetos e experiência profissional",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${project.title} — ${project.company}`,
      description: project.description
        ? truncate(project.description, 160)
        : undefined,
      url: project.links[0]?.url ?? absoluteUrl("/#projetos"),
      item: {
        "@type": "CreativeWork",
        name: `${project.title} — ${project.company}`,
        description: project.description
          ? truncate(project.description, 160)
          : undefined,
        url: project.links[0]?.url ?? absoluteUrl("/#projetos"),
      },
    })),
  };
}

export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      personJsonLd(),
      professionalServiceJsonLd(),
      websiteJsonLd(),
      siteNavigationJsonLd(),
      webPageJsonLd(),
      projectsJsonLd(),
    ],
  };
}
