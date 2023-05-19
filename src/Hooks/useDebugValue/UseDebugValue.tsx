import React, { FC } from "react";
import { useFetch } from "./useFetch";

/**
 * TASK: Use useDebugValue Hook (inside the useFetch Hook) to see the response status number in the React DevTools.
 */

export const UseDebugValue: FC = () => {
  const users = useFetch("https://jsonplaceholder.typicode.com/users");

  if (!users.response?.length) return null;
  return (
    <ul className="list-group">
      {users.response.map((user) => (
        <li key={user.id} className="list-group-item">
          {user.name}
        </li>
      ))}
    </ul>
  );
};
