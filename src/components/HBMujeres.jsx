import React, { useState } from "react";

function HbMujeres() {
  const [edad, setEdad] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = (e) => {
    e.preventDefault();
    const tmb = 655.1 + (9.563 * peso) + (1.850 * altura) - (4.676 * edad);
    setResultado(tmb.toFixed(2));
  };

  return (
    <div>
      <h2>Harris-Benedict para Mujeres</h2>
      <form onSubmit={calcular}>
        <input
          type="number"
          placeholder="Edad (años)"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
        <input
          type="number"
          placeholder="Peso (kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <input
          type="number"
          placeholder="Altura (cm)"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <button type="submit">Calcular</button>
      </form>
      {resultado && <p>Tu TMB es: {resultado} calorías</p>}
    </div>
  );
}

export default HbMujeres;
