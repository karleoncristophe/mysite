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
      return () => listeners.delete(listener);
    },
  };
}

export const journeyProgress = createStore(0);
export const hoveredSkill = createStore<string | null>(null);
export const hoveredMission = createStore<string | null>(null);
export const spaceReady = createStore(false);

export function getEasedJourney(t = journeyProgress.get()): number {
  const x = Math.min(1, Math.max(0, t));
  return x * x * (3 - 2 * x);
}
