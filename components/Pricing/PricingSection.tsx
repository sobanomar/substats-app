"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import { oswald } from "@/utils/fonts";

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20">
      <div className="container">
        <div className="flex justify-center">
          <div className="mb-8 text-center lg:mb-16" style={{ width: "665px" }}>
            <h2
              className={`${oswald.className} mb-8 text-4xl font-bold uppercase text-black dark:text-white md:text-[50px]`}
            >
              Choose your plan
            </h2>
          </div>
        </div>

        <div className="w-full">
          <div
            className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-wow-delay=".1s"
          >
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="White Belt"
            price={isMonthly ? "49" : "499"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Perfect for individual competitors looking to analyze their game and improve performance."
          >
            <OfferList
              text="Up to 3 Match Analysis per Month"
              status="active"
            />
            <OfferList text="Basic Performance Metrics" status="active" />
            <OfferList text="Technique Breakdown Reports" status="active" />
            <OfferList text="Email Support" status="active" />
            <OfferList text="Advanced Guard Analysis" status="inactive" />
            <OfferList text="Competitor Comparison" status="inactive" />
            <OfferList text="Custom Training Plans" status="inactive" />
            <OfferList text="Video Call Consultation" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Blue Belt"
            price={isMonthly ? "149" : "1499"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Ideal for serious competitors and small academies wanting detailed performance insights."
          >
            <OfferList
              text="Up to 10 Match Analysis per Month"
              status="active"
            />
            <OfferList text="Advanced Performance Metrics" status="active" />
            <OfferList text="Detailed Technique Breakdown" status="active" />
            <OfferList text="Priority Email Support" status="active" />
            <OfferList
              text="Advanced Guard & Passing Analysis"
              status="active"
            />
            <OfferList text="Competitor Comparison Reports" status="active" />
            <OfferList text="Basic Training Recommendations" status="active" />
            <OfferList text="Custom Training Plans" status="inactive" />
            <OfferList text="Video Call Consultation" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Black Belt"
            price={isMonthly ? "299" : "2999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Complete solution for professional competitors, academies, and teams seeking elite-level analysis."
          >
            <OfferList text="Unlimited Match Analysis" status="active" />
            <OfferList text="Elite Performance Analytics" status="active" />
            <OfferList text="Complete Game Analysis" status="active" />
            <OfferList text="24/7 Priority Support" status="active" />
            <OfferList
              text="Advanced Guard & Passing Analysis"
              status="active"
            />
            <OfferList text="Detailed Competitor Scouting" status="active" />
            <OfferList text="Custom Training Plans" status="active" />
            <OfferList text="Monthly Video Consultation" status="active" />
            <OfferList text="Team/Academy Dashboard" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default PricingSection;
