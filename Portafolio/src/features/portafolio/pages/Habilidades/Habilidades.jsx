import { useState } from "react";
import "../../../styles/Habilidades.css";
import { useLanguage } from "../../../../context/LanguageContext";
import { translations } from "../../../../context/translations";
import { HABILIDADES } from "./DataHabilidades";
import {SkillCard} from "../../components/ComponentesHabilidades"

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