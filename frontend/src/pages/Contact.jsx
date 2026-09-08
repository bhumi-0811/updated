import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import { useSiteData } from '../context/SiteDataContext.jsx'
import whatsappIcon from '../assets/whatsapp-icon-clean.png'

export default function Contact() {
  const { settings: clinic } = useSiteData()

  return (
    <div>
      <section className="bg-teal-fade px-6 py-14 text-center sm:py-16">
        <h1 className="font-display text-3xl font-semibold text-white sm:text-4xl">Contact Us</h1>
        <p className="mx-auto mt-3 max-w-xl text-white/85">We're here to help - reach out any way that's easiest for you.</p>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Get in Touch" title="Chat with us" />
            <div className="mt-8 rounded-3xl border border-teal-100 bg-white p-8 text-center shadow-card">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366]/10 p-3">
                <img src={whatsappIcon} alt="WhatsApp" className="h-full w-full object-contain" />
              </div>
              <p className="mt-5 font-display text-xl font-semibold text-teal-800">Chat on WhatsApp</p>
              <p className="mt-2 text-sm text-ink/65">
                The quickest way to reach us - message us directly and our team will respond as soon as possible.
              </p>
              <a
                href={`https://wa.me/91${clinic.phone}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 font-semibold text-white shadow-soft transition hover:scale-105"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-sand-50 p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 shrink-0 text-teal-600" size={20} />
                <div className="min-w-0">
                  <p className="font-semibold text-ink/85">{clinic.name}</p>
                  <p className="break-words text-sm text-ink/65">{clinic.address}</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-sand-50 p-6">
              <div className="flex items-center gap-3">
                <Phone className="shrink-0 text-teal-600" size={20} />
                <a href={`tel:${clinic.phone}`} className="break-words text-ink/85 hover:text-teal-700">{clinic.phone}</a>
              </div>
            </div>
            <div className="rounded-2xl bg-sand-50 p-6">
              <div className="flex items-center gap-3">
                <Mail className="shrink-0 text-teal-600" size={20} />
                <a href={`mailto:${clinic.email}`} className="break-all text-ink/85 hover:text-teal-700">{clinic.email}</a>
              </div>
            </div>
            <div className="rounded-2xl bg-sand-50 p-6">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 shrink-0 text-teal-600" size={20} />
                <ul className="space-y-1 text-sm text-ink/65">
                  {clinic.hours.map((h) => (
                    <li key={h.days}><span className="font-medium text-ink/80">{h.days}:</span> {h.time}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-card">
              <iframe
                title="Vijaya Clinics location"
                src={clinic.mapEmbed}
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
