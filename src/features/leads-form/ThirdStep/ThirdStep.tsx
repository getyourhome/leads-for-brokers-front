import LeadFormContent from "../interfaces/LeadFormContent";

type Props = {
  data: LeadFormContent;
  updateField: (key: string, value: unknown) => void;
};

const ThirdStep = ({ data, updateField }: Props) => {
  return (
    <>
      <div className="form-control">
        <p>Como os corretores cadastrados podem te achar?</p>
      </div>
      <div className="form-control">
        <label htmlFor="tenant-name">Nome:</label>
        <input
          type="text"
          name="tenant-name"
          id="tenant-name"
          value={data.tenantName}
          onChange={(e) => updateField("tenantName", e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="tenant-email">Email:</label>
        <input
          type="email"
          name="tenant-email"
          id="tenant-email"
          value={data.tenantEmail}
          onChange={(e) => updateField("tenantEmail", e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="tenant-phone">Celular:</label>
        <input
          type="text"
          name="tenant-phone"
          id="tenant-phone"
          value={data.tenantPhone}
          onChange={(e) => updateField("tenantPhone", e.target.value)}
          required
        />
      </div>
    </>
  );
};

export default ThirdStep;
