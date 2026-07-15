import type { GymPlan } from "@/types/gymPlan";

export type GymPlanBillingCycle = "monthly" | "annual";

const DEFAULT_MARKETING_FEATURES = [
  "Coach + athlete uploads",
  "Invite-only gym access",
  "Shared credit pool",
  "Gym-wide reporting view",
];

function formatPriceFromCents(
  cents: number | null | undefined,
  currency: string | null | undefined,
  interval: "month" | "year",
): string | null {
  if (typeof cents !== "number") return null;

  return (
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency?.toUpperCase() || "USD",
      maximumFractionDigits: 0,
    }).format(cents / 100) + `/${interval}`
  );
}

export function getGymPlanDisplayPrice(
  plan: GymPlan,
  billingCycle: GymPlanBillingCycle,
): string | null {
  if (billingCycle === "annual") {
    return (
      plan.yearly_price_display ??
      formatPriceFromCents(plan.yearly_price_cents, plan.currency, "year")
    );
  }

  return (
    plan.monthly_price_display ??
    formatPriceFromCents(plan.monthly_price_cents, plan.currency, "month")
  );
}

export function getGymPlanDiscountLabel(plan: GymPlan): string | null {
  if (
    typeof plan.yearly_discount_percent !== "number" ||
    plan.yearly_discount_percent <= 0
  ) {
    return null;
  }

  return `Save ${plan.yearly_discount_percent}%`;
}

export function getGymPlanFeatures(
  plan: GymPlan,
  billingCycle: GymPlanBillingCycle,
): string[] {
  if (plan.marketing_features?.length) {
    return plan.marketing_features;
  }

  const creditsLabel =
    billingCycle === "annual" && plan.yearly_credit_limit
      ? `${plan.yearly_credit_limit} shared match analysis credits / year`
      : `${plan.credit_limit} shared match analysis credits / month`;

  const seatLabel =
    plan.member_seat_limit === null
      ? "Unlimited active athletes"
      : `Up to ${plan.member_seat_limit} active athletes`;

  return [creditsLabel, seatLabel, ...DEFAULT_MARKETING_FEATURES];
}

export function supportsGymPlanBillingCycle(
  plan: GymPlan,
  billingCycle: GymPlanBillingCycle,
): boolean {
  if (!plan.billing_intervals?.length) return true;

  const interval = billingCycle === "annual" ? "year" : "month";
  return plan.billing_intervals.includes(interval);
}
