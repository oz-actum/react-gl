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
    case "tick":
      return { ...state, time: state.time + 1 };
    default:
      return state;
  }
}

export const UseReducer: FC = () => {
  const [state, dispatch] = useReducer(reducer , initialState);
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
      <div className="btn-group">{/* buttons */}</div>
    </>
  );
};
