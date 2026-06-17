# Easycube TAG Landing Page

React + TypeScript + Vite site deployed on Vercel with Stripe Pilot subscriptions.

## Local development

```bash
npm install
npm run dev
```

The Vite dev server serves the frontend only. Stripe API routes under `/api` require [Vercel CLI](https://vercel.com/docs/cli):

```bash
npm i -g vercel
vercel dev
```

Open the URL printed by Vercel (usually `http://localhost:3000`). Do not use `npm run dev` alone if you need `/checkout` or `/subscription` billing APIs.

If `vercel dev` fails, ensure `vercel.json` rewrites exclude Vite paths (`/@vite`, `/src`, etc.) so dev module requests are not rewritten to `index.html`.

## Stripe setup (before production)

1. Copy `.env.example` to `.env.local` for local `vercel dev`, and set the same variables in the Vercel project dashboard for production.
2. Create a **Pilot** product in Stripe: SGD **20.00/month** (recurring). Set `STRIPE_PRICE_PILOT`.
3. Set `VITE_STRIPE_PUBLISHABLE_KEY` (pk_test_... / pk_live_...) for embedded checkout on `/checkout`.
4. Enable **Customer Portal** (Settings → Billing): cancel at period end, update payment method.
5. Add webhook `https://your-domain.com/api/stripe-webhook` with events: `checkout.session.completed`, `invoice.paid`, `invoice.payment_failed`, `customer.subscription.updated`, `customer.subscription.deleted`.

## Test checklist

- Pilot **Get Started** → `/checkout` (embedded Stripe) → `/subscribe/success`
- `/subscription` → enter email → Stripe Customer Portal
- Cancel in portal → no charge next billing cycle
- Standard / Enterprise → contact form only

