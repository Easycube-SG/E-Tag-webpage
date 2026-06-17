export const PILOT_MONTHLY_SGD = Number(
  import.meta.env.VITE_PILOT_MONTHLY_SGD ?? 20,
)
export const STANDARD_MONTHLY_SGD = Number(
  import.meta.env.VITE_STANDARD_MONTHLY_SGD ?? 39,
)
export const PILOT_TAG_UNIT_PRICE_SGD = Number(
  import.meta.env.VITE_PILOT_TAG_UNIT_PRICE_SGD ?? 1,
)
export const STANDARD_TAG_UNIT_PRICE_SGD = Number(
  import.meta.env.VITE_STANDARD_TAG_UNIT_PRICE_SGD ?? 3,
)

export function formatSgd(amount: number): string {
  return `S$${amount % 1 === 0 ? amount : amount.toFixed(2)}`
}
