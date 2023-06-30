import React, { FC, useState } from "react";
import { flushSync } from "react-dom";

/**
 * TASK: How many times the component re-renders after clicking on the "Click" button, what is the string output and why?
 */

export const FlushSyncComponent: FC = () => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setValue((value) => value + "A");

    flushSync(() => {
      setValue((value) => value + "B");
    });

    flushSync(() => {
      setTimeout(() => {
        setValue((value) => value + "C");
      }, 0);
    });

    setTimeout(() => {
      setValue((value) => value + "D");
    }, 0);

    setValue((value) => value + "E");
  };

  console.log(value);

  return (
    <button className="btn btn-primary" onClick={handleClick}>
      Click
    </button>
  );
};
