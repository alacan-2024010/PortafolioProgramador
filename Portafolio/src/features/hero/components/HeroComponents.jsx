import '../../../styles/home.css'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-photo-side">
        <div className="hero-photo-placeholder">
          <span>Tu foto</span>
        </div>
        <div className="hero-photo-glow" />
      </div>

      <div className="hero-info-side">
        <svg className="hero-lines" viewBox="0 0 900 900" preserveAspectRatio="none">
          <path d="M-50,650 C150,550 300,720 500,600 S850,450 950,550"
                stroke="var(--color-celeste)" strokeWidth="2" fill="none" opacity="0.35" />
          <path d="M-50,300 C150,200 300,380 500,260 S850,120 950,220"
                stroke="var(--color-morado)" strokeWidth="2" fill="none" opacity="0.3" />
          <path d="M-50,480 C180,420 320,540 520,440 S820,340 950,420"
                stroke="var(--color-rosa)" strokeWidth="2" fill="none" opacity="0.3" />
        </svg>

        <div className="hero-info-content">
          <p className="hero-overline">
            <span className="hero-overline-bracket">&lt;</span>
            Hola, bienvenido a mi portafolio
            <span className="hero-overline-bracket">/&gt;</span>
          </p>

          <h1 className="hero-nombre">Francisco Lacan</h1>

          <p className="hero-rol">
            <span className="hero-rol-texto">Desarrollador web</span>
            <span className="hero-cursor">|</span>
          </p>

          <p className="hero-descripcion">
            "Frase corta con la que te identificas"
          </p>

          <div className="hero-acciones">
            <a href="#proyectos" className="hero-btn hero-btn-primario">
              Ver proyectos
            </a>
            <a href="#contacto" className="hero-btn hero-btn-secundario">
              Contactame
            </a>
          </div>

          <div className="hero-redes">
            <a href="#" aria-label="GitHub" className="hero-red-icono">GH</a>
            <a href="#" aria-label="LinkedIn" className="hero-red-icono">IN</a>
            <a href="#" aria-label="Correo" className="hero-red-icono">@</a>
          </div>
        </div>
      </div>
    </section>
  );
}
