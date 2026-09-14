"use client";

import { siteConfig } from "@/config/site";
import { useInViewOnce } from "@/hooks/useInViewOnce";

const SERVICES = [
  {
    title: "Web apps",
    copy: "Interfaces e sistemas com React, Next.js e Node.js, do protótipo ao produto em produção.",
  },
  {
    title: "Mobile",
    copy: "Apps iOS e Android com React Native, prontos para loja e para o dia a dia do usuário.",
  },
  {
    title: "Landing pages",
    copy: "Páginas rápidas, cinematográficas e feitas para converter — sem parecer template.",
  },
  {
    title: "Backend",
    copy: "APIs, GraphQL e NestJS para o produto continuar em órbita depois do lançamento.",
  },
];

export default function HireMe() {
  const ref = useInViewOnce<HTMLElement>();

  return (
    <section id="hire" ref={ref} className="chapter reveal">
      <div className="chapter-copy">
        <p className="hud-kicker">07 / URANUS</p>
        <p className="chapter-index">AVAILABLE FOR COLLABORATION</p>
        <h2>Construir comigo</h2>
        <p className="chapter-lead">
          Aberto para projetos selecionados. Se a missão pede clareza, performance e ofício, vamos
          criar algo excepcional.
        </p>
        <ul className="mission-meta">
          <li>
            <span>WHO I HELP</span>
            STARTUPS, PRODUTOS E TIMES QUE PRECISAM DE UM FULLSTACK COM OLHO DE DESIGN
          </li>
          <li>
            <span>WHY WORK WITH ME</span>
            ENTREGO FRONT, MOBILE E BACKEND COM O MESMO CUIDADO — RÁPIDO, LEGÍVEL, PRONTO PARA GENTE
            REAL
          </li>
        </ul>
        <ul className="service-grid">
          {SERVICES.map((service) => (
            <li key={service.title}>
              <span>{service.title}</span>
              <p>{service.copy}</p>
            </li>
          ))}
        </ul>
        <a className="hire-cta" href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
          LET&apos;S CREATE SOMETHING EXCEPTIONAL →
        </a>
      </div>
    </section>
  );
}
