import {IconServidor, IconCapas, IconLibro, IconMontana, IconSpinner,IconPhone, IconReloj, IconEquipo,  IconRompecabezas,IconRayo,IconoMarca } from "./IconosSobreMi.jsx"

export const CONTACTO_RAPIDO = [
  {
    id: "email",
    label: "alan2007lf@gmail.com",
    href: "mailto:alan2007lf@gmail.com",
    color: "celeste",
    icono: (
      <IconoMarca
        src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/gmail.svg"
        alt="Gmail"
      />
    ),
  },
  {
    id: "github",
    label: "alacan-2024010",
    href: "https://github.com/alacan-2024010",
    color: "morado",
    icono: (
      <IconoMarca
        src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg"
        alt="GitHub"
      />
    ),
  },
  {
    id: "telefono",
    label: "+502 5831 9270",
    href: "tel:+50258319270",
    color: "verde",
    icono: <IconPhone />,
  },
];

// Perfil profesional: qué tipo de desarrollador eres
export const PERFIL = [
  { id: "backend", icono: <IconServidor />, color: "celeste" },
  { id: "fullstack", icono: <IconCapas />, color: "azul" },
];

// Cualidades personales: cómo trabajas
export const CUALIDADES = [
  { id: "autodidacta", icono: <IconLibro />, color: "morado" },
  { id: "puntual", icono: <IconReloj />, color: "verde" },
  { id: "perseverante", icono: <IconMontana />, color: "celeste" },
  { id: "equipo", icono: <IconEquipo />, color: "azul" },
  { id: "problemas", icono: <IconRompecabezas />, color: "morado" },
  { id: "proactivo", icono: <IconRayo />, color: "verde" },
];