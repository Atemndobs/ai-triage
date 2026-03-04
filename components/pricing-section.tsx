"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, LoaderCircle } from "lucide-react";

import { plans, type Plan } from "@/lib/plans";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type CheckoutState = {
  loadingPlanId: Plan["id"] | null;
  error: string | null;
};

export function PricingSection() {
  const [checkoutState, setCheckoutState] = useState<CheckoutState>({ loadingPlanId: null, error: null });

  const paidPlans = useMemo(() => new Set<Plan["id"]>(["starter", "business"]), []);

  const handleCheckout = async (planId: Plan["id"]) => {
    if (!paidPlans.has(planId)) {
      const demoSection = document.getElementById("demo");
      demoSection?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    try {
      setCheckoutState({ loadingPlanId: planId, error: null });
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ planId })
      });

      const payload = (await response.json()) as { url?: string; error?: string };

      if (!response.ok || !payload.url) {
        throw new Error(payload.error ?? "Unable to create checkout session. Please try again.");
      }

      window.location.href = payload.url;
    } catch (error) {
      setCheckoutState({
        loadingPlanId: null,
        error: error instanceof Error ? error.message : "Something went wrong."
      });
    }
  };

  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Badge variant="secondary" className="mb-4">
          Pricing
        </Badge>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Choose your AI Triage growth plan</h2>
        <p className="mt-4 text-base text-muted-foreground">Checkout is powered by Stripe test mode for Starter and Business.</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => {
          const loading = checkoutState.loadingPlanId === plan.id;

          return (
            <Card key={plan.id} className={cn("relative flex h-full flex-col", plan.highlighted && "border-primary/80 shadow-xl shadow-primary/10")}>
              {plan.highlighted ? (
                <Badge className="absolute right-4 top-4" variant="default">
                  Most Popular
                </Badge>
              ) : null}

              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <p className="pt-3 text-2xl font-semibold text-foreground">{plan.priceLabel}</p>
                {plan.setupFeeLabel && plan.monthlyFeeLabel ? (
                  <p className="text-sm text-muted-foreground">
                    {plan.setupFeeLabel} · {plan.monthlyFeeLabel}
                  </p>
                ) : null}
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button className="w-full" size="lg" onClick={() => handleCheckout(plan.id)} disabled={loading || checkoutState.loadingPlanId !== null}>
                  {loading ? (
                    <>
                      <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                      Redirecting...
                    </>
                  ) : (
                    plan.cta
                  )}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      {checkoutState.error ? (
        <p className="mt-6 text-center text-sm text-destructive" role="status">
          {checkoutState.error}
        </p>
      ) : null}
    </section>
  );
}
