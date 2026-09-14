import { getPathname } from "@/i18n/navigation";
import { locales, type AppLocale } from "@/i18n/routing";
import { absoluteUrl } from "@/lib/seo/seo";

export function localePath(locale: AppLocale) {
  return getPathname({ locale, href: "/" });
}

export function alternateLanguages() {
  const languages: Record<string, string> = {
    "x-default": "/",
  };

  for (const locale of locales) {
    languages[locale] = localePath(locale);
  }

  return languages;
}

export function absoluteAlternateLanguages() {
  const languages: Record<string, string> = {
    "x-default": absoluteUrl("/"),
  };

  for (const locale of locales) {
    languages[locale] = absoluteUrl(localePath(locale));
  }

  return languages;
}
