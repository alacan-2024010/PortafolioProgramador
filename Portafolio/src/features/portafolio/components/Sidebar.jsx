import { useState } from "react";
import "../../../styles/Sidebar.css";

const SECCIONES = [
  { id: "sobre-mi", numero: "01", label: "Sobre mí" },
  { id: "datos-generales", numero: "02", label: "Datos generales" },
  { id: "habilidades", numero: "03", label: "Habilidades" },
  { id: "curriculum", numero: "04", label: "Educación" },
  { id: "proyectos", numero: "05", label: "Proyectos" },
  { id: "contacto", numero: "06", label: "Contacto" },
];

export const Sidebar = ({
  nombre = "Alan Francisco Lacán Flores",
  fotoUrl = null, 
  activeSection,
  onSectionClick,
}) => {
  const [abierto, setAbierto] = useState(false);

  const handleClick = (id) => {
    onSectionClick(id);
    setAbierto(false); 
  };

  return (
    <>
      {/* La topbar con el botón solo se muestra cuando el sidebar está CERRADO.
          Al abrirse, el overlay + el propio panel se encargan de cerrarlo,
          así que el botón ya no queda flotando encima del panel. */}
      {!abierto && (
        <div className="sidebar-topbar-mobile">
          <button
            className="sidebar-toggle"
            onClick={() => setAbierto(true)}
            aria-label="Abrir menú"
            aria-expanded={abierto}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      )}

      {/* Overlay oscuro detrás del panel, cierra al tocar afuera */}
      {abierto && (
        <div className="sidebar-overlay" onClick={() => setAbierto(false)} />
      )}

      <aside className={`sidebar ${abierto ? "sidebar--abierto" : ""}`}>
        <div className="sidebar-perfil">
          <div className="sidebar-foto-wrap">
            {fotoUrl ? (
              <img src={fotoUrl} alt={nombre} className="sidebar-foto-img" />
            ) : (
              <div className="sidebar-foto-placeholder">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <circle cx="12" cy="8" r="3.6" />
                  <path d="M4.5 20.2c1.4-3.6 4.3-5.4 7.5-5.4s6.1 1.8 7.5 5.4" />
                </svg>
              </div>
            )}
          </div>
          <h1 className="sidebar-nombre">{nombre}</h1>
        </div>

        <nav className="sidebar-nav">
          {SECCIONES.map((s) => (
            <button
              key={s.id}
              className={`sidebar-item ${activeSection === s.id ? "activo" : ""}`}
              onClick={() => handleClick(s.id)}
            >
              <span className="sidebar-num">{s.numero}</span>
              <span className="sidebar-label">{s.label}</span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};