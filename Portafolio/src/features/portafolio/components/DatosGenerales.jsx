import { useEffect, useRef, useState } from "react";
import "../../../styles/DatosGenerales.css";

const IconEdad = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 20c1.2-3.6 4.2-5.3 7-5.3S17.8 16.4 19 20" />
  </svg>
);

const IconExperiencia = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <path d="M12 3 21 8l-9 5-9-5 9-5Z"/>
    <path d="m3 13 9 5 9-5"/>
    <path d="m3 17 9 5 9-5"/>
  </svg>
);

const IconFormacion = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <path d="M4 5h7v15H5.5A1.5 1.5 0 0 1 4 18.5Z"/>
    <path d="M20 5h-9v15h7.5a1.5 1.5 0 0 0 1.5-1.5Z"/>
  </svg>
);

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <rect x="3" y="3" width="18" height="18" rx="3"/>
    <path d="M7.2 10v7"/>
    <circle cx="7.2" cy="7.2" r=".8" fill="currentColor" stroke="none"/>
    <path d="M11.5 17v-4c0-1.3.8-2.2 2-2.2s2 .9 2 2.2v4"/>
  </svg>
);

const IconCompuTrabajo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <rect x="3" y="7" width="18" height="12" rx="2"/>
    <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7"/>
    <path d="M3 12h18"/>
  </svg>
);

const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14"/>
    <path d="m13 6 6 6-6 6"/>
  </svg>
);

const tarjetas = [
  {
    titulo: "Edad",
    valor: "18 años",
    color: "celeste",
    icono: <IconEdad />,
  },
  {
    titulo: "Experiencia",
    valor: "3 años programando",
    color: "azul",
    icono: <IconExperiencia />,
  },
  {
    titulo: "Formación",
    valor: "Fundación Kinal",
    color: "morado",
    icono: <IconFormacion />,
  },
];

const estadisticas = [
  { nombre: "Backend", porcentaje: 90 },
  { nombre: "Frontend", porcentaje: 70 },
  { nombre: "Bases de Datos", porcentaje: 85 },
  { nombre: "Aprendizaje", porcentaje: 100 },
];

/** Cuenta de 0 hasta el valor objetivo cuando el componente se monta. */
const useCountUp = (target, duration = 1200) => {
  const [value, setValue] = useState(0);
  const startRef = useRef(null);

  useEffect(() => {
    let frame;
    const step = (timestamp) => {
      if (startRef.current === null) startRef.current = timestamp;
      const progress = Math.min((timestamp - startRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);

  return value;
};

const BarraEstadistica = ({ nombre, porcentaje }) => {
  const valorMostrado = useCountUp(porcentaje);
  return (
    <div className="progress-item">
      <div className="progress-top">
        <span>{nombre}</span>
        <span className="valor-pct">{valorMostrado}%</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ "--pct": `${porcentaje}%` }}
        />
      </div>
    </div>
  );
};

export const DatosGenerales = () => {
  return (
    <section className="datos-dashboard">
      <span className="dashboard-orb orb-1" aria-hidden="true" />
      <span className="dashboard-orb orb-2" aria-hidden="true" />

      <header className="dashboard-header">
        <h2>Datos Generales</h2>
        <p>
          Un resumen rápido sobre mi perfil, experiencia,
          formación y habilidades actuales.
        </p>
      </header>

      <section className="dashboard-grid">
        {tarjetas.map((item, i) => (
          <article
            key={item.titulo}
            className={`dashboard-card ${item.color}`}
            style={{ "--i": i }}
          >
            <div className="card-icon">
              {item.icono}
            </div>
            <div className="card-info">
              <span>{item.titulo}</span>
              <h3>{item.valor}</h3>
            </div>
          </article>
        ))}
      </section>

      <section className="dashboard-bottom">
        <div className="estadisticas">
          <h3>Estadísticas</h3>
          {estadisticas.map((item) => (
            <BarraEstadistica key={item.nombre} {...item} />
          ))}
        </div>
        <div className="redes">
          <h3>Conecta conmigo</h3>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="red-social"
          >
            <div className="red-icon">
              <IconLinkedIn />
            </div>
            <div>
              <strong>LinkedIn</strong>
              <span>Conectar conmigo</span>
            </div>
            <span className="red-arrow"><IconArrow /></span>
          </a>
          <a
            href="https://computrabajo.com"
            target="_blank"
            rel="noreferrer"
            className="red-social"
          >
            <div className="red-icon">
              <IconCompuTrabajo />
            </div>
            <div>
              <strong>CompuTrabajo</strong>
              <span>Ver perfil</span>
            </div>
            <span className="red-arrow"><IconArrow /></span>
          </a>
        </div>
      </section>
    </section>
  );
};