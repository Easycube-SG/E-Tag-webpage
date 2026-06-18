export const PILOT_DEPOSIT_SGD = Number(
  import.meta.env.VITE_PILOT_DEPOSIT_SGD ??
    import.meta.env.VITE_PILOT_MONTHLY_SGD ??
    20,
)
/** @deprecated Use PILOT_DEPOSIT_SGD — kept for older env var names. */
export const PILOT_MONTHLY_SGD = PILOT_DEPOSIT_SGD
export const STANDARD_MONTHLY_SGD = Number(
  import.meta.env.VITE_STANDARD_MONTHLY_SGD ?? 39,
)
export const PILOT_TAG_UNIT_PRICE_SGD = Number(
  import.meta.env.VITE_PILOT_TAG_UNIT_PRICE_SGD ?? 1,
)
export const STANDARD_TAG_UNIT_PRICE_SGD = Number(
  import.meta.env.VITE_STANDARD_TAG_UNIT_PRICE_SGD ?? 3,
)
export const PILOT_PARCEL_CENTS = Number(
  import.meta.env.VITE_PILOT_PARCEL_CENTS ?? 1,
)
export const STANDARD_PARCEL_CENTS = Number(
  import.meta.env.VITE_STANDARD_PARCEL_CENTS ?? 3,
)

export function formatSgd(amount: number): string {
  return `S$${amount % 1 === 0 ? amount : amount.toFixed(2)}`
}

export function formatCentsPerParcel(cents: number): string {
  return `${cents}¢`
}
