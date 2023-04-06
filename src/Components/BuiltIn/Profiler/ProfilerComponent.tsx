import React, { FC, Profiler, ProfilerOnRenderCallback } from "react";
import { SuspenseComponent } from "../Suspense/SuspenseComponent";

export const ProfilerComponent: FC = () => {
  const onRender: ProfilerOnRenderCallback = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) => {
    console.log(`${id}'s ${phase} phase:`);
    console.log(`Actual duration: ${actualDuration}`);
    console.log(`Base duration: ${baseDuration}`);
    console.log(`Start time: ${startTime}`);
    console.log(`Commit time: ${commitTime}`);
    console.log("======================================");
  };

  return (
    <Profiler id="ProfilerComponent" onRender={onRender}>
      <SuspenseComponent />
    </Profiler>
  );
};
