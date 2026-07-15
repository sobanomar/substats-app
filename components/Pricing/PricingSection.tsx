"use client";
import { useEffect, useMemo, useState } from "react";
import { Loader2 } from "lucide-react";
import type { GymPlan, GymPlansResponse } from "@/types/gymPlan";
import {
  getGymPlanDiscountLabel,
  getGymPlanDisplayPrice,
  getGymPlanFeatures,
  supportsGymPlanBillingCycle,
} from "@/utils/gymPlans";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const PUBLIC_GYM_PLANS_URL =
  "https://portal.substats.app/api/gyms/public/gym-plans/";

const SectionTitle = ({ children }) => (
  <div className="mx-auto mb-8 max-w-[665px] text-center lg:mb-16">
    {children}
  </div>
);

const individualPlans = {
  monthly: [
    {
      packageName: "Free",
      price: "0",
      duration: "mo",
      subtitle: "Basic match analysis - 14 days free trial",
      config: { type: "subscription", plan: "free", interval: "month" },
      offers: [
        { text: "1 Match Analysis on free trial", status: "active" },
        { text: "Historical Dashboard", status: "active" },
        { text: "Basic Performance Metrics", status: "active" },
        { text: "Email Support", status: "active" },
        { text: "AI Chatbot", status: "inactive" },
        { text: "Advanced Analytics", status: "inactive" },
        { text: "Priority Support", status: "inactive" },
      ],
    },
    {
      packageName: "Essentials",
      price: "3.99",
      duration: "mo",
      subtitle: "Essential match analysis for recreational grapplers",
      config: { type: "subscription", plan: "essentials", interval: "month" },
      offers: [
        { text: "Up to 6 Match Analysis per Month", status: "active" },
        { text: "Historical Dashboard", status: "active" },
        { text: "Basic Performance Metrics", status: "active" },
        { text: "Email Support", status: "active" },
        { text: "AI Chatbot", status: "inactive" },
        { text: "Priority Support", status: "inactive" },
      ],
    },
    {
      packageName: "Precision",
      price: "7.99",
      duration: "mo",
      subtitle: "Enhanced analysis with AI insights for serious competitors",
      config: { type: "subscription", plan: "precision", interval: "month" },
      offers: [
        { text: "Up to 12 Match Analysis per Month", status: "active" },
        { text: "AI Chatbot", status: "active" },
        { text: "Historical Dashboard", status: "active" },
        { text: "Advanced Performance Metrics", status: "active" },
        { text: "Detailed Technique Breakdown", status: "active" },
        { text: "Priority Email Support", status: "active" },
      ],
    },
  ],
  annual: [
    {
      packageName: "Free",
      price: "0",
      duration: "yr",
      subtitle: "Basic match analysis - 14 days free trial",
      config: { type: "subscription", plan: "free", interval: "year" },
      offers: [
        { text: "1 Match Analysis on free trial", status: "active" },
        { text: "Historical Dashboard", status: "active" },
        { text: "Basic Performance Metrics", status: "active" },
        { text: "Email Support", status: "active" },
        { text: "AI Chatbot", status: "inactive" },
        { text: "Advanced Analytics", status: "inactive" },
        { text: "Priority Support", status: "inactive" },
      ],
    },
    {
      packageName: "Essentials",
      price: "38.40",
      duration: "yr",
      subtitle: "Essential match analysis for recreational grapplers",
      config: { type: "subscription", plan: "essentials", interval: "year" },
      offers: [
        { text: "Up to 6 Match Analysis per Month", status: "active" },
        { text: "Historical Dashboard", status: "active" },
        { text: "Basic Performance Metrics", status: "active" },
        { text: "Email Support", status: "active" },
        { text: "AI Chatbot", status: "inactive" },
        { text: "Priority Support", status: "inactive" },
      ],
    },
    {
      packageName: "Precision",
      price: "76.70",
      duration: "yr",
      subtitle: "Enhanced analysis with AI insights for serious competitors",
      config: { type: "subscription", plan: "precision", interval: "year" },
      offers: [
        { text: "Up to 12 Match Analysis per Month", status: "active" },
        { text: "AI Chatbot", status: "active" },
        { text: "Historical Dashboard", status: "active" },
        { text: "Advanced Performance Metrics", status: "active" },
        { text: "Detailed Technique Breakdown", status: "active" },
        { text: "Priority Email Support", status: "active" },
      ],
    },
  ],
};

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [gymPlans, setGymPlans] = useState<GymPlan[]>([]);
  const [loadingGymPlans, setLoadingGymPlans] = useState(true);
  const [gymPlansError, setGymPlansError] = useState("");

  useEffect(() => {
    let cancelled = false;

    const loadGymPlans = async () => {
      setLoadingGymPlans(true);
      setGymPlansError("");

      try {
        const response = await fetch(PUBLIC_GYM_PLANS_URL);
        if (!response.ok) {
          throw new Error("Failed to load gym plans.");
        }

        const data = (await response.json()) as GymPlansResponse;
        if (!cancelled) {
          setGymPlans(
            (data.plans ?? []).filter((plan) => plan.active !== false),
          );
        }
      } catch {
        if (!cancelled) {
          setGymPlans([]);
          setGymPlansError(
            "Gym pricing is temporarily unavailable. You can still start gym signup now and choose a plan inside the portal.",
          );
        }
      } finally {
        if (!cancelled) {
          setLoadingGymPlans(false);
        }
      }
    };

    void loadGymPlans();

    return () => {
      cancelled = true;
    };
  }, []);

  const billingCycle = isMonthly ? "monthly" : "annual";
  const gymInterval = isMonthly ? "month" : "year";

  const allowsAnnualGymBilling = useMemo(
    () => gymPlans.some((plan) => supportsGymPlanBillingCycle(plan, "annual")),
    [gymPlans],
  );

  const handleSelect = (planConfig) => {
    const params = new URLSearchParams();
    params.append("type", planConfig.type);
    params.append("plan", planConfig.plan);

    if (planConfig.interval) {
      params.append("interval", planConfig.interval);
    }

    const signupUrl = `https://portal.substats.app/signup?${params.toString()}`;
    window.location.href = signupUrl;
  };

  const handleGymSelect = (planCode?: string, interval?: "month" | "year") => {
    const params = new URLSearchParams();
    params.append("mode", "gym");

    if (planCode) {
      params.append("plan_code", planCode);
    }

    if (interval) {
      params.append("interval", interval);
    }

    window.location.href = `https://portal.substats.app/signup?${params.toString()}`;
  };

  const renderedGymPlans = gymPlans.filter((plan) =>
    supportsGymPlanBillingCycle(plan, billingCycle),
  );

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
              Individual and gym portal pricing for athletes, coaches, and
              academies that want clearer jiu-jitsu analysis workflows.
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
              Annual
            </span>
          </div>
        </div>

        <div>
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-black dark:text-white">
              Individual Grappler Portal
            </h3>
            <p className="mt-2 text-base text-body-color">
              For hobbyists, local competitors, or anyone wanting detailed match
              insights.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 justify-self-center md:grid-cols-2 lg:grid-cols-3">
            {individualPlans[billingCycle].map((plan) => (
              <PricingBox
                key={`${billingCycle}-${plan.packageName}`}
                packageName={plan.packageName}
                price={plan.price}
                duration={plan.duration}
                subtitle={plan.subtitle}
                onSelect={() => handleSelect(plan.config)}
              >
                {plan.offers.map((offer) => (
                  <OfferList
                    key={`${plan.packageName}-${offer.text}`}
                    text={offer.text}
                    status={offer.status as "active" | "inactive"}
                  />
                ))}
              </PricingBox>
            ))}
          </div>
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

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 justify-self-center">
            <PricingBox
              packageName="PDF Report"
              price={"2.99"}
              duration={"report"}
              subtitle="One time PDF Analysis report emailed directly to grappler"
              onSelect={() =>
                handleSelect({
                  type: "one_time",
                  plan: "pdf_report",
                })
              }
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
          </div>
        </div>

        <div id="gym-pricing" className="mt-16">
          <div className="flex justify-center">
            <SectionTitle>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white md:text-3xl">
                Gym Portal Plans
              </h3>
              <p className="text-base text-body-color">
                Live pricing from the public portal API. Select a gym plan and
                we&apos;ll send you to signup with that plan preselected.
              </p>
              {allowsAnnualGymBilling && (
                <p className="mt-3 text-sm text-primary">
                  Annual pricing is available on supported gym plans.
                </p>
              )}
            </SectionTitle>
          </div>

          {loadingGymPlans ? (
            <div className="flex min-h-[220px] items-center justify-center rounded-xl border border-stroke bg-white/70 p-10 shadow-three dark:border-white/10 dark:bg-gray-dark/70 dark:shadow-two">
              <div className="flex items-center gap-3 text-body-color">
                <Loader2 className="h-5 w-5 animate-spin" />
                Loading live gym pricing...
              </div>
            </div>
          ) : renderedGymPlans.length > 0 ? (
            <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-8">
              {renderedGymPlans.map((plan) => {
                const priceLabel = getGymPlanDisplayPrice(plan, billingCycle);
                const features = getGymPlanFeatures(plan, billingCycle);
                const discountLabel = getGymPlanDiscountLabel(plan);
                const seatsLabel =
                  plan.member_seat_limit === null
                    ? "Unlimited athlete seats"
                    : `${plan.member_seat_limit} athlete seats`;
                const creditsLabel =
                  billingCycle === "annual" && plan.yearly_credit_limit
                    ? `${plan.yearly_credit_limit} shared credits/year`
                    : `${plan.credit_limit} shared credits/month`;

                return (
                  <div
                    key={plan.id}
                    className="w-full max-w-[760px] rounded-xl bg-white p-6 py-8 shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark sm:px-8 sm:py-10 lg:w-[calc(50%-1rem)]"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h4 className="text-2xl font-bold text-black dark:text-white">
                          {plan.name}
                        </h4>
                        <p className="mt-2 text-base text-body-color">
                          Built for gyms that want one shared performance
                          workflow for coaches and athletes.
                        </p>
                      </div>
                      {discountLabel && billingCycle === "annual" ? (
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {discountLabel}
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-6 flex flex-wrap items-end gap-3">
                      <p className="text-3xl font-bold text-black dark:text-white">
                        {priceLabel ?? "Contact us"}
                      </p>
                      <p className="pb-1 text-sm text-body-color">
                        {creditsLabel} · {seatsLabel}
                      </p>
                    </div>

                    <div className="mt-8 border-b border-body-color border-opacity-10 pb-8 dark:border-white dark:border-opacity-10">
                      <button
                        onClick={() => handleGymSelect(plan.code, gymInterval)}
                        className="flex w-full items-center justify-center rounded-lg bg-primary p-3 text-base font-semibold text-white outline-none transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                      >
                        Start Gym Signup
                      </button>
                    </div>

                    <div className="mt-8">
                      {features.map((feature) => (
                        <OfferList
                          key={`${plan.code}-${feature}`}
                          text={feature}
                          status="active"
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="rounded-xl bg-white p-6 py-8 shadow-three dark:bg-gray-dark dark:shadow-two sm:px-8 sm:py-10">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h4 className="text-2xl font-bold text-black dark:text-white">
                    Gym Portal
                  </h4>
                  <p className="mt-2 max-w-2xl text-base text-body-color">
                    {gymPlansError ||
                      "Start your gym portal now and choose the right plan after signup."}
                  </p>
                </div>
                <button
                  onClick={() => handleGymSelect()}
                  className="rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition hover:bg-primary/80"
                >
                  Start Gym Signup
                </button>
              </div>
            </div>
          )}
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
