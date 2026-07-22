import { useEffect, useRef, useState } from "react";
import "../../../styles/DatosGenerales.css";
import { useLanguage } from "../../../../context/LanguageContext";
import { translations } from "../../../../context/translations";

export const DatosGenerales = () => {

  const panelRef = useParallax();
  const { language } = useLanguage();
  const t = translations[language].datosGenerales;

  return (
    <section
      className="datos-container"
      ref={panelRef}
    >

      <span className="bg-orb orb-1"></span>
      <span className="bg-orb orb-2"></span>
      <span className="grid-bg"></span>

      <div className="datos-scroll">

        {/* ===========================
              HEADER
        =========================== */}

        <header className="datos-header">
          <h2>{t.header.titulo}</h2>
          <p>{t.header.parrafo}</p>
        </header>

        {/* ===========================
              TARJETAS
        =========================== */}

        <section className="cards-grid">
          {datos.map((item) => (
            <InfoCard
              key={item.id}
              titulo={t.datos[item.id].titulo}
              valor={t.datos[item.id].valor}
              icono={item.icono}
              color={item.color}
            />
          ))}
        </section>

        {/* ===========================
              CONTENIDO INFERIOR
        =========================== */}

        <section className="bottom-grid">
          <div className="stats-panel">
            <div className="panel-title">
              <span></span>
              <h3>{t.statsTitle}</h3>
            </div>
            <div className="stats-list">
              {estadisticas.map((item) => (
                <ProgressBar
                  key={item.id}
                  nombre={t.estadisticas[item.id]}
                  porcentaje={item.porcentaje}
                />
              ))}
            </div>
          </div>

          <div className="social-panel">
            <div className="panel-title">
              <span></span>
              <h3>{t.socialTitle}</h3>
            </div>
            <div className="social-list">
              {redes.map((red) => (
                <SocialCard
                  key={red.id}
                  nombre={red.nombre}
                  detalle={t.redes[red.id]}
                  href={red.href}
                  icono={red.icono}
                />
              ))}
            </div>
          </div>
        </section>

        <footer className="datos-footer">
          <div className="footer-line"></div>
          <span>{t.footer}</span>
        </footer>

      </div>
    </section>
  );
};

export default DatosGenerales;