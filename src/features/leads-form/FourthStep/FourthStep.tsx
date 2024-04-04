import LeadFormContent from "../interfaces/LeadFormContent";

type Props = {
  data: LeadFormContent;
  updateField: (key: string, value: unknown) => void;
};

const FourthStep = ({ data, updateField }: Props) => {
  return (
    <>
      <div className="form-control">
        <p>Finalize seu cadastro para acompanhar o seu anúncio!</p>
      </div>

      <div className="form-control">
        <label htmlFor="tenant-document">CPF:</label>
        <input
          type="number"
          name="tenant-document"
          id="tenant-document"
          onChange={(e) => updateField("tenantDocument", e.target.value)}
          value={data.tenantDocument}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="tenant-password">Senha:</label>
        <input
          type="password"
          name="tenant-password"
          id="tenant-password"
          onChange={(e) => updateField("tenantPassword", e.target.value)}
          value={data.tenantPassword}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="property-location">Confirme a senha:</label>
        <input
          type="password"
          name="property-location"
          id="property-location"
          required
        />
      </div>
    </>
  );
};

export default FourthStep;
