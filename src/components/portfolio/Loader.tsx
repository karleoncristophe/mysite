"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { useStore } from "@/hooks/useScrollJourney";
import { spaceReady } from "@/lib/space/stores";

export default function Loader() {
  const t = useTranslations("loader");
  const ready = useStore(spaceReady);

  useEffect(() => {
    const timeout = window.setTimeout(() => spaceReady.set(true), 2800);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div className={`boot-screen ${ready ? "boot-screen-done" : ""}`} aria-hidden={ready}>
      <p className="boot-kicker">{t("kicker")}</p>
      <p className="boot-title">{t("title")}</p>
      <span className="boot-line" />
    </div>
  );
}
