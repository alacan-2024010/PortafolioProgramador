import { useEffect, useState } from 'react';
import '../../../styles/home.css';

export const HomePage = () => {
  const [faseCargada, setFaseCargada] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFaseCargada(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="home">
      <div className={`home-intro-simbolo ${faseCargada ? 'home-intro-simbolo--chico' : ''}`}>
        <span className="simbolo-parte simbolo-parte--izq">&lt;/</span>
        <span className="simbolo-parte simbolo-parte--der">&gt;</span>
      </div>

      <div className={`home-contenido ${faseCargada ? 'home-contenido--visible' : ''}`}>
        <div className="home-header">
        <div className="home-foto">
            <span>AL</span>
        </div>
        <div className="home-nombre-bloque">
        <h1 className="home-nombre">Alan Lacán Flores</h1>
        <p className="home-titulo">
            <span className="home-titulo-dot" />
            Desarrollador full stack junior
        </p>
        </div>
        </div>
      </div>
    </section>
  );
};