import React, { FC } from "react";
import { withInteraction } from "./withInteraction";
import { withLoading } from "./withLoading";
import { compose } from "./compose";

/**
 * TASK 1: Enhance the SimpleForm component with "withLoading" and "withInteraction" HOCs functions.
 *
 * TASK 2: Use the "compose" function to achieve the same result as in TASK 1.
 *
 * TASK 3: Does the order matter? Explain why.
 */

export const HigherOrderComponent: FC = () => {
  return <EnhancedSimpleForm />;
};

const SimpleForm: FC = (props: any) => {
  console.log(props);
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInput">Text input</label>
        <input
          type="text"
          className="form-control"
          id="exampleInput"
          placeholder="Enter text"
          value={props?.value}
          onChange={(e) => props?.onChange && props.onChange(e.target.value)}
        />
      </div>
      <p>{props?.value}</p>
      <button
        type="reset"
        className="btn btn-primary"
        onClick={props?.onReset && props.onReset}
      >
        Reset
      </button>
    </form>
  );
};

const EnhancedSimpleForm = compose(
  withLoading,
  withInteraction
)(SimpleForm)
