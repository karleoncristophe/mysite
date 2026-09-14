"use client";

import { useEffect, useRef } from "react";
import { BODY_MAP, type BodyId } from "@/lib/space/bodies";
import { closeInspect, inspectPose, inspectTarget } from "@/lib/space/stores";
import { useStore } from "@/hooks/useScrollJourney";

const DRAG_THRESHOLD = 5;

export default function InspectOverlay() {
  const target = useStore(inspectTarget);
  const body = target ? BODY_MAP[target as BodyId] : undefined;
  const closeRef = useRef<HTMLButtonElement>(null);
  const last = useRef({ x: 0, y: 0 });
  const tracking = useRef(false);

  useEffect(() => {
    if (!target || !body) return;
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeInspect();
    };

    window.getSelection()?.removeAllRanges();

    const blockSelect = (event: Event) => {
      event.preventDefault();
    };

    const onDown = (event: PointerEvent) => {
      const node = event.target as HTMLElement;
      if (node.closest("[data-inspect-ui]")) return;
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
      event.preventDefault();
      inspectPose.zoom = Math.max(0.7, Math.min(2.1, inspectPose.zoom + event.deltaY * 0.0012));
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("wheel", onWheel, { passive: false });
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
      window.removeEventListener("wheel", onWheel);
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
    <div className="inspect-layer" role="dialog" aria-modal="true" aria-label={`Inspecionar ${body.name}`}>
      <div className="inspect-panel" data-inspect-ui>
        <p>INSPECT // {body.name}</p>
        <span>{body.type}</span>
        <b>{body.feature}</b>
        <small>Arraste para girar · clique outro mundo para focar · clique vazio para sair</small>
        <button ref={closeRef} type="button" onClick={closeInspect}>
          ENCERRAR INSPEÇÃO
        </button>
      </div>
    </div>
  );
}
