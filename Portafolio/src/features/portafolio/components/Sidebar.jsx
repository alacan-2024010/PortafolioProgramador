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
  nombre = "Alan Lacán Flores",
  rol = "Desarrollador Full Stack Junior",
  fotoUrl = null, // pásale una URL cuando tengas la foto
  activeSection,
  onSectionClick,
}) => {
  return (
    <aside className="sidebar">
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
        <p className="sidebar-rol">
          <span className="sidebar-punto" />
          {rol.toUpperCase()}
        </p>
      </div>

      <nav className="sidebar-nav">
        {SECCIONES.map((s) => (
          <button
            key={s.id}
            className={`sidebar-item ${activeSection === s.id ? "activo" : ""}`}
            onClick={() => onSectionClick(s.id)}
          >
            <span className="sidebar-num">{s.numero}</span>
            <span className="sidebar-label">{s.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};