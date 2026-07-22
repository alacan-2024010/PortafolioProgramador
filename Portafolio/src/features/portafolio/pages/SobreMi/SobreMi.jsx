import { useState } from "react";
import "../../../styles/SobreMi.css";
import { ModalContacto } from "../../components/ModalContacto";
import { useLanguage } from "../../../../context/LanguageContext";
import { translations } from "../../../../context/translations";
import { IconSpinner } from "./IconosSobreMi.jsx";
import {CONTACTO_RAPIDO, PERFIL, CUALIDADES } from "./DataSobreMi.jsx"

export const SobreMi = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].aboutMe;

  return (
    <div className="sobremi-frame">

      <span className="frame-corner frame-corner--tl" />
      <span className="frame-corner frame-corner--tr" />
      <span className="frame-corner frame-corner--bl" />
      <span className="frame-corner frame-corner--br" />

      <span className="frame-linea frame-linea--izq" />
      <span className="frame-linea frame-linea--der" />

      <div className="sobremi-contenido">
        <div className="sobremi-top">
          <div className="sobremi-texto">
            <h2 className="sobremi-titulo-pixel">
              {t.titulo}
            </h2>

            <p className="seccion-parrafo">
              {t.parrafo}
            </p>
          </div>

          <div className="sobremi-lista-grupo">
            <span className="sobremi-lista-subtitulo">Perfil</span>
            <div className="sobremi-lista">
              {PERFIL.map((h) => (
                <div key={h.id} className={`lista-item lista-item--${h.color}`}>
                  <span className="lista-item-icono">{h.icono}</span>
                  <span className="lista-item-label">{t.badges[h.id]}</span>
                </div>
              ))}
            </div>

            <span className="sobremi-lista-subtitulo">Cualidades</span>
            <div className="sobremi-lista">
              {CUALIDADES.map((h) => (
                <div key={h.id} className={`lista-item lista-item--${h.color}`}>
                  <span className="lista-item-icono">{h.icono}</span>
                  <span className="lista-item-label">{t.badges[h.id]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sobremi-footer">

          <div className="contacto-columna">
            <span className="contacto-titulo">
              <span className="contacto-titulo-punto" />
              {t.contactTitle}
            </span>
            <div className="sobremi-contacto">
              {CONTACTO_RAPIDO.map((c) =>
                c.id === "email" ? (
                  <button
                    key={c.id}
                    type="button"
                    className={`contacto-item contacto-item--${c.color}`}
                    onClick={() => setModalAbierto(true)}
                  >
                    <span className="contacto-icono">{c.icono}</span>
                    <span className="contacto-label">{c.label}</span>
                  </button>
                ) : (
                  <a
                    key={c.id}
                    href={c.href}
                    className={`contacto-item contacto-item--${c.color}`}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <span className="contacto-icono">{c.icono}</span>
                    <span className="contacto-label">{c.label}</span>
                  </a>
                )
              )}
            </div>
          </div>

          <div className="sobremi-frase-wrap">
            <p className="sobremi-frase">
              {t.quote}
            </p>
            <span className="frame-deco frame-deco--frase">
              <IconSpinner />
            </span>
          </div>

        </div>
      </div>
      <ModalContacto isOpen={modalAbierto} onClose={() => setModalAbierto(false)} />
    </div>
  );
};