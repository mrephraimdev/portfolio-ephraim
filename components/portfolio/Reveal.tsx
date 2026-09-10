"use client";

import { motion, type Variants } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

/** Signature "design engineer" ease — quick start, long confident settle. */
export const EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/** Fades and slides its content up once it scrolls into view. */
export default function Reveal({
  children,
  style,
  delay = 0,
  y = 28,
}: {
  children: ReactNode;
  style?: CSSProperties;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
