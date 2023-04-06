import React, { FC, Fragment } from "react";
import { mathScore } from "../../../mockData/mathScore";

export const FragmentComponent: FC = () => {
  const renderNames = mathScore.map((item, index) => (
    <Fragment key={index}>{item[0]}</Fragment>
  ));

  return <>{renderNames}</>;
};
