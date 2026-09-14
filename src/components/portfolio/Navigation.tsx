"use client";

import { siteConfig } from "@/config/site";

export default function Navigation() {
  return (
    <nav className="site-nav" aria-label="Navegação principal">
      <a href="/#home" className="site-mark">
        KC
      </a>
      <div className="site-nav-links">
        {siteConfig.nav.map((item) => (
          <a key={item.href} href={item.href}>
            <span>{item.ui}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
