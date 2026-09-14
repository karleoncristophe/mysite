import { defineRouting } from "next-intl/routing";

export const locales = ["pt-BR", "en", "es", "ja", "zh"] as const;
export type AppLocale = (typeof locales)[number];

export const localeLabels: Record<AppLocale, string> = {
  "pt-BR": "PT",
  en: "EN",
  es: "ES",
  ja: "日本語",
  zh: "中文",
};

export const htmlLang: Record<AppLocale, string> = {
  "pt-BR": "pt-BR",
  en: "en",
  es: "es",
  ja: "ja",
  zh: "zh-CN",
};

export const ogLocale: Record<AppLocale, string> = {
  "pt-BR": "pt_BR",
  en: "en_US",
  es: "es_ES",
  ja: "ja_JP",
  zh: "zh_CN",
};

export const routing = defineRouting({
  locales,
  defaultLocale: "pt-BR",
  localePrefix: "as-needed",
});
