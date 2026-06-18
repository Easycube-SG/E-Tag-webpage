# Easycube TAG Landing Page

React + TypeScript + Vite site deployed on Vercel with Stripe Pilot registration.

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in Stripe keys (see below)
npm run dev:api                # http://localhost:3001 — UI + API
```

Do **not** run `vercel env pull .env.local` without backing up manual secrets (Sensitive vars are not in Development scope).

## Stripe setup

1. Copy `.env.example` → `.env.local` and fill in keys (see comments in that file).
2. **Stripe Dashboard → Products** — create a **one-time** price:
   - Product: Pilot registration deposit
   - Amount: SGD 20.00, **One time** (not monthly)
   - Set `STRIPE_PRICE_PILOT_DEPOSIT=price_...` in `.env.local` and Vercel
3. Set `STRIPE_SECRET_KEY` and `VITE_STRIPE_PUBLISHABLE_KEY` (test keys while sandboxing).
4. Set `SITE_URL` — `http://localhost:3001` locally, `https://easycubesg.com` on Production.
5. Redeploy Vercel after env changes.

## Test checklist

- Pricing → **Register interest** → `/checkout` → pay with `4242 4242 4242 4242`
- Success → `/subscribe/success?session_id=...`
- Stripe Dashboard (test mode) → **Payments** shows S$20 one-time (not Subscriptions)
- Pilot trial → `/pilot-trial` for onboarding copy

## Vercel env vars (Production + Preview)

| Variable | Sensitive? | Notes |
|---|---|---|
| `STRIPE_SECRET_KEY` | Yes | `sk_test_...` or `sk_live_...` |
| `STRIPE_PRICE_PILOT_DEPOSIT` | Yes | One-time `price_...` |
| `VITE_STRIPE_PUBLISHABLE_KEY` | No | `pk_test_...` / `pk_live_...` |
| `SITE_URL` | No | Production: `https://easycubesg.com` |
