"use client";

import { projects } from "@/data/projects";
import { hoveredMission } from "@/lib/space/stores";
import { useStore } from "@/hooks/useScrollJourney";
import { useInViewOnce } from "@/hooks/useInViewOnce";

export default function ProjectsSection() {
  const ref = useInViewOnce<HTMLElement>();
  const active = useStore(hoveredMission);

  return (
    <section id="projetos" ref={ref} className="chapter missions reveal">
      <div className="chapter-copy missions-copy">
        <p className="hud-kicker">04 / MISSIONS</p>
        <p className="chapter-index">PROJECT SYSTEM</p>
        <h2>Missões selecionadas</h2>
        <p className="chapter-lead">
          Cada planeta é um trabalho real. A órbita é visual; o acesso continua em HTML.
        </p>
        <div className="mission-list">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`mission-card ${active === project.id ? "is-hot" : ""}`}
              onMouseEnter={() => hoveredMission.set(project.id)}
              onMouseLeave={() => hoveredMission.set(null)}
            >
              <header>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{project.type}</p>
              </header>
              <h3>{project.company}</h3>
              <p className="mission-role">{project.title}</p>
              {project.description && <p>{project.description}</p>}
              <p className="mission-tech">{project.tech.join(" · ")}</p>
              {project.links.length > 0 && (
                <div className="mission-links">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
