import "../../../styles/Educacion.css";
import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../context/translations";

// tags = nombres de tecnologías, no se traducen
const EDUCACION = [
  {
    id: "kinal",
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
    tags: [],
  },
];

const TimelineItem = ({ titulo, sub, fecha, desc, tags = [] }) => (
  <div className="ee-timeline-item">
    <div className="ee-item-top">
      <span className="ee-item-titulo">{titulo}</span>
      <span className="ee-item-fecha">{fecha}</span>
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
                d="M12 3v12m0 0l-4-4m4 4l4-4M5 19h14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <p>
          {t.header.parrafo}
        </p>
      </header>

      <div className="ee-grid">
        <div className="ee-panel ee-panel-edu" style={{ "--ee-color": "#38bdf8" }}>
          <h3 className="ee-panel-title">
            <span className="ee-panel-dot" />
            {t.panelEducacion}
          </h3>
          <div className="ee-timeline">
            {EDUCACION.map((item) => (
              <TimelineItem
                key={item.id}
                {...t.educacion[item.id]}
                tags={item.tags}
              />
            ))}
          </div>
        </div>

        <div className="ee-panel ee-panel-exp" style={{ "--ee-color": "#a855f7" }}>
          <h3 className="ee-panel-title">
            <span className="ee-panel-dot" />
            {t.panelExperiencia}
          </h3>
          <div className="ee-timeline">
            {EXPERIENCIA.map((item) => (
              <TimelineItem
                key={item.id}
                {...t.experiencia[item.id]}
                tags={item.tags}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="ee-footer">
        <p>
          {t.footer}
        </p>
      </div>
    </section>
  );
};

export default Educacion;