"use client";

import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface ViewportAwareProps {
  children: ReactNode;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
  className?: string;
}

const ViewportAware = ({
  children,
  rootMargin = "0px",
  threshold = 0.1,
  triggerOnce = true,
  className = "",
}: ViewportAwareProps) => {
  const { ref, inView, entry } = useInView({
    rootMargin,
    threshold,
    triggerOnce,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ViewportAware;
