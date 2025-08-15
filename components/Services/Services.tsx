import { oswald } from "@/utils/fonts";
import Link from "next/link";
import bgImage from "@/public/jiu-jitsu/7.webp";

const ServiceCard = ({ title, delay, children }) => (
  <div
    className="wow fadeInUp rounded-xl bg-white !bg-opacity-70 p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark md:p-12"
    data-wow-delay={delay}
  >
    <h3
      className={`${oswald.className} mb-4 text-3xl font-bold uppercase text-black dark:text-white sm:text-3xl`}
    >
      {title}
    </h3>
    {children}
  </div>
);

const Services = () => {
  const processList = [
    "Upload your competition match videos to your YouTube account.",
    'Set the privacy of each video to "Unlisted."',
    "Copy the video links from YouTube.",
    "Paste the copied links into the designated field in the contact form.",
  ];

  return (
    <section
      id="services"
      className="md:py-160 relative overflow-hidden py-14 lg:py-20"
    >
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
        <div className="mb-8 text-center lg:mb-16">
          <h2
            className={`${oswald.className} mb-4 text-4xl font-bold uppercase text-black dark:text-white md:text-[50px]`}
          >
            What We Offer
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:gap-y-10">
          {/* Tournament Analysis Card */}
          <ServiceCard title="Tournament Analysis" delay=".1s">
            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
              We provide in-depth analysis of tournament results, including
              breakdowns of competitors, techniques, and strategies. This can
              help competitors identify strengths and weaknesses, and make
              targeted improvements to their game.
            </p>
            <div className="mt-4 flex flex-col space-y-4 text-center sm:flex-row sm:space-x-4 sm:space-y-0">
              <a
                href="#contact"
                className="animate-fade-in rounded-lg bg-primary px-8 py-2 text-base font-semibold text-white hover:bg-primary/80 md:py-3"
              >
                Learn More
              </a>
            </div>
          </ServiceCard>

          {/* Process Card */}
          <ServiceCard title="The Process" delay=".2s">
            <div className="flex flex-col gap-4">
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                <span className="font-semibold text-gray-500 dark:text-gray-300">
                  1. Submit contact form -{" "}
                </span>
                To start the process of utilizing our data analytics services,
                the first step is to fill out and submit the contact form on our
                website. Please upload your videos to YouTube, set the privacy
                of each video to &quot;Unlisted,&quot; and paste the links in
                the contact form. Instructions below:
              </p>

              <ul className="ml-8 list-disc text-base font-medium leading-relaxed text-body-color marker:text-gray-500 marker:dark:text-gray-300 sm:text-lg sm:leading-relaxed">
                {processList.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>

              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                <span className="font-semibold text-gray-500 dark:text-gray-300">
                  2. Receive tailored analytics -{" "}
                </span>
                Upon receiving your contact form, our team will begin analyzing
                your provided data to deliver personalized analytics insights
                directly to you. This analysis will provide detailed statistics
                and insights based on your competition match videos.
              </p>
            </div>
          </ServiceCard>
        </div>
      </div>
    </section>
  );
};

export default Services;
