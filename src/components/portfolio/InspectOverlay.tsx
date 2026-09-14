"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { BODY_MAP, type BodyId } from "@/lib/space/bodies";
import { closeInspect, inspectPose, inspectTarget, setInspectZoom } from "@/lib/space/stores";
import { useStore } from "@/hooks/useScrollJourney";

const DRAG_THRESHOLD = 5;

export default function InspectOverlay() {
  const t = useTranslations("inspect");
  const target = useStore(inspectTarget);
  const body = target ? BODY_MAP[target as BodyId] : undefined;
  const closeRef = useRef<HTMLButtonElement>(null);
  const last = useRef({ x: 0, y: 0 });
  const tracking = useRef(false);

  useEffect(() => {
    if (!target || !body) return;
    closeRef.current?.focus({ preventScroll: true });

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeInspect();
      if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        setInspectZoom(inspectPose.zoom * 1.18);
      }
      if (event.key === "-" || event.key === "_") {
        event.preventDefault();
        setInspectZoom(inspectPose.zoom / 1.18);
      }
    };

    window.getSelection()?.removeAllRanges();

    const blockSelect = (event: Event) => {
      event.preventDefault();
    };

    const onDown = (event: PointerEvent) => {
      const node = event.target as HTMLElement;
      if (node.closest("[data-inspect-ui]") || !event.isPrimary || event.button !== 0) return;
      event.preventDefault();
      window.getSelection()?.removeAllRanges();
      tracking.current = true;
      inspectPose.dragging = false;
      inspectPose.pointerMoved = false;
      last.current.x = event.clientX;
      last.current.y = event.clientY;
    };

    const onUp = () => {
      tracking.current = false;
      inspectPose.dragging = false;
      window.setTimeout(() => {
        inspectPose.pointerMoved = false;
      }, 40);
    };

    const onMove = (event: PointerEvent) => {
      if (!tracking.current) return;
      const dx = event.clientX - last.current.x;
      const dy = event.clientY - last.current.y;
      if (!inspectPose.dragging) {
        if (Math.hypot(dx, dy) < DRAG_THRESHOLD) return;
        inspectPose.dragging = true;
        inspectPose.pointerMoved = true;
      }
      last.current.x = event.clientX;
      last.current.y = event.clientY;
      inspectPose.yaw += dx * 0.005;
      inspectPose.pitch = Math.max(-0.8, Math.min(0.8, inspectPose.pitch + dy * 0.004));
    };

    const onWheel = (event: WheelEvent) => {
      if (!inspectTarget.get()) return;
      event.preventDefault();
      setInspectZoom(inspectPose.zoom * Math.exp(-event.deltaY * 0.0016));
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("wheel", onWheel, { passive: false, capture: true });
    document.addEventListener("selectstart", blockSelect);
    document.addEventListener("copy", blockSelect);
    document.addEventListener("cut", blockSelect);
    document.addEventListener("contextmenu", blockSelect);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("wheel", onWheel, { capture: true });
      document.removeEventListener("selectstart", blockSelect);
      document.removeEventListener("copy", blockSelect);
      document.removeEventListener("cut", blockSelect);
      document.removeEventListener("contextmenu", blockSelect);
      tracking.current = false;
      inspectPose.dragging = false;
    };
  }, [body, target]);

  if (!body) return null;

  return (
    <div className="inspect-layer" role="dialog" aria-modal="true" aria-label={t("aria", { name: body.name })}>
      <div className="inspect-panel" data-inspect-ui>
        <p>{t("label", { name: body.name })}</p>
        <span>{body.type}</span>
        <b>{body.feature}</b>
        <small>{t("hint")}</small>
        <div className="inspect-zoom" data-inspect-ui>
          <button type="button" onClick={() => setInspectZoom(inspectPose.zoom / 1.22)}>
            −
          </button>
          <button type="button" onClick={() => setInspectZoom(inspectPose.zoom * 1.22)}>
            +
          </button>
        </div>
        <button ref={closeRef} type="button" onClick={closeInspect}>
          {t("close")}
        </button>
      </div>
    </div>
  );
}
