import { oswald } from "@/utils/fonts";
import bgImage from "@/public/jiu-jitsu/7.webp";

const VideoTutorialEmbed = ({ title, videoPath, delay, poster }) => (
  <div
    className="wow fadeInUp rounded-xl bg-white !bg-opacity-70 p-6 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark md:p-8"
    data-wow-delay={delay}
  >
    <h3
      className={`${oswald.className} mb-4 text-2xl font-bold uppercase text-black dark:text-white`}
    >
      {title}
    </h3>
    <div className="relative h-full w-full overflow-hidden rounded-lg">
      <video className="h-full w-full" controls poster={poster}>
        <source src={videoPath} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
);

const ServiceCard = ({ title, delay, children }) => (
  <div
    className="wow fadeInUp rounded-xl bg-white !bg-opacity-70 p-6 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark md:p-8"
    data-wow-delay={delay}
  >
    <h3
      className={`${oswald.className} mb-2 text-2xl font-bold uppercase text-black dark:text-white`}
    >
      {title}
    </h3>
    {children}
  </div>
);

const Services = () => {
  const processList = [
    'Upload your match videos to Google Drive (set sharing to "Anyone with the link can view").',
    "Alternatively, upload them to YouTube (set to Unlisted or Public).",
    "Copy the video link from Google Drive or YouTube.",
    'Log in to your portal and navigate to the "Video URL" page from the navigation panel.',
    "Paste your video link, upload, and you’re done!",
  ];

  const youtubeVideoPath = "/jiu-jitsu/video_tutorials/youtube_tutorial.mp4";
  const driveVideoPath = "/jiu-jitsu/video_tutorials/google_drive_tutorial.mp4";

  const youtubePoster = "/jiu-jitsu/video_tutorials/youtube_thumbnail.png";
  const drivePoster = "/jiu-jitsu/video_tutorials/drive_thumbnail.png";

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
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 md:gap-y-10 lg:grid-cols-4">
          {/* Competition Analysis Card */}
          <ServiceCard title="Competition Analysis" delay=".1s">
            <p className="text-base  font-medium leading-relaxed text-body-color  sm:leading-relaxed">
              We offer in-depth analysis of competition results, including
              detailed breakdowns of competitors, their techniques, and unique
              strategies. This can help competitors to effectively identify
              their strengths, pinpoint weaknesses, and make targeted
              improvements to their game.
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
          <ServiceCard title="AI Jiu Jitsu Coach" delay=".1s">
            <p className="text-base font-medium leading-relaxed text-body-color  sm:leading-relaxed">
              Train smarter with our AI-powered analysis tools. Get instant
              feedback on your performance, tactical advice, and personalized
              training paths to elevate your skills. The system is designed to
              provide custom insights that help refine your technique and
              strategy.
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
          <ServiceCard title="Accessible Data Reports" delay=".1s">
            <p className="text-base font-medium leading-relaxed text-body-color  sm:leading-relaxed">
              Receive crisp, easy-to-digest analytical reports delivered
              straight to your dashboard. This allows you to effortlessly track
              your progress and spot important trends over time, giving you a
              clear, data-driven overview of your journey and performance.
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
          <ServiceCard title="Sub Stats Cards" delay=".1s">
            <p className="text-base font-medium leading-relaxed text-body-color  sm:leading-relaxed">
              Turn your performance into a shareable athlete card. Highlight
              your identity, key stats, and competitive profile in a format
              built for coaches, teammates, events, and social sharing. Present
              your achievements in a polished, easy-to-read format that helps
              you stand out.
            </p>
            <div className="mt-4 flex flex-col space-y-4 text-center sm:flex-row sm:space-x-4 sm:space-y-0">
              <a
                href="https://cards.substats.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="animate-fade-in rounded-lg bg-primary px-8 py-2 text-base font-semibold text-white hover:bg-primary/80 md:py-3"
              >
                Build My Card
              </a>
            </div>
          </ServiceCard>
        </div>

        {/* --- */}

        {/* New Tutorials Section */}
        <div className="my-8 text-center lg:my-16">
          <h2
            className={`${oswald.className} mb-4 text-3xl font-bold uppercase text-black dark:text-white md:text-[40px]`}
          >
            Video Tutorials
          </h2>
          <p className="text-lg font-medium leading-relaxed text-body-color sm:text-xl sm:leading-relaxed">
            Watch these short tutorials to see exactly how to **upload your
            match videos**.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 md:gap-y-10">
          <VideoTutorialEmbed
            title="YouTube Upload Tutorial"
            videoPath={youtubeVideoPath}
            delay=".1s"
            poster={youtubePoster}
          />

          <VideoTutorialEmbed
            title="Google Drive Upload Tutorial"
            videoPath={driveVideoPath}
            delay=".2s"
            poster={drivePoster}
          />
        </div>

        {/* --- */}

        {/* Process Card */}
        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 md:gap-y-10">
          <ServiceCard title="The Process" delay=".2s">
            <div className="flex flex-col gap-4">
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                <span className="font-semibold text-gray-500 dark:text-gray-300">
                  1. Upload your videos -{" "}
                </span>
                Start by uploading your match videos to Google Drive (set
                sharing to &quot;Anyone with the link can view&quot;) or YouTube
                (set to Unlisted or Public). Then follow the steps below:
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
                Once your video links are uploaded, our team will process them
                to generate detailed analytics and insights, delivering
                personalized feedback directly to your portal.
              </p>
            </div>
          </ServiceCard>
        </div>
      </div>
    </section>
  );
};

export default Services;
