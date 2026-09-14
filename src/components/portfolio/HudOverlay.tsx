"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { journeyProgress } from "@/lib/space/stores";

export default function HudOverlay() {
  const t = useTranslations("hud");
  const percentRef = useRef<HTMLSpanElement>(null);

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
    <div className="hud" aria-hidden>
      <div className="hud-corner hud-tr">
        <span>{t("orbital")}</span>
        <span ref={percentRef}>00%</span>
      </div>
      <div className="hud-corner hud-bl">
        <span>{t("lat")}</span>
        <span>{t("base")}</span>
      </div>
      <div className="hud-corner hud-br">
        <span>{t("stack")}</span>
      </div>
    </div>
  );
}
