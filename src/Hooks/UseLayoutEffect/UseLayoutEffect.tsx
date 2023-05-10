import React, { FC, useEffect, useState } from "react";

/**
 * TASK: Observe the component's flickering on a click. Fix it with the useLayoutEffect hook.
 */

export const UseLayoutEffect: FC = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 1000);
    }
  }, [value]);

  console.log("render", value);

  return <div onClick={() => setValue(0)}>value: {value}</div>;
};
