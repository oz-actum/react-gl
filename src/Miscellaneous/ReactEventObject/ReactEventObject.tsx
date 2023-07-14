import { FC, SyntheticEvent } from "react";

/**
 * TASK: 1. Stop event bubbling at the paragraph level.
 *       2. Override the default anchor functionality (do not touch the href string)
 *          so the link points to "https://www.actumdigital.com/" instead.
 *       3. Disable events for button that is in a loading state.
 */

export const ReactEventObject: FC = () => {
  const divOnClick = (e: SyntheticEvent) => {
    console.log(logEvent(e));
  };

  const paragraphOnClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    console.log(logEvent(e));
  };

  const spanOnClick = (e: SyntheticEvent) => {
    console.log(logEvent(e));
  };

  const anchorOnClick = (e: SyntheticEvent) => {
    e.preventDefault();
    window.open("https://www.actumdigital.com/", "_blank");
    console.log(logEvent(e));
  };

  const buttonOnClick = (e: SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(logEvent(e));
  };

  return (
    <div className="alert alert-primary p-5" onClick={divOnClick}>
      <p className="alert alert-dark p-5" onClick={paragraphOnClick}>
        <span
          className="alert alert-success p-5 d-flex justify-content-between"
          onClick={spanOnClick}
        >
          <a href="https://google.com/" target="_blank" onClick={anchorOnClick}>
            Link
          </a>
          <button className="btn btn-secondary" onClick={buttonOnClick}>
            <span className="spinner-border spinner-grow spinner-grow-sm" />{" "}
            Loading...
          </button>
        </span>
      </p>
    </div>
  );
};

const logEvent = (e: SyntheticEvent): Record<string, unknown> => ({
  triggeredBy: e.target, // A DOM node. Returns the node on which the event has occurred (which could be a distant child).
  target: e.currentTarget, // A DOM node. Returns the node to which the current handler is attached in the React tree.
  isPropagationStopped: e.isPropagationStopped(), // Returns a boolean value indicating whether stopPropagation was called.
  isDefaultPrevented: e.isDefaultPrevented(), // Returns a boolean value indicating whether preventDefault was called.
});
