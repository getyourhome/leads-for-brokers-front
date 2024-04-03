import LeadFormContent from "../interfaces/LeadFormContent";

type Props = {
  data: LeadFormContent;
  updateField: (key: string, value: unknown) => void;
};

const SecondStep = ({ data }: Props) => {
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
        />
      </div>
      <div className="form-control">
        <label htmlFor="property-location">Requisitos obrigatórios:</label>
        <textarea
          name="property-location"
          id="property-location"
          required
          placeholder="número de quartos, vagas, outras coisas obrigatórias pra você"
          value={data.mustHaveItems}
        />
      </div>
      <div className="form-control">
        <label htmlFor="property-location">Requisitos desejáveis:</label>
        <textarea
          name="property-location"
          id="property-location"
          required
          value={data.desiredItems}
        />
      </div>
    </>
  );
};

export default SecondStep;
