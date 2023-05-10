import React, { FC, useRef, useState } from "react";

interface DefaultValues {
  options: Array<string>;
  selectedOption: string;
}

const defaultValues: DefaultValues = {
  options: ["one", "two", "three", "four"],
  selectedOption: "one",
};

/**
 * TASK: Rewrite the code with the usage of context provider and useContext hook
 *       so "values" do not have to be passed down the tree but read from the context.
 */

export const UseContext: FC = () => {
  const [values, setOptions] = useState(defaultValues);

  return (
    <>
      <BadgeComponent values={values} />
      <SimpleForm
        handleAddValue={(value: string) =>
          setOptions({ ...values, options: [...values.options, value] })
        }
        handleSetSelectedOption={(value: string) =>
          setOptions({ ...values, selectedOption: value })
        }
        values={values}
      />
    </>
  );
};

const SimpleForm: FC<{
  handleAddValue: (key: string) => void;
  handleSetSelectedOption: (key: string) => void;
  values: DefaultValues;
}> = ({ handleAddValue, handleSetSelectedOption, values }) => {
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

      <SelectComponent
        handleSetSelectedOption={handleSetSelectedOption}
        values={values}
      />
    </>
  );
};

const SelectComponent: FC<{
  handleSetSelectedOption: (key: string) => void;
  values: DefaultValues;
}> = ({ handleSetSelectedOption, values }) => {
  return (
    <select
      className="form-select"
      defaultValue={values.options[0]}
      onChange={(e) => handleSetSelectedOption(e.target.value)}
    >
      {values.options.map((option, key) => (
        <option key={key} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

const BadgeComponent: FC<{ values: DefaultValues }> = ({ values }) => {
  return (
    <div className="pt-3">
      {values.options.map((value, key) => (
        <span
          key={key}
          className={`badge bg-${
            value === values.selectedOption ? "primary" : "secondary"
          } me-1`}
        >
          {value}
        </span>
      ))}
    </div>
  );
};
