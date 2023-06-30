import React, { FC, lazy, ReactNode, Suspense, useState } from "react";

/**
 * TASK: Make the Tabs component to be lazy loaded with a loading fallback.
 *       You can use the "artificialDelay" function and delay the very first loading to see the loading fallback
 *       (or you can use the network throttling in your browser)
 */

type Tab = "one" | "two" | "three";

const artificialDelay = (promise: Promise<any>) =>
  new Promise((resolve) => {
    setTimeout(resolve, 1000);
  }).then(() => promise);

const LazyTabOne = lazy(() => artificialDelay(import("./TabOne")));
const LazyTabTwo = lazy(() => artificialDelay(import("./TabTwo")));
const LazyTabThree = lazy(() => artificialDelay(import("./TabThree")));

export const LazyComponent: FC = () => {
  const [tab, setTab] = useState<Tab>("one");

  const renderTab = (): ReactNode => {
    switch (tab) {
      case "one":
        return <LazyTabOne />;
      case "two":
        return <LazyTabTwo />;
      case "three":
        return <LazyTabThree />;
      default:
        return <div>No content</div>;
    }
  };

  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${tab === "one" ? "active" : null}`}
            onClick={() => setTab("one")}
          >
            Tab One
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${tab === "two" ? "active" : null}`}
            onClick={() => setTab("two")}
          >
            Tab Two
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${tab === "three" ? "active" : null}`}
            onClick={() => setTab("three")}
          >
            Tab Three
          </button>
        </li>
      </ul>

      <Suspense fallback={<div>Loading...</div>}>{renderTab()}</Suspense>
    </div>
  );
};
