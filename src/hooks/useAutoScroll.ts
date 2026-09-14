"use client";

import { useEffect } from "react";
import { autoScroll, isJourneyScrollLocked } from "@/lib/space/stores";

const FULL_DURATION_SEC = 95;

function pageMax() {
  return Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) - window.innerHeight;
}

export function toggleAutoScroll() {
  if (autoScroll.get()) {
    autoScroll.set(false);
    return;
  }
  const max = pageMax();
  if (max > 0 && window.scrollY >= max - 8) {
    document.documentElement.style.scrollBehavior = "auto";
    document.documentElement.scrollTop = 0;
  }
  autoScroll.set(true);
}

export function useAutoScroll() {
  useEffect(() => {
    let frame = 0;
    let last = performance.now();

    const stop = () => autoScroll.set(false);

    const onUserInterrupt = (event: Event) => {
      if (!autoScroll.get()) return;
      if (event.type === "keydown") {
        const keys = ["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " ", "Spacebar"];
        if (!keys.includes((event as KeyboardEvent).key)) return;
      }
      if (event.type === "click") {
        const node = event.target as HTMLElement | null;
        if (!node?.closest?.("a[href*='#']")) return;
      }
      stop();
    };

    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);
      if (!autoScroll.get() || isJourneyScrollLocked()) {
        last = now;
        return;
      }
      const max = pageMax();
      if (max <= 0) {
        last = now;
        return;
      }
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const next = window.scrollY + (max / FULL_DURATION_SEC) * dt;
      if (next >= max - 0.5) {
        document.documentElement.scrollTop = max;
        stop();
        return;
      }
      document.documentElement.scrollTop = next;
    };

    const onPlaying = () => {
      const on = autoScroll.get();
      document.documentElement.classList.toggle("is-autoscrolling", on);
      document.documentElement.style.scrollBehavior = on ? "auto" : "";
    };

    frame = requestAnimationFrame(tick);
    onPlaying();
    const unsubscribe = autoScroll.subscribe(onPlaying);
    window.addEventListener("wheel", onUserInterrupt, { passive: true });
    window.addEventListener("touchstart", onUserInterrupt, { passive: true });
    window.addEventListener("keydown", onUserInterrupt);
    document.addEventListener("click", onUserInterrupt);
    return () => {
      cancelAnimationFrame(frame);
      unsubscribe();
      document.documentElement.classList.remove("is-autoscrolling");
      document.documentElement.style.scrollBehavior = "";
      window.removeEventListener("wheel", onUserInterrupt);
      window.removeEventListener("touchstart", onUserInterrupt);
      window.removeEventListener("keydown", onUserInterrupt);
      document.removeEventListener("click", onUserInterrupt);
    };
  }, []);
}
