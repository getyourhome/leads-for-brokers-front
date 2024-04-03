import LeadFormContent from "../interfaces/LeadFormContent";

type Props = {
  data: LeadFormContent;
  updateField: (key: string, value: unknown) => void;
};

const ThirdStep = ({ data }: Props) => {
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
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="tenant-email">Email:</label>
        <input
          type="email"
          value={data.tenantEmail}
          name="tenant-email"
          id="tenant-email"
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
          required
        />
      </div>
    </>
  );
};

export default ThirdStep;
