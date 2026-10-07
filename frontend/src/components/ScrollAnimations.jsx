import { useLayoutEffect } from 'react'

// Adds a quiet, shared scroll-reveal treatment to the public site. Keeping this
// separate from page content lets every existing section retain its layout and data.
export default function ScrollAnimations() {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const targets = [...document.querySelectorAll(
      'main section:not([data-no-reveal]) > :first-child, main section:not([data-no-reveal]) article, main section:not([data-no-reveal]) .shadow-card',
    )]
    const uniqueTargets = [...new Set(targets)]
    const siblingIndexes = new Map()
    uniqueTargets.forEach((target) => {
      const parent = target.parentElement
      const siblingIndex = siblingIndexes.get(parent) || 0
      siblingIndexes.set(parent, siblingIndex + 1)
      target.style.setProperty('--reveal-delay', `${Math.min(siblingIndex, 6) * 65}ms`)
      target.classList.add('scroll-reveal')
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('scroll-reveal--visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    uniqueTargets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return null
}
