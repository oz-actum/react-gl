let fontColor = "black";
let backgroundColor = "white";

export const getStyleRule = () => {
  const styleElement = document.createElement("style");
  styleElement.innerHTML = `
    .theme-button {
      color: ${fontColor};
      background-color: ${backgroundColor};
  `;
  return styleElement;
};

export const changeColors = (theme: string): void => {
  fontColor = theme === "light" ? "black" : "white";
  backgroundColor = theme === "light" ? "white" : "black";
};
