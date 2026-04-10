import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement = HTMLElement>(stagger = false) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const delay = stagger ? i * 80 : 0;
            setTimeout(() => entry.target.classList.add("visible"), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    el.querySelectorAll<Element>(".reveal").forEach((item) =>
      observer.observe(item)
    );

    return () => observer.disconnect();
  }, [stagger]);

  return ref;
}
