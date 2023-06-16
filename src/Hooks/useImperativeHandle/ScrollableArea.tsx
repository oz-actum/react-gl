import React, { forwardRef, useImperativeHandle, useRef } from "react";

const MIN = 0;
const MAX = 8000;

export interface ScrollRef {
  scroll: (x: number, y: number) => void;
}

const ScrollableArea = (props: any, ref: React.Ref<ScrollRef>) => {
  const domRef = useRef<HTMLDivElement>(null);

  let [x, y] = [0, 0];

  useImperativeHandle(ref, () => ({
    scroll(xIncrement: number, yIncrement: number) {
      [x, y] = [
        Math.min(Math.max(MIN, x + xIncrement), MAX),
        Math.min(Math.max(MIN, y + yIncrement), MAX),
      ];
      domRef.current && domRef.current.scrollTo(x, y);
    },
  }));

  return (
    <div
      ref={domRef}
      className="position-relative overflow-auto"
      style={{ height: "512px", width: "512px", pointerEvents: "none" }}
    >
      <div
        className="position-absolute"
        style={{
          background: "linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)",
          width: `${MAX}px`,
          height: `${MAX}px`,
        }}
      ></div>
    </div>
  );
};

export default forwardRef(ScrollableArea);
