import React, { FC, useMemo, useRef, useState } from "react";
import { createTodos, filterTodos } from "./utils";

export interface Todos {
  id: number;
  text: string;
  completed: boolean;
}

/**
 * TASK 1: Make filterTodos function to have memoized results.
 *
 * TASK 2: Compare both solutions and observe computation differences [time].
 *         You can increase the size of the list in createTodo function.
 */

const TodoList: FC<{ todos: Todos[]; theme: string; tab: string }> = ({
  todos,
  theme,
  tab,
}) => {
  console.time("filter array");
  const visibleTodos: Todos[] = useMemo(
    () => filterTodos(todos, tab),
    [todos, tab]
  );
  console.timeEnd("filter array");

  return (
    <ul className="list-group">
      {visibleTodos.map((todo) => (
        <li className={`list-group-item text-bg-${theme}`} key={todo.id}>
          {todo.completed ? <s>{todo.text}</s> : todo.text}
        </li>
      ))}
    </ul>
  );
};

export const UseMemo: FC = () => {
  const [tab, setTab] = useState("all");
  const [isDark, setIsDark] = useState(false);

  const todos = useRef(createTodos());

  return (
    <>
      <button className="btn btn-primary me-2" onClick={() => setTab("all")}>
        All
      </button>
      <button className="btn btn-primary me-2" onClick={() => setTab("active")}>
        Active
      </button>
      <button className="btn btn-primary" onClick={() => setTab("completed")}>
        Completed
      </button>
      <br />
      <label>
        <input
          className="form-check-input me-2"
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <TodoList
        todos={todos.current}
        tab={tab}
        theme={isDark ? "dark" : "light"}
      />
    </>
  );
};
