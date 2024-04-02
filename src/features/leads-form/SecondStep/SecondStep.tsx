const SecondStep = () => {
  return (
    <>
      <div className="form-control">
        <label htmlFor="property-location">Local:</label>
        <input
          type="text"
          name="property-location"
          id="property-location"
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="property-location">Requisitos obrigatórios:</label>
        <textarea
          name="property-location"
          id="property-location"
          required
          placeholder="número de quartos, vagas, outras coisas obrigatórias pra você"
        />
      </div>
      <div className="form-control">
        <label htmlFor="property-location">Requisitos desejáveis:</label>
        <textarea name="property-location" id="property-location" required />
      </div>
    </>
  );
};

export default SecondStep;
