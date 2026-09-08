import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import heroVideo from '../assets/video/hero-video.mp4'
import heroPoster from '../assets/hero-poster.jpg'
import wordmark from '../assets/vijaya-clinics-header-wordmark.png'

export default function Hero() {
  return (
    <section className="relative -mt-16 h-[100svh] min-h-[560px] w-full overflow-hidden lg:-mt-[76px]">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover motion-reduce:hidden"
          src={heroVideo}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Static fallback for reduced-motion preference - same framing, no motion */}
        <img src={heroPoster} alt="" className="hidden h-full w-full object-cover motion-reduce:block" />
        <div className="absolute inset-0 bg-teal-950/[0.15]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/30" />
      </div>

      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
        >
          <img
            src={wordmark}
            alt="Vijaya Clinics"
            className="w-[min(42vw,18rem)] drop-shadow-[0_3px_18px_rgba(255,255,255,0.3)]"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-6 max-w-md text-sm font-light tracking-wide text-white/90 drop-shadow-sm sm:text-base"
        >
          Centre for Skin &amp; Mental Health
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="absolute bottom-10 flex flex-col items-center gap-2 text-white/70"
        >
          <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
