const audiences = [
  {
    title: 'Empowering Home Based Businesses',
    description:
      'Park your parcel at one of our drop-off points so your shoppers can collect on their own.',
  },
  {
    title: 'Small Business Partner',
    description:
      'Provide the delivery option that will attract your customers.',
  },
  {
    title: 'Logistic Service Provider',
    description:
      'Work with us to automate your parcel collection point.',
  },
]

export default function WorkWithUs() {
  return (
    <section id="work-with-us" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-easycube-navy sm:text-4xl">
            Work With Us
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {audiences.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-easycube-border bg-easycube-muted/50 p-6 sm:p-8"
            >
              <h3 className="text-lg font-semibold text-easycube-navy">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-easycube-text-secondary">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
