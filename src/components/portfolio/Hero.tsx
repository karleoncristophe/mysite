"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const t = useTranslations("hero");
  const meta = useTranslations("meta");

  return (
    <header id="home" className="chapter hero">
      <div className="hero-copy">
        <p className="hud-kicker">{t("kicker")}</p>
        <p className="chapter-index">{t("index")}</p>
        <h1>{siteConfig.name}</h1>
        <p className="hero-role">{meta("jobTitle")}</p>
        <p className="hero-sub">{t("sub")}</p>
        <dl className="hero-meta">
          <div>
            <dt>{t("roleLabel")}</dt>
            <dd>{t("roleValue")}</dd>
          </div>
          <div>
            <dt>{t("locationLabel")}</dt>
            <dd>{t("locationValue")}</dd>
          </div>
          <div>
            <dt>{t("stackLabel")}</dt>
            <dd>{t("stackValue")}</dd>
          </div>
        </dl>
        <div className="hero-links">
          <p>{t("contactLabel")}</p>
          <nav aria-label={t("contactLabel")}>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("whatsappAria", { name: siteConfig.name })}
            >
              WhatsApp
            </a>
            <a href={siteConfig.sameAs[0]} target="_blank" rel="me noopener noreferrer">
              GitHub
            </a>
            <a href={siteConfig.sameAs[1]} target="_blank" rel="me noopener noreferrer">
              LinkedIn
            </a>
            <a href={siteConfig.sameAs[3]} target="_blank" rel="me noopener noreferrer">
              Instagram
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
