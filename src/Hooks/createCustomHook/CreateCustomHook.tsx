import React, { FC, useEffect, useRef, useState } from "react";

/**
 * TASK: Move the stop watch logic from the reducer into a custom "useStopwatch" Hook.
 */

interface UseStopwatchOutput {
  time: number;
  start: () => void;
  stop: () => void;
  reset: () => void;
}

export function useStopwatch(): UseStopwatchOutput {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => setTime((time) => time + 1), 1000);

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    };
  }, [isRunning]);

  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return {
    time,
    start,
    stop,
    reset,
  };
}

export const CreateCustomHook: FC = () => {
  const { time, start, stop, reset } = useStopwatch();

  return (
    <>
      <code>{time}s</code>
      <br />
      <div className="btn-group">
        <button className="btn btn-secondary" onClick={start}>
          Start
        </button>
        <button className="btn btn-secondary" onClick={stop}>
          Stop
        </button>
        <button className="btn btn-secondary" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
};
