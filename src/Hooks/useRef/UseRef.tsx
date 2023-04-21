import React, { FC, useState } from "react";

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

  let isUpdated = false;

  const handleUpdate = () => {
    isUpdated = !isUpdated;
    console.log("isUpdated", isUpdated);
  };

  console.log("isUpdated", isUpdated);

  return (
    <>
      <code>isUpdated: {JSON.stringify(isUpdated)}</code>
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
        <input className="input-group" type="text" id="refInput" />
      </form>
    </>
  );
};
