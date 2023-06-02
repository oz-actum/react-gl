import React, { FC, useState } from "react";
import { changeColors, getStyleRule } from "./cssInJs";

/**
 * TASK: Use useInsertionEffect Hook to update button styles in "cssInJs" file and append them to the document head.
 */

export const UseInsertionEffect: FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={handleThemeChange} className="theme-button">
      Change theme
    </button>
  );
};
