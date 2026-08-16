import { useParams, Link, Navigate } from 'react-router-dom'
import { CalendarDays, User, ArrowLeft } from 'lucide-react'
import BlogCard from '../components/BlogCard.jsx'
import { blogPosts } from '../utils/clinicData.js'
import treatmentRoomImg from '../assets/treatment-room.jpg'
import galleryBeforeAfterImg from '../assets/gallery-beforeafter.jpg'
import doctorDeskImg from '../assets/doctor-desk.jpg'
import counsellingImg from '../assets/counselling-room.jpg'
import marketingPosterImg from '../assets/marketing-poster.jpg'
import receptionImg from '../assets/reception.jpg'

const imageMap = {
  'treatment-room': treatmentRoomImg,
  'gallery-beforeafter': galleryBeforeAfterImg,
  'doctor-desk': doctorDeskImg,
  'counselling-room': counsellingImg,
  'marketing-poster': marketingPosterImg,
  'reception': receptionImg,
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function BlogDetail() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3)
  const accent = post.category === 'Psychiatry' ? 'bg-mint-50 text-mint-700' : 'bg-teal-50 text-teal-700'

  return (
    <div>
      <section className="relative h-[40vh] min-h-[280px] w-full overflow-hidden">
        <img src={imageMap[post.image]} alt={post.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-teal-900/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${accent}`}>{post.category}</span>
          <h1 className="mt-4 max-w-3xl font-display text-2xl font-semibold text-white sm:text-4xl">{post.title}</h1>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm text-white/80">
            <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
            <span className="flex items-center gap-1.5"><CalendarDays size={14} /> {formatDate(post.date)}</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 underline-offset-4 hover:underline">
          <ArrowLeft size={15} /> Back to Blog
        </Link>

        <div className="mt-8 space-y-5">
          {post.content.map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-ink/75">{para}</p>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-sand-50 p-6 text-center">
          <p className="text-sm text-ink/70">Have a question about this topic?</p>
          <Link to="/contact" className="mt-3 inline-flex items-center gap-2 rounded-full bg-teal-fade px-6 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:scale-105">
            Contact Us
          </Link>
        </div>
      </div>

      {related.length > 0 && (
        <div className="bg-sand-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center font-display text-2xl font-semibold text-teal-800">More on {post.category}</h2>
            <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <BlogCard key={p.slug} {...p} image={imageMap[p.image]} index={i} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
