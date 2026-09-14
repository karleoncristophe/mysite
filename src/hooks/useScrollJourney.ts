"use client";

import { useEffect, useSyncExternalStore } from "react";
import { isJourneyScrollLocked, journeyProgress, scrollToJourney, setJourneyStops, type JourneyStop } from "@/lib/space/stores";

const SECTION_PROGRESS = [
  ["intro", 0.1], ["quemsou", 0.2], ["experiencia", 0.3],
  ["habilidades", 0.46], ["projetos", 0.58], ["hire", 0.84],
  ["contato", 0.94], ["voyager", 0.98],
] as const;

export function useScrollJourney(): void {
  useEffect(() => {
    const update = () => {
      if (isJourneyScrollLocked()) return;
      const max = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) - window.innerHeight;
      const next = max <= 0 ? 0 : window.scrollY / max;
      journeyProgress.set(scrollToJourney(next));
    };

    const measure = () => {
      const max = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) - window.innerHeight;
      const padding = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      const origin = document.body.getBoundingClientRect().top;
      const stops: JourneyStop[] = [{ scroll: 0, progress: 0 }];
      if (max > 0) {
        for (const [id, progress] of SECTION_PROGRESS) {
          const section = document.getElementById(id);
          if (!section) continue;
          const scroll = Math.max(0, Math.min(1, (section.getBoundingClientRect().top - origin - padding) / max));
          if (scroll > stops[stops.length - 1].scroll && scroll < 1) stops.push({ scroll, progress });
        }
      }
      stops.push({ scroll: 1, progress: 1 });
      setJourneyStops(stops);
      update();
    };
    const observer = new ResizeObserver(measure);
    document.querySelectorAll("main, main > *").forEach((node) => observer.observe(node));
    measure();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", measure);
    };
  }, []);
}

export function useStore<T>(store: {
  get: () => T;
  subscribe: (listener: () => void) => () => void;
}): T {
  return useSyncExternalStore(store.subscribe, store.get, store.get);
}
