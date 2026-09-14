"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { useInViewOnce } from "@/hooks/useInViewOnce";

const SERVICE_KEYS = ["web", "mobile", "landing", "backend"] as const;

export default function HireMe() {
  const ref = useInViewOnce<HTMLElement>();
  const t = useTranslations("hire");

  return (
    <section id="hire" ref={ref} className="chapter reveal">
      <div className="chapter-copy">
        <p className="hud-kicker">{t("kicker")}</p>
        <p className="chapter-index">{t("index")}</p>
        <h2>{t("title")}</h2>
        <p className="chapter-lead">{t("lead")}</p>
        <ul className="mission-meta">
          <li>
            <span>{t("who")}</span>
            {t("whoValue")}
          </li>
          <li>
            <span>{t("why")}</span>
            {t("whyValue")}
          </li>
        </ul>
        <ul className="service-grid">
          {SERVICE_KEYS.map((key) => (
            <li key={key}>
              <span>{t(`services.${key}.title`)}</span>
              <p>{t(`services.${key}.copy`)}</p>
            </li>
          ))}
        </ul>
        <a className="hire-cta" href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
          {t("cta")}
        </a>
      </div>
    </section>
  );
}
