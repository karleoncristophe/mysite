"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { toggleAutoScroll } from "@/hooks/useAutoScroll";
import { useStore } from "@/hooks/useScrollJourney";
import { autoScroll, journeyProgress } from "@/lib/space/stores";

export default function HudOverlay() {
  const t = useTranslations("hud");
  const percentRef = useRef<HTMLSpanElement>(null);
  const playing = useStore(autoScroll);

  useEffect(() => {
    let frame = 0;
    const tick = () => {
      const progress = journeyProgress.get();
      if (percentRef.current) {
        percentRef.current.textContent = `${String(Math.round(progress * 100)).padStart(2, "0")}%`;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="hud">
      <div className="hud-corner hud-tr">
        <span aria-hidden>{t("orbital")}</span>
        <span ref={percentRef} aria-hidden>00%</span>
        <button
          type="button"
          className="hud-autoscroll"
          aria-pressed={playing}
          aria-label={playing ? t("autoAriaOn") : t("autoAria")}
          onClick={toggleAutoScroll}
        >
          <span aria-hidden>{t("auto")}</span>
          <span className="hud-autoscroll-state" aria-hidden>{playing ? t("pause") : t("play")}</span>
        </button>
      </div>
      <div className="hud-corner hud-bl" aria-hidden>
        <span>{t("lat")}</span>
        <span>{t("base")}</span>
      </div>
      <div className="hud-corner hud-br" aria-hidden>
        <span>{t("stack")}</span>
      </div>
    </div>
  );
}
