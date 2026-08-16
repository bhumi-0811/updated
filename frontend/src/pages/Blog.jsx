import { useState, useMemo } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'
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

const filters = ['All', 'Dermatology', 'Psychiatry']

export default function Blog() {
  const [filter, setFilter] = useState('All')

  const posts = useMemo(() => {
    if (filter === 'All') return blogPosts
    return blogPosts.filter((p) => p.category === filter)
  }, [filter])

  return (
    <div>
      <section className="bg-teal-fade px-6 py-14 text-center sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-mint-200">Our Blog</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">Learn, Glow &amp; Grow With Us</h1>
        <p className="mx-auto mt-3 max-w-xl text-white/85">Insights on skin, hair and mental wellness from our specialists.</p>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionHeading eyebrow="Articles" title="From Our Specialists" />

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                filter === f ? 'bg-teal-fade text-white shadow-soft' : 'bg-sand-50 text-ink/70 hover:bg-teal-50 hover:text-teal-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <BlogCard key={post.slug} {...post} image={imageMap[post.image]} index={i} />
          ))}
        </div>

        {posts.length === 0 && (
          <p className="mt-12 text-center text-sm text-ink/50">No articles in this category yet.</p>
        )}
      </div>
    </div>
  )
}
