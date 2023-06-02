import React, { FC, useEffect, useState } from "react";

/**
 * TASK 1: Fix the Counter component to tick only once per given interval.
 *
 * TASK 2: Change the implementation, so you can update the state by "count + 1" value
 *         instead of the updater function "prev => prev + 1". Explain the difference.
 */

export const UseEffect: FC = () => {
  return (
    <React.StrictMode>
      <Counter />
    </React.StrictMode>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const onTick = () => {
      setCount(count + 1);
      console.log("tick");
    };

    // setInterval(onTick, 1000);
    const intervalId = setInterval(onTick, 1000);
    return () => clearInterval(intervalId);
  }, [count]);

  return <h1>{count}</h1>;
};
