import React, {
  Children,
  cloneElement,
  FC,
  isValidElement,
  ReactElement,
  ReactNode,
  useState,
} from "react";
import { StepFour, StepOne, StepThree, StepTwo } from "./Steps";

/**
 * TASK: Change the implementation of the "UncontrolledWizard" component, so it's a controlled component.
 */

export const ControlledAndUncontrolledComponents: FC = () => {
  return (
    <>
      <UncontrolledWizard>
        <StepOne />
        <StepTwo />
        <StepThree />
        <StepFour />
      </UncontrolledWizard>
    </>
  );
};

export const UncontrolledWizard = ({ children }: { children: ReactNode[] }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [currentStep, setStep] = useState(0);

  const handleChange = (inputData: Record<string, string>) => {
    setFormData({ ...formData, ...inputData });
  };

  const goNext = () => {
    setStep(currentStep + 1);
  };

  const goBack = () => {
    setStep(currentStep - 1);
  };

  const child = Children.toArray(children);
  const currentChild = child[currentStep];

  if (isValidElement(currentChild)) {
    console.log(formData);
    return (
      <>
        {cloneElement(
          currentChild as ReactElement<{
            handleChange: (data: Record<string, string>) => void;
          }>,
          {
            handleChange,
          }
        )}
        <hr />
        {currentStep > 0 && (
          <button className="btn btn-secondary" onClick={goBack}>
            Previous step
          </button>
        )}
        {currentStep < child.length - 1 && (
          <button className="btn btn-secondary float-end" onClick={goNext}>
            Next step
          </button>
        )}
      </>
    );
  }

  return null;
};
