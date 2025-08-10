import { oswald } from "@/utils/fonts";

const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string | string[];
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2
          className={`${oswald.className} animate-fade-in mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[50px]`}
        >
          {title}
        </h2>
        <div className="flex flex-col gap-4">
          {Array.isArray(paragraph) ? (
            paragraph.map((text, idx) => (
              <p
                key={idx}
                className="animate-fade-in-up text-base !leading-relaxed text-body-color md:text-lg"
              >
                {text}
              </p>
            ))
          ) : (
            <p className="animate-fade-in-up text-base !leading-relaxed text-body-color md:text-lg">
              {paragraph}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default SectionTitle;
