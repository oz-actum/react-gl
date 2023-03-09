import React, { FC } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { JSX } from "./JSX/JSX";
import { ClassComponent } from "./Components/Class/ClassComponent/ClassComponent";

const ToC: FC = () => {
  return (
    <ul>
      <li>
        <Link to="jsx">JSX</Link>
      </li>
      <li>
        Components
        <ul>
          <li>
            <Link to="component/class">Class Component</Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

function App() {
  return (
    <div className="container">
      <Link to="/">
        <h1>React GL</h1>
      </Link>
      <Routes>
        <Route path="/" element={<ToC />} />
        <Route path="jsx" element={<JSX />} />
        <Route
          path="component/class"
          element={<ClassComponent message="Message from prop" />}
        />
      </Routes>
    </div>
  );
}

export default App;
