import React, { FC } from "react";

export const StepOne: FC<any> = ({ handleChange }) => {
  return (
    <>
      <h2>Step one</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          onChange={(e) => handleChange({ name: e.target.value })}
        />
      </div>
    </>
  );
};

export const StepTwo: FC<any> = ({ handleChange }) => {
  return (
    <>
      <h2>Step two</h2>
      <div className="input-group mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Age"
          onChange={(e) => handleChange({ age: e.target.value })}
        />
      </div>
    </>
  );
};

export const StepThree: FC<any> = ({ handleChange }) => {
  return (
    <>
      <h2>Step three</h2>
      <div className="input-group mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          onChange={(e) => handleChange({ email: e.target.value })}
        />
      </div>
    </>
  );
};

export const StepFour: FC<any> = () => {
  return (
    <>
      <h2>Step Four</h2>
      <p>Thanks for filling in the form!</p>
    </>
  );
};
