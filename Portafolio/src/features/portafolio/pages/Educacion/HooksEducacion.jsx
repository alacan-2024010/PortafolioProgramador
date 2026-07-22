import { useEffect, useRef, useState } from "react";

// Hook simple para detectar cuándo un elemento entra en el viewport
export const useInView = (options = { threshold: 0.2 }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
};