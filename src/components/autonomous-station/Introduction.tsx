import imgPhone from '../../assets/use your own device.png'
import imgFaster from '../../assets/find thing faster.png'
import imgAnyone from '../../assets/anyone can find.png'
import imgSimple from '../../assets/reliable.png'

const helps = [
  {
    title: 'Works With Just Your Phone',
    description:
      'No expensive  scanners or complex cloud integration. Use any Android phone you have.',
    image: imgPhone,
    alt: 'Placeholder visual for phone-based workflow',
  },
  {
    title: 'Find Items Faster',
    description:
      'Scan or search an order → the correct tag lights up. Less time reading labels or searching shelves.',
    image: imgFaster,
    alt: 'Placeholder visual for faster item finding',
  },
  {
    title: 'Anyone Can Find It',
    description:
      'No warehouse knowledge required. Anyone can follow the same simple mobile workflow.',
    image: imgAnyone,
    alt: 'Placeholder visual for easy staff onboarding',
  },
  {
    title: 'Simple. Reliable. Effective.',
    description:
      'A straightforward physical guide that helps reduce search time and picking mistakes.',
    image: imgSimple,
    alt: 'Placeholder visual for simple reliable guidance',
  },
]

export default function Introduction() {
  return (
    <section id="how-it-benefits" className="bg-white py-16 sm:py-18">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-easycube-navy sm:text-4xl">
          How Easycube Helps
        </h2>

        <div className="mt-8 grid gap-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-8">
          {helps.map((item) => (
            <article key={item.title}>
              <div className="overflow-hidden rounded-2xl bg-easycube-muted">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="aspect-[4/3] h-auto w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-5 text-xl font-bold text-easycube-navy sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-easycube-text-secondary">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
