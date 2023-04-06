import React, { FC, useState } from "react";

/**
 * TASK 1: Fix addTwo function to increment the state by 2.
 *
 * TASK 2: Implement handleReset function to get component's initial state.
 */

export const UseState: FC = () => {
  return <Form />;
};

const Form: FC = () => {
  const [counter, setCounter] = useState(0);

  const addOne = () => {
    setCounter(counter + 1);
  };

  const addTwo = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
  };

  return (
    <>
      <p>{counter}</p>
      <button type="button" className="btn btn-primary" onClick={addOne}>
        Add 1
      </button>
      <button type="button" className="btn btn-primary" onClick={addTwo}>
        Add 2
      </button>
      <button
        type="reset"
        className="btn btn-primary"
        // onClick={handleReset}
      >
        Reset
      </button>
    </>
  );
};
