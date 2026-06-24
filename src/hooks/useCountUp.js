import { useEffect, useRef, useState } from "react";

/**
 * Counts a number up from 0 to `target` once `start` becomes true.
 * Uses a simple eased rAF loop so we don't pull in an extra dependency.
 */
export default function useCountUp(target, start, duration = 1400) {
  const [value, setValue] = useState(0);
  const frame = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!start || hasRun.current) return;
    hasRun.current = true;

    const startTime = performance.now();
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.round(easeOutCubic(progress) * target));
      if (progress < 1) {
        frame.current = requestAnimationFrame(tick);
      }
    };

    frame.current = requestAnimationFrame(tick);
    return () => frame.current && cancelAnimationFrame(frame.current);
  }, [start, target, duration]);

  return value;
}
