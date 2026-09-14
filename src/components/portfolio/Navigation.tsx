"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "@/components/portfolio/LanguageSwitcher";

const NAV_KEYS = {
  home: "home",
  quemsou: "profile",
  experiencia: "experience",
  habilidades: "stack",
  projetos: "projects",
  hire: "hire",
  contato: "contact",
} as const;

export default function Navigation() {
  const t = useTranslations("nav");

  return (
    <nav className="site-nav" aria-label={t("aria")}>
      <Link href="/#home" className="site-mark" aria-label={siteConfig.name}>
        <Image
          src="/logo.png"
          alt={t("logoAlt", { name: siteConfig.name })}
          width={40}
          height={40}
          className="site-mark-logo"
          priority
        />
      </Link>
      <div className="site-nav-end">
        <div className="site-nav-links">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href}>
              <span>{t(NAV_KEYS[item.id])}</span>
            </Link>
          ))}
        </div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
