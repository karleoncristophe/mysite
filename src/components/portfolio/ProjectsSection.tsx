"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { projects } from "@/data/projects";
import { localizeProjects } from "@/lib/i18n/projects";
import { hoveredMission } from "@/lib/space/stores";
import { useStore } from "@/hooks/useScrollJourney";
import { useInViewOnce } from "@/hooks/useInViewOnce";

const PREVIEW_COUNT = 4;

function hasPlayStore(project: (typeof projects)[number]) {
  return project.links.some(
    (link) => /google play/i.test(link.label) || link.url.includes("play.google.com"),
  );
}

export default function ProjectsSection() {
  const ref = useInViewOnce<HTMLElement>();
  const active = useStore(hoveredMission);
  const [expanded, setExpanded] = useState(false);
  const t = useTranslations("projects");
  const localized = localizeProjects(t);

  const ordered = useMemo(
    () => [...localized].sort((a, b) => Number(hasPlayStore(b)) - Number(hasPlayStore(a))),
    [localized],
  );
  const visible = expanded ? ordered : ordered.slice(0, PREVIEW_COUNT);

  return (
    <section id="projetos" ref={ref} className="chapter missions reveal">
      <div className="chapter-copy missions-copy">
        <p className="hud-kicker">{t("kicker")}</p>
        <p className="chapter-index">{t("index")}</p>
        <h2>{t("title")}</h2>
        <p className="chapter-lead">{t("lead")}</p>
        <div className="mission-list">
          {visible.map((project, index) => (
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
        {ordered.length > PREVIEW_COUNT && (
          <button
            type="button"
            className="mission-more"
            onClick={() => setExpanded((open) => !open)}
          >
            {expanded ? t("less") : t("more")}
          </button>
        )}
      </div>
    </section>
  );
}
