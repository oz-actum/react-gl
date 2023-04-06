import React, { FC, useEffect, useState } from "react";

export const withLoading = (Component: FC) => (props: any) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return <Component {...props} />;
};
