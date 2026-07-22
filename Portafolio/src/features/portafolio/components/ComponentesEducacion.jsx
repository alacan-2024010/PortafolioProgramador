import { useInView } from "../pages/Educacion/HooksEducacion";

export const ProgressRing = ({ progreso, inView, color }) => (
  <div
    className="ee-ring"
    style={{
      "--ee-color": color,
      "--ee-progress": inView ? progreso : 0,
    }}
  >
    <span className="ee-ring-value">{inView ? progreso : 0}%</span>
  </div>
);

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
