"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { useInViewOnce } from "@/hooks/useInViewOnce";

export default function ContactSection() {
  const ref = useInViewOnce<HTMLElement>();
  const t = useTranslations("contact");

  return (
    <section id="contato" ref={ref} className="chapter contact reveal">
      <div className="chapter-copy">
        <p className="hud-kicker">{t("kicker")}</p>
        <p className="chapter-index">{t("index")}</p>
        <h2>{t("title")}</h2>
        <p className="chapter-lead">{t("lead")}</p>
        <a
          className="contact-pulse"
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("whatsappAria", { name: siteConfig.name })}
        >
          <span>{t("whatsapp")}</span>
          <strong>{siteConfig.phoneDisplay}</strong>
          <em>{t("hours")}</em>
        </a>
        <div className="contact-links">
          <a href={siteConfig.sameAs[0]} target="_blank" rel="me noopener noreferrer">
            GitHub
          </a>
          <a href={siteConfig.sameAs[1]} target="_blank" rel="me noopener noreferrer">
            LinkedIn
          </a>
          <a href={siteConfig.sameAs[3]} target="_blank" rel="me noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
