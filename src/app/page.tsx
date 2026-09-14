import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { homeJsonLd, jsonLdScript, robotsMetadata } from "@/lib/seo/seo";
import HomeExperience from "@/components/portfolio/HomeExperience";

const pageTitle = `${siteConfig.name} | ${siteConfig.tagline}`;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: pageTitle,
    description: siteConfig.description,
    siteName: siteConfig.name,
    firstName: siteConfig.givenName,
    lastName: siteConfig.familyName,
    username: "karleoncristophe",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: siteConfig.shortDescription,
    creator: siteConfig.twitter,
    site: siteConfig.twitter,
  },
  robots: robotsMetadata(),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(homeJsonLd()) }}
      />
      <HomeExperience />
    </>
  );
}
