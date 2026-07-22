import { 
    kinalBankImages,
    kinalGourmetImages,
    ecoKinalImages,
    huellitasImages
} from "./ImagenesProyectos";

export const PROJECTS_BASE = [
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
export function buildProjects(t) {
  return PROJECTS_BASE.map((p) => ({
    ...p,
    tagline: t.items[p.id]?.tagline ?? "",
    description: t.items[p.id]?.description ?? "",
  }));
}