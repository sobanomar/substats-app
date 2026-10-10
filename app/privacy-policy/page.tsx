import { oswald } from "@/utils/fonts";

export default function PrivacyPolicyPage() {
  return (
    <main className="container my-4 flex flex-col items-center py-20">
      <h1
        className={`${oswald.className} w-full py-6 text-start text-4xl sm:text-5xl md:text-center`}
      >
        Privacy Policy
      </h1>
      <div className="w-full space-y-6 leading-7 md:w-[70%]">
        <p className="text-sm text-gray-500">
          Last updated: October 10, 2026 · Version: 1.0
        </p>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>1. Who We Are</h2>
          <p>
            Sub Stats LLC (&ldquo;Sub Stats,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us&rdquo;) operates substats.app, cards.substats.app, and the
            Sub Stats video-analysis portal. This notice explains how we handle
            personal information across these services.
          </p>
          <p>
            Contact us at{" "}
            <a href="mailto:admin@substats.app" className="underline">
              admin@substats.app
            </a>
            .
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>
            2. Information We Collect
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Accounts:</strong> Names or usernames, email addresses,
              account roles, and gym membership information.
            </li>
            <li>
              <strong>Video services:</strong> Uploaded videos and submitted
              video links, associated file information, and images or voices of
              people appearing in footage. Processing can produce frames, clips,
              labels, annotations, performance analysis, and reports.
            </li>
            <li>
              <strong>Consent records:</strong> Permission choices, the wording
              and document versions accepted, timestamps, associated account and
              video identifiers, and evidence of separately recorded permission.
            </li>
            <li>
              <strong>Public-event analytics:</strong> Athlete names,
              competition results, and performance information sourced from
              public grappling events.
            </li>
            <li>
              <strong>Purchases:</strong> Order, subscription, and transaction
              information. Stripe processes payment-card information; Sub Stats
              does not store full payment-card numbers.
            </li>
            <li>
              <strong>Technical information:</strong> IP addresses, browser and
              device information, service logs, and information needed for
              website functionality.
            </li>
          </ul>
          <p>
            Videos may contain information about people other than the uploader.
            Uploaders must have the authority and permissions needed to submit
            the footage and authorize its intended use.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>
            3. How We Use Information
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Create and manage accounts, subscriptions, and gym workspaces.
            </li>
            <li>
              Process videos, support authorized annotation, and generate
              analysis and reports.
            </li>
            <li>
              Deliver purchased products, process transactions, and provide
              service communications and support.
            </li>
            <li>
              Maintain service security and reliability and meet applicable
              legal obligations.
            </li>
            <li>
              Use covered videos and derived data for AI purposes only where the
              applicable training permission has been recorded, as described
              below.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>
            4. Uploaded Videos and Optional AI Training
          </h2>
          <p>
            Processing videos to provide the analysis services you request is
            separate from optional permission to use them for AI training.
          </p>
          <p>
            Where you separately authorize it, Sub Stats may use covered videos
            and derived frames, labels, and annotations to train, evaluate,
            improve, and commercially operate its AI/computer-vision models,
            including processing by authorized developers and service providers.
          </p>
          <p>
            AI training permission is optional. Declining it does not prevent
            ordinary uploads, playback, annotation, or report generation. Videos
            without applicable training permission and their derived data are
            excluded from subsequent ML training exports.
          </p>
          <p>
            Signup permission covers future uploads described in the displayed
            consent. Previous uploads require separately recorded authorization
            covering that content. We retain records of the permission and its
            scope.
          </p>
          <p>
            You may request withdrawal by emailing{" "}
            <a href="mailto:admin@substats.app" className="underline">
              admin@substats.app
            </a>{" "}
            from your registered email address. After verification and
            application of the request, covered content is excluded from
            subsequent ML exports under our control.
          </p>
          <p>
            Withdrawal does not automatically delete videos or reports, recall
            already downloaded datasets or existing temporary download links, or
            undo completed model training. Requests concerning previously shared
            data and trained models are handled as required by applicable law.
          </p>
          <p>
            Previously trained models and improvements may remain usable after
            the original upload is deleted or permission is withdrawn only to
            the extent permitted by applicable law. This does not authorize new
            training uses of content after withdrawal.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>
            5. Access and Sharing
          </h2>
          <p>
            Information may be accessed by authorized Sub Stats personnel,
            developers, and service providers as needed for their permitted
            work. Gym content may be accessible to authorized owners, coaches,
            administrators, and members according to workspace permissions.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Stripe for payment processing.</li>
            <li>
              Hosting, storage, communication, and processing providers
              supporting delivery and security of our services.
            </li>
            <li>
              Other recipients where you authorize sharing or disclosure is
              required or permitted by applicable law.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>
            6. Retention and Deletion
          </h2>
          <p>
            We retain information for the periods necessary for the stated
            purposes, subject to applicable legal obligations. Account closure,
            video deletion, and withdrawal of training permission are distinct
            requests.
          </p>
          <p>
            Retention depends on the type of information, account activity, the
            services requested, and legal requirements. Transaction records and
            consent evidence may be retained where necessary for legal
            obligations or to document permissions. Backup copies may remain
            until they are removed through backup rotation.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>
            7. Your Choices and Rights
          </h2>
          <p>
            Depending on applicable law, you may have rights to access, correct,
            delete, or obtain a copy of your information, restrict or object to
            processing, and withdraw consent. Withdrawal does not affect the
            lawfulness of processing based on consent before withdrawal.
          </p>
          <p>
            To make a request, contact{" "}
            <a href="mailto:admin@substats.app" className="underline">
              admin@substats.app
            </a>
            . We may need to verify your identity and will respond within
            applicable legal deadlines.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>
            8. Cookies and Similar Technologies
          </h2>
          <p>
            We use cookies and browser storage to support site functionality and
            preferences. You may manage these through browser settings;
            disabling them may affect some features.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>
            9. Security and International Processing
          </h2>
          <p>
            No online service can guarantee absolute security. Information may
            be processed where Sub Stats and its service providers operate,
            subject to applicable data-protection requirements. Contact us for
            information about processing locations and safeguards relevant to
            your data.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>
            10. Account Eligibility
          </h2>
          <p>
            Our portal requires users to confirm that they are at least 18 when
            registering. This account requirement does not establish the ages of
            other people appearing in submitted footage.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>
            11. Changes to This Notice
          </h2>
          <p>
            We will identify updates with a revised date and version and provide
            additional notice where required. Publishing an update does not
            itself grant additional permission to use your content for AI
            training.
          </p>
          <p>
            See our{" "}
            <a href="/terms-and-conditions" className="underline">
              Terms and Conditions
            </a>{" "}
            for the rules governing use of the service.
          </p>
        </section>
      </div>
    </main>
  );
}
