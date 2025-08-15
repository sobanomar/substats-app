import { oswald } from "@/utils/fonts";
import Link from "next/link";
import React from "react";
import bgImage from "@/public/jiu-jitsu/7.webp";

const PROCESS_STEPS = [
  "Upload your competition match videos to your YouTube account.",
  'Set the privacy of each video to "Unlisted."',
  "Copy the video links from YouTube.",
  "Paste the copied links into the designated field in the contact form.",
] as const;

const SERVICES_DATA = [
  {
    id: "tournament-analysis",
    title: "Tournament Analysis",
    description:
      "We provide in-depth analysis of tournament results, including breakdowns of competitors, techniques, and strategies. This can help competitors identify strengths and weaknesses, and make targeted improvements to their game.",
    hasButton: true,
  },
  {
    id: "process",
    title: "The Process",
    description: null,
    hasButton: false,
  },
] as const;

const ServiceCard = ({
  service,
  delay,
}: {
  service: (typeof SERVICES_DATA)[0];
  delay: string;
}) => (
  <div
    className="wow fadeInUp rounded-xl bg-white !bg-opacity-70 p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark md:p-12"
    data-wow-delay={delay}
  >
    <h3
      className={`${oswald.className} mb-4 text-3xl font-bold uppercase text-black dark:text-white sm:text-3xl`}
    >
      {service.title}
    </h3>

    {service.id === "tournament-analysis" && (
      <>
        <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
          {service.description}
        </p>
        <div className="mt-4 flex flex-col space-y-4 text-center sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link
            href="/"
            className="animate-fade-in rounded-lg bg-primary px-8 py-2 text-base font-semibold text-white hover:bg-primary/80 md:py-3"
          >
            Learn More
          </Link>
        </div>
      </>
    )}

    {service.id === "process" && (
      <div className="flex flex-col gap-4">
        <ProcessStep
          stepNumber={1}
          title="Submit contact form"
          description='To start the process of utilizing our data analytics services, the first step is to fill out and submit the contact form on our website. Please upload your videos to YouTube, set the privacy of each video to "Unlisted," and paste the links in the contact form. Instructions below:'
        />

        <ProcessList steps={PROCESS_STEPS} />

        <ProcessStep
          stepNumber={2}
          title="Receive tailored analytics"
          description="Upon receiving your contact form, our team will begin analyzing your provided data to deliver personalized analytics insights directly to you. This analysis will provide detailed statistics and insights based on your competition match videos."
        />
      </div>
    )}
  </div>
);

const ProcessStep = ({
  stepNumber,
  title,
  description,
}: {
  stepNumber: number;
  title: string;
  description: string;
}) => (
  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
    <span className="font-semibold text-gray-500 dark:text-gray-300">
      {stepNumber}. {title} -{" "}
    </span>
    {description}
  </p>
);

const ProcessList = ({ steps }: { steps: readonly string[] }) => (
  <ul className="ml-8 list-disc text-base font-medium leading-relaxed text-body-color marker:text-gray-600 marker:dark:text-gray-300 sm:text-lg sm:leading-relaxed">
    {steps.map((step, index) => (
      <li key={index}>{step}</li>
    ))}
  </ul>
);

const Services = () => {
  return (
    <section className="md:py-160 relative overflow-hidden py-14 lg:py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
        }}
      />

      <div className="container relative z-10">
        {/* Section Header */}
        <header className="mb-8 text-center lg:mb-16">
          <h2
            className={`${oswald.className} mb-4 text-4xl font-bold uppercase text-black dark:text-white md:text-[50px]`}
          >
            What We Offer
          </h2>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:gap-y-10">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              delay={`.${index + 1}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
