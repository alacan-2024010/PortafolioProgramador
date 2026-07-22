import { useCountUp } from "../pages/DatosGenerales/HooksGenerales";
import { IconArrow } from "../pages/DatosGenerales/IconosGenerales";

export const InfoCard = ({ titulo, valor, icono, color }) => (
  <article className={`info-card ${color}`}>
    <div className="card-glow"></div>
    <div className="card-icon">{icono}</div>
    <div className="card-content">
      <span>{titulo}</span>
      <h3>{valor}</h3>
    </div>
  </article>
);

export const ProgressBar = ({ nombre, porcentaje }) => {
  const value = useCountUp(porcentaje);
  return (
    <div className="progress-card">
      <div className="progress-header">
        <span>{nombre}</span>
        <strong>{value}%</strong>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${porcentaje}%` }}>
          <span className="progress-shine"></span>
        </div>
      </div>
    </div>
  );
};

export const SocialCard = ({ nombre, detalle, href, icono }) => (
  <a href={href} target="_blank" rel="noreferrer" className="social-card">
    <div className="social-icon">{icono}</div>
    <div className="social-info">
      <strong>{nombre}</strong>
      <span>{detalle}</span>
    </div>
    <div className="social-arrow">
      <IconArrow />
    </div>
  </a>
);