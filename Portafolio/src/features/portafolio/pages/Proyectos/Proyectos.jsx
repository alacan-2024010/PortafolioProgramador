import React, { useState, useEffect, useRef } from "react";
import { ExternalLink, X, ChevronLeft, ChevronRight, Users, User, Images } from "lucide-react";
import "../../../../styles/Proyectos.css";
import { useLanguage } from "../../../../context/LanguageContext";
import { translations } from "../../../../context/translations";
import { MockScreen, Frame, ProjectModal, ProjectCard } from "../../components/ComponentesProyectos";
import { buildProjects } from "./DataProyectos";

const MOBILE_BREAKPOINT = 720;

export const Proyectos = () => {
  const { language } = useLanguage();
  const t = translations[language].proyectos;
  const PROJECTS = buildProjects(t);

  const [active, setActive] = useState(null);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef(null);
  const groupRef = useRef(null);
  const [distance, setDistance] = useState(0);

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= MOBILE_BREAKPOINT : false
  );
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mide el ancho de UN set de tarjetas (más el gap) para que el loop de desktop sea perfecto
  useEffect(() => {
    const group = groupRef.current;
    if (!group || isMobile) return;

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
  }, [isMobile]);

  const isPaused = paused || !!active;
  // Duración proporcional a la distancia para que la velocidad sea constante
  const duration = Math.max(distance / 110, 2.5); // ~110px/seg, mínimo 2.5s

  const goToSlide = (direction) => {
    setMobileIndex((prev) => {
      const next = prev + direction;
      if (next < 0) return PROJECTS.length - 1;
      if (next >= PROJECTS.length) return 0;
      return next;
    });
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    const threshold = 40; // px mínimos para contar como swipe
    if (touchDeltaX.current > threshold) {
      goToSlide(-1);
    } else if (touchDeltaX.current < -threshold) {
      goToSlide(1);
    }
    touchDeltaX.current = 0;
    setIsDragging(false);
  };

  return (
    <section className="gallery-section">
      <div className="gallery-head">
        <div>
          <h2>{t.titulo}</h2>
          <p>{t.subtitulo}</p>
        </div>
      </div>

      {isMobile ? (
        <div className="track-mobile-wrap">
          <div
            className={`track-mobile ${isDragging ? "is-dragging" : ""}`}
            style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {PROJECTS.map((p, i) => (
              <div
                className={`mobile-slide ${isDragging && i === mobileIndex ? "is-active-touch" : ""}`}
                key={p.id}
              >
                <ProjectCard project={p} index={i} onOpen={setActive} t={t} />
              </div>
            ))}
          </div>

          <button
            type="button"
            className="track-flecha track-flecha-izq"
            onClick={() => goToSlide(-1)}
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            className="track-flecha track-flecha-der"
            onClick={() => goToSlide(1)}
            aria-label="Siguiente"
          >
            <ChevronRight size={20} />
          </button>

          <div className="mobile-dots">
            {PROJECTS.map((_, i) => (
              <span
                key={i}
                className={`mobile-dot ${i === mobileIndex ? "active" : ""}`}
                onClick={() => setMobileIndex(i)}
              />
            ))}
          </div>
        </div>
      ) : (
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
      )}

      {active && <ProjectModal project={active} onClose={() => setActive(null)} t={t} />}
    </section>
  );
};

export default Proyectos;