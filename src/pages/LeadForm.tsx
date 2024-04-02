import "./LeadForm.css";
import FirstStep from "../features/leads-form/FirstStep/FirstStep";
import FormTopMenu from "../features/leads-form/FormTopMenu/FormTopMenu";
import SecondStep from "../features/leads-form/SecondStep/SecondStep";
import ThirdStep from "../features/leads-form/ThirdStep/ThirdStep";
import FourthStep from "../features/leads-form/FourthStep/FourthStep";
import stepHandler from "../features/leads-form/hooks/stepHandler";
import FormActionButtons from "../features/leads-form/FormActionButtons/FormActionButtons";

type ChangeStepFunction = (
  newStep: number,
  event?: React.MouseEvent<HTMLButtonElement>,
) => void;

const LeadForm = () => {
  const formSteps = [
    <FirstStep />,
    <SecondStep />,
    <ThirdStep />,
    <FourthStep />,
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
            {" "}
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
