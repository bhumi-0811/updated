import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GraduationCap, Languages, BadgeCheck, MapPin, Phone, Award, Users, BookOpen, HeartHandshake, ArrowRight, Leaf } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import TestimonialCarousel from '../components/TestimonialCarousel.jsx'
import TeamMemberCard from '../components/TeamMemberCard.jsx'
import ClinicValues from '../components/ClinicValues.jsx'
import { psychiatrist, psychiatryReviews } from '../utils/clinicData.js'
import { useSiteData } from '../context/SiteDataContext.jsx'
import prithishaImg from '../assets/dr-pritisha.jpg'
import counsellingImg from '../assets/counselling-room.jpg'

// TODO: Replace with the real 5 team members (photo, name, role, description) once provided.
// To use a real photo, import it above (e.g. `import member1Img from '../assets/team-1.jpg'`)
// and set `photo: member1Img` below. Leave `photo: null` to keep the initials placeholder.
const psychiatryTeam = [
  {
    photo: null,
    name: 'Dr. Sample Name 1',
    role: 'Clinical Psychologist',
    description: 'Supports patients with therapy-led approaches for anxiety, stress and mood-related concerns.',
  },
  {
    photo: null,
    name: 'Dr. Sample Name 2',
    role: 'Counselling Psychologist',
    description: 'Focuses on relationship counselling and building healthy coping strategies for daily life.',
  },
  {
    photo: null,
    name: 'Sample Name 3',
    role: 'Clinical Case Coordinator',
    description: 'Coordinates patient care plans and ensures smooth follow-ups between sessions.',
  },
  {
    photo: null,
    name: 'Sample Name 4',
    role: 'Child & Adolescent Therapist',
    description: 'Specialises in supporting young patients through developmental and behavioural concerns.',
  },
  {
    photo: null,
    name: 'Sample Name 5',
    role: 'Wellness Program Lead',
    description: 'Runs psychoeducation workshops and community initiatives promoting mental wellness.',
  },
]

const services = [
  { icon: HeartHandshake, title: 'Psychiatric Consultation', desc: 'In-person evaluation and personalised care planning for mental health concerns.' },
  { icon: BookOpen, title: 'Therapy', desc: 'Psychotherapeutic approaches including CBT and DBT, alongside medication management where needed.' },
  { icon: Users, title: 'Psychoeducation', desc: 'Workshops and initiatives focused on mental health awareness and reducing stigma.' },
]

export default function Psychiatry() {
  const { settings: clinic } = useSiteData()

  return (
    <div>
      {/* Doctor intro */}
      <section className="relative overflow-hidden bg-white px-6 py-20 sm:py-24 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 -top-24 h-[26rem] w-[26rem] rounded-full bg-mint-50 blur-[2px]"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto max-w-sm lg:mx-0"
          >
            <div className="absolute -bottom-6 -right-6 h-full w-4/5 rounded-2xl bg-mint-100" />
            <img
              src={prithishaImg}
              alt={psychiatrist.name}
              className="relative z-10 aspect-[4/5] w-full rounded-2xl object-cover shadow-soft"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-11 bottom-10 z-0 hidden -rotate-90 select-none font-display text-2xl font-medium tracking-[0.3em] text-mint-600/70 sm:block"
            >
              {psychiatrist.name.replace('Dr. ', '').split(' ')[0].toUpperCase()}
            </span>
          </motion.div>

          <div>
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="rounded-full bg-mint-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-mint-700">Psychiatry &amp; Mental Health</span>
                <span className="rounded-full bg-sand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-teal-800">{psychiatrist.experienceYears}+ Years</span>
              </div>
              <Leaf className="hidden shrink-0 text-mint-400 sm:block" size={30} strokeWidth={1.5} />
            </div>

            <h1 className="mt-4 font-display text-4xl font-semibold text-teal-900 sm:text-5xl">
              {psychiatrist.name.split(' ').slice(0, -1).join(' ')} <span className="text-mint-600">{psychiatrist.name.split(' ').slice(-1)}</span>
            </h1>

            <div className="mt-6 flex items-start gap-4 rounded-2xl bg-mint-50/70 p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-fade text-white">
                <ArrowRight size={18} />
              </span>
              <p className="text-sm leading-relaxed text-teal-900/90">{psychiatrist.bio}</p>
            </div>

            <p className="mt-6 max-w-xl text-ink/70">
              She creates a calm, judgement-free space for patients to talk openly - combining clinical expertise with genuine warmth and patience.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="flex gap-3">
                <GraduationCap className="mt-0.5 shrink-0 text-mint-600" size={19} />
                <div>
                  <p className="text-sm font-semibold text-teal-800">Qualifications</p>
                  <p className="mt-1 text-sm text-ink/65">{psychiatrist.qualifications.join(', ')}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Languages className="mt-0.5 shrink-0 text-mint-600" size={19} />
                <div>
                  <p className="text-sm font-semibold text-teal-800">Languages</p>
                  <p className="mt-1 text-sm text-ink/65">{psychiatrist.languages.join(', ')}</p>
                </div>
              </div>
            </div>
            <p className="mt-5 text-xs text-ink/40">{psychiatrist.registration}</p>

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
          <ClinicValues accent="mint" />
        </div>
      </section>

      {/* Areas of care */}
      <section className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-8">
        <SectionHeading eyebrow="Areas of Care" title="Conditions We Support" />
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {psychiatrist.concerns.map((c) => (
            <span key={c} className="rounded-full bg-mint-50 px-4 py-2 text-sm font-medium text-mint-700">{c}</span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-mint-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Services" title="How We Support You" />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl bg-white p-7 shadow-card">
                <div className="inline-flex rounded-2xl bg-mint-50 p-3 text-mint-600"><s.icon size={22} /></div>
                <p className="mt-4 font-display font-semibold text-teal-800">{s.title}</p>
                <p className="mt-2 text-sm text-ink/65">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <SectionHeading eyebrow="Recognition &amp; Initiatives" title="Beyond the Clinic" />
        <div className="mt-10 space-y-5">
          {psychiatrist.recognition.map((r) => (
            <div key={r} className="flex gap-3 rounded-2xl bg-sand-50 p-5">
              <Award className="mt-0.5 shrink-0 text-mint-500" size={20} />
              <p className="text-sm text-ink/75">{r}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-sand-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Our Team" title="Mental Wellness Team" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {psychiatryTeam.map((member, i) => (
              <TeamMemberCard
                key={member.name}
                photo={member.photo}
                name={member.name}
                role={member.role}
                description={member.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Clinic photo strip */}
      <section className="relative h-[45vh] min-h-[320px] w-full overflow-hidden">
        <img src={counsellingImg} alt="Vijaya Clinics counselling room" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-teal-900/40" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <p className="max-w-md font-display text-xl text-white sm:text-2xl">A calm, private space designed for honest conversations.</p>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Patient Stories" title="Psychiatry Reviews" />
          <div className="mt-14">
            <TestimonialCarousel reviews={psychiatryReviews} accent="mint" />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-teal-800 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">Reaching out is a good first step</h2>
          <p className="mt-3 text-white/75">Get in touch with Vijaya Clinics - your conversation stays private.</p>
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
