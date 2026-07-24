import { useEffect, useRef, useCallback } from "react";
import "../../../../styles/Habilidades.css";
import { useLanguage } from "../../../../context/LanguageContext";
import { translations } from "../../../../context/translations";
import { HABILIDADES } from "./DataHabilidades";
import { SkillCard } from "../../components/ComponentesHabilidades";

// Velocidad del giro automático en píxeles por segundo
const SPEED = 40;

export const Habilidades = () => {
  const { language } = useLanguage();
  const t = translations[language].habilidades;

  // Duplicado para el loop infinito
  const track = [...HABILIDADES, ...HABILIDADES];

  const trackRef = useRef(null);
  const positionRef = useRef(0);
  const halfWidthRef = useRef(0);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);

  const isDraggingRef = useRef(false);
  const dragMovedRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartPositionRef = useRef(0);
  const hoverPausedRef = useRef(false);

  // Mide el ancho de un set de tarjetas (la mitad del track duplicado)
  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        halfWidthRef.current = trackRef.current.scrollWidth / 2;
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const wrapPosition = () => {
    const half = halfWidthRef.current;
    if (half <= 0) return;
    if (positionRef.current <= -half) positionRef.current += half;
    if (positionRef.current > 0) positionRef.current -= half;
  };

  const applyTransform = useCallback(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${positionRef.current}px)`;
    }
  }, []);

  // Loop de animación: avanza solo, salvo que esté en pausa o arrastrando
  useEffect(() => {
    const step = (time) => {
      if (lastTimeRef.current == null) lastTimeRef.current = time;
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (!isDraggingRef.current && !hoverPausedRef.current) {
        positionRef.current -= (SPEED * delta) / 1000;
        wrapPosition();
        applyTransform();
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [applyTransform]);

  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    dragMovedRef.current = false;
    dragStartXRef.current = e.clientX;
    dragStartPositionRef.current = positionRef.current;
    trackRef.current?.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - dragStartXRef.current;
    if (Math.abs(deltaX) > 3) dragMovedRef.current = true;
    positionRef.current = dragStartPositionRef.current + deltaX;
    wrapPosition();
    applyTransform();
  };

  const endDrag = () => {
    isDraggingRef.current = false;
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

      <div
        className="habilidades-carrusel"
        onMouseEnter={() => { hoverPausedRef.current = true; }}
        onMouseLeave={() => { hoverPausedRef.current = false; }}
      >
        <div
          className="habilidades-track habilidades-track-draggable"
          ref={trackRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onClickCapture={(e) => {
            // Evita que un drag termine disparando un click no deseado
            if (dragMovedRef.current) e.stopPropagation();
          }}
        >
          {track.map((skill, i) => (
            <SkillCard key={`${skill.nombre}-${i}`} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;