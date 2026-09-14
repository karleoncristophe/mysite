"use client";

import { siteConfig } from "@/config/site";
import { useInViewOnce } from "@/hooks/useInViewOnce";

export default function MissionProfile() {
  const ref = useInViewOnce<HTMLElement>();

  return (
    <section id="quemsou" ref={ref} className="chapter mission reveal">
      <div className="chapter-copy">
        <p className="hud-kicker">03 / EARTH</p>
        <p className="chapter-index">MISSION PROFILE</p>
        <h2>Quem sou</h2>
        <p className="chapter-lead">
          Um desenvolvedor em órbita entre produto, engenharia e a vontade de construir o que ainda
          não existe.
        </p>
        <article className="mission-body">
          <p>
            Atualmente estudando/trabalhando com Frontend, Backend e Mobile. Amo aprender novas
            tecnologias e enfrentar novos desafios na programação. Iniciei minha carreira como
            programador visando desenvolvimento de jogos, que é algo que gosto muito, mas com o
            decorrer do tempo me apaixonei por desenvolvimento Web e Mobile. Estudo/Trabalho com
            ReactJS, React-Native, NextJS, NestJS e NodeJS.
          </p>
        </article>
        <ul className="mission-meta">
          <li>
            <span>STATUS</span>
            AVAILABLE FOR SELECTED MISSIONS
          </li>
          <li>
            <span>BASE</span>
            {siteConfig.location.locality.toUpperCase()} / {siteConfig.location.country}
          </li>
          <li>
            <span>FOCUS</span>
            WEB · MOBILE · SYSTEMS
          </li>
        </ul>
      </div>
    </section>
  );
}
