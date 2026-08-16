import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GraduationCap, Languages, BadgeCheck, MapPin, Phone, ArrowRight, Leaf } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import TreatmentCard from '../components/TreatmentCard.jsx'
import ProcessSteps from '../components/ProcessSteps.jsx'
import ClinicValues from '../components/ClinicValues.jsx'
import TestimonialCarousel from '../components/TestimonialCarousel.jsx'
import { dermatologist, allTreatments, dermatologyProcess, dermatologyReviews } from '../utils/clinicData.js'
import { useSiteData } from '../context/SiteDataContext.jsx'
import doctorImgFallback from '../assets/doctor-desk.jpg'
import treatmentRoomImg from '../assets/treatment-room.jpg'

export default function Dermatology() {
  const { settings: clinic, doctor, treatments } = useSiteData()
  const photo = doctor.photoUrl || doctorImgFallback
  const treatmentList = (treatments.length ? treatments : allTreatments).slice(0, 9)

  return (
    <div>
      {/* Doctor intro */}
      <section className="relative overflow-hidden bg-white px-6 py-20 sm:py-24 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 -top-24 h-[26rem] w-[26rem] rounded-full bg-sand-100/80 blur-[2px]"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto max-w-sm lg:mx-0"
          >
            <div className="absolute -bottom-6 -right-6 h-full w-4/5 rounded-2xl bg-teal-100" />
            <img
              src={photo}
              alt={dermatologist.name}
              className="relative z-10 aspect-[4/5] w-full rounded-2xl object-cover shadow-soft"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-11 bottom-10 z-0 hidden -rotate-90 select-none font-display text-2xl font-medium tracking-[0.3em] text-teal-400/70 sm:block"
            >
              {dermatologist.name.replace('Dr. ', '').split(' ')[0].toUpperCase()}
            </span>
          </motion.div>

          <div>
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="rounded-full bg-teal-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-teal-600">Skin &amp; Hair Specialist</span>
                <span className="rounded-full bg-sand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-teal-800">{dermatologist.experienceYears}+ Years</span>
              </div>
              <Leaf className="hidden shrink-0 text-mint-400 sm:block" size={30} strokeWidth={1.5} />
            </div>

            <h1 className="mt-4 font-display text-4xl font-semibold text-teal-900 sm:text-5xl">
              {dermatologist.name.split(' ').slice(0, -1).join(' ')} <span className="text-teal-500">{dermatologist.name.split(' ').slice(-1)}</span>
            </h1>

            <div className="mt-6 flex items-start gap-4 rounded-2xl bg-teal-50/70 p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-fade text-white">
                <ArrowRight size={18} />
              </span>
              <p className="text-sm leading-relaxed text-teal-900/90">{dermatologist.bio}</p>
            </div>

            <p className="mt-6 max-w-xl text-ink/70">
              She specialises in providing personalised care to help patients achieve healthier, more radiant skin - combining clinical expertise with a compassionate, patient-first approach.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="flex gap-3">
                <GraduationCap className="mt-0.5 shrink-0 text-teal-500" size={19} />
                <div>
                  <p className="text-sm font-semibold text-teal-800">Qualifications</p>
                  <p className="mt-1 text-sm text-ink/65">{dermatologist.qualifications.join(', ')}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Languages className="mt-0.5 shrink-0 text-teal-500" size={19} />
                <div>
                  <p className="text-sm font-semibold text-teal-800">Languages</p>
                  <p className="mt-1 text-sm text-ink/65">{dermatologist.languages.join(', ')}</p>
                </div>
              </div>
            </div>
            <p className="mt-5 text-xs text-ink/40">{dermatologist.registration}</p>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-teal-fade px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-soft transition hover:scale-105"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* About / Clinic values */}
      <section className="bg-sand-50 py-20">
        <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
          <SectionHeading eyebrow="About Vijaya Clinics" title="Where skin care meets peace of mind" subtitle="Skin conditions and mental wellbeing are rarely unrelated - our clinic in Nagpur brings both kinds of specialist care into one calm, considered space." />
          <ClinicValues accent="teal" />
        </div>
      </section>

      {/* Concerns */}
      <section className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-8">
        <SectionHeading eyebrow="Patient Concerns" title="Conditions Commonly Treated" />
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {dermatologist.concerns.map((c) => (
            <span key={c} className="rounded-full bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700">{c}</span>
          ))}
        </div>
      </section>

      {/* Treatments */}
      <section className="bg-sand-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Treatments" title="Dermatology &amp; Aesthetic Care" subtitle="A sample of what we offer - see the full list for details on each." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {treatmentList.map((t) => <TreatmentCard key={t.slug} {...t} />)}
          </div>
          <div className="mt-8 text-center">
            <Link to="/treatments" className="text-sm font-semibold text-teal-600 underline underline-offset-4">View all treatments →</Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading eyebrow="How We Work" title="Our Approach to Your Skin" />
        <div className="mt-14">
          <ProcessSteps steps={dermatologyProcess} accent="teal" />
        </div>
      </section>

      {/* Clinic photo strip */}
      <section className="relative h-[45vh] min-h-[320px] w-full overflow-hidden">
        <img src={treatmentRoomImg} alt="Vijaya Clinics treatment room" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-teal-900/40" />
      </section>

      {/* Reviews */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Patient Stories" title="Dermatology Reviews" />
          <div className="mt-14">
            <TestimonialCarousel reviews={dermatologyReviews} accent="teal" />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-teal-800 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">Have a skin or hair concern?</h2>
          <p className="mt-3 text-white/75">Reach out to Vijaya Clinics - we're happy to answer your questions.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/80">
            <span className="flex items-center gap-2"><MapPin size={15} /> {clinic.address}</span>
            <span className="flex items-center gap-2"><Phone size={15} /> {clinic.phone}</span>
          </div>
          <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-teal-700 shadow-soft transition hover:scale-105">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
