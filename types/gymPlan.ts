export type GymPlan = {
  id: number;
  code: string;
  name: string;
  credit_limit: number;
  yearly_credit_limit?: number | null;
  member_seat_limit: number | null;
  currency?: string;
  monthly_price_cents?: number | null;
  monthly_price_display?: string | null;
  yearly_price_cents?: number | null;
  yearly_price_display?: string | null;
  yearly_discount_percent?: number | null;
  billing_intervals?: Array<"month" | "year">;
  marketing_features?: string[] | null;
  active?: boolean;
};

export type GymPlansResponse = {
  plans: GymPlan[];
};
