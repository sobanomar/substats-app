import Image from "next/image";
import { oswald } from "@/utils/fonts";

const MissionStatement = () => {
  return (
    <section className="md:py-160 relative overflow-hidden py-14 lg:py-20 ">
      <div className="container relative z-10 ">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative z-20 pb-6"
              data-wow-delay=".2s"
            >
              <div className="mb-6">
                <h3
                  className={`${oswald.className} mb-4 text-3xl font-bold uppercase text-black dark:text-white sm:text-3xl md:text-5xl`}
                >
                  Mission Statement
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  The mission of Sub Stats is to empower BJJ athletes by
                  providing them with comprehensive analytical reports based on
                  their performance data. Our goal is to help competitors gain a
                  deeper understanding of their strengths and weaknesses,
                  enabling them to make data-driven decisions to improve their
                  performance.
                </p>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  By leveraging the power of data analytics, we strive to
                  provide our clients with the insights and tools they need to
                  achieve their full potential in the world of BJJ competition.​
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative z-20 mb-12 aspect-[25/24] w-full md:max-w-[550px]"
              data-wow-delay=".15s"
            >
              <Image
                src="/jiu-jitsu/mission_statement.avif"
                alt="CEO Image"
                fill
                className="rounded-xl object-cover drop-shadow-three dark:drop-shadow-none"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl bg-white opacity-10 dark:bg-black dark:opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
