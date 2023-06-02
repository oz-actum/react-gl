import React, { FC } from "react";

/**
 * TASK1: Create a custom "useScrollY" Hook that returns useSyncExternalStore Hook which subscribes to the "scroll" listener
 *        and has getSnapshot function that returns "scrollY" position from the window object.
 *
 * TASK2: Add a condition to the getSnapshot function that updates the snapshot only on 300px breakpoints.
 */

const BREAKPOINT = 300;

export const UseSyncExternalStore: FC = () => {
  return (
    <div style={{ height: "10000px" }}>
      {/*<span className="position-fixed">{scrollY}</span>*/}
      {/*<span className="position-fixed top-50">{scrollYWithCb}</span>*/}
    </div>
  );
};
