import { useEffect, useRef, useState } from "react";
import "../../../styles/Educacion.css";
import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../context/translations";

// tags = nombres de tecnologías, no se traducen
const EDUCACION = [
  {
    id: "kinal",
    estado: "actual",
    tags: [
      "Java",
      "JavaScript",
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "HTML",
      "CSS",
      "Node.js",
      ".NET",
      "Docker",
      "C#",
      "React",
      "Spring Boot",
    ],
  },
];

const EXPERIENCIA = [
  {
    id: "empagua",
    estado: "pendiente", // controla el pulso del badge de fecha
    tags: [],
  },
];

// Progreso mostrado en el anillo de cada panel (0-100)
const PROGRESO_EDUCACION = 95;
const PROGRESO_EXPERIENCIA = 15;

// Hook simple para detectar cuándo un elemento entra en el viewport
const useInView = (options = { threshold: 0.2 }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
};

const ProgressRing = ({ progreso, inView, color }) => (
  <div
    className="ee-ring"
    style={{
      "--ee-color": color,
      "--ee-progress": inView ? progreso : 0,
    }}
  >
    <span className="ee-ring-value">{inView ? progreso : 0}%</span>
  </div>
);

const TimelineItem = ({ titulo, sub, fecha, desc, tags = [], estado, index }) => (
  <div
    className="ee-timeline-item"
    style={{ "--ee-delay": `${index * 0.15}s` }}
  >
    <div className="ee-item-top">
      <span className="ee-item-titulo">{titulo}</span>
      <span
        className={`ee-item-fecha ${estado === "pendiente" ? "ee-item-fecha--pendiente" : ""}`}
      >
        {estado === "pendiente" && <span className="ee-fecha-dot" />}
        {fecha}
      </span>
    </div>
    <p className="ee-item-sub">{sub}</p>
    <p className="ee-item-desc">{desc}</p>
    {tags.length > 0 && (
      <div className="ee-item-tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    )}
  </div>
);

const Panel = ({ tipo, color, progreso, titulo, items, textos }) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`ee-panel ee-panel-${tipo} ${inView ? "ee-panel-inview" : ""}`}
      style={{ "--ee-color": color }}
    >
      <div className="ee-panel-head">
        <h3 className="ee-panel-title">
          <span className="ee-panel-dot" />
          {titulo}
        </h3>
        <ProgressRing progreso={progreso} inView={inView} color={color} />
      </div>

      <div className="ee-timeline">
        {items.map((item, i) => (
          <TimelineItem
            key={item.id}
            {...textos[item.id]}
            tags={item.tags}
            estado={item.estado}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};


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