import { useInView } from 'motion/react'
import { useRef } from 'react'

export default function useScrollAnimation(options = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px',
    ...options,
  })

  return { ref, isInView }
}
