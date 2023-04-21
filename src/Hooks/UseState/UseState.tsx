import React, { FC, useState } from "react";

/**
 * TASK 1: Fix addTwo function to increment the state by 2.
 *
 * TASK 2: Implement handleReset function to get component's initial state.
 */

export const UseState: FC = () => {
  const [version, setVersion] = useState(0);

  const handleReset = () => {
    setVersion(version + 1);
  };

  return <Form key={version} handleReset={handleReset} />;
};

const Form: FC<any> = ({ handleReset }) => {
  const [counter, setCounter] = useState(0);

  const addOne = () => {
    setCounter(counter + 1);
  };

  const addTwo = () => {
    setCounter((prev) => prev + 1); // 0 => 0 + 1 (1)
    setCounter((prev) => prev + 1); // 1 => 1 + 1 (2)
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
      <button type="reset" className="btn btn-primary" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};
