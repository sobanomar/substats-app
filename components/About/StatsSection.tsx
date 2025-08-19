"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { oswald } from "@/utils/fonts";

// This is a simple reusable component for a single stat item
const StatItem = ({ endValue, title, description, isPlus, isText }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    // A custom bezier curve for a very fast start and a very slow-down effect at the end
    const animation = animate(count, endValue, {
      duration: 10, // Further increased duration for a dramatic effect
      ease: [0.0, 0.9, 0.5, 1.0], // Custom cubic-bezier for an extreme slow-out effect
    });
    return animation.stop;
  }, [count, endValue]);

  return (
    <div className="bgred flex flex-col items-center p-4 text-center">
      {/* Container for the animated number and the plus sign */}
      <div
        className={`flex items-start text-3xl  text-black dark:text-white sm:text-5xl lg:text-6xl ${oswald.className}`}
      >
        {/* The animated number */}
        <motion.span>{rounded}</motion.span>
        {/* Display a plus sign or custom text if needed */}
        {(isPlus || isText) && (
          <span className="ml-1 self-start text-3xl">
            {isPlus ? "+" : ""}
            {isText ? description.split(" ")[0] : ""}
          </span>
        )}
      </div>
      {/* The main title and description */}
      <h3 className={`mt-2 text-2xl text-blue-600 ${oswald.className}`}>
        {title}
      </h3>
      {/* Use the full description if it's not a text-based stat */}
      {!isText && (
        <p className="mt-1 max-w-xs text-sm text-body-color dark:text-body-color-dark">
          {description}
        </p>
      )}
    </div>
  );
};

// The main Stats component
const StatsSection = () => {
  const statsData = [
    {
      endValue: 1000,
      title: "Matches Reviewed",
      description: "Faster with AI. Sharper with experts.",
      isPlus: true,
      isText: false,
    },
    {
      endValue: 250,
      title: "Grappler Profiles",
      description: "Backed by stats, tailored by analysts.",
      isPlus: true,
      isText: false,
    },
    {
      endValue: 100,
      title: "Events Dissected",
      description: "Everything from superfights to brackets.",
      isPlus: true,
      isText: false,
    },
  ];

  return (
    <div className=" ">
      <div className="container border-b border-body-color border-opacity-30  dark:border-white dark:border-opacity-10">
        <div className="flex flex-col items-center justify-around py-8 sm:flex-row md:py-12">
          {statsData.map((stat, index) => (
            <StatItem
              key={index}
              endValue={stat.endValue}
              title={stat.title}
              description={stat.description}
              isPlus={stat.isPlus}
              isText={stat.isText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
