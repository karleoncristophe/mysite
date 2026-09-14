"use client";

import { useEffect, useRef } from "react";
import { journeyProgress } from "@/lib/space/stores";

export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const tick = () => {
      if (bar.current) {
        bar.current.style.transform = `scaleX(${journeyProgress.get()})`;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="journey-progress" aria-hidden>
      <div ref={bar} className="journey-progress-bar" />
    </div>
  );
}
