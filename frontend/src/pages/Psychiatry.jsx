import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Brain, ClipboardCheck, HeartHandshake, MessageCircle, ScanLine, Stethoscope, X } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import { psychiatrist } from '../utils/clinicData.js'
import { useSiteData } from '../context/SiteDataContext.jsx'
import prithishaImg from '../assets/dr-pritisha.png'
import sanjanaImg from '../assets/sanjana-thakur.png'
import sonalImg from '../assets/sonal-deshbhratar.png'
import vanshikaImg from '../assets/vanshika-singh.png'
import harshitaImg from '../assets/harshita-mittal.jpg'
import zainabImg from '../assets/zainab-pandharpurwala.jpg'

const services = [
  { icon: Stethoscope, title: 'Psychiatric Consultation', desc: 'Comprehensive evaluation of emotional, behavioural, cognitive and mental-health concerns, with personalised treatment planning and medication management where clinically indicated.' },
  { icon: HeartHandshake, title: 'Therapy & Psychological Counselling', desc: 'Individualised psychological care for anxiety, depression, trauma, emotional regulation, self-esteem, relationships, stress and life transitions.' },
  { icon: MessageCircle, title: 'Couples & Relationship Therapy', desc: 'Support for communication difficulties, recurring conflicts, trust, attachment patterns, intimacy concerns and relationship transitions.' },
  { icon: ClipboardCheck, title: 'ADHD Assessment', desc: 'Structured clinical and psychometric assessment for attention, impulsivity, organisation and executive-functioning difficulties, followed by diagnostic formulation and recommendations.' },
  { icon: Brain, title: 'Neuromodulation / Brain Stimulation', desc: 'Non-invasive, neuroscience-informed interventions such as tDCS, considered as part of an individualised psychiatric treatment plan where clinically appropriate.' },
]

const conditions = [
  'Anxiety & Panic', 'Depression', 'OCD', 'Adult ADHD', 'Trauma & PTSD', 'Bipolar Disorder',
  'Sleep Difficulties', 'Stress & Burnout', 'Relationship Difficulties', 'Emotional Regulation',
  'Women’s Mental Health', 'Substance-Use Concerns',
]

const steps = [
  ['01', 'Assess', 'Detailed clinical assessment'],
  ['02', 'Understand', 'Individual formulation'],
  ['03', 'Personalise', 'Treatment shaped around you'],
  ['04', 'Review', 'Ongoing review and modification'],
]

const sanjanaProfile = {
  name: 'Sanjana Thakur',
  designation: 'Counselling Psychologist | Educator',
  qualifications: 'M.A. Counselling Psychology',
  summary: 'Sanjana works with individuals through a warm, collaborative and evidence-informed approach, offering a safe space to explore emotions, experiences and behavioural patterns with greater self-awareness, compassion and clarity.',
  approach: ['Warm', 'Collaborative', 'Individualised', 'Eclectic', 'Evidence-informed'],
  areas: [
    'Anxiety & Stress', 'Depression & Low Mood', 'Trauma & Childhood Experiences',
    'Neurodivergence & Neurodivergent Experiences', 'Emotional Regulation', 'Self-esteem & Identity',
    'Relationship Concerns', 'Grief & Loss', 'Burnout', 'Student & Academic Concerns',
    'Life Transitions & Personal Growth',
  ],
  philosophy: 'I believe therapy isn’t about fixing who you are — it’s about creating a safe, non-judgmental space to understand yourself with greater compassion, clarity and courage, and to move towards a life that feels more authentic to you.',
}

const sonalProfile = {
  name: 'Sonal Deshbhratar',
  designation: 'Therapist',
  qualifications: 'M.A. Clinical Psychology',
  summary: 'Sonal uses an integrative approach to help individuals understand emotional and behavioural patterns while working towards practical, meaningful changes in everyday life.',
  approach: ['Integrative', 'Collaborative', 'Evidence-based'],
  modalities: ['CBT', 'Mindfulness-Based Approaches', 'Solution-Focused Therapy', 'Supportive Psychotherapy'],
  areas: ['Anxiety & Stress', 'Depression', 'ADHD', 'OCD', 'Relationship Concerns', 'Self-esteem', 'Emotional Regulation', 'Workplace Stress & Burnout', 'Workplace Adjustment Difficulties'],
  clients: ['Adults (18+)', 'College Students', 'Working Professionals', 'Corporate Employees', 'Couples'],
  philosophy: 'I believe in creating a warm, non-judgmental space where you feel heard and understood, while working together towards practical and meaningful change.',
}

