import LeadFormContent from "../interfaces/LeadFormContent";

type Props = {
  data: LeadFormContent;
  updateField: (key: string, value: unknown) => void;
};

const SecondStep = ({ data, updateField }: Props) => {
  return (
    <>
      <div className="form-control">
        <label htmlFor="property-location">Local:</label>
        <input
          type="text"
          name="property-location"
          id="property-location"
          required
          value={data.location}
          onChange={(e) => updateField("location", e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="property-must-items">Requisitos obrigatórios:</label>
        <textarea
          name="property-must-items"
          id="property-must-items"
          required
          placeholder="número de quartos, vagas, outras coisas obrigatórias pra você"
          value={data.mustHaveItems}
          onChange={(e) => updateField("mustHaveItems", e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="property-desired-items">Requisitos desejáveis:</label>
        <textarea
          name="property-desired-items"
          id="property-desired-items"
          required
          value={data.desiredItems}
          onChange={(e) => updateField("desiredItems", e.target.value)}
        />
      </div>
    </>
  );
};

export default SecondStep;
