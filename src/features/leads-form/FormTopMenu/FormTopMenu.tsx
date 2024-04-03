import { MdContactSupport, MdOutlineMapsHomeWork } from "react-icons/md";
import { PiSwimmingPoolLight } from "react-icons/pi";
import { FaUserShield } from "react-icons/fa";

import "./FormTopMenu.css";

type Props = {
  currentStep: number;
};

const FormTopMenu = ({ currentStep }: Props) => {
  const apiUrl = import.meta.env.API_URL;

  console.log(apiUrl);
  return (
    <div className="steps">
      <div className={`step ${currentStep >= 0 ? "active" : ""}`}>
        <MdOutlineMapsHomeWork />
        <p>Tipo e Valor</p>
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
        <PiSwimmingPoolLight />
        <p>Itens no Imóvel</p>
      </div>
      <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
        <MdContactSupport />
        <p>Contato</p>
      </div>
      <div className={`step ${currentStep >= 3 ? "active" : ""}`}>
        <FaUserShield />
        <p>Cadastro</p>
      </div>
    </div>
  );
};

export default FormTopMenu;
