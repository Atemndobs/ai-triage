# AI Triage Landing Page

Dark-mode marketing site for AI Triage, built with Next.js 14, Tailwind CSS, and shadcn/ui.

## Included sections

- Hero with CTA to pricing
- Features grid (AI routing, channels, analytics, team performance, custom rules, integrations)
- 3-tier pricing (Starter, Business, Enterprise)
- Stripe Checkout integration for Starter and Business (test mode)
- Testimonials placeholders
- Demo/contact form (name, email, company, message)

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- shadcn/ui components
- Stripe Checkout API route

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Environment variables:

```bash
cp .env.example .env.local
```

Set values for:

- `NEXT_PUBLIC_APP_URL`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`

3. Run dev server:

```bash
npm run dev
```

## Stripe behavior

- `Starter`: $2,000 setup + $500/month
- `Business`: $5,000 setup + $1,000/month
- `Enterprise`: custom (routes user to demo form)

Checkout endpoint: `POST /api/checkout`

## Deploy to Vercel

1. Add project env vars in Vercel:

- `NEXT_PUBLIC_APP_URL=https://ai-triage.atemkeng.com`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<test_publishable_key>`
- `STRIPE_SECRET_KEY=<test_secret_key>`

2. Deploy:

```bash
vercel --prod
```

3. Attach custom domain in Vercel dashboard:

- `ai-triage.atemkeng.com`
