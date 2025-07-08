import React, { useState, useEffect } from "react";
import "../styles.css";

function HbHombres() {
  const [edad, setEdad] = useState(25);
  const [peso, setPeso] = useState(56);
  const [talla, setTalla] = useState(165);
  const [af, setAf] = useState(1.65);
  const [sueno, setSueno] = useState(28);
  const [factores, setFactores] = useState(1.65);

  const [geb, setGeb] = useState(0);
  const [gebSueno, setGebSueno] = useState(0);
  const [get, setGet] = useState(0);
  const [imc, setImc] = useState(0);

  useEffect(() => {
    const alturaM = talla / 100;
    const gebCalc = 66.5 + (13.75 * peso) + (5 * talla) - (6.78 * edad);
    const imcCalc = peso / (alturaM * alturaM);
    const gebSuenoCalc = gebCalc + (gebCalc * (sueno / 100));
    const getCalc = gebSuenoCalc * af * factores;

    setGeb(gebCalc.toFixed(2));
    setImc(imcCalc.toFixed(1));
    setGebSueno(gebSuenoCalc.toFixed(2));
    setGet(getCalc.toFixed(2));
  }, [edad, peso, talla, af, sueno, factores]);

  const calorias = parseFloat(get);
  const prote = (calorias * 0.20) / 4;
  const lipidos = (calorias * 0.30) / 9;
  const chos = (calorias * 0.50) / 4;

  return (
    <div className="hb-hombres">
      <h2>Calculadora Harris-Benedict - Hombres</h2>

      <form className="hb-formulario">
        <div className="campo"><label>Edad:</label><input type="number" value={edad} onChange={e => setEdad(e.target.value)} /></div>
        <div className="campo"><label>Peso (kg):</label><input type="number" value={peso} onChange={e => setPeso(e.target.value)} /></div>
        <div className="campo"><label>Talla (cm):</label><input type="number" value={talla} onChange={e => setTalla(e.target.value)} /></div>
        <div className="campo"><label>AF:</label><input type="number" step="0.01" value={af} onChange={e => setAf(e.target.value)} /></div>
        <div className="campo"><label>Horas de sueño:</label><input type="number" value={sueno} onChange={e => setSueno(e.target.value)} /></div>
        <div className="campo"><label>Factores:</label><input type="number" step="0.01" value={factores} onChange={e => setFactores(e.target.value)} /></div>
      </form>

      <div className="hb-resultados">
        <h3>Resultados</h3>
        <p><strong>GEB (Estimado):</strong> 66</p>
        <p><strong>GEB (Calculado):</strong> {geb} kcal</p>
        <p><strong>GEB - sueño:</strong> 1463 kcal</p>
        <p><strong>GEB + sueño:</strong> {gebSueno} kcal</p>
        <p><strong>GET:</strong> {get} kcal</p>
        <p><strong>IMC:</strong> {imc}</p>
      </div>

      <div className="hb-macros">
        <h3>Distribución de Macronutrientes</h3>
        <table>
          <thead><tr><th>Macronutriente</th><th>Gramos</th><th>Calorías</th><th>%</th></tr></thead>
          <tbody>
            <tr><td>Proteínas</td><td>121 g</td><td>483 kcal</td><td>20%</td></tr>
            <tr><td>Lípidos</td><td>80 g</td><td>724 kcal</td><td>30%</td></tr>
            <tr><td>CHOs</td><td>302 g</td><td>1207 kcal</td><td>50%</td></tr>
          </tbody>
        </table>
      </div>

      <div className="hb-comidas">
        <h3>Distribución por Comidas</h3>
        <table>
          <thead><tr><th>Comida</th><th>%</th><th>Calorías</th><th>Proteínas</th><th>CHOs</th><th>Lípidos</th></tr></thead>
          <tbody>
            <tr><td>D</td><td>0.2</td><td>482.8</td><td>24.1</td><td>60.3</td><td>16.1</td></tr>
            <tr><td>MM</td><td>0.15</td><td>362.1</td><td>18.1</td><td>45.3</td><td>12.1</td></tr>
            <tr><td>A</td><td>0.3</td><td>724.2</td><td>36.2</td><td>90.5</td><td>24.1</td></tr>
            <tr><td>MT</td><td>0.15</td><td>362.1</td><td>18.1</td><td>45.3</td><td>12.1</td></tr>
            <tr><td>C</td><td>0.2</td><td>482.8</td><td>24.1</td><td>60.3</td><td>16.1</td></tr>
          </tbody>
        </table>
      </div>

      <div className="hb-imc-clasificacion">
        <h3>Clasificación del IMC</h3>
        <ul>
          <li>&lt;18.5: Bajo peso (Delgado)</li>
          <li>18.5 - 24.9: Peso saludable (Promedio)</li>
          <li>25 - 29.9: Sobrepeso (Aumentado)</li>
          <li>30 - 34.9: Obesidad grado I (Moderado)</li>
          <li>35 - 39.9: Obesidad grado II (Severo)</li>
          <li>&gt;40: Obesidad grado III (Muy severo)</li>
        </ul>
      </div>

      <div className="hb-get-niveles">
        <h3>Niveles de Actividad Física y GET</h3>
        <ul>
          <li>1789 kcal, 1.2: Sedentario</li>
          <li>2050 kcal, 1.375: Ligeramente activo</li>
          <li>2311 kcal, 1.55: Moderadamente activo</li>
          <li>2572 kcal, 1.725: Muy activo</li>
          <li>2833 kcal, 1.9: Extremadamente activo</li>
        </ul>
      </div>

      <div className="hb-alimentos">
        <h3>Distribución de Alimentos</h3>
        <table>
          <thead><tr><th>Grupo</th><th>Porciones</th><th>Proteínas</th><th>CHOs</th><th>Grasas</th></tr></thead>
          <tbody>
            <tr><td>Lácteos</td><td>3</td><td>24</td><td>30</td><td>21</td></tr>
            <tr><td>Hortalizas</td><td>2</td><td>4</td><td>14</td><td>0</td></tr>
            <tr><td>Frutas</td><td>5</td><td>0</td><td>50</td><td>0</td></tr>
            <tr><td>Harina</td><td>1</td><td>2</td><td>15</td><td>0</td></tr>
            <tr><td>Leguminosas</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>Carnes</td><td>6</td><td>84</td><td>0</td><td>60</td></tr>
            <tr><td>Grasas</td><td>3</td><td>0</td><td>0</td><td>15</td></tr>
            <tr><td>Azúcares</td><td>3</td><td>0</td><td>45</td><td>0</td></tr>
          </tbody>
        </table>
        <p><strong>Total:</strong> 114 g proteínas, 154 g CHOs, 96 g grasas</p>
        <p><strong>Requerimiento:</strong> 121 g proteínas, 302 g CHOs, 80 g grasas</p>
        <p><strong>Porcentajes:</strong> 94.5% proteínas, 51.0% CHOs, 119.3% grasas</p>
      </div>
    </div>
  );
}

export default HbHombres;
