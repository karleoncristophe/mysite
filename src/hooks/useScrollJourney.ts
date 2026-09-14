"use client";

import { useEffect, useSyncExternalStore } from "react";
import { journeyProgress } from "@/lib/space/stores";

export function useScrollJourney(): void {
  useEffect(() => {
    const update = () => {
      if (document.documentElement.classList.contains("is-inspecting")) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const next = max <= 0 ? 0 : window.scrollY / max;
      journeyProgress.set(Math.min(1, Math.max(0, next)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
}

export function useStore<T>(store: {
  get: () => T;
  subscribe: (listener: () => void) => () => void;
}): T {
  return useSyncExternalStore(store.subscribe, store.get, store.get);
}
