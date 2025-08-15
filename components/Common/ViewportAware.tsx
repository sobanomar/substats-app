"use client";

import { ReactNode, useState } from "react";
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
  const [inView, setInView] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ delay, ease: "easeOut" }}
      onViewportEnter={() => setInView(true)}
      onViewportLeave={() => setInView(false)}
      viewport={{ amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ViewportAware;
