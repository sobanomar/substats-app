import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 xl:w-1/2">
              <SectionTitle
                title="WHAT WE'RE ABOUT"
                paragraph={[
                  "Hey there, Jiu-Jitsu competitor! Looking to optimize your performance and get a competitive edge? Then you've come to the right place. We're a team of BJJ fanatics, excited to help you make informed decisions using detailed data analysis.",
                  "The fast-paced world of Jiu-Jitsu is constantly evolving, so staying ahead of the curve is crucial. That's why we've cooked up a range of services to provide you with the data driven strategies you need to have that competitive edge. ",
                ]}
                mb="44px"
              />

              <h1 className="animate-fade-in-up mb-6 text-base !leading-relaxed text-body-color md:text-lg">
                Here&apos;s what we can do for you:
              </h1>

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="animate-fade-in-up mx-[-12px]">
                  <div className="w-full px-3 ">
                    <List text="In-depth tournament result analysis." />
                    <List text="Technique recommendations unique to you." />
                    <List text="Accessible data analytic reports at your fingertips" />
                  </div>
                </div>
              </div>
              <h1 className="animate-fade-in-up mb-6 text-base !leading-relaxed text-body-color md:text-lg">
                Don&apos;t fall behind, click the link below to get in contact
                with one of our data stranglers. Let&apos;s get rollin!
              </h1>
              <div className=" my-4 flex flex-col space-y-4 text-center sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="/"
                  className="animate-fade-in  rounded-lg bg-primary px-8 py-2 text-base font-semibold text-white hover:bg-primary/80 md:py-4"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </div>

            <div className="w-full p-6 xl:w-1/2">
              <div className="wow fadeInUp animate-fade-in relative mx-auto">
                {/* Large screens: Photo grid (2x2) */}
                <div className="hidden lg:grid lg:grid-cols-2 lg:gap-4">
                  {/* Photo 1 */}
                  <div className="animate-scale-in delay-1 relative aspect-square overflow-hidden rounded-xl">
                    <Image
                      src="/jiu-jitsu/4.webp"
                      alt="jiu-jitsu training"
                      fill
                      className="object-cover drop-shadow-three dark:drop-shadow-none"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl bg-white opacity-10 dark:bg-black dark:opacity-40"></div>
                  </div>

                  {/* Photo 2 */}
                  <div className="animate-scale-in delay-2 relative aspect-square overflow-hidden rounded-xl">
                    <Image
                      src="/jiu-jitsu/5.webp" // You can change this path
                      alt="jiu-jitsu technique"
                      fill
                      className="object-cover drop-shadow-three dark:drop-shadow-none"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl bg-white opacity-10 dark:bg-black dark:opacity-40"></div>
                  </div>

                  {/* Photo 3 */}
                  <div className="animate-scale-in delay-3 relative aspect-square overflow-hidden rounded-xl lg:hidden xl:flex">
                    <Image
                      src="/jiu-jitsu/3.jpg" // You can change this path
                      alt="jiu-jitsu competition"
                      fill
                      className="object-cover drop-shadow-three dark:drop-shadow-none"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl bg-white opacity-10 dark:bg-black dark:opacity-40"></div>
                  </div>

                  {/* Photo 4 */}
                  <div className="animate-scale-in delay-4 relative aspect-square overflow-hidden rounded-xl lg:hidden xl:flex">
                    <Image
                      src="/jiu-jitsu/1.webp" // You can change this path
                      alt="jiu-jitsu mat"
                      fill
                      className="object-cover drop-shadow-three dark:drop-shadow-none"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl bg-white opacity-10 dark:bg-black dark:opacity-40"></div>
                  </div>
                </div>

                {/* Small screens: Single column with 2 photos */}
                <div className="space-y-4 lg:hidden">
                  {/* Photo 1 */}
                  <div className="animate-fade-in-up delay-1 relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src="/jiu-jitsu/4.webp"
                      alt="jiu-jitsu training"
                      fill
                      className="object-cover drop-shadow-three dark:drop-shadow-none"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl bg-white opacity-10 dark:bg-black dark:opacity-40"></div>
                  </div>

                  {/* Photo 2 */}
                  <div className="animate-fade-in-up delay-2 relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src="/jiu-jitsu/5.webp" // You can change this path
                      alt="jiu-jitsu technique"
                      fill
                      className="object-cover drop-shadow-three dark:drop-shadow-none"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl bg-white opacity-10 dark:bg-black dark:opacity-40"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
