import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CalendarDays, User } from 'lucide-react'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function BlogCard({ slug, title, category, author, date, excerpt, image, index = 0 }) {
  const accent = category === 'Psychiatry' ? 'bg-mint-50 text-mint-700' : 'bg-teal-50 text-teal-700'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-shadow duration-300 hover:shadow-soft"
    >
      <Link to={`/blog/${slug}`} className="block overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <span className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${accent}`}>{category}</span>
        <Link to={`/blog/${slug}`}>
          <h3 className="mt-3 font-display text-lg font-semibold text-teal-800 transition-colors group-hover:text-teal-600">
            {title}
          </h3>
        </Link>
        <p className="mt-2 flex-1 text-sm text-ink/65">{excerpt}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink/50">
          <span className="flex items-center gap-1.5"><User size={13} /> {author}</span>
          <span className="flex items-center gap-1.5"><CalendarDays size={13} /> {formatDate(date)}</span>
        </div>
        <Link
          to={`/blog/${slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 underline-offset-4 hover:underline"
        >
          Read more →
        </Link>
      </div>
    </motion.div>
  )
}
