"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;
  const [expanded, setExpanded] = useState(false);

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>,
    );
  }

  const isLong = content.length > 120;
  const displayText =
    isLong && !expanded ? content.slice(0, 100) + "..." : content;

  return (
    <div className="w-full">
      <div
        className="wow fadeInUp rounded-xl bg-white p-8 shadow-two duration-300 hover:shadow-one 
        dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>

        {/* Animate text expansion */}
        <AnimatePresence initial={false}>
          <motion.p
            key={expanded ? "expanded" : "collapsed"}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-4 text-base leading-relaxed text-body-color dark:text-white"
          >
            “{displayText}”
          </motion.p>
        </AnimatePresence>

        {/* Toggle button */}
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mb-6 text-sm font-medium text-primary hover:underline"
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        )}

        <div className="flex items-center border-t border-body-color border-opacity-10 pt-6 dark:border-white dark:border-opacity-10">
          <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
            <Image src={image} alt={name} fill />
          </div>
          <div className="w-full">
            <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
              {name}
            </h3>
            <p className="text-sm text-body-color">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
