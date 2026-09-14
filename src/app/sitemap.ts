import type { MetadataRoute } from "next";
import { locales } from "@/i18n/routing";
import { absoluteAlternateLanguages, localePath } from "@/lib/i18n/metadata";
import { absoluteUrl } from "@/lib/seo/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const languages = absoluteAlternateLanguages();

  return locales.map((locale) => ({
    url: absoluteUrl(localePath(locale)),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
