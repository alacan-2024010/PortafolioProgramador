import React, { useState, useEffect, useRef, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Users, User, Images, ExternalLink, ZoomIn } from "lucide-react";
import { GithubIcon } from "../pages/Proyectos/IconosProyectos";

/* Ilustración placeholder para una "captura" mock */
export function MockScreen({ label, accent }) {
  return (
    <div className="mock-screen" style={{ "--accent": accent }}>
      <div className="mock-bar">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </div>
      <div className="mock-body">
        <div className="mock-block w60" />
        <div className="mock-block w40" />
        <div className="mock-grid">
          <div className="mock-card" />
          <div className="mock-card" />
        </div>
        <div className="mock-block w80" />
      </div>
      <span className="mock-label">{label}</span>
    </div>
  );
}

export function Frame({ image }) {
  if (typeof image === "string") {
    return <img src={image} alt="" className="real-shot" />;
  }
  return <MockScreen label={image.label} accent={image.accent} />;
}

export function ProjectModal({ project, onClose, t }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const total = project.images.length;

  // Imagen actualmente mostrada en el carrusel del modal
  const currentImage = project.images[imgIndex];
  const isRealShot = typeof currentImage === "string";

  const next = useCallback(
    () => setImgIndex((i) => (i + 1) % total),
    [total]
  );
  const prev = useCallback(
    () => setImgIndex((i) => (i - 1 + total) % total),
    [total]
  );

  // Si cambia la imagen, cerramos el zoom para no dejarlo "pegado"
  useEffect(() => {
    setIsZoomed(false);
  }, [imgIndex]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        if (isZoomed) setIsZoomed(false);
        else onClose();
      }
      if (e.key === "ArrowRight" && !isZoomed) next();
      if (e.key === "ArrowLeft" && !isZoomed) prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, next, prev, isZoomed]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-panel"
        style={{ "--pcolor": project.color }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label={t.cerrar}>
          <X size={18} />
        </button>

        <div className="modal-gallery">
          <div className="gallery-frame">
            {isRealShot ? (
              <>
                <img
                  src={currentImage}
                  className="real-shot-bg"
                  alt=""
                  aria-hidden="true"
                />
                <button
                  type="button"
                  className="real-shot-zoom-btn"
                  onClick={() => setIsZoomed(true)}
                  aria-label={t.ampliar || "Ampliar imagen"}
                >
                  <img
                    src={currentImage}
                    className="real-shot"
                    alt={project.title}
                  />
                  <span className="zoom-hint">
                    <ZoomIn size={16} />
                  </span>
                </button>
              </>
            ) : (
              <MockScreen label={currentImage.label} accent={currentImage.accent} />
            )}
          </div>
          {total > 1 && (
            <>
              <button className="nav-btn nav-left" onClick={prev} aria-label={t.anterior}>
                <ChevronLeft size={20} />
              </button>
              <button className="nav-btn nav-right" onClick={next} aria-label={t.siguiente}>
                <ChevronRight size={20} />
              </button>
              <div className="dots">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    className={"dot-btn" + (i === imgIndex ? " active" : "")}
                    onClick={() => setImgIndex(i)}
                    aria-label={`${t.imagen} ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="modal-info">
          <div className="modal-header">
            <div>
              <span className="type-pill">
                {project.type === "grupal" ? <Users size={13} /> : <User size={13} />}
                {project.type === "grupal" ? t.proyectoGrupal : t.proyectoIndividual}
              </span>
              <h2>{project.title}</h2>
              <p className="tagline">{project.tagline}</p>
            </div>
          </div>

          <p className="description">{project.description}</p>

          <div className="skills-row">
            {project.skills.map((s) => (
              <span className="skill-chip" key={s}>
                {s}
              </span>
            ))}
          </div>

          <div className="cta-row">
            <a
              className="cta github"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon size={17} />
              {t.verRepositorio}
            </a>
            {project.live ? (
              <a
                className="cta live"
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={17} />
                {t.verDemo}
              </a>
            ) : !project.noLive ? (
              <span className="cta live disabled">
                <ExternalLink size={17} />
                {t.demoProximamente}
              </span>
            ) : null}
          </div>
        </div>
      </div>

      {isZoomed && isRealShot && (
        <div
          className="lightbox-overlay"
          onClick={(e) => {
            e.stopPropagation();
            setIsZoomed(false);
          }}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomed(false);
            }}
            aria-label={t.cerrar}
          >
            <X size={22} />
          </button>

          {total > 1 && (
            <>
              <button
                type="button"
                className="lightbox-nav lightbox-nav-left"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label={t.anterior}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                type="button"
                className="lightbox-nav lightbox-nav-right"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label={t.siguiente}
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <img
            src={currentImage}
            alt={project.title}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export function ProjectCard({ project, onOpen, index, t }) {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;   // 0 a 1
    const py = (e.clientY - rect.top) / rect.height;    // 0 a 1

    // Rango de inclinación: -7deg a 7deg
    const rotateY = (px - 0.5) * 14;
    const rotateX = (0.5 - py) * 14;

    el.style.setProperty("--rx", `${rotateX}deg`);
    el.style.setProperty("--ry", `${rotateY}deg`);
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }, []);

  return (
    <button
      ref={cardRef}
      className="project-card"
      style={{ "--pcolor": project.color, "--psoft": project.colorSoft, "--i": index }}
      onClick={() => onOpen(project)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span className="ring" aria-hidden="true" />
      <span className="tilt-glare" aria-hidden="true" />
      <div className="card-thumb">
        <Frame image={project.images[0]} />
        {project.images.length > 1 && (
          <span className="shots-badge">
            <Images size={12} />
            {project.images.length}
          </span>
        )}
        <div className="thumb-overlay">
          <span className="open-hint">
            {t.verProyecto} <ExternalLink size={13} />
          </span>
        </div>
      </div>
      <div className="card-body">
        <span className="type-pill small">
          {project.type === "grupal" ? <Users size={11} /> : <User size={11} />}
          {project.type === "grupal" ? t.grupal : t.individual}
        </span>
        <h3>{project.title}</h3>
        <p>{project.tagline}</p>
      </div>
    </button>
  );
}