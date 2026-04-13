import { motion } from 'motion/react'
import { pageTransition } from '@/lib/animations'

export default function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}
