import { Target, Eye, ShieldCheck } from 'lucide-react'

const items = [
  {
    icon: Target,
    title: 'Our Mission',
    desc: 'To deliver evidence-based dermatology and compassionate mental wellness care, accessible to every patient who walks through our doors.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    desc: "To be Nagpur's most trusted centre for integrated skin and mental health care, known for both clinical excellence and genuine warmth.",
  },
  {
    icon: ShieldCheck,
    title: 'Our Promise',
    desc: 'Personalised treatment plans, modern equipment, and a comfortable environment - every single visit.',
  },
]

export default function ClinicValues({ accent = 'teal' }) {
  const iconColor = accent === 'mint' ? 'text-mint-600' : 'text-teal-600'

  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className="rounded-2xl bg-white p-7 text-center shadow-card">
          <item.icon className={`mx-auto ${iconColor}`} size={26} />
          <p className="mt-4 font-display font-semibold text-teal-800">{item.title}</p>
          <p className="mt-2 text-sm text-ink/65">{item.desc}</p>
        </div>
      ))}
    </div>
  )
}
