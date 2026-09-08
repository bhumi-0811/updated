import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import signage from '../assets/signage.jpg'
import reception from '../assets/reception.jpg'
import treatmentRoom from '../assets/treatment-room.jpg'
import treatmentRoom2 from '../assets/treatment-room-2.jpg'
import counsellingRoom from '../assets/counselling-room.jpg'
import interior from '../assets/interior-1.jpg'
import entrance from '../assets/entrance-door.jpg'
import doctorDesk from '../assets/doctor-desk.jpg'

const images = [
  { src: signage, caption: 'Vijaya Clinics' },
  { src: entrance, caption: 'Clinic Entrance' },
  { src: reception, caption: 'Reception' },
  { src: treatmentRoom, caption: 'Treatment Room' },
  { src: doctorDesk, caption: "Doctor's Desk" },
  { src: counsellingRoom, caption: 'Counselling Room' },
  { src: treatmentRoom2, caption: 'Clinic Interior' },
  { src: interior, caption: 'Clinic Ambience' },
]

export default function CinematicGallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = images[activeIndex]

  const showPrevious = () => setActiveIndex((index) => (index - 1 + images.length) % images.length)
  const showNext = () => setActiveIndex((index) => (index + 1) % images.length)

  return (
    <section className="overflow-hidden bg-teal-900 py-20 sm:py-24">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint-300">A Look Inside</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">The Vijaya Clinics Experience</h2>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="relative h-[52vh] min-h-[360px] overflow-hidden rounded-2xl shadow-soft sm:h-[58vh]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage.src}
                initial={{ opacity: 0, scale: 1.035 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                src={activeImage.src}
                alt={activeImage.caption}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-teal-950/80 via-teal-950/20 to-transparent px-6 pb-7 pt-20 text-center">
              <p className="text-sm font-medium text-white">{activeImage.caption}</p>
            </div>
          </div>
        </div>

        <div className="mt-7 flex items-center justify-between gap-5 sm:mt-8">
          <button type="button" onClick={showPrevious} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-mint-300 transition hover:text-white">
            <ChevronLeft size={17} /> Previous
          </button>
          <div className="flex items-center gap-2" aria-label={`Photo ${activeIndex + 1} of ${images.length}`}>
            {images.map((image, index) => (
              <button
                type="button"
                key={image.caption}
                onClick={() => setActiveIndex(index)}
                aria-label={`View ${image.caption}`}
                aria-current={index === activeIndex ? 'true' : undefined}
                className={`h-2 rounded-full transition-all ${index === activeIndex ? 'w-7 bg-mint-300' : 'w-2 bg-white/35 hover:bg-white/65'}`}
              />
            ))}
          </div>
          <button type="button" onClick={showNext} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-mint-300 transition hover:text-white">
            Next <ChevronRight size={17} />
          </button>
        </div>
      </div>
    </section>
  )
}
