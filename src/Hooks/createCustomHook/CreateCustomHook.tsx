import React, { FC, useEffect, useReducer, useRef } from "react";

/**
 * TASK: Move the stop watch logic from the reducer into a custom "useStopwatch" Hook.
 */

interface IReducer {
  isRunning?: boolean;
  time: number;
}

interface IAction {
  type: "start" | "stop" | "reset" | "tick";
}

const initialState: IReducer = {
  isRunning: false,
  time: 0,
};

function reducer(state: IReducer, action: IAction) {
  switch (action.type) {
    case "start":
      return { ...state, isRunning: true };
    case "stop":
      return { ...state, isRunning: false };
    case "reset":
      return { ...initialState };
    case "tick":
      return { ...state, time: state.time + 1 };
    default:
      return state;
  }
}

export const CreateCustomHook: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const intervalRef = useRef<NodeJS.Timer | undefined>(undefined);

  useEffect(() => {
    if (!state.isRunning) return;

    intervalRef.current = setInterval(() => dispatch({ type: "tick" }), 1000);

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    };
  }, [state.isRunning]);

  return (
    <>
      <code>{state.time}s</code>
      <br />
      <div className="btn-group">
        <button
          className="btn btn-secondary"
          onClick={() => dispatch({ type: "start" })}
        >
          Start
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => dispatch({ type: "stop" })}
        >
          Stop
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
    </>
  );
};
