"use client";

import { siteConfig } from "@/config/site";
import { useInViewOnce } from "@/hooks/useInViewOnce";

export default function ContactSection() {
  const ref = useInViewOnce<HTMLElement>();

  return (
    <section id="contato" ref={ref} className="chapter contact reveal">
      <div className="chapter-copy">
        <p className="hud-kicker">08 / NEPTUNE</p>
        <p className="chapter-index">OPEN CHANNEL</p>
        <h2>Abrir canal de comunicação</h2>
        <p className="chapter-lead">
          Vamos conversar sobre o seu projeto. O destino final desta jornada é uma conversa real.
        </p>
        <a
          className="contact-pulse"
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Conversar no WhatsApp com ${siteConfig.name}`}
        >
          <span>WHATSAPP</span>
          <strong>{siteConfig.phoneDisplay}</strong>
          <em>Segunda a sexta · 9h às 18h · Online</em>
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
        <p className="copyright">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </section>
  );
}
