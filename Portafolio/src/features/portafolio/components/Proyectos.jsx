import React, { useState, useEffect, useRef, useCallback } from "react";
import { ExternalLink, X, ChevronLeft, ChevronRight, Users, User } from "lucide-react";
import "../../../styles/Proyectos.css";
import ImgKinalBankPortada from "../../../assets/KinalBankPrincipal.png"
import ImgEcoKinalPortada from "../../../assets/EcoKinalPrincipal.png"
import ImgHuellitasPortada from "../../../assets/HuellitasPrincipal.png"
import ImgGourmetPortada from "../../../assets/KinalGourmetPortada.png"

function GithubIcon({ size = 17 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.76 1.19 1.76 1.19 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.4-5.26 5.69.42.36.78 1.07.78 2.16 0 1.56-.02 2.81-.02 3.19 0 .31.21.67.8.56A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

const PROJECTS = [
  {
    id: "kinalbank",
    title: "KinalBank",
    tagline: "Banca digital segura para Guatemala",
    description:
      "Plataforma de banca digital que simula un sistema bancario completo: registro y autenticación de usuarios, dashboard con balance en tiempo real, gestión de cuentas, historial de movimientos, transferencias entre cuentas y un marketplace de productos y servicios bancarios.",
    skills: ["JavaScript", "React", "PostgreSQL", "MongoDB", "API REST", "Autenticación", "UI/UX"],
    type: "grupal",
    color: "#3b82f6",
    colorSoft: "rgba(59,130,246,0.18)",
    github: "https://github.com/aalvarez-2024004/AppMovil-SistemaBancario",
    live: "https://app-movil-sistema-bancario-hfca.vercel.app/",
    images: [
        ImgKinalBankPortada,
        { mock: true, label: "Inicio de sesión", accent: "#3b82f6" },
        { mock: true, label: "Crear cuenta", accent: "#6366f1" },
        { mock: true, label: "Dashboard principal", accent: "#22d3ee" },
        { mock: true, label: "Mis cuentas", accent: "#0ea5e9" },
        { mock: true, label: "Movimientos", accent: "#8b5cf6" },
        { mock: true, label: "Transferir fondos", accent: "#3b82f6" },
    ],
  },
  {
    id: "ecoapp",
    title: "EcoApp",
    tagline: "TODO: escribe una línea que describa el proyecto",
    description:
      "TODO: descripción general del proyecto — qué problema resuelve y qué hace la aplicación.",
    skills: ["TODO: tecnología 1", "TODO: tecnología 2", "TODO: tecnología 3"],
    type: "grupal",
    color: "#22c55e",
    colorSoft: "rgba(34,197,94,0.18)",
    github: "https://github.com/TODO/ecoapp",
    live: "",
    images: [
        ImgEcoKinalPortada,
        { mock: true, label: "Pantalla 1", accent: "#22c55e" },
        { mock: true, label: "Pantalla 2", accent: "#16a34a" },
        { mock: true, label: "Pantalla 3", accent: "#4ade80" },
    ],
  },
  {
    id: "huellitas",
    title: "Huellitas S.A",
    tagline: "TODO: escribe una línea que describa el proyecto",
    description:
      "TODO: descripción general del proyecto — qué problema resuelve y qué hace la aplicación.",
    skills: ["TODO: tecnología 1", "TODO: tecnología 2", "TODO: tecnología 3"],
    type: "Individual",
    color: "#f59e0b",
    colorSoft: "rgba(245,158,11,0.18)",
    github: "https://github.com/TODO/huellitas",
    live: "",
    images: [
        ImgHuellitasPortada,
        { mock: true, label: "Pantalla 1", accent: "#f59e0b" },
        { mock: true, label: "Pantalla 2", accent: "#fb923c" },
        { mock: true, label: "Pantalla 3", accent: "#fbbf24" },
    ],
  },
  {
    id: "kinalgourmet",
    title: "KinalGourmetHouse",
    tagline: "TODO: escribe una línea que describa el proyecto",
    description:
      "TODO: descripción general del proyecto — qué problema resuelve y qué hace la aplicación.",
    skills: ["TODO: tecnología 1", "TODO: tecnología 2", "TODO: tecnología 3"],
    type: "grupal",
    color: "#ff761be7",
    colorSoft: "rgba(236,72,153,0.18)",
    github: "https://github.com/TODO/kinal-gourmet-house",
    live: "",
    images: [
        ImgGourmetPortada,
        { mock: true, label: "Pantalla 1", accent: "#ec4899" },
        { mock: true, label: "Pantalla 2", accent: "#f472b6" },
        { mock: true, label: "Pantalla 3", accent: "#e879f9" },
    ],
  },
];

/* Ilustración placeholder para una "captura" mock */
function MockScreen({ label, accent }) {
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

function Frame({ image }) {
  if (typeof image === "string") {
    return <img src={image} alt="" className="real-shot" />;
  }
  return <MockScreen label={image.label} accent={image.accent} />;
}

function ProjectModal({ project, onClose }) {
  const [imgIndex, setImgIndex] = useState(0);
  const total = project.images.length;

  const next = useCallback(
    () => setImgIndex((i) => (i + 1) % total),
    [total]
  );
  const prev = useCallback(
    () => setImgIndex((i) => (i - 1 + total) % total),
    [total]
  );

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, next, prev]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-panel"
        style={{ "--pcolor": project.color }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">
          <X size={18} />
        </button>

        <div className="modal-gallery">
          <div className="gallery-frame">
            <Frame image={project.images[imgIndex]} />
          </div>
          {total > 1 && (
            <>
              <button className="nav-btn nav-left" onClick={prev} aria-label="Anterior">
                <ChevronLeft size={20} />
              </button>
              <button className="nav-btn nav-right" onClick={next} aria-label="Siguiente">
                <ChevronRight size={20} />
              </button>
              <div className="dots">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    className={"dot-btn" + (i === imgIndex ? " active" : "")}
                    onClick={() => setImgIndex(i)}
                    aria-label={`Imagen ${i + 1}`}
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
                {project.type === "grupal" ? "Proyecto grupal" : "Proyecto individual"}
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
              Ver repositorio
            </a>
            {project.live ? (
              <a
                className="cta live"
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={17} />
                Ver demo en vivo
              </a>
            ) : (
              <span className="cta live disabled">
                <ExternalLink size={17} />
                Demo próximamente
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, onOpen, index }) {
  return (
    <button
      className="project-card"
      style={{ "--pcolor": project.color, "--psoft": project.colorSoft, "--i": index }}
      onClick={() => onOpen(project)}
    >
      <span className="ring" aria-hidden="true" />
      <div className="card-thumb">
        <Frame image={project.images[0]} />
        <div className="thumb-overlay">
          <span className="open-hint">
            Ver proyecto <ExternalLink size={13} />
          </span>
        </div>
      </div>
      <div className="card-body">
        <span className="type-pill small">
          {project.type === "grupal" ? <Users size={11} /> : <User size={11} />}
          {project.type === "grupal" ? "Grupal" : "Individual"}
        </span>
        <h3>{project.title}</h3>
        <p>{project.tagline}</p>
      </div>
    </button>
  );
}

export const Proyectos = () => {
  const [active, setActive] = useState(null);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef(null);
  const innerRef = useRef(null);
  const [distance, setDistance] = useState(0);

  // Mide cuánto tiene que viajar el carrusel (ancho total del contenido - ancho visible)
  useEffect(() => {
    const track = trackRef.current;
    const inner = innerRef.current;
    if (!track || !inner) return;

    const measure = () => {
      const d = inner.scrollWidth - track.clientWidth;
      setDistance(d > 0 ? d : 0);
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(track);
    ro.observe(inner);
    window.addEventListener("resize", measure);

    // por si las imágenes tardan en cargar y cambian el ancho real
    const imgs = inner.querySelectorAll("img");
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener("load", measure, { once: true });
    });

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const isPaused = paused || !!active;
  // Duración proporcional a la distancia para que la velocidad sea constante
  const duration = Math.max(distance / 110, 2.5); // ~110px/seg, mínimo 2.5s

  return (
    <section className="gallery-section">
      <div className="gallery-head">
        <div>
          <h2>Proyectos</h2>
          <p>Aplicaciones que he construido — capturas, stack técnico y enlaces al código y al demo en vivo.</p>
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
          ref={innerRef}
          style={{
            "--scroll-distance": `${distance}px`,
            "--scroll-duration": `${duration}s`,
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={setActive} />
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}