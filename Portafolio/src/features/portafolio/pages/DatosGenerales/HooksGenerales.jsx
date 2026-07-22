import { useEffect, useRef, useState } from "react";

export const useCountUp = (target, duration = 1200) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = null;
    let frame;
    const animate = (time) => {
      if (!start) start = time;
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);
  return value;
};

export const useParallax = () => {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const move = (e) => {
      const rect = element.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      element.style.setProperty("--mx", `${x}`);
      element.style.setProperty("--my", `${y}`);
    };
    element.addEventListener("mousemove", move);
    return () => element.removeEventListener("mousemove", move);
  }, []);
  return ref;
};