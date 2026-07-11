import { useEffect, useRef, useState } from "react";
import "../../../styles/DatosGenerales.css";

/* ===========================
   ICONOS
=========================== */

const IconLocation = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.3" />
  </svg>
);

const IconAge = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="8"/>
    <path d="M12 8v5l3 2"/>
  </svg>
);

const IconLaptop = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="4" y="5" width="16" height="11" rx="2"/>
    <path d="M2 19h20"/>
  </svg>
);

const IconBook = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4 5h7v15H5.5A1.5 1.5 0 0 1 4 18.5Z"/>
    <path d="M20 5h-9v15h7.5A1.5 1.5 0 0 0 20 18.5Z"/>
  </svg>
);

const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14"/>
    <path d="m13 6 6 6-6 6"/>
  </svg>
);

const IconLinkedin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="3" width="18" height="18" rx="4"/>
    <path d="M7 10v7"/>
    <circle cx="7" cy="7" r=".8" fill="currentColor"/>
    <path d="M11 17v-4c0-1.3.8-2.2 2-2.2s2 .9 2 2.2v4"/>
  </svg>
);

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="3" width="18" height="18" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor"/>
  </svg>
);

const IconWhatsapp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M6.5 17.5L4 20l2.8-.7A8 8 0 1 0 4.7 16"/>
    <path d="M9 9.5c0 3.5 3 6.5 6.5 6.5.6 0 1-.6.8-1.1l-.5-1.3a1 1 0 0 0-1.2-.6l-.8.3a5 5 0 0 1-2.9-2.9l.3-.8a1 1 0 0 0-.6-1.2l-1.3-.5c-.5-.2-1.1.2-1.1.8Z"/>
  </svg>
);

const IconWork = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="7" width="18" height="12" rx="2"/>
    <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7"/>
  </svg>
);

/* ===========================
   TARJETAS
=========================== */

const datos = [
  {
    titulo: "Edad",
    valor: "18 años",
    color: "blue",
    icono: <IconAge />
  },
  {
    titulo: "Experiencia",
    valor: "3 años programando",
    color: "green",
    icono: <IconLaptop />
  },
  {
    titulo: "Educación",
    valor: "Fundación Kinal",
    color: "purple",
    icono: <IconBook />
  },
  {
    titulo: "Ubicación",
    valor: "Ciudad de Guatemala, Guatemala", 
    color: "cyan",
    icono: <IconLocation />
  }
];

/* ===========================
   ESTADÍSTICAS
=========================== */

const estadisticas = [
  {
    nombre: "Backend",
    porcentaje: 90
  },
  {
    nombre: "Frontend",
    porcentaje: 70
  },
  {
    nombre: "Bases de Datos",
    porcentaje: 85
  },
  {
    nombre: "Aprendizaje",
    porcentaje: 100
  }
];

/* ===========================
   REDES
=========================== */

const redes = [
  {
    nombre: "LinkedIn",
    detalle: "Conecta conmigo",
    href: "https://www.linkedin.com/in/alan-francisco-lacán-flores-173750421/",
    icono: <IconLinkedin />
  },
  {
    nombre: "Instagram",
    detalle: "@2211alan",
    href: "https://instagram.com/2211alan",
    icono: <IconInstagram />
  },
  {
    nombre: "WhatsApp",
    detalle: "Escríbeme",
    href: "https://wa.me/50258319270", 
    icono: <IconWhatsapp />
  }
];

const useCountUp = (target, duration = 1200) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = null;
    let frame;

    const animate = (time) => {
      if (!start) start = time;

      const progress = Math.min((time - start) / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.round(target * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [target, duration]);

  return value;
};

/* ===========================
   TARJETA SUPERIOR
=========================== */

const InfoCard = ({ titulo, valor, icono, color }) => {
  return (
    <article className={`info-card ${color}`}>
      <div className="card-glow"></div>

      <div className="card-icon">
        {icono}
      </div>

      <div className="card-content">
        <span>{titulo}</span>

        <h3>{valor}</h3>
      </div>
    </article>
  );
};

/* ===========================
   BARRA DE PROGRESO
=========================== */

const ProgressBar = ({ nombre, porcentaje }) => {

  const value = useCountUp(porcentaje);

  return (

    <div className="progress-card">

      <div className="progress-header">

        <span>{nombre}</span>

        <strong>{value}%</strong>

      </div>

      <div className="progress-track">

        <div
          className="progress-fill"
          style={{
            width: `${porcentaje}%`
          }}
        >
          <span className="progress-shine"></span>
        </div>

      </div>

    </div>

  );

};

/* ===========================
   TARJETA RED SOCIAL
=========================== */

const SocialCard = ({ nombre, detalle, href, icono }) => {

  return (

    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="social-card"
    >

      <div className="social-icon">
        {icono}
      </div>

      <div className="social-info">

        <strong>{nombre}</strong>

        <span>{detalle}</span>

      </div>

      <div className="social-arrow">

        <IconArrow />

      </div>

    </a>

  );

};

const useParallax = () => {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const move = (e) => {
      const rect = element.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      element.style.setProperty("--mx", `${x}`);
      element.style.setProperty("--my", `${y}`);
    };
    element.addEventListener("mousemove", move);
    return () => {
      element.removeEventListener("mousemove", move);
    };
  }, []);
  return ref;

};

/* ===========================
   COMPONENTE PRINCIPAL
=========================== */

export const DatosGenerales = () => {

  const panelRef = useParallax();

  return (

    <section
      className="datos-container"
      ref={panelRef}
    >

      <span className="bg-orb orb-1"></span>
      <span className="bg-orb orb-2"></span>
      <span className="grid-bg"></span>

      {/* ===========================
            HEADER
      =========================== */}

      <header className="datos-header">

        <h2>
          Datos Generales
        </h2>

        <p>
          Aquí encontrarás un resumen de mi perfil como
          desarrollador, mi experiencia, formación y
          las tecnologías con las que trabajo actualmente.
        </p>

      </header>

      {/* ===========================
            TARJETAS
      =========================== */}

      <section className="cards-grid">

        {datos.map((item) => (

          <InfoCard
            key={item.titulo}
            {...item}
          />

        ))}

      </section>

      {/* ===========================
            CONTENIDO INFERIOR
      =========================== */}

      <section className="bottom-grid">

        {/* ESTADÍSTICAS */}

        <div className="stats-panel">

          <div className="panel-title">

            <span></span>

            <h3>
              Estadísticas
            </h3>

          </div>

          <div className="stats-list">

            {estadisticas.map((item) => (

              <ProgressBar
                key={item.nombre}
                {...item}
              />

            ))}

          </div>

        </div>

        {/* REDES */}
          <div className="social-panel">

          <div className="panel-title">

            <span></span>

            <h3>
              Conecta Conmigo
            </h3>

          </div>
          <div className="social-list">

            {redes.map((red) => (

              <SocialCard
                key={red.nombre}
                {...red}
              />

            ))}
          </div>
        </div>
      </section>

      <footer className="datos-footer">
        <div className="footer-line"></div>
        <span>
          Siempre aprendiendo nuevas tecnologías y mejorando mis habilidades.
        </span>
      </footer>
    </section>
  );
};

export default DatosGenerales;