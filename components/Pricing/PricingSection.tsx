"use client";
import { useState } from "react";
import PricingBox from "./PricingBox";
import OfferList from "./OfferList";

const SectionTitle = ({ children }) => (
  <div className="mb-8 text-center lg:mb-16" style={{ width: "665px" }}>
    {children}
  </div>
);

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20">
      <div className="container">
        <div className="flex justify-center">
          <SectionTitle>
            <h2
              className="mb-8 text-4xl font-bold uppercase text-black dark:text-white md:text-[50px]"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Choose your plan
            </h2>
            <p className="text-base text-body-color">
              Individual Grappler Portal - For hobbyists, local competitors, or
              anyone wanting detailed match insights
            </p>
          </SectionTitle>
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
              Annual (Save 20%)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 justify-self-center md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Free"
            price={"0"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Basic match analysis"
          >
            <OfferList text="1 Match Analysis per Month" status="active" />
            <OfferList text="Historical Dashboard" status="active" />
            <OfferList text="Basic Performance Metrics" status="active" />
            <OfferList text="Email Support" status="active" />
            <OfferList text="AI Chatbot" status="inactive" />
            <OfferList text="Advanced Analytics" status="inactive" />
            <OfferList text="Priority Support" status="inactive" />
          </PricingBox>

          <PricingBox
            packageName="Essentials"
            price={isMonthly ? "3.99" : "38.40"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Essential match analysis for recreational grapplers"
          >
            <OfferList
              text="Up to 6 Match Analysis per Month"
              status="active"
            />
            <OfferList text="Historical Dashboard" status="active" />
            <OfferList text="Basic Performance Metrics" status="active" />
            <OfferList text="Email Support" status="active" />
            <OfferList text="AI Chatbot" status="inactive" />
            {/* <OfferList text="Advanced Analytics" status="inactive" /> */}
            <OfferList text="Priority Support" status="inactive" />
          </PricingBox>

          <PricingBox
            packageName="Precision"
            price={isMonthly ? "7.99" : "76.70"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Enhanced analysis with AI insights for serious competitors"
          >
            <OfferList
              text="Up to 12 Match Analysis per Month"
              status="active"
            />
            <OfferList text="AI Chatbot" status="active" />
            <OfferList text="Historical Dashboard" status="active" />
            <OfferList text="Advanced Performance Metrics" status="active" />
            <OfferList text="Detailed Technique Breakdown" status="active" />
            <OfferList text="Priority Email Support" status="active" />
          </PricingBox>
        </div>

        {/* One-time PDF Report Section */}
        <div className="mt-16">
          <div className="flex justify-center ">
            <div
              className="mb-8 text-center lg:mb-16"
              style={{ width: "665px" }}
            >
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                One-Time Analysis
              </h3>
              <p className="text-base text-body-color">
                Perfect for occasional analysis needs
              </p>
            </div>
          </div>

          {/* <div className="flex justify-center"> */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 justify-self-center">
            <PricingBox
              packageName="PDF Report"
              price={"2.99"}
              duration={"report"}
              subtitle="One time PDF Analysis report emailed directly to grappler"
            >
              <div className="pb-2 text-sm font-semibold">
                <span className="text-base text-red-600">*</span> Minimum 4
                Matches Required
              </div>
              <OfferList
                text="Detailed Match Analysis Report"
                status="active"
              />
              <OfferList text="PDF Format for Easy Sharing" status="active" />
              <OfferList text="Email Delivery" status="active" />
              <OfferList text="Basic Performance Insights" status="active" />
              <OfferList text="Technique Breakdown" status="active" />
            </PricingBox>
            {/* </div> */}
          </div>
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
