import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'

/**
 * Reveal — révélation sobre au scroll.
 *  - fadeUp 8px, durée 450ms, easing Carbon-like.
 *  - Respect strict de prefers-reduced-motion (aucune transformation).
 *  - `delay` exprimé en secondes pour faciliter l'orchestration en cascade.
 */

export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  amount = 0.2,
  className,
  once = true,
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, amount })
  const reduce = useReducedMotion()

  const Tag = motion[as] || motion.div

  if (reduce) {
    const Static = as === 'div' ? 'div' : as
    return <Static className={className}>{children}</Static>
  }

  return (
    <Tag
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
      transition={{ duration: 0.45, delay, ease: [0.2, 0.6, 0.2, 1] }}
      className={className}
    >
      {children}
    </Tag>
  )
}
