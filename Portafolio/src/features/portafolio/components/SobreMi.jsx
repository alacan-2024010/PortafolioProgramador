import "../../../styles/SobreMi.css";

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

const HABILIDADES = [
  { id: "backend", label: "Backend", icono: <IconServidor />, color: "celeste" },
  { id: "fullstack", label: "Full Stack Jr.", icono: <IconCapas />, color: "azul" },
  { id: "autodidacta", label: "Autodidacta", icono: <IconLibro />, color: "morado" },
  { id: "perseverante", label: "Perseverante", icono: <IconMontana />, color: "verde" },
];

export const SobreMi = () => {
  return (
    <div className="sobremi-frame">
      <span className="frame-scan" />

      {/* Esquinas del marco (solo líneas, sin texto) */}
      <span className="frame-corner frame-corner--tl" />
      <span className="frame-corner frame-corner--tr" />
      <span className="frame-corner frame-corner--bl" />
      <span className="frame-corner frame-corner--br" />

      {/* Líneas guía verticales */}
      <span className="frame-linea frame-linea--izq" />
      <span className="frame-linea frame-linea--der" />

      {/* Ícono decorativo girando */}
      <span className="frame-deco">
        <IconSpinner />
      </span>

      <div className="sobremi-contenido">
        <div className="sobremi-top">
          <div className="sobremi-texto">
                <div className="sobremi-titulo-fila">
                    <span className="sobremi-barra" />
                    <h2>
                    <span className="titulo-mono">&lt;</span>
                    Un poco sobre mí
                    <span className="titulo-mono">/&gt;</span>
                    </h2>
                </div>

                <p className="seccion-parrafo">
                    Soy Alan, desarrollador Full Stack Junior con enfoque en
                    backend. Soy perseverante: no me rindo fácil ante un problema
                    hasta resolverlo. Como programador, sé que nunca se deja de
                    aprender, y esa es la razón por la que sigo creciendo cada día.
                </p>

                <p className="sobremi-frase">
                    Nunca dejo de aprender, <br />
                    nunca dejo de crecer.
                </p>
                </div>

          {/* Lista vertical de habilidades, centrada */}
          <div className="sobremi-lista">
            {HABILIDADES.map((h) => (
              <div key={h.id} className={`lista-item lista-item--${h.color}`}>
                <span className="lista-item-icono">{h.icono}</span>
                <span className="lista-item-label">{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};