import { useState } from "react";

import FirstStep from "../features/leads-form/FirstStep/FirstStep";
import SecondStep from "../features/leads-form/SecondStep/SecondStep";
import ThirdStep from "../features/leads-form/ThirdStep/ThirdStep";
import FourthStep from "../features/leads-form/FourthStep/FourthStep";
import FormTopMenu from "../features/leads-form/FormTopMenu/FormTopMenu";
import FormActionButtons from "../features/leads-form/FormActionButtons/FormActionButtons";
import LeadFormContent from "../features/leads-form/interfaces/LeadFormContent";
import stepHandler from "../features/leads-form/hooks/stepHandler";
import "./LeadForm.css";

type ChangeStepFunction = (
  newStep: number,
  event?: React.MouseEvent<HTMLButtonElement>,
) => void;

const userData: LeadFormContent = {
  propertyType: "",
  purpose: "",
  minBudget: 0,
  maxBudget: 0,
  location: "",
  mustHaveItems: "",
  desiredItems: "",
  tenantName: "",
  tenantEmail: "",
  tenantPhone: "",
  tenantDocument: "",
  tenantPassword: "",
};

const LeadForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [formContent, setFormContent] = useState(userData);

  const updateFieldHandler = (key: string, value: unknown) => {
    setFormContent((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formSteps = [
    <FirstStep data={formContent} updateField={updateFieldHandler} />,
    <SecondStep data={formContent} updateField={updateFieldHandler} />,
    <ThirdStep data={formContent} updateField={updateFieldHandler} />,
    <FourthStep data={formContent} updateField={updateFieldHandler} />,
  ];

  const { currentStep, currentComponent, isLastStep, changeStep } = stepHandler(
    {
      steps: formSteps,
    },
  );

  return (
    <div className="app">
      <div className="header">
        <h2>Cadastre o imóvel que você procura</h2>
      </div>
      <div className="form-container">
        <FormTopMenu currentStep={currentStep} />

        <form>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            <FormActionButtons
              currentStep={currentStep}
              isLastStep={isLastStep}
              changeStep={changeStep as ChangeStepFunction}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;
