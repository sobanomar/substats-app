"use client";

import { Building2, CreditCard, Upload, Users } from "lucide-react";
import { oswald } from "@/utils/fonts";

const gymHighlights = [
  {
    icon: Building2,
    title: "Shared gym workspace",
    description:
      "Create one portal for your academy and manage uploads, reports, and billing from a single place.",
  },
  {
    icon: Users,
    title: "Invite coaches and athletes",
    description:
      "Send invite links by email and bring your team into the same workflow without juggling separate tools.",
  },
  {
    icon: Upload,
    title: "Upload for any member",
    description:
      "Coaches can upload videos for athletes, athletes can upload their own footage, and everyone stays organized.",
  },
  {
    icon: CreditCard,
    title: "Track shared credits",
    description:
      "Monitor remaining credits, member usage, and subscription status the same way gym owners do inside the portal.",
  },
];

const gymSteps = [
  "Create your gym after signup and enter the coach workspace.",
  "Invite athletes or assistant coaches with role-based access.",
  "Upload videos, review reports, and manage shared credits across the team.",
];

const gymSignupUrl = "https://portal.substats.app/signup?mode=gym";

export default function GymSection() {
  return (
    <section id="gym" className="relative overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0 z-[-1] bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      <div className="absolute left-0 top-0 z-[-1] h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 z-[-1] h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="container">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Gym Module
          </p>
          <h2
            className={`${oswald.className} text-4xl font-bold uppercase leading-tight text-black dark:text-white md:text-[50px]`}
          >
            Give your whole gym a shared analysis workflow
          </h2>
          <p className="mt-5 text-base leading-8 text-body-color md:text-lg">
            The same gym portal used inside AthleteAI is now part of the Sub
            Stats marketing experience too. Gym owners can launch a shared
            workspace, invite members, upload athlete footage, and manage team
            analysis credits in one place.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {gymHighlights.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-lg shadow-slate-200/40 backdrop-blur dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-black dark:text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-body-color">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-8 shadow-lg shadow-slate-200/40 backdrop-blur dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none">
            <h3
              className={`${oswald.className} text-2xl font-bold uppercase text-black dark:text-white`}
            >
              What gym owners get
            </h3>
            <p className="mt-3 text-base leading-8 text-body-color">
              The portal code shows a real gym workspace with member invites,
              shared upload flows, all-gym reporting, and subscription tracking.
              This section now reflects that product instead of treating Sub
              Stats as only an individual tool.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/#gym-pricing"
                className="rounded-lg bg-primary px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-primary/90"
              >
                View Gym Pricing
              </a>
              <a
                href={gymSignupUrl}
                className="rounded-lg border border-primary/20 px-8 py-3 text-center text-base font-semibold text-primary transition hover:bg-primary/5"
              >
                Start Gym Signup
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-8 shadow-lg shadow-slate-200/40 backdrop-blur dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary dark:text-sky-300">
              Coach Flow
            </p>
            <ul className="mt-5 space-y-4">
              {gymSteps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary dark:bg-white/10 dark:text-sky-300">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-7 text-body-color dark:text-white/75">
                    {step}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
