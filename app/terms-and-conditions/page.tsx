import { oswald } from "@/utils/fonts";

export default function TermsAndConditionsPage() {
  return (
    <main className="container my-4 flex flex-col items-center py-20">
      <h1
        className={`${oswald.className} w-full py-6 text-start text-4xl sm:text-5xl md:text-center`}
      >
        Terms and Conditions
      </h1>
      <div className="w-full space-y-6 leading-7 md:w-[70%]">
        <p className="text-sm text-gray-500">
          Last updated: October 10, 2026 · Version: 1.0
        </p>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>1. About Sub Stats</h2>
          <p>
            Sub Stats LLC (&ldquo;Sub Stats,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us&rdquo;) provides grappling analytics, video analysis,
            reports, gym collaboration tools, and digital products through its
            websites and applications.
          </p>
          <p>
            These Terms govern use of our services. Our{" "}
            <a href="/privacy-policy" className="underline">
              Privacy Policy
            </a>{" "}
            explains how we handle personal information.
          </p>
          <p>
            Contact:{" "}
            <a href="mailto:admin@substats.app" className="underline">
              admin@substats.app
            </a>
            .
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>
            2. Eligibility and Accounts
          </h2>
          <p>
            You must be at least 18 to create a portal account. Provide accurate
            account information, protect your credentials, and notify us of
            suspected unauthorized access. You are responsible for activity
            through your account, subject to applicable law.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>
            3. Uploaded Content and Authority
          </h2>
          <p>
            You retain any ownership rights you hold in content you submit. You
            must own it or have the authority and permissions needed to upload
            it and authorize its intended use.
          </p>
          <p>
            Providing a publicly accessible video link does not itself establish
            upload or training rights. Do not submit content that infringes
            another person&apos;s rights, violates applicable law, or that you
            are not authorized to share.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>
            4. Permission to Provide Services
          </h2>
          <p>
            When you submit content, you authorize Sub Stats and its authorized
            developers and service providers to host, store, access, reproduce,
            and process it as reasonably necessary to provide the requested
            services.
          </p>
          <p>
            This includes extracting frames, creating labels and annotations,
            analyzing footage, generating reports, and making content available
            to authorized users in the relevant workspace. Service-processing
            permission is separate from optional AI training permission.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>
            5. Optional AI Training Permission
          </h2>
          <p>
            Where you separately grant permission, you authorize Sub Stats to
            use covered videos and derived frames, labels, and annotations to
            train, evaluate, improve, and commercially operate its
            AI/computer-vision models, including processing by authorized
            developers and service providers.
          </p>
          <p>
            This permission is optional. Declining it does not prevent ordinary
            uploads, playback, annotation, or report generation.
          </p>
          <p>
            Signup permission covers future uploads described in the displayed
            consent. Previous uploads require separately recorded authorization.
            We retain records of the permission wording, version, date, and
            covered content.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>
            6. Withdrawal of Training Permission
          </h2>
          <p>
            Request withdrawal by emailing{" "}
            <a href="mailto:admin@substats.app" className="underline">
              admin@substats.app
            </a>{" "}
            from your registered email address. After verification and
            application of the request, covered videos and derived data are
            excluded from subsequent ML exports under our control.
          </p>
          <p>
            Withdrawal does not delete videos, annotations, or reports from the
            ordinary service. It cannot automatically recall downloaded datasets
            or existing temporary download links, or undo completed model
            training. Requests concerning previously shared data and trained
            models are handled as required by applicable law.
          </p>
          <p>
            Previously trained models and improvements may remain usable after
            deletion or withdrawal only to the extent permitted by applicable
            law. This does not authorize new training uses of content after
            withdrawal.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>7. Gym Workspaces</h2>
          <p>
            Gym videos and reports may be accessible to authorized owners,
            coaches, administrators, and members according to workspace
            permissions. Anyone uploading on another person&apos;s behalf must
            have authority to do so; gym membership or administrator access
            alone does not establish that authority.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>
            8. Analysis Limitations
          </h2>
          <p>
            AI-generated analysis and reports may contain errors or omissions.
            Review results before relying on them. Performance analysis is not
            medical advice and does not guarantee competition outcomes.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>
            9. Payments and Subscriptions
          </h2>
          <p>
            Prices, billing intervals, included services, and usage limits are
            presented before purchase. Payments are processed through Stripe.
          </p>
          <p>
            Review the purchase and billing information presented for your
            selected product before paying. Contact us with cancellation,
            refund, or billing questions. Nothing in these Terms excludes refund
            or cancellation rights provided by applicable law.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>10. Acceptable Use</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Do not submit unlawful content or content you lack authority to
              provide.
            </li>
            <li>
              Do not access another person&apos;s account or content without
              permission.
            </li>
            <li>
              Do not interfere with the service or bypass its security controls.
            </li>
            <li>
              Do not use the service for unlawful, abusive, or fraudulent
              purposes.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>
            11. Intellectual Property
          </h2>
          <p>
            Sub Stats retains its rights in its software, branding, and
            proprietary materials. These Terms do not transfer ownership of your
            uploaded content to Sub Stats.
          </p>
          <p>
            Any additional product-use restrictions will be identified with the
            relevant product or purchase terms.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>
            12. Suspension, Closure, and Deletion
          </h2>
          <p>
            We may restrict or suspend access where reasonably necessary to
            address security risks, unlawful activity, or material breaches of
            these Terms.
          </p>
          <p>
            Request account closure or content deletion at{" "}
            <a href="mailto:admin@substats.app" className="underline">
              admin@substats.app
            </a>
            . Retention and deletion follow the Privacy Policy and applicable
            law.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>
            13. Warranties and Liability
          </h2>
          <p>
            Nothing in these Terms excludes warranties, remedies, or liability
            that cannot lawfully be excluded. Your mandatory rights under
            applicable law remain unaffected.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>14. Changes</h2>
          <p>
            We may update these Terms, identify the revised date and version,
            and provide notice of material changes where required. A Terms
            update does not itself grant additional AI training permission; we
            will request any additional permission separately.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={`${oswald.className} text-2xl`}>
            15. Questions and Disputes
          </h2>
          <p>
            Contact admin@substats.app about service disputes. These Terms do
            not restrict mandatory consumer rights or legal remedies available
            under applicable law.
          </p>
        </section>
      </div>
    </main>
  );
}
