import React from "react";

const FirstStep = () => {
  return (
    <div>
      <div className="form-control">
        <p>O que você procura?</p>
      </div>
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
        <label htmlFor="property-location">Local:</label>
        <input
          type="text"
          name="property-location"
          id="property-location"
          required
        />
      </div>
    </div>
  );
};

export default FirstStep;
