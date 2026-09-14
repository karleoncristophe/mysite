"use client";

import { skills } from "@/data/skills";
import { hoveredSkill } from "@/lib/space/stores";
import { useStore } from "@/hooks/useScrollJourney";
import { useInViewOnce } from "@/hooks/useInViewOnce";

export default function TechnologySection() {
  const ref = useInViewOnce<HTMLElement>();
  const active = useStore(hoveredSkill);

  return (
    <section id="habilidades" ref={ref} className="chapter constellation reveal">
      <div className="chapter-copy">
        <p className="hud-kicker">04 / BELT</p>
        <p className="chapter-index">TECHNOLOGY CONSTELLATION</p>
        <h2>Stack</h2>
        <p className="chapter-lead">
          Tecnologias como estrelas de um mesmo sistema: conectadas, legíveis, prontas para
          formar produto.
        </p>
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
