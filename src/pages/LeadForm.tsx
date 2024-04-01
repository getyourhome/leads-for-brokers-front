import "./LeadForm.css";
import FirstStep from "../features/leads-form/FirstStep/FirstStep";

function LeadForm() {
  return (
    <div className="app">
      <div className="header">
        <h2>Cadastre o imóvel que você procura</h2>
      </div>
      <div className="form-container">
        <FirstStep />
      </div>
    </div>
  );
}

export default LeadForm;
