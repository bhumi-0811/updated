import { useRef, useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail } from 'lucide-react'
import Hero from '../components/Hero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CinematicGallery from '../components/CinematicGallery.jsx'
import { dermatologist, psychiatrist } from '../utils/clinicData.js'
import { useSiteData } from '../context/SiteDataContext.jsx'
import amitNikamPhoto from '../assets/dr-amit-nikam.png'
import prithishaImg from '../assets/dr-pritisha.png'
import clinicInteriorImg from '../assets/interior-1.jpg'
import clinicReceptionImg from '../assets/treatment-room-2.jpg'
import specialistLedIcon from '../assets/why-vijaya/specialist-led-care.png'
import personalisedAttentionIcon from '../assets/why-vijaya/personalised-attention.png'
import evidenceBasedIcon from '../assets/why-vijaya/evidence-document-search.png'
import skinMindTogetherIcon from '../assets/why-vijaya/skin-mind-together.png'

const aboutStats = [
  { value: 8, suffix: '+', label: 'Years - Dermatology' },
  { value: 5, suffix: '+', label: 'Years - Psychiatry' },
  { value: 150, suffix: '+', label: 'Skin Procedures' },
  { value: 10, suffix: 'k+', label: 'Patients Cared For' },
]

function CountUp({ value, suffix }) {
  const countRef = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const element = countRef.current
    if (!element) return

    let frameId
    let startedAt
    let hasAnimated = false

    const animateCount = (timestamp) => {
      if (!startedAt) startedAt = timestamp
      const progress = Math.min((timestamp - startedAt) / 1400, 1)
      const easedProgress = 1 - (1 - progress) ** 3
      setCount(Math.round(value * easedProgress))

      if (progress < 1) frameId = requestAnimationFrame(animateCount)
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || hasAnimated) return
      hasAnimated = true
      observer.disconnect()

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setCount(value)
        return
      }

      frameId = requestAnimationFrame(animateCount)
    }, { threshold: 0.5 })

    observer.observe(element)
    return () => {
      observer.disconnect()
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [value])

  return <span ref={countRef}>{count}{suffix}</span>
}

const whyUs = [
  { icon: specialistLedIcon, title: 'Specialist-Led Care', desc: 'Every consultation is led directly by a specialist - dermatology and psychiatry, under one roof.' },
  { icon: personalisedAttentionIcon, title: 'Personalised Attention', desc: 'Treatment plans built around your skin, mind and history - never a one-size-fits-all protocol.' },
  { icon: evidenceBasedIcon, title: 'Evidence-Based Approach', desc: 'Modern, well-maintained equipment and clinically grounded treatment decisions.' },
  { icon: skinMindTogetherIcon, title: 'Skin & Mind, Together', desc: 'One clinic identity built on the belief that skin health and mental wellness are deeply connected.' },
]

