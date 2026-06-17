# Easycube TAG Landing Page

React + TypeScript + Vite site deployed on Vercel with Stripe Pilot subscriptions.

## Local development

Use **two terminals** so the frontend and Stripe API routes can run without `vercel.json` SPA rewrites breaking Vite.

**Terminal 1 — API (port 3001)**

```bash
npm install
npm run dev:api
```

Uses `vercel.dev.json` (no SPA rewrites). Loads env from `.env.local`. API errors and `console.log` appear in this terminal.

**Terminal 2 — frontend (port 5173)**

```bash
npm run dev
```

Open **http://localhost:5173**. Vite proxies `/api/*` to port 3001.

Requires [Vercel CLI](https://vercel.com/docs/cli) (`npm i -g vercel`) and a linked project (`vercel link` once). Copy `.env.example` to `.env.local` before testing checkout.

Do **not** use plain `vercel dev` for local UI work — production `vercel.json` rewrites conflict with Vite dev module paths. Production deploys are unaffected.

## Stripe setup (before production)

1. Copy `.env.example` to `.env.local` for local `dev:api`, and set the same variables in the Vercel project dashboard for production.
2. Create a **Pilot** product in Stripe: SGD **20.00/month** (recurring). Set `STRIPE_PRICE_PILOT` to the **price** id (`price_...`, not `prod_...`).
3. Set `VITE_STRIPE_PUBLISHABLE_KEY` (pk_test_... / pk_live_...) for embedded checkout on `/checkout`.
4. Enable **Customer Portal** (Settings → Billing): cancel at period end, update payment method.
5. Add webhook `https://your-domain.com/api/stripe-webhook` with events: `checkout.session.completed`, `invoice.paid`, `invoice.payment_failed`, `customer.subscription.updated`, `customer.subscription.deleted`.

## Test checklist

- Pilot **Get Started** → `/checkout` (embedded Stripe) → `/subscribe/success`
- `/subscription` → enter email → Stripe Customer Portal
- Cancel in portal → no charge next billing cycle
- Standard / Enterprise → contact form only

Test card: `4242 4242 4242 4242`

Quick API smoke test (with `dev:api` running):

```powershell
curl -X POST http://localhost:3001/api/create-checkout-session -H "Content-Type: application/json" -d "{\"plan\":\"pilot\"}"
```
