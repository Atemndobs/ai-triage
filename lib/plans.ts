export type PaidPlanId = "starter" | "business";

export type Plan = {
  id: "starter" | "business" | "enterprise";
  name: string;
  priceLabel: string;
  description: string;
  setupFeeLabel?: string;
  monthlyFeeLabel?: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    priceLabel: "$2K setup + $500/mo",
    setupFeeLabel: "$2,000 setup",
    monthlyFeeLabel: "$500/month",
    description: "Fast AI triage for one business.",
    features: [
      "1 business/property",
      "Basic AI routing (email + Slack)",
      "1,000 tickets/month",
      "Email support"
    ],
    cta: "Start Starter"
  },
  {
    id: "business",
    name: "Business",
    priceLabel: "$5K setup + $1K/mo",
    setupFeeLabel: "$5,000 setup",
    monthlyFeeLabel: "$1,000/month",
    description: "Built for scaling support teams.",
    features: [
      "Up to 3 businesses",
      "Priority routing + sentiment analysis",
      "5,000 tickets/month",
      "Analytics dashboard",
      "Slack + priority support"
    ],
    cta: "Choose Business",
    highlighted: true
  },
  {
    id: "enterprise",
    name: "Enterprise",
    priceLabel: "Custom pricing",
    description: "Tailored solution for high-volume operations.",
    features: [
      "10+ businesses",
      "White-label solution",
      "Unlimited tickets",
      "Custom integrations",
      "Dedicated support + SLA"
    ],
    cta: "Talk to Sales"
  }
];

export const checkoutPlans: Record<
  PaidPlanId,
  { setupFeeUsdCents: number; monthlyUsdCents: number; name: string }
> = {
  starter: {
    setupFeeUsdCents: 200000,
    monthlyUsdCents: 50000,
    name: "Starter"
  },
  business: {
    setupFeeUsdCents: 500000,
    monthlyUsdCents: 100000,
    name: "Business"
  }
};
