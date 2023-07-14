import React, { FC } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { JSX } from "./JSX/JSX";
import { ClassComponent } from "./Components/Class/ClassComponent";
import { FunctionalComponent } from "./Components/Functional/FunctionalComponent";
import { StrictModeComponent } from "./Components/BuiltIn/StrictMode/StrictModeComponent";
import { FragmentComponent } from "./Components/BuiltIn/Fragment/FragmentComponent";
import { SuspenseComponent } from "./Components/BuiltIn/Suspense/SuspenseComponent";
import { ProfilerComponent } from "./Components/BuiltIn/Profiler/ProfilerComponent";
import { HigherOrderComponent } from "./Components/HOC/HigherOrderComponent";
import { UseState } from "./Hooks/useState/UseState";
import { UseEffect } from "./Hooks/useEffect/UseEffect";
import { UseRef } from "./Hooks/useRef/UseRef";
import { UseMemo } from "./Hooks/useMemo/UseMemo";
import { UseCallback } from "./Hooks/useCallback/UseCallback";
import { UseContext } from "./Hooks/useContext/UseContext";
import { UseLayoutEffect } from "./Hooks/useLayoutEffect/UseLayoutEffect";
import { UseTransition } from "./Hooks/useTransition/UseTransition";
import { UseId } from "./Hooks/useId/UseId";
import { UseReducer } from "./Hooks/useReducer/UseReducer";
import { UseDebugValue } from "./Hooks/useDebugValue/UseDebugValue";
import { UseDeferredValue } from "./Hooks/useDeferredValue/UseDeferredValue";
import { UseImperativeHandle } from "./Hooks/useImperativeHandle/UseImperativeHandle";
import { UseInsertionEffect } from "./Hooks/useInsertionEffect/UseInsertionEffect";
import { UseSyncExternalStore } from "./Hooks/useSyncExternalStore/UseSyncExternalStore";
import { CreateCustomHook } from "./Hooks/createCustomHook/CreateCustomHook";
import { LazyComponent } from "./API/lazy/LazyComponent";
import { MemoComponent } from "./API/memo/MemoComponent";
import { StartTransitionComponent } from "./API/startTransition/StartTransitionComponent";
import { CreatePortalComponent } from "./API/createPortal/CreatePortalComponent";
import { FlushSyncComponent } from "./API/flushSync/FlushSyncComponent";
import { ControlledAndUncontrolledComponents } from "./Miscellaneous/ControlledAndUncontrolledComponents/ControlledAndUncontrolledComponents";
import { ReactEventObject } from "./Miscellaneous/ReactEventObject/ReactEventObject";
import { SpecialReactProps } from "./Miscellaneous/SpecialReactProps/SpecialReactProps";
import { BestPractices } from "./Miscellaneous/BestPractices/BestPractices";

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
          <li>
            <Link to="components/hoc">Higher Order Component</Link>
          </li>
        </ul>
      </li>
      <li>
        Hooks
        <ul>
          <li>
            <Link to="hooks/use-state">useState</Link>
          </li>
          <li>
            <Link to="hooks/use-effect">useEffect</Link>
          </li>
          <li>
            <Link to="hooks/use-ref">useRef</Link>
          </li>
          <li>
            <Link to="hooks/use-memo">useMemo</Link>
          </li>
          <li>
            <Link to="hooks/use-callback">useCallback</Link>
          </li>
          <li>
            <Link to="hooks/use-context">useContext</Link>
          </li>
          <li>
            <Link to="hooks/use-layout-effect">useLayoutEffect</Link>
          </li>
          <li>
            <Link to="hooks/use-transition">useTransition</Link>
          </li>
          <li>
            <Link to="hooks/use-id">useId</Link>
          </li>
          <li>
            <Link to="hooks/use-reducer">useReducer</Link>
          </li>
          <li>
            <Link to="hooks/use-debug-value">useDebugValue</Link>
          </li>
          <li>
            <Link to="hooks/use-deferred-value">useDeferredValue</Link>
          </li>
          <li>
            <Link to="hooks/use-imperative-handle">useImperativeHandle</Link>
          </li>
          <li>
            <Link to="hooks/use-insertion-effect">useInsertionEffect</Link>
          </li>
          <li>
            <Link to="hooks/use-sync-external-store">useSyncExternalStore</Link>
          </li>
          <li>
            <Link to="hooks/create-custom-hooks">
              How to create custom Hooks
            </Link>
          </li>
        </ul>
      </li>
      <li>
        API
        <ul>
          <li>
            <Link to="api/lazy">Lazy</Link>
          </li>
          <li>
            <Link to="api/memo">Memo</Link>
          </li>
          <li>
            <Link to="api/start-transition">StartTransition</Link>
          </li>
          <li>
            <Link to="api/flush-sync">FlushSync</Link>
          </li>
          <li>
            <Link to="api/create-portal">CreatePortal</Link>
          </li>
        </ul>
      </li>
      <li>
        Miscellaneous
        <ul>
          <li>
            <Link to="miscellaneous/controlled-and-uncontrolled-componenets">
              Controlled and Uncontrolled Components
            </Link>
          </li>
          <li>
            <Link to="miscellaneous/react-event-object">
              React Event Object (Synthetic Event)
            </Link>
          </li>
          <li>
            <Link to="miscellaneous/special-react-props">
              Special React props
            </Link>
          </li>
          <li>
            <Link to="miscellaneous/best-practices">Best Practices</Link>
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
        <Route path="components/hoc" element={<HigherOrderComponent />} />
        <Route path="hooks/use-state" element={<UseState />} />
        <Route path="hooks/use-effect" element={<UseEffect />} />
        <Route path="hooks/use-ref" element={<UseRef />} />
        <Route path="hooks/use-memo" element={<UseMemo />} />
        <Route path="hooks/use-callback" element={<UseCallback />} />
        <Route path="hooks/use-context" element={<UseContext />} />
        <Route path="hooks/use-layout-effect" element={<UseLayoutEffect />} />
        <Route path="hooks/use-transition" element={<UseTransition />} />
        <Route path="hooks/use-id" element={<UseId />} />
        <Route path="hooks/use-reducer" element={<UseReducer />} />
        <Route path="hooks/use-debug-value" element={<UseDebugValue />} />
        <Route path="hooks/use-deferred-value" element={<UseDeferredValue />} />
        <Route
          path="hooks/use-imperative-handle"
          element={<UseImperativeHandle />}
        />
        <Route
          path="hooks/use-insertion-effect"
          element={<UseInsertionEffect />}
        />
        <Route
          path="hooks/use-sync-external-store"
          element={<UseSyncExternalStore />}
        />
        <Route
          path="hooks/create-custom-hooks"
          element={<CreateCustomHook />}
        />
        <Route path="api/lazy" element={<LazyComponent />} />
        <Route path="api/memo" element={<MemoComponent />} />
        <Route
          path="api/start-transition"
          element={<StartTransitionComponent />}
        />
        <Route path="api/flush-sync" element={<FlushSyncComponent />} />
        <Route path="api/create-portal" element={<CreatePortalComponent />} />
        <Route
          path="miscellaneous/controlled-and-uncontrolled-componenets"
          element={<ControlledAndUncontrolledComponents />}
        />
        <Route
          path="miscellaneous/react-event-object"
          element={<ReactEventObject />}
        />
        <Route
          path="miscellaneous/special-react-props"
          element={<SpecialReactProps />}
        />
        <Route
          path="miscellaneous/best-practices"
          element={<BestPractices />}
        />
      </Routes>
    </div>
  );
}

export default App;
