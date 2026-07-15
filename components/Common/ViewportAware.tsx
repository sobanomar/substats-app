"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ViewportAwareProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const ViewportAware = ({
  children,
  className = "",
  delay = 0.7,
}: ViewportAwareProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ViewportAware;
