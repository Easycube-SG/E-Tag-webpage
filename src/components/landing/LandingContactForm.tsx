import { useState, type FormEvent } from 'react'
import { LeadText, SplitHeading } from '../Typography'
import { submitLandingContactToGoogleForm } from '../../lib/googleForm'

type FormData = {
  name: string
  shopName: string
  position: string
  contactNo: string
  email: string
}

const initialForm: FormData = {
  name: '',
  shopName: '',
  position: '',
  contactNo: '',
  email: '',
}

const inputClass =
  'w-full rounded-lg border border-easycube-border bg-white px-4 py-2.5 text-sm text-easycube-text placeholder:text-easycube-text-secondary/60 focus:border-easycube-blue focus:outline-none focus:ring-2 focus:ring-easycube-blue/20 disabled:cursor-not-allowed disabled:opacity-60'

export default function LandingContactForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      await submitLandingContactToGoogleForm(form)
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or contact us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section id="contact" className="bg-easycube-bg py-16 sm:py-24">
        <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
          <div className="rounded-2xl border border-easycube-border bg-white p-10 shadow-sm">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-easycube-success/15 text-easycube-success">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-easycube-navy">
              Thank you for reaching out!
            </h2>
            <p className="mt-3 text-easycube-text-secondary">
              We&apos;ve received your details and will get back to you within
              1–2 business days.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="bg-easycube-bg py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SplitHeading accent="Contact" rest="us" />
          <LeadText className="mt-4">
            Transform your business today!
          </LeadText>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 space-y-6 rounded-2xl border border-easycube-border bg-white p-8 shadow-sm"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Name" htmlFor="name" required>
              <input
                id="name"
                name="name"
                type="text"
                required
                disabled={submitting}
                value={form.name}
                onChange={handleChange}
                className={inputClass}
                placeholder="Your full name"
              />
            </Field>

            <Field label="Business Name" htmlFor="shopName" required>
              <input
                id="shopName"
                name="shopName"
                type="text"
                required
                disabled={submitting}
                value={form.shopName}
                onChange={handleChange}
                className={inputClass}
                placeholder="Your shop or business name"
              />
            </Field>
          </div>

          <Field label="Position" htmlFor="position" required>
            <input
              id="position"
              name="position"
              type="text"
              required
              disabled={submitting}
              value={form.position}
              onChange={handleChange}
              className={inputClass}
              placeholder="E.g. Manager"
            />
          </Field>

          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Contact No." htmlFor="contactNo" required>
              <input
                id="contactNo"
                name="contactNo"
                type="tel"
                required
                disabled={submitting}
                value={form.contactNo}
                onChange={handleChange}
                className={inputClass}
                placeholder="+65 9123 4567"
              />
            </Field>

            <Field label="Email" htmlFor="email" required>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={submitting}
                value={form.email}
                onChange={handleChange}
                className={inputClass}
                placeholder="you@business.com"
              />
            </Field>
          </div>

          {error && (
            <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-lg bg-easycube-blue py-3 text-sm font-semibold text-white transition-colors hover:bg-easycube-blue-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-easycube-blue disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? 'Submitting…' : 'Submit Enquiry'}
          </button>
        </form>
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string
  htmlFor: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-easycube-navy"
      >
        {label}
        {required && <span className="text-easycube-blue"> *</span>}
      </label>
      {children}
    </div>
  )
}
