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
export const hoveredSkill = createStore<string | null>(null);
export const hoveredMission = createStore<string | null>(null);
export const hoveredBody = createStore<string | null>(null);
export const inspectTarget = createStore<string | null>(null);
export const spaceReady = createStore(false);

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

function lockPageScroll() {
  if (document.documentElement.classList.contains("is-inspecting")) return;
  lockedScrollY = window.scrollY;
  document.documentElement.classList.add("is-inspecting");
  document.body.style.position = "fixed";
  document.body.style.top = `-${lockedScrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
  window.getSelection()?.removeAllRanges();
}

function unlockPageScroll() {
  document.documentElement.classList.remove("is-inspecting");
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  window.scrollTo(0, lockedScrollY);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  journeyProgress.set(max <= 0 ? 0 : Math.min(1, Math.max(0, lockedScrollY / max)));
}

export function openInspect(id: string) {
  inspectPose.reset();
  hoveredBody.set(null);
  inspectTarget.set(id);
  if (typeof document !== "undefined") {
    lockPageScroll();
  }
}

export function closeInspect() {
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
