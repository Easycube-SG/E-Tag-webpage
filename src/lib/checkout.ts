export async function fetchPilotCheckoutClientSecret(): Promise<string> {
  const res = await fetch('/api/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ plan: 'pilot' }),
  })

  if (!res.ok) {
    throw new Error('checkout_failed')
  }

  const data = (await res.json()) as { clientSecret?: string }
  if (!data.clientSecret) {
    throw new Error('checkout_failed')
  }

  return data.clientSecret
}
