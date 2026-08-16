import { useMemo, useState } from 'react'
import { ArrowDown, ArrowRight, Search } from 'lucide-react'
import { faqs } from '../utils/clinicData.js'

export default function FAQList() {
  const [query, setQuery] = useState('')
  const [openIndex, setOpenIndex] = useState(0)

  const categories = useMemo(() => ['All', ...new Set(faqs.map((f) => f.category))], [])
  const [category, setCategory] = useState('All')

  const filtered = faqs.filter((f) => {
    const matchesCategory = category === 'All' || f.category === category
    const matchesQuery = f.question.toLowerCase().includes(query.toLowerCase())
    return matchesCategory && matchesQuery
  })

  return (
    <div>
      <div className="max-w-xl">
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search FAQs..."
            className="w-full rounded-full border border-teal-200 bg-white py-3 pl-11 pr-4 text-sm shadow-card focus:border-teal-400"
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                category === c ? 'bg-teal-fade text-white' : 'bg-teal-50 text-teal-700 hover:bg-teal-100'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 max-w-2xl space-y-4">
        {filtered.length === 0 && (
          <p className="text-sm text-ink/60">No FAQs match your search yet.</p>
        )}
        {filtered.map((f, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={i}
              className={`overflow-hidden rounded-2xl border bg-white shadow-card transition-colors ${
                isOpen ? 'border-teal-300' : 'border-teal-100'
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display text-base font-medium text-ink/85 sm:text-lg">{f.question}</span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                    isOpen ? 'bg-teal-fade text-white' : 'bg-teal-50 text-teal-600'
                  }`}
                >
                  {isOpen ? <ArrowDown size={15} /> : <ArrowRight size={15} />}
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-teal-100 px-6 pb-6 pt-4 text-sm leading-relaxed text-ink/70">
                  {f.answer}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
