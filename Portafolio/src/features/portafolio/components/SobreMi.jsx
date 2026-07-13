import { useState } from "react";
import "../../../styles/SobreMi.css";
import { ModalContacto } from "./ModalContacto";

const IconServidor = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="4" width="18" height="6" rx="1.5" />
    <rect x="3" y="14" width="18" height="6" rx="1.5" />
    <circle cx="7" cy="7" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="7" cy="17" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const IconCapas = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 3.5 21 8l-9 4.5L3 8Z" />
    <path d="m3 13 9 4.5L21 13" />
    <path d="m3 17.5 9 4.5 9-4.5" />
  </svg>
);

const IconLibro = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M4 5.2C4 4.3 4.7 4 5.5 4H12v16H5.5c-.8 0-1.5-.3-1.5-1.2Z" />
    <path d="M20 5.2c0-.9-.7-1.2-1.5-1.2H12v16h6.5c.8 0 1.5-.3 1.5-1.2Z" />
  </svg>
);

const IconMontana = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="m3 19 6.5-11L14 15l2.5-3.5L21 19Z" />
    <path d="m13 8.5 1.3-2.2L17 11" />
  </svg>
);

const IconSpinner = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M12 3a9 9 0 1 1-6.36 2.64" strokeLinecap="round" />
  </svg>
);

const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M5 4h3.2l1.3 4-2 1.4a12 12 0 0 0 6.1 6.1l1.4-2 4 1.3V18a2 2 0 0 1-2.2 2A16 16 0 0 1 3 5.2 2 2 0 0 1 5 4Z" />
  </svg>
);

const IconReloj = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" strokeLinecap="round" />
  </svg>
);

const IconEquipo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="8.5" cy="8" r="3" />
    <circle cx="16" cy="9" r="2.4" />
    <path d="M3 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" strokeLinecap="round" />
    <path d="M14 14.3c2.4.2 4 1.9 4 4.7" strokeLinecap="round" />
  </svg>
);

const IconRompecabezas = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M9 4h3.2a1.5 1.5 0 0 1 1.5 1.7 1.5 1.5 0 0 0 2.6 1.2A1.5 1.5 0 0 1 19 8v3.2a1.5 1.5 0 0 1-1.7 1.5 1.5 1.5 0 0 0-1.2 2.6 1.5 1.5 0 0 1-1.1 2.7H12v-3a1.5 1.5 0 0 0-2.6-1 1.5 1.5 0 0 1-2.4-1.2V9.5A1.5 1.5 0 0 1 8.5 8a1.5 1.5 0 0 0 1-2.6A1.5 1.5 0 0 1 9 4Z" />
  </svg>
);

const IconRayo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M13 3 5 13h5l-1 8 8-10h-5l1-8Z" strokeLinejoin="round" />
  </svg>
);

// Logo real de una app, recortado a un solo color con mask-image
// (así combina con la paleta celeste/morado en vez de traer el
// rojo de Gmail o el blanco/negro de GitHub tal cual).
const IconoMarca = ({ src, alt }) => (
  <span
    className="icono-marca"
    role="img"
    aria-label={alt}
    style={{ "--icono-src": `url(${src})` }}
  />
);

const CONTACTO_RAPIDO = [
  {
    id: "email",
    label: "alan2007lf@gmail.com",
    href: "mailto:alan2007lf@gmail.com",
    color: "celeste",
    icono: (
      <IconoMarca
        src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/gmail.svg"
        alt="Gmail"
      />
    ),
  },
  {
    id: "github",
    label: "alacan-2024010",
    href: "https://github.com/alacan-2024010",
    color: "morado",
    icono: (
      <IconoMarca
        src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg"
        alt="GitHub"
      />
    ),
  },
  {
    id: "telefono",
    label: "+502 5831 9270",
    href: "tel:+50258319270",
    color: "verde",
    icono: <IconPhone />,
  },
];

const HABILIDADES = [
  { id: "backend", label: "Backend", icono: <IconServidor />, color: "celeste" },
  { id: "fullstack", label: "Full Stack Jr.", icono: <IconCapas />, color: "azul" },
  { id: "autodidacta", label: "Autodidacta", icono: <IconLibro />, color: "morado" },
  { id: "puntual", label: "Puntual", icono: <IconReloj />, color: "verde" },
  { id: "perseverante", label: "Perseverante", icono: <IconMontana />, color: "celeste" },
  { id: "equipo", label: "Trabajo en equipo", icono: <IconEquipo />, color: "azul" },
  { id: "problemas", label: "Resolver problemas", icono: <IconRompecabezas />, color: "morado" },
  { id: "proactivo", label: "Proactivo", icono: <IconRayo />, color: "verde" },
];

export const SobreMi = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
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
              Un poco sobre mí...
            </h2>

            <p className="seccion-parrafo">
              Soy Alan, desarrollador Junior Full Stack con enfoque en backend.
              Soy perseverante: no me rindo fácil ante un problema hasta
              resolverlo. Como programador, sé que nunca se deja de aprender,
              y esa es la razón por la que sigo creciendo cada día.
            </p>
          </div>

          <div className="sobremi-lista">
            {HABILIDADES.map((h) => (
              <div key={h.id} className={`lista-item lista-item--${h.color}`}>
                <span className="lista-item-icono">{h.icono}</span>
                <span className="lista-item-label">{h.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="sobremi-footer">

          <div className="contacto-columna">
            <span className="contacto-titulo">
              <span className="contacto-titulo-punto" />
              Contáctame
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
              En la vida siempre hay algo por descubrir.
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