import React, { FC, useSyncExternalStore } from "react";

/**
 * TASK1: Create a custom "useScrollY" Hook that returns useSyncExternalStore Hook which subscribes to the "scroll" listener
 *        and has getSnapshot function that returns "scrollY" position from the window object.
 *
 * TASK2: Add a condition to the getSnapshot function that updates the snapshot only on 300px breakpoints.
 */

const subscribe = (callback: () => void): (() => void) => {
  window?.addEventListener("scroll", callback);
  return () => window?.removeEventListener("scroll", callback);
};

const useScrollY = () => {
  return useSyncExternalStore(
    subscribe,
    () => window?.scrollY,
    () => 0
  );
};

const useScrollYWithCb = (cb: (y: number) => number) => {
  return useSyncExternalStore(
    subscribe,
    () => cb(window?.scrollY),
    () => 0
  );
};

const BREAKPOINT = 300;

export const UseSyncExternalStore: FC = () => {
  const scrollY = useScrollY();

  const scrollYWithCb = useScrollYWithCb((y) =>
    y ? Math.floor(y / BREAKPOINT) * BREAKPOINT : 0
  );

  return (
    <div style={{ height: "10000px" }}>
      <span className="position-fixed">{scrollY}</span>
      <span className="position-fixed top-50">{scrollYWithCb}</span>
    </div>
  );
};
