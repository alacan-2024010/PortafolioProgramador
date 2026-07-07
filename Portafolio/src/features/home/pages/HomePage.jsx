import { useEffect, useState } from 'react';
import { PortafolioPage } from '../../portafolio/pages/PortafolioPage.jsx';
import '../../../styles/home.css';

const TIEMPO_SIMBOLO_MS = 1500;
const TIEMPO_TOTAL_BIENVENIDA_MS = 4000;

export const HomePage = () => {
  const [faseCargada, setFaseCargada] = useState(false);
  const [mostrarSiguiente, setMostrarSiguiente] = useState(false);

  useEffect(() => {
    const timerSimbolo = setTimeout(() => setFaseCargada(true), TIEMPO_SIMBOLO_MS);
    const timerSiguiente = setTimeout(() => setMostrarSiguiente(true), TIEMPO_TOTAL_BIENVENIDA_MS);

    return () => {
      clearTimeout(timerSimbolo);
      clearTimeout(timerSiguiente);
    };
  }, []);

  if (mostrarSiguiente) {
    return (
      <div className="vista-fade-in">
        <PortafolioPage />
      </div>
    );
  }

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