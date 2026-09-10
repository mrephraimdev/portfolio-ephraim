"use client";

import { motion, type Variants } from "framer-motion";
import type { CSSProperties, ElementType, ReactNode } from "react";
import { EASE } from "./Reveal";

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

/** Reveals its children in a cascade as the group scrolls into view. */
export function StaggerGroup({
  children,
  className,
  style,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
}) {
  const MotionTag = (motion as unknown as Record<string, ElementType>)[as as string];
  return (
    <MotionTag
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={staggerContainer}
    >
      {children}
    </MotionTag>
  );
}

/** One step in a StaggerGroup's cascade. */
export function StaggerItem({
  children,
  className,
  style,
  as = "div",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
  [key: string]: unknown;
}) {
  const MotionTag = (motion as unknown as Record<string, ElementType>)[as as string];
  return (
    <MotionTag className={className} style={style} variants={staggerItem} {...rest}>
      {children}
    </MotionTag>
  );
}
