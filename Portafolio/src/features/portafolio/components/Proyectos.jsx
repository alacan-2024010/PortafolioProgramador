import React, { useState, useEffect, useRef, useCallback } from "react";
import { ExternalLink, X, ChevronLeft, ChevronRight, Users, User } from "lucide-react";
import "../../../styles/Proyectos.css";
import { useLanguage } from "../../../context/LanguageContext"; 
import { translations } from "../../../context/translations"; 

//KinalBank
import ImgKinalBankPortada from "../../../assets/KinalBankPrincipal.png"
import ImgKinalBankAuth from "../../../assets/KinalBankAuth.png"
import ImgKinalBankRegister from "../../../assets/KinalBankRegister.png"
import ImgKinalBankDashboard from "../../../assets/KinalBankDashboard.png"
import ImgKinalBankMovimientos from "../../../assets/KinalBankMovimientos.png"
import ImgKinalBankTransacciones from "../../../assets/KinalBankTransacciones.png"
import ImgKinalBankProductos from "../../../assets/KinalBankProductos.png"

//EcoKinal
import ImgEcoKinalPortada from "../../../assets/EcoKinalPrincipal.png"
import ImgEcoKinalAuth from "../../../assets/EcoKinalAuth.png"
import ImgEcoKinalRegister from "../../../assets/EcoKinalRegister.png"
import ImgEcoKinalDashboard from "../../../assets/EcoKinalDashboard.png"
import ImgEcoKinalDetector from "../../../assets/EcoKinalDetector.png"
import ImgEcoKinalForo from "../../../assets/EcoKinalForo.png"
import ImgEcoKinalGamificacion from "../../../assets/EcoKinalGamificacion.png"
import ImgEcoKinalImpacto from "../../../assets/EcoKinalImpacto.png"
import ImgEcoKinalMapa from "../../../assets/EcoKinalMapa.png"
import ImgEcoKinalEcoBot from "../../../assets/EcoKinalEcoBot.png"

//Huellitas
import ImgHuellitasPortada from "../../../assets/HuellitasPrincipal.png"
import ImgHuellitasAuth from "../../../assets/HuellitasAuth.png"
import ImgHuellitasDashboard from "../../../assets/HuellitasDashboard.png"
import ImgHuellitasClientes from "../../../assets/HuellitasClientes.png"
import ImgHuellitasCitas from "../../../assets/HuellitasCitas.png"
import ImgHuellitasMascotas from "../../../assets/HuellitasMascotas.png"
import ImgHuellitasRecetas from "../../../assets/HuellitasRecetas.png" 
import ImgHuellitasVeterinarios from "../../../assets/HuellitasVeterinarios.png" 
import ImgHuellitasReportes from "../../../assets/ReporteRecetas.png"

//KinalGourmet
import ImgGourmetPortada from "../../../assets/KinalGourmetPortada.png"
import ImgKinalGourmetAuth from "../../../assets/KinalGourmetInicioSesion.png"
import ImgKinalGourmetRegister from "../../../assets/KinalGourmetRegister.png"
import ImgKinalGourmetDashboard from "../../../assets/KinalGourmetDashboard.png"
import ImgKinalGourmetPedidos from "../../../assets/KinalGourmetPedidos.png"
import ImgKinalGourmetFacturacion from "../../../assets/KinalGourmetFacturacion.png"
import ImgKinalGourmetReservaciones from "../../../assets/KinalGourmetReservaciones.png"

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

// Datos fijos de cada proyecto (todo lo que NO depende del idioma).
// El texto (tagline / description) se agrega en buildProjects() a partir de las traducciones.
const PROJECTS_BASE = [
  {
    id: "kinalbank",
    title: "KinalBank",
    skills: ["JavaScript", "React", "PostgreSQL", "MongoDB"],
    type: "grupal",
    color: "#3b82f6",
    colorSoft: "rgba(59,130,246,0.18)",
    github: "https://github.com/aalvarez-2024004/AppMovil-SistemaBancario",
    live: "https://app-movil-sistema-bancario-hfca.vercel.app/",
    images: [
        ImgKinalBankPortada,
        ImgKinalBankAuth,
        ImgKinalBankRegister,
        ImgKinalBankDashboard,
        ImgKinalBankMovimientos,
        ImgKinalBankTransacciones,
        ImgKinalBankProductos
    ],
  },
  {
    id: "ecokinal",
    title: "EcoKinal",
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "PostgreSQL", "Google Cloud Vision API", "Gemini API"],
    type: "grupal",
    color: "#22c55e",
    colorSoft: "rgba(34,197,94,0.18)",
    github: "https://github.com/aalvarez-2024004/EcoApp.git",
    live: "https://app-movil-eco-kinal.vercel.app/",
    images: [
        ImgEcoKinalPortada,
        ImgEcoKinalAuth,
        ImgEcoKinalRegister,
        ImgEcoKinalDashboard,
        ImgEcoKinalDetector,
        ImgEcoKinalForo,
        ImgEcoKinalGamificacion,
        ImgEcoKinalImpacto,
        ImgEcoKinalMapa,
        ImgEcoKinalEcoBot
    ],
  },
  {
    id: "huellitas",
    title: "Huellitas S.A",
    skills: ["JavaFX", "MySQL", "JasperReports"],
    type: "individual",
    color: "#f59e0b",
    colorSoft: "rgba(245,158,11,0.18)",
    github: "https://github.com/alacan-2024010/VeterinariaHuellitas.git",
    noLive: true,
    images: [
        ImgHuellitasPortada,
        ImgHuellitasAuth,
        ImgHuellitasDashboard,
        ImgHuellitasClientes,
        ImgHuellitasMascotas,
        ImgHuellitasCitas,
        ImgHuellitasVeterinarios,
        ImgHuellitasRecetas,
        ImgHuellitasReportes
    ],
  },
  {
    id: "kinalgourmet",
    title: "KinalGourmetHouse",
    skills: ["JavaScript","React", "Node.js", "MongoDB", "PostgreSQL"],
    type: "grupal",
    color: "#ff761be7",
    colorSoft: "rgba(236,72,153,0.18)",
    github: "https://github.com/jrealiquez-2021549/AppMovil-SistemaRestaurante.git",
    live: "https://kinal-gourmet-web.vercel.app/",
    images: [
        ImgGourmetPortada,
        ImgKinalGourmetAuth,
        ImgKinalGourmetRegister,
        ImgKinalGourmetDashboard,
        ImgKinalGourmetFacturacion,
        ImgKinalGourmetPedidos,
        ImgKinalGourmetReservaciones
    ],
  },
];

// Combina los datos fijos con el texto traducido (t = translations[language].proyectos)
function buildProjects(t) {
  return PROJECTS_BASE.map((p) => ({
    ...p,
    tagline: t.items[p.id]?.tagline ?? "",
    description: t.items[p.id]?.description ?? "",
  }));
}

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

function ProjectModal({ project, onClose, t }) {
  const [imgIndex, setImgIndex] = useState(0);
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
                <img
                  src={currentImage}
                  className="real-shot"
                  alt={project.title}
                />
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
    </div>
  );
}

function ProjectCard({ project, onOpen, index, t }) {
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