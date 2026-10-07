import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
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
  const galleryRef = useRef(null)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: galleryRef, offset: ['start end', 'end start'] })
  const galleryY = useTransform(scrollYProgress, [0, 1], ['6%', '-6%'])

  return (
    <section ref={galleryRef} className="overflow-hidden bg-teal-900 py-20 sm:py-24">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint-300">A Look Inside</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">The Vijaya Clinics Experience</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/65">Explore the clinic, then select any photo to view it up close.</p>
        </div>

        <div className="overflow-hidden py-6">
          <motion.div style={{ y: galleryY }} className="flex w-max gap-3 sm:gap-4">
            <AutoScrollRow images={images} reduceMotion={reduceMotion} onSelect={setSelectedIndex} />
          </motion.div>
        </div>
      </div>
      {selectedIndex !== null && (
        createPortal(
          <PhotoViewer
            image={images[selectedIndex]}
            currentIndex={selectedIndex}
            total={images.length}
            onClose={() => setSelectedIndex(null)}
            onPrevious={() => setSelectedIndex((selectedIndex - 1 + images.length) % images.length)}
            onNext={() => setSelectedIndex((selectedIndex + 1) % images.length)}
          />,
          document.body,
        )
      )}
    </section>
  )
}

function AutoScrollRow({ images: rowImages, reduceMotion, onSelect }) {
  const loopedImages = [...rowImages, ...rowImages]

  return (
    <motion.div
      animate={reduceMotion ? { x: 0 } : { x: ['0%', '-50%'] }}
      transition={reduceMotion ? { duration: 0 } : { duration: 34, ease: 'linear', repeat: Infinity }}
      className="flex w-max gap-3 sm:gap-4"
    >
      {loopedImages.map((image, index) => (
        <figure key={`${image.caption}-${index}`} className="group relative h-[18rem] w-56 shrink-0 overflow-hidden rounded-2xl shadow-soft sm:h-[25rem] sm:w-72 lg:h-[29rem] lg:w-80">
          <button
            type="button"
            onClick={() => onSelect(index % rowImages.length)}
            aria-label={`View ${image.caption} photo`}
            className="absolute inset-0 z-10 h-full w-full rounded-2xl focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-mint-300"
          >
            <img
              src={image.src}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover object-center transition duration-700 ease-out group-hover:scale-105"
            />
          </button>
          <figcaption aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-teal-950/90 via-teal-950/25 to-transparent px-2.5 pb-2.5 pt-8 text-left text-[11px] font-medium text-white opacity-100 sm:translate-y-2 sm:opacity-0 sm:transition sm:duration-300 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
            {image.caption}
          </figcaption>
        </figure>
      ))}
    </motion.div>
  )
}

function PhotoViewer({ image, currentIndex, total, onClose, onPrevious, onNext }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onPrevious()
      if (event.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose, onPrevious, onNext])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${image.caption} photo`}
      onClick={(event) => { if (event.target === event.currentTarget) onClose() }}
    >
      <button type="button" onClick={onClose} aria-label="Close photo viewer" className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 sm:right-6 sm:top-6">
        <X size={22} />
      </button>
      <button type="button" onClick={onPrevious} aria-label="Previous photo" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 sm:left-6">
        <ChevronLeft size={26} />
      </button>
      <figure className="flex max-h-full max-w-full flex-col items-center">
        <img src={image.src} alt={image.caption} className="max-h-[78vh] max-w-[82vw] rounded-xl object-contain shadow-2xl" />
        <figcaption className="mt-4 text-center text-sm font-medium text-white">{image.caption} <span className="ml-2 text-white/55">{currentIndex + 1} / {total}</span></figcaption>
      </figure>
      <button type="button" onClick={onNext} aria-label="Next photo" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 sm:right-6">
        <ChevronRight size={26} />
      </button>
    </div>
  )
}
