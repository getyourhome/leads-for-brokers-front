import { useState } from "react";

type Props = {
  steps: React.ReactElement[];
};

const stepHandler = ({ steps }: Props) => {
  const [currentStep, setCurrentStep] = useState(0);

  const changeStep = (i: number, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log(`STEP: ${i}`);

    if (i < 0 || i > steps.length - 1) return;

    setCurrentStep(i);
  };

  return {
    currentStep,
    currentComponent: steps[currentStep] || null,
    isLastStep: currentStep + 1 == steps.length ? true : false,
    changeStep,
  };
};

export default stepHandler;
