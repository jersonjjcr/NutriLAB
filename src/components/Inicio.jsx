import React from "react";

const Inicio = () => {
  return (
    <div className="inicio-container" style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Bienvenido a Nutrilab</h1>
      <p>
        Nutrilab es una herramienta diseñada para ayudarte a calcular y comprender tus necesidades energéticas diarias. Utiliza fórmulas reconocidas como Harris-Benedict y Mifflin-St Jeor para estimar tu metabolismo basal y requerimientos calóricos, facilitando el control y la planificación de tu alimentación de manera personalizada.
      </p>
      <p>
        Explora las diferentes calculadoras y obtén información útil para alcanzar tus objetivos de salud y nutrición.
      </p>
      <img 
        src="/img1.png" 
        alt="Ilustración Nutrilab" 
        style={{ marginTop: '2rem', maxWidth: '100%', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}
      />
    </div>
  );
};

export default Inicio; 