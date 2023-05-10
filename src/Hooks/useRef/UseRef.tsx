import React, { FC, useRef, useState } from "react";

/**
 * TASK 1: Make isUpdate value persistent during re-renderings, so it keeps the desired value.
 *
 * TASK 2: Put a focus in the input if the user clicks on the Update button.
 */

export const UseRef: FC = () => {
  const [, setRerender] = useState(0);
  const handleRerender = () => {
    setRerender((prev) => prev + 1);
  };

  const isUpdated = useRef(false);

  const inputRef = useRef<HTMLInputElement>(null)

  const handleUpdate = () => {
    isUpdated.current = !isUpdated.current;
    console.log("isUpdated", isUpdated);
    inputRef.current && inputRef.current.focus()
  };

  console.log("isUpdated", isUpdated.current);

  return (
    <>
      <code>isUpdated: {JSON.stringify(isUpdated.current)}</code>
      <br />
      <button className="btn btn-primary" onClick={handleUpdate}>
        Update
      </button>
      <button className="btn btn-primary" onClick={handleRerender}>
        Re-render
      </button>
      <form className="pt-2">
        <label className="form-label" htmlFor="refInput">
          Text input
        </label>
        <input ref={inputRef} className="input-group" type="text" id="refInput" />
      </form>
    </>
  );
};
