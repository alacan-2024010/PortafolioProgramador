import { useState } from "react";
import "../../../styles/Habilidades.css";
import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../context/translations";

const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

// Nombres de tecnologías: no se traducen, son nombres propios de herramientas
const HABILIDADES = [
  { nombre: "Java", corto: "JV", nivel: 85, color: "#f89820", logo: "java/java-original" },
  { nombre: "JavaScript", corto: "JS", nivel: 88, color: "#f7df1e", logo: "javascript/javascript-original" },
  { nombre: "MySQL", corto: "SQL", nivel: 82, color: "#4479a1", logo: "mysql/mysql-original" },
  { nombre: "MongoDB", corto: "MO", nivel: 75, color: "#47a248", logo: "mongodb/mongodb-original" },
  { nombre: "PostgreSQL", corto: "PG", nivel: 75, color: "#336791", logo: "postgresql/postgresql-original" },
  { nombre: "HTML", corto: "</>", nivel: 92, color: "#e34f26", logo: "html5/html5-original" },
  { nombre: "CSS", corto: "#", nivel: 88, color: "#1572b6", logo: "css3/css3-original" },
  { nombre: "Node.js", corto: "ND", nivel: 80, color: "#339933", logo: "nodejs/nodejs-original" },
  { nombre: ".NET", corto: ".N", nivel: 70, color: "#8a5cf6", logo: "dotnetcore/dotnetcore-original" },
  { nombre: "Docker", corto: "DK", nivel: 68, color: "#2496ed", logo: "docker/docker-original" },
  { nombre: "C#", corto: "C#", nivel: 72, color: "#3fa53f", logo: "csharp/csharp-original" },
  { nombre: "React / JSX", corto: "RX", nivel: 85, color: "#61dafb", logo: "react/react-original" },
  { nombre: "Spring Boot", corto: "SB", nivel: 70, color: "#6db33f", logo: "spring/spring-original" },
];

const SkillCard = ({ nombre, corto, nivel, color, logo }) => {
  const [imgError, setImgError] = useState(!logo);

  return (
    <article className="skill-card" style={{ "--skill-color": color }}>
      <div className="skill-card-glow" />

      <div className="skill-badge">
        {imgError ? (
          <span>{corto}</span>
        ) : (
          <img
            src={`${ICON_BASE}/${logo}.svg`}
            alt={nombre}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      <h3 className="skill-nombre">{nombre}</h3>

      <div className="skill-bar-track">
        <div className="skill-bar-fill" style={{ width: `${nivel}%` }} />
      </div>

      <span className="skill-nivel">{nivel}%</span>
    </article>
  );
};

export const Habilidades = () => {
  const { language } = useLanguage();
  const t = translations[language].habilidades;

  // Se duplica el arreglo para lograr un loop de carrusel continuo y sin cortes
  const track = [...HABILIDADES, ...HABILIDADES];

  return (
    <section className="habilidades-container">
      <span className="bg-orb orb-1" />
      <span className="bg-orb orb-2" />
      <span className="grid-bg" />

      <header className="habilidades-header">
        <h2>{t.titulo}</h2>
        <p>
          {t.parrafo}
        </p>
      </header>

      <div className="habilidades-carrusel">
        <div className="habilidades-track">
          {track.map((skill, i) => (
            <SkillCard key={`${skill.nombre}-${i}`} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;