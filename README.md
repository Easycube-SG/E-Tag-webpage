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

- Pilot trial → **Register interest** → `/checkout` → pay with `4242 4242 4242 4242`
- Success → `/subscribe/success?session_id=...`
- Stripe Dashboard (test mode) → **Payments** shows S$20 one-time (not Subscriptions)

## API hardening

Public API routes (`/api/create-checkout-session`, `/api/create-portal-session`, `/api/checkout-session`) are protected by:

| Guard | Behavior |
|---|---|
| **Origin allowlist** | Only your site (`SITE_URL`, preview `*.vercel.app`, localhost in dev) |
| **Rate limits** (Upstash) | Checkout 10/min · Portal 5/min · Session lookup 20/min per IP |
| **Security headers** | HSTS, `X-Frame-Options`, `Referrer-Policy`, `nosniff` via `vercel.json` |

**Upstash setup (Production + Preview):**

1. [console.upstash.com](https://console.upstash.com/) → create Redis database, or use **Vercel Marketplace → Upstash**
2. Add `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` to Vercel env
3. Redeploy

Rate limiting is skipped when Upstash vars are unset (fine for local dev).

## Vercel env vars (Production + Preview)

| Variable | Sensitive? | Notes |
|---|---|---|
| `STRIPE_SECRET_KEY` | Yes | `sk_test_...` or `sk_live_...` |
| `STRIPE_PRICE_PILOT_DEPOSIT` | Yes | One-time `price_...` |
| `VITE_STRIPE_PUBLISHABLE_KEY` | No | `pk_test_...` / `pk_live_...` |
| `SITE_URL` | No | Production: `https://easycubesg.com` |
| `UPSTASH_REDIS_REST_URL` | Yes | Rate limiting (recommended) |
| `UPSTASH_REDIS_REST_TOKEN` | Yes | Rate limiting (recommended) |
