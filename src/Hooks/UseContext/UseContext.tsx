import React, { createContext, FC, useContext, useRef, useState } from "react";

const defaultValues = {
  options: ["one", "two", "three", "four"],
  selectedOption: "one",
};

const ThemeContext = createContext<{
  options: Array<string>;
  selectedOption: string;
}>(defaultValues);

/**
 * TASK: Rewrite the code with the usage of context provider and useContext hook
 *       so "values" do not have to be passed down the tree but read from the context.
 */

export const UseContext: FC = () => {
  const [values, setOptions] = useState(defaultValues);

  return (
    <ThemeContext.Provider value={values}>
      <BadgeComponent />
      <SimpleForm
        handleAddValue={(value: string) =>
          setOptions({ ...values, options: [...values.options, value] })
        }
        handleSetSelectedOption={(value: string) =>
          setOptions({ ...values, selectedOption: value })
        }
      />

    </ThemeContext.Provider>
  );
};

const SimpleForm: FC<{
  handleAddValue: (key: string) => void;
  handleSetSelectedOption: (key: string) => void;
}> = ({ handleAddValue, handleSetSelectedOption }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (): void => {
    if (inputRef.current?.value) {
      handleAddValue(inputRef.current.value);
      inputRef.current.value = ""; // clear the input value
    }
  };

  return (
    <>
      <div className="input-group my-3">
        <input ref={inputRef} type="text" className="form-control" />
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={handleClick}
        >
          Add option
        </button>
      </div>

      <SelectComponent handleSetSelectedOption={handleSetSelectedOption} />
    </>
  );
};

const SelectComponent: FC<{
  handleSetSelectedOption: (key: string) => void;
}> = ({ handleSetSelectedOption }) => {
  const { options } = useContext(ThemeContext);

  return (
    <select
      className="form-select"
      onChange={(e) => handleSetSelectedOption(e.target.value)}
    >
      {options.map((option, key) => (
        <option key={key} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

const BadgeComponent: FC = () => {
  const { options, selectedOption } = useContext(ThemeContext);

  return (
    <div className="pt-3">
      {options.map((value, key) => (
        <span
          key={key}
          className={`badge bg-${
            value === selectedOption ? "primary" : "secondary"
          } me-1`}
        >
          {value}
        </span>
      ))}
    </div>
  );
};
