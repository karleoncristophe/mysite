"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { useInViewOnce } from "@/hooks/useInViewOnce";

export default function VoyagerSection() {
  const ref = useInViewOnce<HTMLElement>();
  const t = useTranslations("voyager");

  return (
    <section id="voyager" ref={ref} className="chapter voyager-chapter reveal">
      <div className="chapter-copy">
        <p className="hud-kicker">{t("kicker")}</p>
        <p className="chapter-index">{t("index")}</p>
        <h2>{t("title")}</h2>
        <p className="voyager-telemetry">{t("status")}</p>
        <p className="voyager-telemetry">{t("distance")}</p>
        <p className="copyright">{t("copyright", { year: new Date().getFullYear(), name: siteConfig.name })}</p>
      </div>
    </section>
  );
}
