"use client";

import { useTranslations } from "next-intl";
import { skills } from "@/data/skills";
import { hoveredSkill } from "@/lib/space/stores";
import { useStore } from "@/hooks/useScrollJourney";
import { useInViewOnce } from "@/hooks/useInViewOnce";

export default function TechnologySection() {
  const ref = useInViewOnce<HTMLElement>();
  const active = useStore(hoveredSkill);
  const t = useTranslations("stack");

  return (
    <section id="habilidades" ref={ref} className="chapter constellation reveal">
      <div className="chapter-copy">
        <p className="hud-kicker">{t("kicker")}</p>
        <p className="chapter-index">{t("index")}</p>
        <h2>{t("title")}</h2>
        <p className="chapter-lead">{t("lead")}</p>
        <ul className="constellation-list">
          {skills.map((skill) => (
            <li key={skill.name}>
              <button
                type="button"
                className={active === skill.name ? "is-hot" : ""}
                onMouseEnter={() => hoveredSkill.set(skill.name)}
                onMouseLeave={() => hoveredSkill.set(null)}
                onFocus={() => hoveredSkill.set(skill.name)}
                onBlur={() => hoveredSkill.set(null)}
              >
                <i />
                {skill.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
