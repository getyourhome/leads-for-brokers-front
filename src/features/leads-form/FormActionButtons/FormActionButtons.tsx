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
};

const FormActionButtons = ({ currentStep, isLastStep, changeStep }: Props) => {
  return (
    <>
      <button type="button" onClick={(e) => changeStep(currentStep - 1, e)}>
        <GrFormPrevious />
        <span>Voltar</span>
      </button>
      {!isLastStep ? (
        <button type="submit" onClick={(e) => changeStep(currentStep + 1, e)}>
          <GrFormNext />
          <span>Avançar</span>
        </button>
      ) : (
        <button type="submit" onClick={(e) => changeStep(currentStep + 1, e)}>
          <FiSend />
          <span>Enviar</span>
        </button>
      )}
    </>
  );
};

export default FormActionButtons;
