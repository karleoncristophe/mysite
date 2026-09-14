"use client";

import { useTranslations } from "next-intl";
import { useInViewOnce } from "@/hooks/useInViewOnce";

export default function IdentityIntro() {
  const ref = useInViewOnce<HTMLElement>();
  const t = useTranslations("identity");

  return (
    <section id="intro" ref={ref} className="chapter reveal">
      <div className="chapter-copy">
        <p className="hud-kicker">{t("kicker")}</p>
        <p className="chapter-index">{t("index")}</p>
        <h2>{t("title")}</h2>
        <p className="chapter-lead">{t("lead")}</p>
        <ul className="mission-meta">
          <li>
            <span>{t("signal")}</span>
            {t("signalValue")}
          </li>
          <li>
            <span>{t("vector")}</span>
            {t("vectorValue")}
          </li>
        </ul>
      </div>
    </section>
  );
}
