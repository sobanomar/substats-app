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
      <div className="w-full space-y-6 md:w-[70%]">
        <p className="text-sm text-gray-500">Last updated: May 25, 2026</p>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>1. Who We Are</h2>
          <p>
            Sub Stats LLC (&ldquo;Sub Stats,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) operates substats.app and
            cards.substats.app. Contact:{" "}
            <a
              href="mailto:admin@substats.app"
              className="underline"
            >
              admin@substats.app
</a>
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>2. What We Collect</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Analytics platform:</strong> Athlete names, competition
              results, performance data sourced from public grappling events
            </li>
            <li>
              <strong>Cards product:</strong> Name, email address, payment
              information (processed by Stripe — we never store card numbers)
            </li>
            <li>
              <strong>Website:</strong> IP address, browser type, usage data via
              cookies
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>3. How We Use It</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Deliver purchased products and send order confirmations</li>
            <li>
              Provide grappling analytics services to event organizations
            </li>
            <li>Improve our platform and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>
            4. Who We Share It With
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Stripe — payment processing</li>
            <li>No one else without your explicit consent</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>5. Your Rights</h2>
          <p>
            Regardless of where you live, you may request to access, correct, or
            delete your personal data at any time. California residents have
            additional rights under CCPA. UK/EU residents have rights under GDPR
            including data portability and the right to object to processing. To
            exercise any right, email{" "}
            <a
              href="mailto:admin@substats.app"
              className="underline"
            >
              admin@substats.app
            </a>{" "}
            and we will respond within 30 days.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>6. Data Retention</h2>
          <p>
            We retain customer purchase data for 7 years for tax purposes. All
            other personal data is deleted upon request.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>7. Cookies</h2>
          <p>
            We use essential cookies for site functionality. You may disable
            cookies in your browser settings.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>8. Children</h2>
          <p>
            We do not knowingly collect data from anyone under 13.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>9. Changes</h2>
          <p>
            We will post updates to this page with a revised date.
          </p>
        </section>
      </div>
    </div>
  );
};

export default page;
