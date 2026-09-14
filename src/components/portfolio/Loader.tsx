"use client";

import { useEffect } from "react";
import { useStore } from "@/hooks/useScrollJourney";
import { spaceReady } from "@/lib/space/stores";

export default function Loader() {
  const ready = useStore(spaceReady);

  useEffect(() => {
    const timeout = window.setTimeout(() => spaceReady.set(true), 2800);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div className={`boot-screen ${ready ? "boot-screen-done" : ""}`} aria-hidden={ready}>
      <p className="boot-kicker">NAVIGATION SYSTEM</p>
      <p className="boot-title">CALIBRATING ORBIT</p>
      <span className="boot-line" />
    </div>
  );
}
