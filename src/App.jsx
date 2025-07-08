import React, { useState } from "react";
import HbHombres from "./components/HBHombres";
import HbMujeres from "./components/HbMujeres";
import MifflinHombres from "./components/MifflinHombres";
import MifflinMujeres from "./components/MifflinMujeres";
import Inicio from "./components/Inicio";
import "./styles.css"; // Asegúrate de tener este archivo con los estilos necesarios
function App() {
  const [vista, setVista] = useState("");

  return (
    <>
      <nav className="navbar">
        <h1><span>Nutri</span>LAB</h1>
        <ul className="nav-links">
          <li><button onClick={() => setVista("")}>INICIO</button></li>
          <li><button onClick={() => setVista("calculadoras")}>CALCULADORAS</button></li>
          <li><button onClick={() => alert("Más opciones pronto")}>MAS</button></li>
        </ul>
      </nav>

      <main>
        {vista === "" && <Inicio />}

        {vista === "calculadoras" && (
          <div className="botones">
            <button onClick={() => setVista("hbH")}>HB PARA HOMBRES</button>
            <button onClick={() => setVista("hbM")}>HB PARA MUJERES</button>
            <button onClick={() => setVista("mifH")}>Mifflin para hombres</button>
            <button onClick={() => setVista("mifM")}>Mifflin para mujeres</button>
          </div>
        )}

        {vista === "hbH" && <HbHombres />}
        {vista === "hbM" && <HbMujeres />}
        {vista === "mifH" && <MifflinHombres />}
        {vista === "mifM" && <MifflinMujeres />}
      </main>
    </>
  );
}

export default App;
