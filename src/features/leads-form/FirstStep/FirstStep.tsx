import LeadFormContent from "../interfaces/LeadFormContent";

type Props = {
  data: LeadFormContent;
  updateField: (key: string, value: unknown) => void;
};

const FirstStep = ({ data }: Props) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="property-type">Tipo de imóvel:</label>
        <select name="property-type" id="property-type">
          <option value="both">Qualquer</option>
          <option value="apartment">Apartamento</option>
          <option value="house">Casa</option>
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="property-goal">Finalidade:</label>
        <select name="property-goal" id="property-goal">
          <option value="both">Ambos</option>
          <option value="apartment">Alugar</option>
          <option value="house">Comprar</option>
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="property-min-budget">Valor Mínimo:</label>
        <input
          type="number"
          name="property-location"
          id="property-location"
          required
          value={data.propertyType}
        />
      </div>
      <div className="form-control">
        <label htmlFor="property-max-budget">Valor Máximo:</label>
        <input
          type="number"
          name="property-max-budget"
          id="property-max-budget"
          required
        />
      </div>
    </div>
  );
};

export default FirstStep;
