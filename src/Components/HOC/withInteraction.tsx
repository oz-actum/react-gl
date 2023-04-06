import React, { FC, useState } from "react";

export const withInteraction = (Component: FC) => (props: any) => {
  const initialValue = "Default message";

  const [value, setValue] = useState(initialValue);

  const onChange = (value: string) => setValue(value);
  const onReset = () => setValue(initialValue);

  return (
    <Component {...props} value={value} onChange={onChange} onReset={onReset} />
  );
};
