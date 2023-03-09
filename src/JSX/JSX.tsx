import React, { FC } from "react";

export const JSX: FC = () => {
  return (
    <>
      <$_w31rD_c0mP0n3n7 />
      <hr />
      <h4>This component is written in JSX</h4>
      <JSXFormComponent />
      <hr />
      <h4>This component is created by <code>React.createElement()</code></h4>
      {NonJSXFormComponent}
    </>
  );
};

const $_w31rD_c0mP0n3n7: FC = () => (
  <div><code>{$_w31rD_c0mP0n3n7.name}</code> - this is a wierd component's name but valid!</div>
);

const JSXFormComponent: FC = () => {
  return (
    <form>
      <div className="mb-3 row">
        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            readOnly
            className="form-control-plaintext"
            id="staticEmail"
            value="email@example.com"
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputPassword" />
        </div>
      </div>
    </form>
  );
};

const NonJSXFormComponent = React.createElement(
  "form",
  null,
  React.createElement(
    "div",
    {
      className: "mb-3 row",
    },
    React.createElement(
      "label",
      {
        htmlFor: "staticEmail2",
        className: "col-sm-2 col-form-label",
      },
      "Email"
    ),
    React.createElement(
      "div",
      {
        className: "col-sm-10",
      },
      React.createElement("input", {
        type: "text",
        readOnly: true,
        className: "form-control-plaintext",
        id: "staticEmail2",
        value: "email@example.com",
      })
    )
  ),
  React.createElement(
    "div",
    {
      className: "mb-3 row",
    },
    React.createElement(
      "label",
      {
        htmlFor: "inputPassword2",
        className: "col-sm-2 col-form-label",
      },
      "Password"
    ),
    React.createElement(
      "div",
      {
        className: "col-sm-10",
      },
      React.createElement("input", {
        type: "password",
        className: "form-control",
        id: "inputPassword2",
      })
    )
  )
);
