"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const texts = ["Jiu-Jitsu Evolved", "AI-Enhanced Insights", "Master the Mat"];

export default function HeroTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="mb-5 h-[50px] overflow-hidden bg-red-100 text-xl uppercase leading-tight text-black dark:bg-red-900 dark:text-white sm:h-[60px] sm:text-2xl sm:leading-tight md:h-[70px] md:text-4xl md:leading-tight">
      <div className="relative h-full bg-blue-100 dark:bg-blue-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={texts[index]}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute flex h-full w-full items-center justify-center bg-green-100 text-center font-bold dark:bg-green-900"
          >
            {texts[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </h1>
  );
}
