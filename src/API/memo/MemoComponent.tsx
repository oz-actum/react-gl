import React, { FC, memo, useCallback, useState } from "react";
import data from "./data";

/**
 * TASK: Fix the HeroBanner component, so it's not being re-rendered on the parent's component change.
 */

export const MemoComponent: FC = () => {
  const [rerender, setRerender] = useState<number>(0);

  const handleOnClick = useCallback(() => {
    window.alert("Hello from alert");
  }, []);

  console.log("MemoComponent was re-rendered");
  return (
    <>
      <HeroBanner
        heading={data.heading}
        description={data.description}
        buttonLabel={data.buttonLabel}
        handleClick={handleOnClick}
      />
      <hr />
      <button
        className="btn btn-outline-primary"
        onClick={() => setRerender(rerender + 1)}
      >
        Re-render
      </button>
    </>
  );
};

const HeroBanner: FC<{
  heading: string;
  description: string;
  buttonLabel: string;
  handleClick: () => void;
}> = memo(({ heading, description, buttonLabel, handleClick }) => {
  console.log("HeroBanner was re-rendered");

  return (
    <>
      <h1>{heading}</h1>
      <p>{description}</p>
      <button className="btn btn-secondary" onClick={handleClick}>
        {buttonLabel}
      </button>
    </>
  );
});
