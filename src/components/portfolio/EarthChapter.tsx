"use client";

import { useInViewOnce } from "@/hooks/useInViewOnce";

export default function EarthChapter() {
  const ref = useInViewOnce<HTMLElement>();

  return (
    <section id="earth" ref={ref} className="chapter reveal">
      <div className="chapter-copy">
        <p className="hud-kicker">04 / EARTH</p>
        <p className="chapter-index">HABITABLE ORBIT</p>
        <h2>Construir comigo</h2>
        <p className="chapter-lead">
          Da Terra, desenho produtos digitais para web e mobile: rápidos, claros e prontos para
          pessoas reais.
        </p>
        <ul className="mission-meta">
          <li>
            <span>ORIGIN</span>
            RIO DE JANEIRO · BRASIL
          </li>
          <li>
            <span>MODE</span>
            FREELANCE · REMOTO · COLABORAÇÃO
          </li>
        </ul>
      </div>
    </section>
  );
}
