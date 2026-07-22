import React, { useState, useEffect, useRef, useCallback } from "react";
import { ExternalLink, X, ChevronLeft, ChevronRight, Users, User, Images } from "lucide-react";
import "../../../../styles/Proyectos.css";
import { useLanguage } from "../../../../context/LanguageContext";
import { translations } from "../../../../context/translations";
import {MockScreen, Frame, ProjectModal, ProjectCard} from "../../components/ComponentesProyectos"
import { buildProjects } from "./DataProyectos";

export const Proyectos = () => {
  const { language } = useLanguage();
  const t = translations[language].proyectos;
  const PROJECTS = buildProjects(t);

  const [active, setActive] = useState(null);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef(null);
  const groupRef = useRef(null);
  const [distance, setDistance] = useState(0);

  // Mide el ancho de UN set de tarjetas (más el gap) para que el loop sea perfecto
  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;

    const measure = () => {
      // 26px = gap definido en .track-inner, para que el salto sea invisible
      const d = group.scrollWidth + 26;
      setDistance(d > 0 ? d : 0);
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(group);

    // por si las imágenes tardan en cargar y cambian el ancho real
    const imgs = group.querySelectorAll("img");
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener("load", measure, { once: true });
    });

    return () => {
      ro.disconnect();
    };
  }, []);

  const isPaused = paused || !!active;
  // Duración proporcional a la distancia para que la velocidad sea constante
  const duration = Math.max(distance / 110, 2.5); // ~110px/seg, mínimo 2.5s

  return (
    <section className="gallery-section">
      <div className="gallery-head">
        <div>
          <h2>{t.titulo}</h2>
          <p>{t.subtitulo}</p>
        </div>
      </div>

      <div
        className="track"
        ref={trackRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <div
          className="track-inner"
          style={{
            "--scroll-distance": `${distance}px`,
            "--scroll-duration": `${duration}s`,
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          <div className="track-group" ref={groupRef}>
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} onOpen={setActive} t={t} />
            ))}
          </div>
          <div className="track-group" aria-hidden="true">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={`dup-${p.id}`} project={p} index={i} onOpen={setActive} t={t} />
            ))}
          </div>
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} t={t} />}
    </section>
  );
}