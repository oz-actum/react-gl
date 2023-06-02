import React, { FC, useMemo, useState, useTransition } from "react";

const numbers = [...Array(10000).keys()];

/**
 * TASK 1: Add useTransition hook to make the input responsive all the time.
 *
 * TASK 2: Add a fallback functionality, so the user can see a loading value/component during re-rendering.
 *
 * TASK 3: Optimize lists functions with the usage of memoization (useMemo hook) to have a potential performance boost.
 */

export const UseTransition: FC = () => {
  const [value, setValue] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setValue(e.target.value);
    });
  };

  const filteredList = useMemo(
    () => numbers.filter((i) => i.toString().startsWith(value)),
    [value]
  );

  const renderList = useMemo(
    () => (
      <ul className="list-group">
        {filteredList.map((number, index) => (
          <li key={index} className="list-group-item">
            {number}
          </li>
        ))}
      </ul>
    ),
    [filteredList]
  );

  return (
    <>
      <input
        className="form-control"
        type="number"
        min="0"
        onChange={handleChange}
        value={value}
      />
      <div className="py-3">{isPending ? "Loading..." : renderList}</div>
    </>
  );
};
