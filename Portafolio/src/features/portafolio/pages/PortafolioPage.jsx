import { useState } from "react";
import { Sidebar } from "../components/Sidebar.jsx";
import "../../../styles/Portafolio.css";

const CONTENIDO = {
  "sobre-mi": <h2>Sobre mí</h2>,
  "datos-generales": <h2>Datos generales</h2>,
  "habilidades": <h2>Habilidades</h2>,
  "curriculum": <h2>Educación y experiencia</h2>,
  "proyectos": <h2>Proyectos</h2>,
  "contacto": <h2>Contacto</h2>,
};

export const PortafolioPage = () => {
  const [seccionActiva, setSeccionActiva] = useState("sobre-mi");

  return (
    <div className="portafolio-layout">
      <Sidebar
        activeSection={seccionActiva}
        onSectionClick={setSeccionActiva}
      />

      <div className="portafolio-vista">
        <section className="portafolio-seccion">
          {CONTENIDO[seccionActiva]}
        </section>
      </div>
    </div>
  );
};