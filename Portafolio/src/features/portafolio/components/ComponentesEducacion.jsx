import { useInView } from "../pages/Educacion/HooksEducacion";

// Tamaño base del anillo en unidades SVG (coincide con el tamaño visual
// por defecto de 46px). El viewBox usa siempre estas unidades; el tamaño
// real en pantalla lo sigue controlando el CSS de .ee-ring (con sus
// media queries), porque el <svg> se escala al 100% del contenedor.
const RING_SIZE = 46;
const RING_STROKE = 4;
const RING_RADIUS = (RING_SIZE - RING_STROKE) / 2;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

export const ProgressRing = ({ progreso, inView, color }) => {
  const value = inView ? progreso : 0;
  const offset = RING_CIRCUMFERENCE - (value / 100) * RING_CIRCUMFERENCE;

  return (
    <div className="ee-ring" style={{ "--ee-color": color }}>
      <svg
        className="ee-ring-svg"
        viewBox={`0 0 ${RING_SIZE} ${RING_SIZE}`}
        width="100%"
        height="100%"
      >
        <circle
          className="ee-ring-track"
          cx={RING_SIZE / 2}
          cy={RING_SIZE / 2}
          r={RING_RADIUS}
          fill="none"
          strokeWidth={RING_STROKE}
        />
        <circle
          className="ee-ring-fill"
          cx={RING_SIZE / 2}
          cy={RING_SIZE / 2}
          r={RING_RADIUS}
          fill="none"
          strokeWidth={RING_STROKE}
          strokeDasharray={RING_CIRCUMFERENCE}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="ee-ring-value">{value}%</span>
    </div>
  );
};

export const TimelineItem = ({ titulo, sub, fecha, desc, tags = [], estado, index }) => (
  <div
    className="ee-timeline-item"
    style={{ "--ee-delay": `${index * 0.15}s` }}
  >
    <div className="ee-item-top">
      <span className="ee-item-titulo">{titulo}</span>
      <span
        className={`ee-item-fecha ${estado === "pendiente" ? "ee-item-fecha--pendiente" : ""}`}
      >
        {estado === "pendiente" && <span className="ee-fecha-dot" />}
        {fecha}
      </span>
    </div>
    <p className="ee-item-sub">{sub}</p>
    <p className="ee-item-desc">{desc}</p>
    {tags.length > 0 && (
      <div className="ee-item-tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    )}
  </div>
);

export const Panel = ({ tipo, color, progreso, titulo, items, textos }) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`ee-panel ee-panel-${tipo} ${inView ? "ee-panel-inview" : ""}`}
      style={{ "--ee-color": color }}
    >
      <div className="ee-panel-head">
        <h3 className="ee-panel-title">
          <span className="ee-panel-dot" />
          {titulo}
        </h3>
        <ProgressRing progreso={progreso} inView={inView} color={color} />
      </div>

      <div className="ee-timeline">
        {items.map((item, i) => (
          <TimelineItem
            key={item.id}
            {...textos[item.id]}
            tags={item.tags}
            estado={item.estado}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};