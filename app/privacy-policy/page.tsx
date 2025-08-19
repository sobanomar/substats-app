import { oswald } from "@/utils/fonts";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="container my-4 flex flex-col items-center py-20">
      <h1
        className={`${oswald.className} w-full py-6 text-start text-4xl sm:text-5xl md:text-center`}
      >
        Privacy Policy
      </h1>
      <p className="w-full md:w-[70%]">
        Privacy Policy At Sub Stats, we take your privacy seriously. We
        understand that the data we collect from BJJ competitions is personal
        and sensitive information, and we are committed to protecting it. We use
        industry-standard security measures to safeguard your data and never
        share it with third parties without your consent. We only collect data
        that is necessary to provide our BJJ data analytics services and will
        only use it for that purpose. If you have any questions or concerns
        about our privacy practices, please don&apos;t hesitate to contact us.
      </p>
    </div>
  );
};

export default page;
