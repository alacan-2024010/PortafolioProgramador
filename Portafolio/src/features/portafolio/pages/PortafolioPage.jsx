import { useState } from "react";
import { Sidebar } from "../components/Sidebar.jsx";
import { SobreMi } from "../components/SobreMi.jsx";
import { DatosGenerales } from "../components/DatosGenerales.jsx";
import "../../../styles/Portafolio.css";

const VISTAS = {
  "sobre-mi": SobreMi,
  "datos-generales": DatosGenerales,
  //"habilidades": Habilidades,
  //"curriculum": Curriculum,
  //"proyectos": Proyectos,
  //"contacto": Contacto,
};

export const PortafolioPage = () => {
  const [seccionActiva, setSeccionActiva] = useState("sobre-mi");

  const VistaActiva = VISTAS[seccionActiva];

  return (
    <div className="portafolio-layout">
      <Sidebar
        activeSection={seccionActiva}
        onSectionClick={setSeccionActiva}
      />

      <div className="portafolio-vista">
        <section key={seccionActiva} className="portafolio-seccion vista-fade-in">
          <VistaActiva />
        </section>
      </div>
    </div>
  );
};