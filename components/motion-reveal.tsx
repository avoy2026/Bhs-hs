"use client";

import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";

export default function MotionReveal(props: HTMLMotionProps<"div">) {
  return <motion.div {...props} />;
}
