import { NextResponse } from "next/server";

import { checkoutPlans, type PaidPlanId } from "@/lib/plans";
import { getStripeClient } from "@/lib/stripe";

type CheckoutBody = {
  planId?: string;
};

function getOrigin(request: Request) {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  if (appUrl) {
    return appUrl;
  }

  return new URL(request.url).origin;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CheckoutBody;
    const planId = body.planId as PaidPlanId | undefined;

    if (!planId || !(planId in checkoutPlans)) {
      return NextResponse.json({ error: "Invalid plan selected." }, { status: 400 });
    }

    const selectedPlan = checkoutPlans[planId];
    const stripe = getStripeClient();
    const origin = getOrigin(request);

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: selectedPlan.setupFeeUsdCents,
            product_data: {
              name: `AI Triage ${selectedPlan.name} Setup Fee`
            }
          }
        },
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: selectedPlan.monthlyUsdCents,
            recurring: {
              interval: "month"
            },
            product_data: {
              name: `AI Triage ${selectedPlan.name} Monthly`
            }
          }
        }
      ],
      subscription_data: {
        metadata: {
          planId
        }
      }
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not start Stripe checkout.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
