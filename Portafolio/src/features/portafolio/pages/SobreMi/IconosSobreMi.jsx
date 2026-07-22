export const IconServidor = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="4" width="18" height="6" rx="1.5" />
    <rect x="3" y="14" width="18" height="6" rx="1.5" />
    <circle cx="7" cy="7" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="7" cy="17" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

export const IconCapas = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 3.5 21 8l-9 4.5L3 8Z" />
    <path d="m3 13 9 4.5L21 13" />
    <path d="m3 17.5 9 4.5 9-4.5" />
  </svg>
);

export const IconLibro = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M4 5.2C4 4.3 4.7 4 5.5 4H12v16H5.5c-.8 0-1.5-.3-1.5-1.2Z" />
    <path d="M20 5.2c0-.9-.7-1.2-1.5-1.2H12v16h6.5c.8 0 1.5-.3 1.5-1.2Z" />
  </svg>
);

export const IconMontana = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="m3 19 6.5-11L14 15l2.5-3.5L21 19Z" />
    <path d="m13 8.5 1.3-2.2L17 11" />
  </svg>
);

export const IconSpinner = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M12 3a9 9 0 1 1-6.36 2.64" strokeLinecap="round" />
  </svg>
);

export const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M5 4h3.2l1.3 4-2 1.4a12 12 0 0 0 6.1 6.1l1.4-2 4 1.3V18a2 2 0 0 1-2.2 2A16 16 0 0 1 3 5.2 2 2 0 0 1 5 4Z" />
  </svg>
);

export const IconReloj = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" strokeLinecap="round" />
  </svg>
);

export const IconEquipo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="8.5" cy="8" r="3" />
    <circle cx="16" cy="9" r="2.4" />
    <path d="M3 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" strokeLinecap="round" />
    <path d="M14 14.3c2.4.2 4 1.9 4 4.7" strokeLinecap="round" />
  </svg>
);

export const IconRompecabezas = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M9 4h3.2a1.5 1.5 0 0 1 1.5 1.7 1.5 1.5 0 0 0 2.6 1.2A1.5 1.5 0 0 1 19 8v3.2a1.5 1.5 0 0 1-1.7 1.5 1.5 1.5 0 0 0-1.2 2.6 1.5 1.5 0 0 1-1.1 2.7H12v-3a1.5 1.5 0 0 0-2.6-1 1.5 1.5 0 0 1-2.4-1.2V9.5A1.5 1.5 0 0 1 8.5 8a1.5 1.5 0 0 0 1-2.6A1.5 1.5 0 0 1 9 4Z" />
  </svg>
);

export const IconRayo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M13 3 5 13h5l-1 8 8-10h-5l1-8Z" strokeLinejoin="round" />
  </svg>
);

export const IconoMarca = ({ src, alt }) => (
  <span
    className="icono-marca"
    role="img"
    aria-label={alt}
    style={{ "--icono-src": `url(${src})` }}
  />
);