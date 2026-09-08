import { Link } from 'react-router-dom'
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react'
import logo from '../assets/vijaya-clinics-logo.png'
import { useSiteData } from '../context/SiteDataContext.jsx'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/dermatology', label: 'Dermatology' },
  { to: '/psychiatry', label: 'Psychiatry' },
  { to: '/treatments', label: 'Treatments' },
  { to: '/?section=gallery', label: 'Gallery' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  const { settings: clinic } = useSiteData()
  const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(clinic.address)}`

  return (
    <footer className="relative overflow-hidden bg-teal-900 text-white">
      {/* Decorative top accent + soft glow, kept subtle */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mint-300/60 to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-teal-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-mint-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-8 lg:py-20">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-1.5 shadow-soft">
              <img src={logo} alt="Vijaya Clinics" className="h-full w-full scale-150 object-contain" />
            </span>
            <p className="font-display text-lg font-semibold">Vijaya Clinics</p>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            Centre for Skin &amp; Mental Health - where dermatology meets calm, careful attention.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={clinic.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full bg-white/10 p-2.5 transition hover:-translate-y-0.5 hover:bg-white/20"><Instagram size={16} /></a>
            <a href="#" aria-label="Facebook (coming soon)" className="rounded-full bg-white/10 p-2.5 transition hover:-translate-y-0.5 hover:bg-white/20"><Facebook size={16} /></a>
            <a href="#" aria-label="YouTube (coming soon)" className="rounded-full bg-white/10 p-2.5 transition hover:-translate-y-0.5 hover:bg-white/20"><Youtube size={16} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-mint-300">Quick Links</p>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-white/75">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="group inline-flex items-center gap-1 transition hover:text-white">
                  {l.label}
                  <ArrowUpRight size={12} className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Hours */}
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-mint-300">Contact</p>
          <ul className="mt-5 space-y-3.5 text-sm text-white/75">
            <li className="flex items-start gap-2.5"><MapPin size={16} className="mt-0.5 shrink-0 text-mint-300" /> <span className="break-words">{clinic.address}</span></li>
            <li className="flex items-center gap-2.5"><Phone size={16} className="shrink-0 text-mint-300" /> <a href={`tel:${clinic.phone}`} className="break-words transition hover:text-white">{clinic.phone}</a></li>
            <li className="flex items-center gap-2.5"><Mail size={16} className="shrink-0 text-mint-300" /> <a href={`mailto:${clinic.email}`} className="break-all transition hover:text-white">{clinic.email}</a></li>
          </ul>

          <p className="mt-6 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-mint-300">
            <Clock size={14} /> Hours
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-white/70">
            {clinic.hours.map((h) => (
              <li key={h.days}><span className="text-white/85">{h.days}:</span> {h.time}</li>
            ))}
          </ul>
        </div>

        {/* Map */}
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-mint-300">Find Us</p>
          <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 shadow-soft">
            <iframe
              title="Vijaya Clinics location"
              src={clinic.mapEmbed}
              width="100%"
              height="160"
              style={{ border: 0, filter: 'grayscale(0.15) contrast(1.05)' }}
              loading="lazy"
            />
          </div>
          <a
            href={mapsDirectionsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-mint-300 transition hover:text-white"
          >
            Get Directions <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Vijaya Clinics. All rights reserved.
      </div>
    </footer>
  )
}
