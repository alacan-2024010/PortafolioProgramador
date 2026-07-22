import { useState, useRef, useEffect } from "react";
import { Sidebar } from "../../components/Sidebar.jsx";
import { SobreMi } from "../SobreMi/SobreMi.jsx";
import { DatosGenerales } from "../DatosGenerales/DatosGenerales.jsx";
import {Habilidades} from "../../components/Habilidades.jsx"
import {Educacion} from "../../components/Educacion.jsx"
import { Proyectos } from "../../components/Proyectos.jsx";
import "../../../styles/Portafolio.css";

const VISTAS = {
  "sobre-mi": SobreMi,
  "datos-generales": DatosGenerales,
  "habilidades": Habilidades,
  "curriculum": Educacion,
  "proyectos": Proyectos,
};

export const PortafolioPage = () => {
  const [seccionActiva, setSeccionActiva] = useState("sobre-mi");
  const vistaRef = useRef(null);

  const VistaActiva = VISTAS[seccionActiva];

  useEffect(() => {
    if (vistaRef.current) {
      vistaRef.current.scrollTop = 0;
    }
  }, [seccionActiva]);

  return (
    <div className="portafolio-layout">
      <Sidebar
        activeSection={seccionActiva}
        onSectionClick={setSeccionActiva}
      />

      <div className="portafolio-vista" ref={vistaRef}>
        <section key={seccionActiva} className="portafolio-seccion vista-fade-in">
          <VistaActiva />
        </section>
      </div>
    </div>
  );
};