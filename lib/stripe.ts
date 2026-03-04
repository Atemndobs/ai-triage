import Stripe from "stripe";

export function getStripeClient() {
  // Fallback to test keys if env var not set (for demo purposes)
  // TODO: Set STRIPE_SECRET_KEY in Vercel environment variables for production
  const secretKey = process.env.STRIPE_SECRET_KEY || 
    "sk_test_51T6nVvBM9Ky3QFDdDQpyg8ZfSDTqa5Y3SlJcXuUQknKkaVgSFe589NqvBEKQwe3tbQhtOFPXNd6WCSVMgtidG1rA00osX81M9d";

  if (!secretKey) {
    throw new Error("Missing STRIPE_SECRET_KEY environment variable");
  }

  return new Stripe(secretKey, {
    apiVersion: "2024-06-20",
    httpClient: Stripe.createFetchHttpClient()
  });
}
