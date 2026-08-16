import { Link } from 'react-router-dom'
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react'
import logo from '../assets/logo.jpg'
import { useSiteData } from '../context/SiteDataContext.jsx'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/dermatology', label: 'Dermatology' },
  { to: '/psychiatry', label: 'Psychiatry' },
  { to: '/treatments', label: 'Treatments' },
  { to: '/blog', label: 'Blog' },
  { to: '/?section=gallery', label: 'Gallery' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  const { settings: clinic } = useSiteData()
  return (
    <footer className="bg-teal-800 text-white">
      {/* Top CTA banner */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row lg:px-8">
          <div className="text-center sm:text-left">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">Your Skin &amp; Mind, Cared For</h2>
            <p className="mt-2 text-sm text-white/70">Be the first to know about care tips, treatments, and updates from Vijaya Clinics.</p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 rounded-full bg-mint-400 px-7 py-3 text-sm font-semibold text-teal-900 shadow-soft transition hover:scale-105"
          >
            Book Now
          </Link>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Vijaya Clinics" className="h-10 w-10 rounded-full object-cover" />
            <p className="font-display text-lg font-semibold">Vijaya Clinics</p>
          </div>
          <p className="mt-4 text-sm text-white/70">Centre for Skin &amp; Mental Health - where dermatology meets calm, careful attention.</p>
          <div className="mt-5 flex gap-3">
            <a href={clinic.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full bg-white/10 p-2.5 hover:bg-white/20"><Instagram size={16} /></a>
            <a href="#" aria-label="Facebook (coming soon)" className="rounded-full bg-white/10 p-2.5 hover:bg-white/20"><Facebook size={16} /></a>
            <a href="#" aria-label="YouTube (coming soon)" className="rounded-full bg-white/10 p-2.5 hover:bg-white/20"><Youtube size={16} /></a>
          </div>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-mint-300">Quick Links</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/80">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="flex items-center gap-1.5 hover:text-white">
                  <ChevronRight size={13} className="shrink-0 text-mint-300" /> {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-mint-300">Important Links</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/80">
            <li>
              <Link to="/privacy-policy" className="flex items-center gap-1.5 hover:text-white">
                <ChevronRight size={13} className="shrink-0 text-mint-300" /> Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="flex items-center gap-1.5 hover:text-white">
                <ChevronRight size={13} className="shrink-0 text-mint-300" /> Terms
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-mint-300">Get In Touch</p>
          <ul className="mt-4 space-y-4 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10"><MapPin size={15} /></span>
              <span className="break-words pt-1.5">{clinic.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10"><Phone size={15} /></span>
              <a href={`tel:${clinic.phone}`} className="break-words font-semibold hover:text-white">{clinic.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10"><Mail size={15} /></span>
              <a href={`mailto:${clinic.email}`} className="break-all hover:text-white">{clinic.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10"><Clock size={15} /></span>
              <span className="pt-1.5">Mon - Sat: 11:30 AM - 8:30 PM<br />Wed &amp; Sun: Closed</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Vijaya Clinics. All rights reserved. &nbsp;·&nbsp;
        <Link to="/admin/login" className="hover:text-white/90">Doctor/Admin Login</Link>
      </div>
    </footer>
  )
}
