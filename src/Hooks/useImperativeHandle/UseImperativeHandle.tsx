import React, { FC, useRef } from "react";
import ScrollableArea, { ScrollRef } from "./ScrollableArea";

/**
 * TASK: Add useImperativeHandle Hook into the "ScrollableArea" hook and implement the "scroll" method there
 *       that accepts two parameters: "x" and "y" positions.
 *       For scrolling to the desired position, you can use the "scrollTo(x, y)" method.
 *       Do not forget to wrap the "ScrollableArea" component into the "forwardRef" API.
 */

type Directions = "UP" | "RIGHT" | "DOWN" | "LEFT";

export const UseImperativeHandle: FC = () => {
  const scrollableRef = useRef<ScrollRef>(null);

  const handleScroll = (direction: Directions) => {
    if (!scrollableRef.current) return undefined;

    switch (direction) {
      case "UP":
        scrollableRef.current.scroll(0, -1000);
        break;
      case "RIGHT":
        scrollableRef.current.scroll(1000, 0);
        break;
      case "DOWN":
        scrollableRef.current.scroll(0, 1000);
        break;
      case "LEFT":
        scrollableRef.current.scroll(-1000, 0);
        break;
      default:
        break;
    }
  };

  return (
    <div className="d-flex">
      <ScrollableArea ref={scrollableRef} />

      <div className="d-flex flex-grow-1 flex-shrink-0 justify-content-center align-items-center">
        <div className="d-flex align-items-center flex-column">
          <div className="d-flex">
            <button
              className="btn btn-secondary"
              onClick={() => handleScroll("UP")}
            >
              ▲
            </button>
          </div>
          <div className="d-flex">
            <button
              className="btn btn-secondary"
              onClick={() => handleScroll("LEFT")}
            >
              ◄
            </button>
            <button className="btn btn-light mx-1" disabled>
              ✥
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => handleScroll("RIGHT")}
            >
              ►
            </button>
          </div>
          <div className="d-flex">
            <button
              className="btn btn-secondary"
              onClick={() => handleScroll("DOWN")}
            >
              ▼
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
