import React, { FC, useEffect, useReducer, useRef } from "react";

/**
 * TASK: Add buttons to Start, Stop, and Reset the stopwatch with the usage of reducer
 *       and dispatching the corresponding action types.
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
      return { ...state, time: 0 };
    case "tick":
      return { ...state, time: state.time + 1 };
    default:
      return state;
  }
}

export const UseReducer: FC = () => {
  const [state, dispatch] = useReducer(reducer , initialState);
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

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
        <button className="btn btn-secondary" onClick={() => dispatch({ type: "start" })}>Start</button>
        <button className="btn btn-secondary" onClick={() => dispatch({ type: "stop" })}>Stop</button>
        <button className="btn btn-secondary" onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </>
  );
};
