import { useState } from "react";
import { ICON_BASE } from "../pages/Habilidades/DataHabilidades";

export const SkillCard = ({ nombre, corto, nivel, color, logo }) => {
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