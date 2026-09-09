"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

/** Fait apparaître son contenu au scroll — port du data-reveal +
 *  IntersectionObserver du script du .dc.html original. */
export default function Reveal({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const vh = window.innerHeight;
    if (node.getBoundingClientRect().top <= vh * 0.92) return;

    node.style.opacity = "0";
    node.style.transform = "translateY(24px)";
    node.style.transition =
      "opacity .8s ease, transform .8s cubic-bezier(.2,.7,.2,1)";

    const reveal = () => {
      node.style.opacity = "1";
      node.style.transform = "none";
    };

    if (!("IntersectionObserver" in window)) {
      reveal();
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal();
            obs.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.04 },
    );
    obs.observe(node);
    const secours = setTimeout(reveal, 4000);

    return () => {
      obs.disconnect();
      clearTimeout(secours);
    };
  }, []);

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
}
