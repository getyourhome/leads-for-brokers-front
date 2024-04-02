const FourthStep = () => {
  return (
    <>
      <div className="form-control">
        <p>Finalize seu cadastro para acompanhar o seu anúncio!</p>
      </div>

      <div className="form-control">
        <label htmlFor="property-location">CPF:</label>
        <input
          type="number"
          name="property-location"
          id="property-location"
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="property-location">Senha:</label>
        <input
          type="password"
          name="property-location"
          id="property-location"
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
