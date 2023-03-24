import React, { FC } from "react";
import { mathScore } from "../../../mockData/mathScore";

export const FragmentComponent: FC = () => {
  const renderNames = mathScore.map((item) => <>{item[0]}</>);

  return <div>{renderNames}</div>;
};
