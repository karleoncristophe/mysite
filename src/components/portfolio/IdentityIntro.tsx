"use client";

import { useInViewOnce } from "@/hooks/useInViewOnce";

export default function IdentityIntro() {
  const ref = useInViewOnce<HTMLElement>();

  return (
    <section id="intro" ref={ref} className="chapter reveal">
      <div className="chapter-copy">
        <p className="hud-kicker">02 / MOON</p>
        <p className="chapter-index">FIRST CONTACT</p>
        <h2>Identidade</h2>
        <p className="chapter-lead">
          Desenvolvedor fullstack freelancer. Sites, aplicativos e sistemas com intenção, precisão
          e presença.
        </p>
        <ul className="mission-meta">
          <li>
            <span>SIGNAL</span>
            KARLEON CRISTOPHE
          </li>
          <li>
            <span>VECTOR</span>
            PRODUCT · ENGINEERING · MOBILE
          </li>
        </ul>
      </div>
    </section>
  );
}
