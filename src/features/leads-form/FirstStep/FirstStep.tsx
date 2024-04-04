import LeadFormContent from "../interfaces/LeadFormContent";

type Props = {
  data: LeadFormContent;
  updateField: (key: string, value: unknown) => void;
};

const FirstStep = ({ data, updateField }: Props) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="property-type">Tipo de imóvel:</label>
        <select
          name="property-type"
          id="property-type"
          onChange={(e) => updateField("propertyType", e.target.value)}
          value={data.propertyType || "both"}
        >
          <option value="both">Qualquer</option>
          <option value="apartment">Apartamento</option>
          <option value="house">Casa</option>
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="property-goal">Finalidade:</label>
        <select
          name="property-goal"
          id="property-goal"
          onChange={(e) => updateField("purpose", e.target.value)}
          value={data.purpose || "both"}
        >
          <option value="both">Ambos</option>
          <option value="rental">Alugar</option>
          <option value="purchase">Comprar</option>
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="property-min-budget">Valor Mínimo:</label>
        <input
          type="number"
          name="property-min-budget"
          id="property-min-budget"
          required
          value={data.minBudget}
          onChange={(e) => updateField("minBudget", e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="property-max-budget">Valor Máximo:</label>
        <input
          type="number"
          name="property-max-budget"
          id="property-max-budget"
          value={data.maxBudget}
          onChange={(e) => updateField("maxBudget", e.target.value)}
          required
        />
      </div>
    </div>
  );
};

export default FirstStep;
