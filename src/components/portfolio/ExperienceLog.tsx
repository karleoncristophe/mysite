"use client";

import { useTranslations } from "next-intl";
import { localizeProjects } from "@/lib/i18n/projects";
import { useInViewOnce } from "@/hooks/useInViewOnce";

export default function ExperienceLog() {
  const ref = useInViewOnce<HTMLElement>();
  const t = useTranslations("experience");
  const items = localizeProjects(useTranslations("projects"));

  return (
    <section id="experiencia" ref={ref} className="chapter reveal">
      <div className="chapter-copy">
        <p className="hud-kicker">{t("kicker")}</p>
        <p className="chapter-index">{t("index")}</p>
        <h2>{t("title")}</h2>
        <p className="chapter-lead">{t("lead")}</p>
        <ol className="experience-log">
          {items.map((project) => (
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
