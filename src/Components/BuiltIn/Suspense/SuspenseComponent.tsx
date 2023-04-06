import React, { FC, useState, Suspense } from "react";
import { suspensify } from "suspensify"; // Converts any promise to suspended promise, https://www.npmjs.com/package/suspensify

export const SuspenseComponent: FC = () => {
  const [renderContent, setRenderContent] = useState(false);
  const [content, setContent] = useState<string>("");

  const handleOnClick = () => {
    setRenderContent(true);
    getContentWithDelay(2000).then((res) => setContent(res));
  };

  return (
    <>
      <button className="btn btn-primary" onClick={handleOnClick}>
        Load
      </button>
      {renderContent && (content ? <div>{content}</div> : <Loader />)}

      {renderContent && (
        <Suspense fallback={<Loader />}>
          <DelayedContent delay={2000} />
        </Suspense>
      )}
    </>
  );
};

const Loader: FC = () => <div>Loading...</div>;

const getContentWithDelay = (delay: number) =>
  new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Content");
    }, delay);
  });

const suspendedContent = suspensify(getContentWithDelay);

const DelayedContent: FC<{ delay: number }> = ({ delay }) => {
  const content = suspendedContent(delay);
  return <div>{content}</div>;
};
