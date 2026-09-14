"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { localeLabels, locales, type AppLocale } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(next: AppLocale) {
    if (next === locale) return;
    const hash = window.location.hash;
    router.replace(pathname, { locale: next, scroll: false });
    if (hash) {
      window.setTimeout(() => {
        window.location.hash = hash;
      }, 40);
    }
  }

  return (
    <div className="lang-switch" role="navigation" aria-label={t("language")}>
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          className={code === locale ? "is-active" : undefined}
          data-cjk={code === "ja" || code === "zh" ? "" : undefined}
          aria-current={code === locale ? "true" : undefined}
          onClick={() => switchLocale(code)}
        >
          {localeLabels[code]}
        </button>
      ))}
    </div>
  );
}