const vanshikaProfile = {
  name: 'Vanshika Singh',
  designation: 'Psychologist | CBT Practitioner',
  qualifications: 'M.A. Clinical Psychology',
  summary: 'Vanshika combines evidence-based psychological interventions with a compassionate and non-judgmental understanding of each individual’s experiences.',
  approach: ['Evidence-based', 'Ethical', 'Collaborative', 'Individualised'],
  modality: 'CBT-informed psychological interventions',
  areas: ['Anxiety Management', 'ADHD', 'Depression & Low Mood', 'Sleep Concerns', 'Stress & Productivity Management', 'Relationship Difficulties', 'Couples Therapy'],
  philosophy: 'Therapy is viewed as a gradual process of understanding yourself, developing healthier patterns and building psychological skills that extend beyond the therapy room.',
}

const harshitaProfile = {
  name: 'Harshita Mittal',
  designation: 'Counselling Psychologist | CBT, REBT & DBT Certified',
  qualifications: 'M.A. Clinical Psychology',
  summary: 'Harshita has a special interest in working with children, adolescents and young adults, supporting them in understanding their emotions, navigating challenges, building resilience and developing healthier, adaptive coping skills. She also works with young adults navigating career decisions, workplace stress, relationships, self-esteem and life transitions.',
  approach: ['CBT', 'REBT', 'DBT', 'Trauma-informed', 'Developmentally Sensitive', 'Collaborative'],
  ageGroups: [
    { title: 'Children & Adolescents', areas: ['Emotional Regulation', 'Anxiety & Stress', 'Behavioural & Emotional Concerns', 'Self-esteem & Confidence', 'Resilience Building', 'Adaptive Coping Skills', 'Adjustment & Life Transitions'] },
    { title: 'Young Adults', areas: ['Anxiety & Stress', 'Career Exploration & Decision-Making', 'Workplace Stress & Burnout', 'Relationship Concerns', 'Self-esteem & Confidence', 'Life Transitions & Adjustment', 'Emotional Regulation & Coping Skills'] },
  ],
  philosophy: 'Harshita believes therapy is not about being told what to do, but about having the right space and support to understand yourself and move forward. She offers a warm, non-judgmental and collaborative space where clients can openly talk about what they’re experiencing without feeling judged.',
  practice: 'Her approach combines CBT, REBT and DBT with practical, developmentally sensitive interventions. Sessions focus not only on understanding emotions and patterns, but also on learning skills that can be applied in everyday life—whether that means managing anxiety, regulating emotions, handling difficult situations, improving relationships, building confidence or navigating important life changes. The goal is to help clients feel more understood, more equipped and more confident in handling life, one step at a time.',
}

const zainabProfile = {
  name: 'Zainab Pandharpurwala',
  designation: 'Psychologist',
  qualifications: 'M.A. Clinical Psychology',
  summary: 'Zainab offers a warm and collaborative therapeutic space, helping individuals explore difficult emotions, understand themselves better and navigate personal and relationship concerns.',
  approach: ['Warm', 'Supportive', 'Collaborative', 'Individualised', 'Evidence-based', 'Ethical'],
  modality: 'CBT',
  areas: ['Anxiety', 'Overthinking & Worry', 'Self-esteem', 'Relationship Concerns', 'Emotional Difficulties', 'Life Transitions', 'Emotional Regulation'],
  philosophy: 'Therapy should provide a space where individuals can express themselves openly, feel understood and explore their experiences without judgment.',
}

