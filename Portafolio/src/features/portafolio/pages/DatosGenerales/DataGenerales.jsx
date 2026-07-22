import {IconLocation, IconAge, IconLaptop, IconBook, IconArrow, IconLinkedin, IconInstagram, IconWhatsapp, IconWork} from "./IconosGenerales.jsx"

// id se usa para buscar titulo/valor traducidos en translations.js -> datosGenerales.datos[id]
export const datos = [
  { id: "edad", color: "blue", icono: <IconAge /> },
  { id: "experiencia", color: "green", icono: <IconLaptop /> },
  { id: "educacion", color: "purple", icono: <IconBook /> },
  { id: "ubicacion", color: "cyan", icono: <IconLocation /> },
];

// id se usa para buscar el nombre traducido en datosGenerales.estadisticas[id]
export const estadisticas = [
  { id: "backend", porcentaje: 80 },
  { id: "frontend", porcentaje: 70 },
  { id: "basesDatos", porcentaje: 90 },
  { id: "aprendizaje", porcentaje: 100 },
];

// El "nombre" (LinkedIn/Instagram/WhatsApp) es marca fija, no se traduce.
// El "id" se usa para buscar el detalle traducido en datosGenerales.redes[id]
export const redes = [
  {
    id: "linkedin",
    nombre: "LinkedIn",
    href: "https://www.linkedin.com/in/alan-francisco-lacán-flores-173750421/",
    icono: <IconLinkedin />
  },
  {
    id: "instagram",
    nombre: "Instagram",
    href: "https://instagram.com/2211alan",
    icono: <IconInstagram />
  },
  {
    id: "whatsapp",
    nombre: "WhatsApp",
    href: "https://wa.me/50258319270",
    icono: <IconWhatsapp />
  }
];