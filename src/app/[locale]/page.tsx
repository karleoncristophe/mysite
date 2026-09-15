import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { routing, ogLocale, type AppLocale } from "@/i18n/routing";
import { alternateLanguages, localePath } from "@/lib/i18n/metadata";
import { localizeProjects } from "@/lib/i18n/projects";
import { homeJsonLd, jsonLdScript, robotsMetadata, shareImages } from "@/lib/seo/seo";
import HomeExperience from "@/components/portfolio/HomeExperience";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: requested } = await params;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: "meta" });
  const pageTitle = `${siteConfig.name} | ${t("tagline")}`;

  return {
    title: { absolute: pageTitle },
    description: t("description"),
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: {
      canonical: localePath(locale),
      languages: alternateLanguages(),
    },
    openGraph: {
      type: "profile",
      locale: ogLocale[locale as AppLocale],
      url: siteConfig.url,
      title: pageTitle,
      description: t("description"),
      siteName: siteConfig.name,
      firstName: siteConfig.givenName,
      lastName: siteConfig.familyName,
      username: "karleoncristophe",
      images: shareImages(pageTitle),
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: t("shortDescription"),
      creator: siteConfig.twitter,
      site: siteConfig.twitter,
      images: [siteConfig.ogImage],
    },
    robots: robotsMetadata(),
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: requested } = await params;
  if (!hasLocale(routing.locales, requested)) {
    notFound();
  }

  const locale = requested;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "meta" });
  const projectCopy = await getTranslations({ locale, namespace: "projects" });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            homeJsonLd({
              locale,
              tagline: t("tagline"),
              description: t("description"),
              jobTitle: t("jobTitle"),
              projects: localizeProjects(projectCopy),
            }),
          ),
        }}
      />
      <HomeExperience />
    </>
  );
}
