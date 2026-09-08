import { useRef, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail } from 'lucide-react'
import Hero from '../components/Hero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CinematicGallery from '../components/CinematicGallery.jsx'
import { dermatologist, psychiatrist } from '../utils/clinicData.js'
import { useSiteData } from '../context/SiteDataContext.jsx'
import doctorImgFallback from '../assets/dr-amit.jpg'
import prithishaImg from '../assets/dr-pritisha.jpg'
import specialistLedIcon from '../assets/why-vijaya/specialist-led-care.png'
import personalisedAttentionIcon from '../assets/why-vijaya/personalised-attention.png'
import evidenceBasedIcon from '../assets/why-vijaya/evidence-based-approach.png'
import skinMindTogetherIcon from '../assets/why-vijaya/skin-mind-together.png'

const whyUs = [
  { icon: specialistLedIcon, title: 'Specialist-Led Care', desc: 'Every consultation is led directly by a specialist - dermatology and psychiatry, under one roof.' },
  { icon: personalisedAttentionIcon, title: 'Personalised Attention', desc: 'Treatment plans built around your skin, mind and history - never a one-size-fits-all protocol.' },
  { icon: evidenceBasedIcon, title: 'Evidence-Based Approach', desc: 'Modern, well-maintained equipment and clinically grounded treatment decisions.' },
  { icon: skinMindTogetherIcon, title: 'Skin & Mind, Together', desc: 'One clinic identity built on the belief that skin health and mental wellness are deeply connected.' },
]

export default function Home() {
  const { settings: clinic, doctor } = useSiteData()
  const amitPhoto = doctor.photoUrl || doctorImgFallback
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

      {/* Meet Our Specialists */}
      <section className="bg-sand-50 pt-24">
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
              src={amitPhoto}
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
