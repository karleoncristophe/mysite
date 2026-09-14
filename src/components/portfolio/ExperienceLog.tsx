"use client";

import { projects } from "@/data/projects";
import { useInViewOnce } from "@/hooks/useInViewOnce";

export default function ExperienceLog() {
  const ref = useInViewOnce<HTMLElement>();

  return (
    <section id="experiencia" ref={ref} className="chapter reveal">
      <div className="chapter-copy">
        <p className="hud-kicker">03 / MARS</p>
        <p className="chapter-index">EXPERIENCE LOG</p>
        <h2>Trajetória</h2>
        <p className="chapter-lead">
          Anos construindo produto em agências, startups e times remotos — do app ao backend.
        </p>
        <ol className="experience-log">
          {projects.map((project) => (
            <li key={project.id}>
              <span>{project.company}</span>
              <strong>{project.title}</strong>
              <em>{project.location}</em>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
