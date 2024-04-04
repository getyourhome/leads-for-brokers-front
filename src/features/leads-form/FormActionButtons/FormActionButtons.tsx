import React from "react";
import { FiSend } from "react-icons/fi";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import "./FormActionButtons.css";
type Props = {
  currentStep: number;
  isLastStep: boolean;
  changeStep: (
    newStep: number,
    event?: React.MouseEvent<HTMLButtonElement>,
  ) => void;
  sendForm: () => void;
};

const FormActionButtons = ({
  currentStep,
  isLastStep,
  changeStep,
  sendForm,
}: Props) => {
  return (
    <>
      <button type="button" onClick={(e) => changeStep(currentStep - 1, e)}>
        <GrFormPrevious />
        <span>Voltar</span>
      </button>
      {!isLastStep ? (
        <button type="button" onClick={(e) => changeStep(currentStep + 1, e)}>
          <GrFormNext />
          <span>Avançar</span>
        </button>
      ) : (
        <button type="button" onClick={sendForm}>
          <FiSend />
          <span>Enviar</span>
        </button>
      )}
    </>
  );
};

export default FormActionButtons;
