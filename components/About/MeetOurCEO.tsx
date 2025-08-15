import Image from "next/image";
import { oswald } from "@/utils/fonts";

const MeetOurCEO = () => {
  return (
    <section className="md:py-160 py-14 lg:py-20">
      <div className="container">
        <div className="mb-8 text-center lg:mb-16">
          <h3
            className={`${oswald.className} mb-4 text-4xl font-bold text-black dark:text-white md:text-[50px]`}
          >
            MEET OUR CEO
          </h3>
        </div>
        <div className="-mx-4 flex flex-wrap ">
          <div className="flex w-full justify-center px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mb-12 aspect-[25/24] w-full md:max-w-[500px]"
              data-wow-delay=".15s"
            >
              <Image
                src="/jiu-jitsu/ceo_substats.avif"
                alt="CEO Image"
                fill
                className="rounded-xl object-cover drop-shadow-three dark:drop-shadow-none"
                priority
              />
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp" data-wow-delay=".2s">
              <div className="mb-6">
                <h3
                  className={`${oswald.className} mb-4 text-3xl font-bold uppercase text-black dark:text-white sm:text-3xl`}
                >
                  Head Data Strangler
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Meet Abe Diaz, the driving force behind Sub Stats. As a Marine
                  Corps veteran and data analyst consultant, Abe fuses his
                  passion for Brazilian Ju-Jitsu and data analytics to create a
                  one-of-a-kind service for competitors.
                </p>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Abe&apos;s military background has shaped his discipline and
                  work ethic, which he channels into his data-driven approach to
                  BJJ. His expertise as a data analyst consultant empowers him
                  to decipher complex data, using it to help others up their
                  game and thrive in the industry.
                </p>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Inspired by the impact of data analytics on his own
                  performance, Abe is committed to equipping the BJJ community
                  with the tools and guidance necessary to make informed
                  decisions and reach new heights.
                </p>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Thank you for choosing Sub Stats. We eagerly await the
                  opportunity to work with you and leveling up your game.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurCEO;