export default function Psychiatry() {
  const { settings: clinic } = useSiteData()
  const [showSanjanaProfile, setShowSanjanaProfile] = useState(false)
  const [showSonalProfile, setShowSonalProfile] = useState(false)
  const [showVanshikaProfile, setShowVanshikaProfile] = useState(false)
  const [showHarshitaProfile, setShowHarshitaProfile] = useState(false)
  const [showZainabProfile, setShowZainabProfile] = useState(false)
  const therapyMessage = encodeURIComponent('Hi, I would like to enquire about therapy sessions at Vijaya Clinics.')
  const whatsappUrl = `https://wa.me/91${clinic.phone}?text=${therapyMessage}`
  const psychiatristBookingUrl = 'https://www.eka.care/doctor/pritisha-saxena-nikam-psychiatrist-nagpur/calendar?utm_source=ig&utm_medium=social&utm_content=link_in_bio'

  return (
    <div>
      <section className="relative overflow-hidden bg-teal-900 px-6 py-20 text-white sm:py-28 lg:px-8">
        <div className="absolute -right-20 -top-24 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -right-8 -top-12 h-72 w-72 rounded-full border border-white/10" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint-300">Vijaya Clinics · Psychiatry &amp; Mental Health</p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">Mental healthcare, grounded in science. Centred around you.</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">Comprehensive psychiatric care, psychotherapy, psychological assessment and neuromodulation through an integrated, evidence-based approach.</p>
            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-mint-200 sm:text-sm">Psychiatry <span className="px-2 text-white/40">•</span> Psychology <span className="px-2 text-white/40">•</span> Assessment <span className="px-2 text-white/40">•</span> Neuromodulation</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-teal-800 transition hover:bg-mint-50">Enquire for Therapy <ArrowRight size={16} /></a>
              <a href={psychiatristBookingUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Book with Dr. Pritisha</a>
              <a href="https://docs.google.com/forms/d/1Zj3s8aigQXhN2sXnQf90JsrXYcRS-nNiqp1_A9870V4/viewform?edit_requested=true&pli=1" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Take Free Survey</a>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative mx-auto w-full max-w-md">
            <img src={prithishaImg} alt={psychiatrist.name} className="aspect-[4/5] w-full rounded-[2rem] object-cover object-[center_35%] shadow-2xl" />
            <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-white/70 bg-white/95 p-4 text-teal-900 shadow-card backdrop-blur sm:left-8 sm:right-8">
              <p className="font-display text-lg font-semibold">{psychiatrist.name}</p>
              <p className="mt-1 text-sm text-ink/65">Psychiatrist <span className="px-1">·</span> Founding Director</p>
            </div>
          </motion.div>
        </div>
        <a href="#services" className="relative mx-auto mt-16 flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-widest text-white/60 hover:text-white">Explore care <ArrowDown size={14} /></a>
      </section>

      <section id="services" className="scroll-mt-24 px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Mental Health Services" title="Care shaped around your needs" subtitle="A range of clinical services, considered as part of an individualised plan." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }, index) => (
              <motion.article key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.35, delay: index * 0.04 }} className="flex h-full flex-col rounded-2xl border border-teal-100/80 bg-white p-6 shadow-card sm:p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700"><Icon size={20} strokeWidth={1.7} /></div>
                <h3 className="mt-5 font-display text-lg font-semibold text-teal-900">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-ink/65">{desc}</p>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-900">Enquire <ArrowRight size={15} /></a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="scroll-mt-24 bg-sand-50 px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Our Team" title="Meet Our Mental Health Team" subtitle="Psychiatric and psychological care, with direct ways to learn about each professional and enquire about support." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <TeamCard
              image={sanjanaImg}
              name={sanjanaProfile.name}
              designation={sanjanaProfile.designation}
              qualification={sanjanaProfile.qualifications}
              onViewProfile={() => setShowSanjanaProfile(true)}
              viewLabel="View Profile"
              actions={<a href={`https://wa.me/91${clinic.phone}?text=${encodeURIComponent('Hi, I would like to enquire about therapy with Sanjana Thakur at Vijaya Clinics.')}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-teal-800 px-4 py-2.5 text-xs font-semibold text-white">Enquire <ArrowRight size={14} /></a>}
            />
            <TeamCard
              image={sonalImg}
              name={sonalProfile.name}
              designation={sonalProfile.designation}
              qualification={sonalProfile.qualifications}
              onViewProfile={() => setShowSonalProfile(true)}
              viewLabel="View Profile"
              actions={<a href={`https://wa.me/91${clinic.phone}?text=${encodeURIComponent('Hi, I would like to enquire about therapy with Sonal Deshbhratar at Vijaya Clinics.')}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-teal-800 px-4 py-2.5 text-xs font-semibold text-white">Enquire <ArrowRight size={14} /></a>}
            />
            <TeamCard
              image={vanshikaImg}
              name={vanshikaProfile.name}
              designation={vanshikaProfile.designation}
              qualification={vanshikaProfile.qualifications}
              onViewProfile={() => setShowVanshikaProfile(true)}
              viewLabel="View Profile"
              actions={<a href={`https://wa.me/91${clinic.phone}?text=${encodeURIComponent('Hi, I would like to enquire about therapy with Vanshika Singh at Vijaya Clinics.')}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-teal-800 px-4 py-2.5 text-xs font-semibold text-white">Enquire for Therapy <ArrowRight size={14} /></a>}
            />
            <TeamCard
              image={harshitaImg}
              name={harshitaProfile.name}
              designation={harshitaProfile.designation}
              qualification={harshitaProfile.qualifications}
              onViewProfile={() => setShowHarshitaProfile(true)}
              viewLabel="View Profile"
              actions={<a href={`https://wa.me/91${clinic.phone}?text=${encodeURIComponent('Hi, I would like to enquire about therapy with Harshita Mittal at Vijaya Clinics.')}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-teal-800 px-4 py-2.5 text-xs font-semibold text-white">Enquire for Therapy <ArrowRight size={14} /></a>}
            />
            <TeamCard
              image={zainabImg}
              name={zainabProfile.name}
              designation={zainabProfile.designation}
              qualification={zainabProfile.qualifications}
              onViewProfile={() => setShowZainabProfile(true)}
              viewLabel="View Profile"
              actions={<a href={`https://wa.me/91${clinic.phone}?text=${encodeURIComponent('Hi, I would like to enquire about therapy with Zainab Pandharpurwala at Vijaya Clinics.')}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-teal-800 px-4 py-2.5 text-xs font-semibold text-white">Enquire for Therapy <ArrowRight size={14} /></a>}
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Our Approach" title="An integrated approach to mental healthcare" subtitle="Mental health is shaped by biology, psychology, relationships, environment and lived experiences. At Vijaya Clinics, treatment is planned around the individual." />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, title, text], index) => (
              <div key={title} className="relative rounded-2xl border border-teal-100 bg-white p-6">
                <p className="text-xs font-semibold tracking-[0.16em] text-teal-500">{number}</p>
                <h3 className="mt-3 font-display text-xl font-semibold text-teal-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/60">{text}</p>
                {index < steps.length - 1 && <ScanLine className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-teal-300 lg:block" size={20} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal-50/70 px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Areas of Care" title="Conditions We Work With" subtitle="Explore the concerns our mental-health services can support." />
          <ul className="mt-10 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {conditions.map((condition) => <li key={condition} className="border-b border-teal-200/70 py-4 text-sm font-medium text-teal-900">{condition}</li>)}
          </ul>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Common Questions" title="Planning your first conversation" />
          <div className="mt-8 divide-y divide-teal-100 rounded-2xl border border-teal-100 bg-white px-5 shadow-card sm:px-7">
            <details className="group py-5"><summary className="cursor-pointer list-none pr-8 font-semibold text-teal-900 marker:content-none">How do I enquire about therapy sessions?<span className="float-right text-teal-600 group-open:rotate-45">+</span></summary><p className="mt-3 text-sm leading-6 text-ink/65">Use the Enquire for Therapy button to message our team on WhatsApp. We can guide you on the next steps and current online or in-clinic availability.</p></details>
            <details className="group py-5"><summary className="cursor-pointer list-none pr-8 font-semibold text-teal-900 marker:content-none">What happens during a psychiatric consultation?<span className="float-right text-teal-600 group-open:rotate-45">+</span></summary><p className="mt-3 text-sm leading-6 text-ink/65">A consultation includes discussion of your concerns and relevant history, followed by a clinical assessment and recommendations tailored to your needs.</p></details>
            <details className="group py-5"><summary className="cursor-pointer list-none pr-8 font-semibold text-teal-900 marker:content-none">Can I ask about online or in-clinic appointments?<span className="float-right text-teal-600 group-open:rotate-45">+</span></summary><p className="mt-3 text-sm leading-6 text-ink/65">Yes. Contact the clinic to confirm the session format and availability for the service you need.</p></details>
          </div>
        </div>
      </section>

      <section className="bg-teal-900 px-6 py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint-300">Vijaya Clinics · Nagpur</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Start with a conversation</h2>
          <p className="mt-4 text-sm leading-6 text-white/70">Tell us what kind of support you’re looking for. Our team can help you understand the next step.</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-teal-900 hover:bg-mint-50"><MessageCircle size={16} /> Enquire for Therapy</a>
            <a href={psychiatristBookingUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Book Consultation</a>
          </div>
          <p className="mt-5 text-xs text-white/50">{clinic.phone} <span className="px-1">·</span> {clinic.address}</p>
        </div>
      </section>
      {showSanjanaProfile && <SanjanaProfileDialog profile={sanjanaProfile} phone={clinic.phone} onClose={() => setShowSanjanaProfile(false)} />}
      {showSonalProfile && <SonalProfileDialog profile={sonalProfile} phone={clinic.phone} onClose={() => setShowSonalProfile(false)} />}
      {showVanshikaProfile && <VanshikaProfileDialog profile={vanshikaProfile} phone={clinic.phone} onClose={() => setShowVanshikaProfile(false)} />}
      {showHarshitaProfile && <HarshitaProfileDialog profile={harshitaProfile} phone={clinic.phone} onClose={() => setShowHarshitaProfile(false)} />}
      {showZainabProfile && <ZainabProfileDialog profile={zainabProfile} phone={clinic.phone} onClose={() => setShowZainabProfile(false)} />}
    </div>
  )
}

function TeamCard({ image, name, designation, qualification, onViewProfile, viewLabel, actions }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-card">
      <img src={image} alt={name} className="h-56 w-full object-cover object-[center_40%]" />
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-teal-600">{designation}</p>
        <h3 className="mt-2 font-display text-xl font-semibold text-teal-900">{name}</h3>
        <p className="mt-1 text-xs text-ink/55">{qualification}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          <button type="button" onClick={onViewProfile} className="inline-flex items-center gap-1.5 rounded-full border border-teal-200 px-4 py-2.5 text-xs font-semibold text-teal-800 transition hover:bg-teal-50">{viewLabel}</button>
          {actions}
        </div>
      </div>
    </article>
  )
}

function SanjanaProfileDialog({ profile, phone, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => { if (event.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const enquiryUrl = `https://wa.me/91${phone}?text=${encodeURIComponent('Hi, I would like to enquire about therapy with Sanjana Thakur at Vijaya Clinics.')}`

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="sanjana-profile-title" onClick={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <div className="relative my-auto max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
        <button type="button" onClick={onClose} aria-label="Close profile" className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-teal-900 shadow"><X size={20} /></button>
        <div className="grid sm:grid-cols-[250px_1fr]">
          <img src={sanjanaImg} alt={profile.name} className="h-64 w-full object-cover object-[center_40%] sm:h-full sm:min-h-[680px]" />
          <div className="p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-600">{profile.designation}</p>
            <h2 id="sanjana-profile-title" className="mt-2 font-display text-2xl font-semibold text-teal-900">{profile.name}</h2>
            <p className="mt-1 text-sm text-ink/55">{profile.qualifications}</p>
            <p className="mt-5 text-sm leading-6 text-ink/70">{profile.summary}</p>
            <h3 className="mt-6 text-sm font-semibold text-teal-900">Approach</h3>
            <div className="mt-2 flex flex-wrap gap-2">{profile.approach.map((item) => <span key={item} className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-700">{item}</span>)}</div>
            <h3 className="mt-6 text-sm font-semibold text-teal-900">Areas of Work</h3>
            <ul className="mt-2 grid gap-2 sm:grid-cols-2">{profile.areas.map((area) => <li key={area} className="text-sm text-ink/70">{area}</li>)}</ul>
            <blockquote className="mt-6 border-l-2 border-teal-300 pl-4 text-sm italic leading-6 text-ink/70">“{profile.philosophy}”</blockquote>
            <p className="mt-5 rounded-xl bg-teal-50 p-4 text-sm leading-6 text-teal-900">Sanjana’s practice is LGBTQ+ inclusive and welcomes individuals across diverse identities, relationships and lived experiences.</p>
            <a href={enquiryUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-teal-800 px-5 py-3 text-sm font-semibold text-white">Enquire for Therapy <ArrowRight size={15} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

function SonalProfileDialog({ profile, phone, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => { if (event.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="sonal-profile-title" onClick={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <div className="relative my-auto max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
        <button type="button" onClick={onClose} aria-label="Close profile" className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-teal-900 shadow"><X size={20} /></button>
        <div className="grid sm:grid-cols-[250px_1fr]">
          <img src={sonalImg} alt={profile.name} className="h-64 w-full object-cover object-[center_40%] sm:h-full sm:min-h-[650px]" />
          <div className="p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-600">{profile.designation}</p>
            <h2 id="sonal-profile-title" className="mt-2 font-display text-2xl font-semibold text-teal-900">{profile.name}</h2>
            <p className="mt-1 text-sm text-ink/55">{profile.qualifications}</p>
            <p className="mt-5 text-sm leading-6 text-ink/70">{profile.summary}</p>
            <h3 className="mt-6 text-sm font-semibold text-teal-900">Approach</h3>
            <div className="mt-2 flex flex-wrap gap-2">{profile.approach.map((item) => <span key={item} className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-700">{item}</span>)}</div>
            <p className="mt-3 text-sm leading-6 text-ink/65">{profile.modalities.join(' · ')}</p>
            <h3 className="mt-6 text-sm font-semibold text-teal-900">Areas of Work</h3>
            <ul className="mt-2 grid gap-2 sm:grid-cols-2">{profile.areas.map((area) => <li key={area} className="text-sm text-ink/70">{area}</li>)}</ul>
            <h3 className="mt-6 text-sm font-semibold text-teal-900">Works With</h3>
            <div className="mt-2 flex flex-wrap gap-2">{profile.clients.map((client) => <span key={client} className="rounded-full bg-sand-50 px-3 py-1.5 text-xs font-medium text-ink/70">{client}</span>)}</div>
            <blockquote className="mt-6 border-l-2 border-teal-300 pl-4 text-sm italic leading-6 text-ink/70">“{profile.philosophy}”</blockquote>
            <a href={`https://wa.me/91${phone}?text=${encodeURIComponent('Hi, I would like to enquire about therapy with Sonal Deshbhratar at Vijaya Clinics.')}`} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-teal-800 px-5 py-3 text-sm font-semibold text-white">Enquire for Therapy <ArrowRight size={15} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

function VanshikaProfileDialog({ profile, phone, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => { if (event.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const enquiryUrl = `https://wa.me/91${phone}?text=${encodeURIComponent('Hi, I would like to enquire about therapy with Vanshika Singh at Vijaya Clinics.')}`

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="vanshika-profile-title" onClick={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <div className="relative my-auto max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
        <button type="button" onClick={onClose} aria-label="Close profile" className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-teal-900 shadow"><X size={20} /></button>
        <div className="grid sm:grid-cols-[250px_1fr]">
          <img src={vanshikaImg} alt={profile.name} className="h-64 w-full object-cover object-[center_40%] sm:h-full sm:min-h-[600px]" />
          <div className="p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-600">{profile.designation}</p>
            <h2 id="vanshika-profile-title" className="mt-2 font-display text-2xl font-semibold text-teal-900">{profile.name}</h2>
            <p className="mt-1 text-sm text-ink/55">{profile.qualifications}</p>
            <p className="mt-5 text-sm leading-6 text-ink/70">{profile.summary}</p>
            <h3 className="mt-6 text-sm font-semibold text-teal-900">Approach</h3>
            <div className="mt-2 flex flex-wrap gap-2">{profile.approach.map((item) => <span key={item} className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-700">{item}</span>)}</div>
            <p className="mt-3 text-sm leading-6 text-ink/65">{profile.modality}</p>
            <h3 className="mt-6 text-sm font-semibold text-teal-900">Areas of Work</h3>
            <ul className="mt-2 grid gap-2 sm:grid-cols-2">{profile.areas.map((area) => <li key={area} className="text-sm text-ink/70">{area}</li>)}</ul>
            <blockquote className="mt-6 border-l-2 border-teal-300 pl-4 text-sm italic leading-6 text-ink/70">“{profile.philosophy}”</blockquote>
            <a href={enquiryUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-teal-800 px-5 py-3 text-sm font-semibold text-white">Enquire for Therapy <ArrowRight size={15} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

function HarshitaProfileDialog({ profile, phone, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => { if (event.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const enquiryUrl = `https://wa.me/91${phone}?text=${encodeURIComponent('Hi, I would like to enquire about therapy with Harshita Mittal at Vijaya Clinics.')}`

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="harshita-profile-title" onClick={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <div className="relative my-auto max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
        <button type="button" onClick={onClose} aria-label="Close profile" className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-teal-900 shadow"><X size={20} /></button>
        <div className="grid sm:grid-cols-[270px_1fr]">
          <img src={harshitaImg} alt={profile.name} className="h-64 w-full object-cover object-[center_40%] sm:h-full sm:min-h-[780px]" />
          <div className="p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-600">{profile.designation}</p>
            <h2 id="harshita-profile-title" className="mt-2 font-display text-2xl font-semibold text-teal-900">{profile.name}</h2>
            <p className="mt-1 text-sm text-ink/55">{profile.qualifications}</p>
            <p className="mt-5 text-sm leading-6 text-ink/70">{profile.summary}</p>
            <h3 className="mt-6 text-sm font-semibold text-teal-900">Approach</h3>
            <div className="mt-2 flex flex-wrap gap-2">{profile.approach.map((item) => <span key={item} className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-700">{item}</span>)}</div>
            {profile.ageGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mt-6 text-sm font-semibold text-teal-900">{group.title}</h3>
                <ul className="mt-2 grid gap-2 sm:grid-cols-2">{group.areas.map((area) => <li key={area} className="text-sm text-ink/70">{area}</li>)}</ul>
              </div>
            ))}
            <h3 className="mt-6 text-sm font-semibold text-teal-900">Her Approach</h3>
            <p className="mt-2 text-sm leading-6 text-ink/70">{profile.philosophy}</p>
            <p className="mt-3 text-sm leading-6 text-ink/70">{profile.practice}</p>
            <a href={enquiryUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-teal-800 px-5 py-3 text-sm font-semibold text-white">Enquire for Therapy <ArrowRight size={15} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

function ZainabProfileDialog({ profile, phone, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => { if (event.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const enquiryUrl = `https://wa.me/91${phone}?text=${encodeURIComponent('Hi, I would like to enquire about therapy with Zainab Pandharpurwala at Vijaya Clinics.')}`

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="zainab-profile-title" onClick={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <div className="relative my-auto max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
        <button type="button" onClick={onClose} aria-label="Close profile" className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-teal-900 shadow"><X size={20} /></button>
        <div className="grid sm:grid-cols-[250px_1fr]">
          <img src={zainabImg} alt={profile.name} className="h-64 w-full object-cover object-[center_40%] sm:h-full sm:min-h-[560px]" />
          <div className="p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-600">{profile.designation}</p>
            <h2 id="zainab-profile-title" className="mt-2 font-display text-2xl font-semibold text-teal-900">{profile.name}</h2>
            <p className="mt-1 text-sm text-ink/55">{profile.qualifications}</p>
            <p className="mt-5 text-sm leading-6 text-ink/70">{profile.summary}</p>
            <h3 className="mt-6 text-sm font-semibold text-teal-900">Approach</h3>
            <div className="mt-2 flex flex-wrap gap-2">{profile.approach.map((item) => <span key={item} className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-700">{item}</span>)}</div>
            <p className="mt-3 text-sm leading-6 text-ink/65">{profile.modality}</p>
            <h3 className="mt-6 text-sm font-semibold text-teal-900">Areas of Work</h3>
            <ul className="mt-2 grid gap-2 sm:grid-cols-2">{profile.areas.map((area) => <li key={area} className="text-sm text-ink/70">{area}</li>)}</ul>
            <blockquote className="mt-6 border-l-2 border-teal-300 pl-4 text-sm italic leading-6 text-ink/70">“{profile.philosophy}”</blockquote>
            <a href={enquiryUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-teal-800 px-5 py-3 text-sm font-semibold text-white">Enquire for Therapy <ArrowRight size={15} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