export default function Home() {
  const { settings: clinic } = useSiteData()
  const galleryRef = useRef(null)
  const [searchParams] = useSearchParams()

  useEffect(() => {
    if (searchParams.get('section') === 'gallery') {
      galleryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [searchParams])

  return (
    <div>
      <Hero />

      {/* About Vijaya Clinics */}
      <section className="overflow-hidden bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <div className="relative mx-auto w-full max-w-md pb-10 pl-0 sm:pl-10">
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7 }}
                src={clinicInteriorImg}
                alt="Inside Vijaya Clinics"
                className="relative z-10 aspect-[4/5] w-full rounded-tl-3xl rounded-br-3xl object-cover shadow-soft"
              />
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: 0.15 }}
                src={clinicReceptionImg}
                alt="Vijaya Clinics reception"
                className="absolute bottom-0 left-0 z-20 aspect-square w-[42%] rounded-2xl border-4 border-white object-cover shadow-card"
              />
              <div className="absolute bottom-6 right-0 z-20 w-48 translate-x-2 rounded-2xl bg-teal-800/90 px-5 py-4 text-white shadow-soft backdrop-blur sm:right-2">
                <p className="font-display text-3xl font-bold">2</p>
                <p className="mt-1 text-xs leading-snug text-white/85">Specialities under one calm, considered roof</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-500">About Vijaya Clinics</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-teal-800 sm:text-4xl">
                Where <span className="text-teal-500">skin care</span> meets <span className="text-teal-500">peace of mind</span>
              </h2>
              <p className="mt-6 max-w-2xl text-ink/70">
                Vijaya Clinics was founded on a simple observation: skin conditions and mental wellbeing are rarely unrelated. Stress surfaces on the skin, and skin concerns weigh on the mind. Our clinic in Nagpur brings both kinds of specialist care into one calm, considered space.
              </p>
              <p className="mt-4 max-w-2xl text-ink/70">
                Led by a dermatologist and a psychiatrist working under a single clinic identity, Vijaya Clinics is built around evidence-based care, modern equipment, and the belief that patients deserve to be treated as whole people - not just symptoms.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-y-8 rounded-[2rem] bg-teal-fade px-8 py-10 text-center text-white sm:grid-cols-4 sm:gap-4">
            {aboutStats.map((s, index) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
              >
                <p className="font-display text-3xl font-bold sm:text-4xl"><CountUp value={s.value} suffix={s.suffix} /></p>
                <p className="mt-1 text-xs text-white/85 sm:text-sm">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Specialists */}
      <section id="specialists" className="bg-sand-50 pt-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <SectionHeading title="Meet Our Specialists" />
        </div>
      </section>

      {/* Dermatology preview */}
      <section className="overflow-hidden bg-sand-50 px-6 pb-24 pt-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="relative mx-auto w-full max-w-md pb-8 pl-0 sm:pb-12 sm:pl-8">
            <div className="absolute bottom-0 left-0 h-[76%] w-[86%] rounded-sm bg-teal-200/70" aria-hidden="true" />
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              src={amitNikamPhoto}
              alt={dermatologist.name}
              className="relative ml-auto aspect-[4/5] w-[92%] rounded-tl-xl rounded-br-xl object-cover shadow-soft"
            />
          </div>
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-500">Dermatology</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-teal-800 sm:text-4xl">Skin &amp; hair care, led by {dermatologist.name}</h2>
            <p className="mt-6 max-w-2xl text-ink/70">{dermatologist.bio}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {dermatologist.concerns.slice(0, 6).map((c) => (
                <li key={c} className="rounded-full bg-teal-50 px-3.5 py-1.5 text-xs font-medium text-teal-700">{c}</li>
              ))}
            </ul>
            <Link to="/dermatology" className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-fade px-6 py-3.5 font-semibold text-white shadow-soft transition hover:scale-[1.02]">
              Explore Dermatology
            </Link>
          </div>
        </div>
      </section>

      {/* Psychiatry preview */}
      <section className="overflow-hidden bg-mint-50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
            <div className="relative order-2 lg:order-1">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-mint-600">Psychiatry &amp; Mental Health</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-teal-800 sm:text-4xl">A calm space, led by {psychiatrist.name}</h2>
              <p className="mt-6 max-w-2xl text-ink/70">{psychiatrist.bio}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {psychiatrist.concerns.slice(0, 6).map((c) => (
                  <li key={c} className="rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-mint-700">{c}</li>
                ))}
              </ul>
              <Link to="/psychiatry" className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-700 px-6 py-3.5 font-semibold text-white shadow-soft transition hover:scale-[1.02]">
                Explore Psychiatry
              </Link>
            </div>
            <div className="relative order-1 mx-auto w-full max-w-md pb-8 pr-0 sm:pb-12 sm:pr-8 lg:order-2">
              <div className="absolute bottom-0 right-0 h-[76%] w-[86%] rounded-sm bg-mint-200/70" aria-hidden="true" />
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7 }}
                src={prithishaImg}
                alt={psychiatrist.name}
                className="relative aspect-[4/5] w-[92%] rounded-tr-xl rounded-bl-xl object-cover shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      <div ref={galleryRef}>
        <CinematicGallery />
      </div>

      {/* Why Vijaya Clinics */}
      <section className="bg-sand-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Why Vijaya Clinics" title="Care you can trust" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w) => (
              <div key={w.title} className="rounded-2xl bg-white p-6 text-center shadow-card">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 p-3">
                  <img src={w.icon} alt="" aria-hidden="true" className="h-full w-full object-contain icon-teal" />
                </div>
                <p className="mt-4 font-display font-semibold text-teal-800">{w.title}</p>
                <p className="mt-2 text-sm text-ink/65">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-5xl px-6 py-24 lg:px-8">
        <div className="rounded-[2.5rem] bg-teal-fade px-8 py-16 text-center text-white sm:px-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">Get in Touch</p>
          <h2 className="mx-auto mt-3 max-w-lg font-display text-3xl font-semibold sm:text-4xl">
            We're here for your skin and your mind
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/85">
            <span className="flex items-center gap-2"><MapPin size={16} /> {clinic.address}</span>
            <span className="flex items-center gap-2"><Phone size={16} /> {clinic.phone}</span>
            <span className="flex items-center gap-2"><Mail size={16} /> {clinic.email}</span>
          </div>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-teal-700 shadow-soft transition hover:scale-105">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
