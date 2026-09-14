export type JourneyStop = { scroll: number; progress: number };
let stops: JourneyStop[] = [{ scroll: 0, progress: 0 }, { scroll: 1, progress: 1 }];

export function setJourneyStops(next: JourneyStop[]) {
  stops = next;
}

function interpolate(value: number, from: keyof JourneyStop, to: keyof JourneyStop) {
  const clamped = Math.max(0, Math.min(1, value));
  for (let i = 1; i < stops.length; i++) {
    const end = stops[i];
    const start = stops[i - 1];
    if (clamped <= end[from]) {
      const mix = (clamped - start[from]) / Math.max(1e-8, end[from] - start[from]);
      return start[to] + (end[to] - start[to]) * mix;
    }
  }
  return 1;
}

export function scrollToJourney(scroll: number) {
  return interpolate(scroll, 'scroll', 'progress');
}

export function journeyToScroll(progress: number) {
  return interpolate(progress, 'progress', 'scroll');
}

type Listener = () => void;

function createStore<T>(initial: T) {
  let value = initial;
  const listeners = new Set<Listener>();

  return {
    get: () => value,
    set: (next: T) => {
      if (Object.is(next, value)) return;
      value = next;
      listeners.forEach((listener) => listener());
    },
    subscribe: (listener: Listener) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
  };
}

export const journeyProgress = createStore(0);
export const autoScroll = createStore(false);
export const hoveredSkill = createStore<string | null>(null);
export const hoveredMission = createStore<string | null>(null);
export const hoveredBody = createStore<string | null>(null);
export const inspectTarget = createStore<string | null>(null);
export const spaceReady = createStore(false);

// A shared simulation clock keeps the camera and all orbiting meshes in sync.
export const orbitTime = { elapsed: 0 };

export const inspectPose = {
  yaw: 0,
  pitch: 0,
  zoom: 1,
  dragging: false,
  pointerMoved: false,
  ignoreMiss: false,
  reset() {
    inspectPose.yaw = 0;
    inspectPose.pitch = 0;
    inspectPose.zoom = 1;
    inspectPose.dragging = false;
    inspectPose.pointerMoved = false;
    inspectPose.ignoreMiss = false;
  },
};

export const INSPECT_ZOOM_MIN = 0.55;
export const INSPECT_ZOOM_MAX = 3.2;

export function setInspectZoom(next: number) {
  inspectPose.zoom = Math.max(INSPECT_ZOOM_MIN, Math.min(INSPECT_ZOOM_MAX, next));
}

let lockedScrollY = 0;
let inspectRestoreProgress: number | null = null;
let ignoreJourneyScroll = false;

export function isJourneyScrollLocked() {
  return (
    ignoreJourneyScroll ||
    (typeof document !== "undefined" && document.documentElement.classList.contains("is-inspecting"))
  );
}

function lockPageScroll() {
  if (document.documentElement.classList.contains("is-inspecting")) return;
  lockedScrollY = window.scrollY;
  const pageWidth = document.documentElement.clientWidth;
  document.documentElement.classList.add("is-inspecting");
  document.body.style.position = "fixed";
  document.body.style.top = `-${lockedScrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = `${pageWidth}px`;
  window.getSelection()?.removeAllRanges();
}

function progressToScrollY(progress: number) {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (max <= 0) return { y: 0, progress: 0 };
  const y = Math.min(max, Math.max(0, journeyToScroll(progress) * max));
  return { y, progress: Math.min(1, Math.max(0, progress)) };
}

function unlockPageScroll() {
  const restore = inspectRestoreProgress ?? journeyProgress.get();
  ignoreJourneyScroll = true;
  document.documentElement.classList.remove("is-inspecting");
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  const { y, progress } = progressToScrollY(restore);
  window.scrollTo({ top: y, left: 0, behavior: "instant" });
  journeyProgress.set(progress);
  inspectRestoreProgress = null;
  window.requestAnimationFrame(() => {
    ignoreJourneyScroll = false;
  });
}

export function openInspect(id: string, restoreProgress?: number | null) {
  const firstOpen = inspectTarget.get() == null;
  inspectPose.reset();
  hoveredBody.set(null);
  if (restoreProgress != null) {
    inspectRestoreProgress = restoreProgress;
    journeyProgress.set(restoreProgress);
  } else if (firstOpen) {
    inspectRestoreProgress = journeyProgress.get();
  }
  if (typeof document !== "undefined") {
    lockPageScroll();
  }
  inspectTarget.set(id);
}

export function closeInspect() {
  if (inspectTarget.get() == null) return;
  if (inspectRestoreProgress != null) {
    journeyProgress.set(inspectRestoreProgress);
  }
  inspectTarget.set(null);
  inspectPose.reset();
  if (typeof document !== "undefined") {
    unlockPageScroll();
  }
}

export function getEasedJourney(t = journeyProgress.get()): number {
  const x = Math.min(1, Math.max(0, t));
  return x * x * (3 - 2 * x);
}
