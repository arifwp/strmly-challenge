import { useEffect, useRef, useState } from "react";

export const useActiveVideoIndex = (length: number) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const children = Array.from(containerRef.current.children);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.8) {
            const index = children.indexOf(entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    children.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [length]);

  return { activeIndex, containerRef };
};
