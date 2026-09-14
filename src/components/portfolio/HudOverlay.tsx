"use client";

import { useEffect, useRef } from "react";
import { getHudStage } from "@/lib/space/journey";
import { journeyProgress } from "@/lib/space/stores";

export default function HudOverlay() {
  const percentRef = useRef<HTMLSpanElement>(null);
  const stageRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame = 0;
    const tick = () => {
      const progress = journeyProgress.get();
      const stage = getHudStage(progress);
      if (percentRef.current) {
        percentRef.current.textContent = `${String(Math.round(progress * 100)).padStart(2, "0")}%`;
      }
      if (stageRef.current) {
        stageRef.current.textContent = `${stage.code} / ${stage.label}`;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="hud" aria-hidden>
      <div className="hud-corner hud-tl">
        <span>SYSTEM // ONLINE</span>
        <span ref={stageRef}>01 / EARTH</span>
      </div>
      <div className="hud-corner hud-tr">
        <span>ORBITAL NAVIGATION</span>
        <span ref={percentRef}>00%</span>
      </div>
      <div className="hud-corner hud-bl">
        <span>LAT 22.9°S</span>
        <span>EARTH / RIO</span>
      </div>
      <div className="hud-corner hud-br">
        <span>WEB // MOBILE // BACKEND</span>
      </div>
    </div>
  );
}
