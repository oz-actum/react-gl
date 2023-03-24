import React, { FC, useEffect, useState } from "react";
import { mathScore } from "../../../mockData/mathScore";

interface Prop {
  isStrict?: boolean;
  data: Array<any>;
}

export const StrictModeComponent: FC = () => {
  return (
    <>
      <MyComponent isStrict={false} data={mathScore} />
    </>
  );
};

const MyComponent: FC<Prop> = ({ isStrict = false, data }) => {
  const [counter, setCounter] = useState(0);

  const table = data;
  table.push(["Pushed user", 46, 61, "A"]);

  useEffect(() => {
    console.log(isStrict ? "STRICT" : "STANDARD");
  }, [counter]);

  const handleOnClick = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <button className="btn btn-primary" onClick={handleOnClick}>
        Rerender {isStrict ? "STRICT" : "STANDARD"}
      </button>
      <table className="table table-striped">
        <tbody>
          {table.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((column: any, columnIndex: number) => (
                <td key={columnIndex}>{column}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
