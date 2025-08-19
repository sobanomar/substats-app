"use client";

import { oswald } from "@/utils/fonts";
import Link from "next/link";
import heroImage from "@/public/jiu-jitsu/3.webp";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const texts = [
    "Jiu-Jitsu Evolved",
    "AI-Powered Insights",
    "Expert Black-Belt Reviews",
    "AI Video Analysis",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000); // change text every 3s
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section
        id="home"
        className="relative z-10 flex h-[100vh] items-center overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark"
      >
        {/* Background image with opacity */}
        <div
          className="dark: absolute inset-0 z-[-1] opacity-15"
          style={{
            backgroundImage: `url(${heroImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center", // Adjust opacity here (0.1 to 1)
          }}
        />
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full items-center px-4">
              <div
                className="wow fadeInUp mx-auto flex max-w-[800px] flex-col items-center text-center"
                data-wow-delay=".2s"
              >
                <h1
                  className={`animated-gradient animate-slide-up-1 mb-5 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-500 bg-clip-text text-4xl font-semibold uppercase leading-tight text-transparent dark:from-blue-200 dark:via-blue-500 dark:to-blue-500 sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight`}
                >
                  <div className={`${oswald.className}`}>master the mat</div>
                </h1>
                <h1 className="animate-fade-in-up h-[50px] overflow-hidden text-2xl uppercase leading-tight text-black dark:text-white sm:h-[60px] sm:leading-tight md:h-[70px] md:text-4xl md:leading-tight">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={texts[index]}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      exit={{ y: "-100%", opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className={`${oswald.className}`}
                    >
                      {texts[index]}
                    </motion.div>
                  </AnimatePresence>
                </h1>
                <p className="animate-fade-in-up mb-12 max-w-[650px] text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Tournament insights for competitors, by competitors — enhanced
                  with AI-powered breakdowns to accelerate your progress.
                </p>
                <div className="animate-fade-in flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <a
                    href="#services"
                    className="rounded-lg bg-primary px-8 py-2 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 md:py-4"
                  >
                    Let&apos;s Roll
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="h-[400px] w-[80vw] overflow-hidden ">
          <Image
            src={heroImage}
            alt="hero-image"
            className="blob-shape h-full w-full object-cover"
          />
        </div> */}

        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="400"
            height="300"
            viewBox="0 0 400 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="80"
              cy="240"
              r="70"
              fill="url(#leftCircleGradient)"
              opacity="0.15"
            />
            <circle
              cx="250"
              cy="180"
              r="100"
              stroke="url(#leftCircleStroke)"
              strokeWidth="3"
              opacity="0.3"
            />
            <path
              d="M320 100 C 280 140, 220 160, 180 130"
              stroke="url(#leftCurveGradient)"
              strokeWidth="2"
              opacity="0.25"
              fill="none"
            />
            <defs>
              <radialGradient
                id="leftCircleGradient"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(80 240) rotate(90) scale(70)"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.3" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </radialGradient>
              <linearGradient
                id="leftCircleStroke"
                x1="150"
                y1="80"
                x2="300"
                y2="200"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="leftCurveGradient"
                x1="320"
                y1="100"
                x2="180"
                y2="130"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.5" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="550"
            viewBox="0 0 450 550"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="300"
              cy="60"
              r="220"
              fill="url(#rightBigCircleGradient)"
              opacity="0.3"
            />
            <circle
              cx="100"
              cy="200"
              r="30"
              fill="url(#rightSmallCircleGradient)"
              opacity="0.15"
            />
            <circle
              cx="280"
              cy="350"
              r="150"
              stroke="url(#rightCircleStroke)"
              strokeWidth="4"
              opacity="0.25"
            />
            <circle
              cx="160"
              cy="320"
              r="120"
              fill="url(#rightMediumCircleGradient)"
              opacity="0.2"
            />
            <defs>
              <radialGradient
                id="rightBigCircleGradient"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(300 60) rotate(90) scale(220)"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.35" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="rightSmallCircleGradient"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(100 200) rotate(90) scale(30)"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.15" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </radialGradient>
              <linearGradient
                id="rightCircleStroke"
                x1="130"
                y1="200"
                x2="300"
                y2="500"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="rightMediumCircleGradient"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(160 320) rotate(90) scale(120)"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.25" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
