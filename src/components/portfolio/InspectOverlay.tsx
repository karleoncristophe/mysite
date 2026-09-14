"use client";

import { useEffect, useRef } from "react";
import { BODY_MAP, type BodyId } from "@/lib/space/bodies";
import { closeInspect, inspectPose, inspectTarget } from "@/lib/space/stores";
import { useStore } from "@/hooks/useScrollJourney";

export default function InspectOverlay() {
  const target = useStore(inspectTarget);
  const body = target ? BODY_MAP[target as BodyId] : undefined;
  const layerRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const last = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!target || !body) return;
    const layer = layerRef.current;
    if (!layer) return;

    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeInspect();
    };

    const onDown = (event: PointerEvent) => {
      const node = event.target as HTMLElement;
      if (node.closest("[data-inspect-ui]")) return;
      inspectPose.dragging = true;
      last.current.x = event.clientX;
      last.current.y = event.clientY;
      layer.setPointerCapture(event.pointerId);
    };

    const onUp = (event: PointerEvent) => {
      inspectPose.dragging = false;
      if (layer.hasPointerCapture(event.pointerId)) {
        layer.releasePointerCapture(event.pointerId);
      }
    };

    const onMove = (event: PointerEvent) => {
      if (!inspectPose.dragging) return;
      const dx = event.clientX - last.current.x;
      const dy = event.clientY - last.current.y;
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
    layer.addEventListener("pointerdown", onDown);
    layer.addEventListener("pointerup", onUp);
    layer.addEventListener("pointercancel", onUp);
    layer.addEventListener("pointermove", onMove);
    layer.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("keydown", onKey);
      layer.removeEventListener("pointerdown", onDown);
      layer.removeEventListener("pointerup", onUp);
      layer.removeEventListener("pointercancel", onUp);
      layer.removeEventListener("pointermove", onMove);
      layer.removeEventListener("wheel", onWheel);
      inspectPose.dragging = false;
    };
  }, [body, target]);

  if (!body) return null;

  return (
    <div
      ref={layerRef}
      className="inspect-layer"
      role="dialog"
      aria-modal="true"
      aria-label={`Inspecionar ${body.name}`}
    >
      <div className="inspect-panel" data-inspect-ui>
        <p>INSPECT // {body.name}</p>
        <span>{body.type}</span>
        <b>{body.feature}</b>
        <small>Arraste para rotacionar · scroll para aproximar</small>
        <button ref={closeRef} type="button" onClick={closeInspect}>
          ENCERRAR INSPEÇÃO
        </button>
      </div>
    </div>
  );
}
