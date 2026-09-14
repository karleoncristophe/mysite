"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { useInViewOnce } from "@/hooks/useInViewOnce";

export default function MissionProfile() {
  const ref = useInViewOnce<HTMLElement>();
  const t = useTranslations("profile");

  return (
    <section id="quemsou" ref={ref} className="chapter mission reveal">
      <div className="chapter-copy">
        <p className="hud-kicker">{t("kicker")}</p>
        <p className="chapter-index">{t("index")}</p>
        <h2>{t("title")}</h2>
        <p className="chapter-lead">{t("lead")}</p>
        <article className="mission-body">
          <p>{t("body")}</p>
        </article>
        <ul className="mission-meta">
          <li>
            <span>{t("status")}</span>
            {t("statusValue")}
          </li>
          <li>
            <span>{t("base")}</span>
            {siteConfig.location.locality.toUpperCase()} / {siteConfig.location.country}
          </li>
          <li>
            <span>{t("focus")}</span>
            {t("focusValue")}
          </li>
        </ul>
      </div>
    </section>
  );
}
