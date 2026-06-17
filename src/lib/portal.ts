export async function openBillingPortal(email: string): Promise<void> {
  const res = await fetch('/api/create-portal-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email.trim() }),
  })

  if (res.status === 404) {
    throw new Error('not_found')
  }

  if (!res.ok) {
    throw new Error('portal_failed')
  }

  const data = (await res.json()) as { url?: string }
  if (!data.url) {
    throw new Error('portal_failed')
  }

  window.location.href = data.url
}
