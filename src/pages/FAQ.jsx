import FAQList from '../components/FAQList.jsx'
import receptionImg from '../assets/reception.jpg'

export default function FAQ() {
  return (
    <div>
      <section className="bg-teal-fade px-6 py-14 text-center sm:py-16">
        <h1 className="font-display text-3xl font-semibold text-white sm:text-4xl">Frequently Asked Questions</h1>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <div className="relative mx-auto hidden max-w-md lg:sticky lg:top-28 lg:block">
            <img
              src={receptionImg}
              alt="Vijaya Clinics reception"
              className="aspect-[4/5] w-full object-cover shadow-soft"
              style={{ borderRadius: '62% 38% 30% 70% / 58% 32% 68% 42%' }}
            />
            <div className="glass-dark absolute -bottom-6 -left-6 max-w-[180px] rounded-2xl p-4 text-white shadow-soft">
              <p className="text-xs text-white/80">Still have a question? We're happy to help - reach out any time.</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-500">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold text-teal-800 sm:text-4xl">Have a question?</h2>
            <p className="mt-4 text-base text-ink/70">Search or browse by category.</p>
            <div className="mt-10">
              <FAQList />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
