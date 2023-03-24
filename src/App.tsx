import React, { FC } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { JSX } from "./JSX/JSX";
import { ClassComponent } from "./Components/Class/ClassComponent";
import { FunctionalComponent } from "./Components/Functional/FunctionalComponent";
import { StrictModeComponent } from "./Components/BuiltIn/StrictMode/StrictModeComponent";
import { FragmentComponent } from "./Components/BuiltIn/Fragment/FragmentComponent";
import { SuspenseComponent } from "./Components/BuiltIn/Suspense/SuspenseComponent";
import { ProfilerComponent } from "./Components/BuiltIn/Profiler/ProfilerComponent";

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
            <Link to="components/class">Class Component</Link>
          </li>
          <li>
            <Link to="components/functional">Functional Component</Link>
          </li>
          <li>
            Built-in
            <ul>
              <li>
                <Link to="components/built-in/strict-mode">Strict Mode</Link>
              </li>
              <li>
                <Link to="components/built-in/fragment">Fragment</Link>
              </li>
              <li>
                <Link to="components/built-in/suspense">Suspense</Link>
              </li>
              <li>
                <Link to="components/built-in/profiler">Profiler</Link>
              </li>
            </ul>
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
          path="components/class"
          element={<ClassComponent message="Message from prop" />}
        />
        <Route path="components/functional" element={<FunctionalComponent />} />
        <Route
          path="components/built-in/strict-mode"
          element={<StrictModeComponent />}
        />
        <Route
          path="components/built-in/fragment"
          element={<FragmentComponent />}
        />
        <Route
          path="components/built-in/suspense"
          element={<SuspenseComponent />}
        />
        <Route
          path="components/built-in/profiler"
          element={<ProfilerComponent />}
        />
      </Routes>
    </div>
  );
}

export default App;
