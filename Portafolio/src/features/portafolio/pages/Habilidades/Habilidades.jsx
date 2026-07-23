import { useState, useEffect, useRef } from "react";
import "../../../../styles/Habilidades.css";
import { useLanguage } from "../../../../context/LanguageContext";
import { translations } from "../../../../context/translations";
import { HABILIDADES } from "./DataHabilidades";
import { SkillCard } from "../../components/ComponentesHabilidades";

const MOBILE_BREAKPOINT = 768;

export const Habilidades = () => {
  const { language } = useLanguage();
  const t = translations[language].habilidades;

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= MOBILE_BREAKPOINT : false
  );
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Duplicado solo para el loop infinito de desktop
  const track = [...HABILIDADES, ...HABILIDADES];

  const scrollByCard = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector(".skill-card");
    const cardWidth = card ? card.offsetWidth + 14 : 164; // 14 = gap móvil
    container.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  return (
    <section className="habilidades-container">
      <span className="bg-orb orb-1" />
      <span className="bg-orb orb-2" />
      <span className="grid-bg" />

      <header className="habilidades-header">
        <h2>{t.titulo}</h2>
        <p>{t.parrafo}</p>
      </header>

      {isMobile ? (
        <div className="habilidades-carrusel-mobile">
          <button
            type="button"
            className="habilidades-flecha habilidades-flecha-izq"
            onClick={() => scrollByCard(-1)}
            aria-label="Anterior"
          >
            ‹
          </button>

          <div className="habilidades-track-mobile" ref={scrollRef}>
            {HABILIDADES.map((skill) => (
              <SkillCard key={skill.nombre} {...skill} />
            ))}
          </div>

          <button
            type="button"
            className="habilidades-flecha habilidades-flecha-der"
            onClick={() => scrollByCard(1)}
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>
      ) : (
        <div className="habilidades-carrusel">
          <div className="habilidades-track">
            {track.map((skill, i) => (
              <SkillCard key={`${skill.nombre}-${i}`} {...skill} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Habilidades;