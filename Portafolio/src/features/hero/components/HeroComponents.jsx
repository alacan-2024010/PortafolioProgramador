import '../../../styles/hero.css';

export function Hero () {
  return (
    <section className="hero">
      <svg className="hero-lines" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <path d="M-100,500 C250,380 450,600 750,420 S1300,250 1600,380"
              stroke="var(--color-celeste)" strokeWidth="2" fill="none" opacity="0.5" />
        <path d="M-100,420 C250,300 450,520 750,340 S1300,180 1600,300"
              stroke="var(--color-azul)" strokeWidth="2" fill="none" opacity="0.45" />
        <path d="M-100,340 C280,460 480,220 760,400 S1250,480 1600,380"
              stroke="var(--color-morado)" strokeWidth="2" fill="none" opacity="0.45" />
        <path d="M-100,600 C280,500 480,650 760,540 S1250,420 1600,520"
              stroke="var(--color-rosa)" strokeWidth="2" fill="none" opacity="0.4" />
        <path d="M-100,260 C260,160 460,320 740,220 S1240,100 1600,200"
              stroke="var(--color-verde)" strokeWidth="2" fill="none" opacity="0.4" />
      </svg>

      <div className="hero-content">
        <div className="hero-photo-frame">
          <div className="hero-photo-placeholder">
            <span>Tu foto</span>
          </div>
        </div>

        <h1 className="hero-nombre">Francisco Lacan</h1>
        <p className="hero-titulo">Desarrollador web</p>
        <p className="hero-frase">"Frase corta con la que te identificas"</p>
      </div>
    </section>
  );
}
