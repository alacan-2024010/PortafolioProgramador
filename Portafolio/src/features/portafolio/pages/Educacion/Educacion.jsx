import { useEffect, useRef, useState } from "react";
import "../../../../styles/Educacion.css";
import { useLanguage } from "../../../../context/LanguageContext";
import { translations } from "../../../../context/translations";
import { EDUCACION, EXPERIENCIA, PROGRESO_EDUCACION, PROGRESO_EXPERIENCIA } from "./DataEducacion";
import { Panel } from "../../components/ComponentesEducacion";

export const Educacion = () => {
  const { language } = useLanguage();
  const t = translations[language].educacionExperiencia;

  return (
    <section className="ee-container">
      <span className="bg-orb orb-1" />
      <span className="bg-orb orb-2" />
      <span className="grid-bg" />

      <header className="ee-header">
        <div className="ee-header-top">
          <div className="ee-header-titleblock">
            <h2>{t.header.titulo}</h2>
            <div className="ee-divider" />
          </div>

          <a
            className="ee-cv-btn"
            href="/cv-alan-lacan.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.header.cvBtn}
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                className="ee-cv-arrow"
                d="M12 3v12m0 0l-4-4m4 4l4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 19h14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <p>{t.header.parrafo}</p>
      </header>

      <div className="ee-grid">
        <Panel
          tipo="edu"
          color="#38bdf8"
          progreso={PROGRESO_EDUCACION}
          titulo={t.panelEducacion}
          items={EDUCACION}
          textos={t.educacion}
        />

        <Panel
          tipo="exp"
          color="#a855f7"
          progreso={PROGRESO_EXPERIENCIA}
          titulo={t.panelExperiencia}
          items={EXPERIENCIA}
          textos={t.experiencia}
        />
      </div>

      <div className="ee-footer">
        <p>{t.footer}</p>
      </div>
    </section>
  );
};

export default Educacion;