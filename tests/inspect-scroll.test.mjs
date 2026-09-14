import assert from 'node:assert/strict';
import test from 'node:test';
import { openInspect, closeInspect, journeyProgress, inspectTarget, isJourneyScrollLocked, inspectPose, setInspectZoom } from '../src/lib/space/stores.ts';

test('inspection keeps the latest destination without a smooth scroll backtrack', () => {
  const classes = new Set();
  const frames = [];
  const scrolls = [];
  globalThis.document = {
    documentElement: { scrollHeight: 11000, classList: {
      contains: (name) => classes.has(name), add: (name) => classes.add(name), delete: (name) => classes.delete(name), remove: (name) => classes.delete(name),
    } },
    body: { style: {} },
  };
  globalThis.window = {
    scrollY: 1000, innerHeight: 1000,
    getSelection: () => null,
    requestAnimationFrame: (callback) => frames.push(callback),
    scrollTo: (options) => { scrolls.push(options); window.scrollY = options.top; },
  };
  journeyProgress.set(0.1);
  openInspect('moon', 0.1);
  assert.equal(isJourneyScrollLocked(), true);
  assert.equal(document.body.style.top, '-1000px');
  openInspect('earth', 0.1);
  openInspect('parker', 0.1);
  openInspect('jupiter', 0.62);
  assert.equal(document.body.style.top, '-1000px');
  closeInspect();
  assert.equal(inspectTarget.get(), null);
  assert.equal(journeyProgress.get(), 0.62);
  assert.deepEqual(scrolls, [{ top: 6200, left: 0, behavior: 'instant' }]);
  assert.equal(document.body.style.position, '');
  assert.equal(isJourneyScrollLocked(), true);
  frames.splice(0).forEach((callback) => callback());
  assert.equal(isJourneyScrollLocked(), false);
  closeInspect();
  assert.equal(scrolls.length, 1);

  // A new session must restore its own position, even after a resize.
  journeyProgress.set(0.8);
  openInspect('neptune');
  document.documentElement.scrollHeight = 6000;
  closeInspect();
  assert.equal(window.scrollY, 4000);
  assert.equal(journeyProgress.get(), 0.8);
  frames.splice(0).forEach((callback) => callback());
  delete globalThis.window;
  delete globalThis.document;
});

test('zoom is bounded and changing targets resets the inspection pose', () => {
  setInspectZoom(100);
  assert.equal(inspectPose.zoom, 3.2);
  setInspectZoom(-1);
  assert.equal(inspectPose.zoom, 0.55);
  inspectPose.yaw = 2;
  openInspect('moon');
  assert.equal(inspectPose.zoom, 1);
  assert.equal(inspectPose.yaw, 0);
  closeInspect();
});

test('section mapping remains invertible across viewport and content changes', async () => {
  const { setJourneyStops, scrollToJourney, journeyToScroll } = await import('../src/lib/space/stores.ts');
  for (const projectPosition of [0.4, 0.55, 0.72]) {
    setJourneyStops([{scroll: 0, progress: 0}, {scroll: projectPosition, progress: 0.58}, {scroll: 1, progress: 1}]);
    assert.equal(scrollToJourney(projectPosition), 0.58);
    assert.equal(journeyToScroll(0.58), projectPosition);
    for (const value of [0, 0.1, 0.3, 0.62, 0.94, 1]) {
      assert.ok(Math.abs(scrollToJourney(journeyToScroll(value)) - value) < 1e-10);
    }
  }
  setJourneyStops([{scroll: 0, progress: 0}, {scroll: 1, progress: 1}]);
});
