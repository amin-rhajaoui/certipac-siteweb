import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

export default function Card({ children, className, hover = true, ...props }) {
  return (
    <motion.div
      className={cn(
        'rounded-xl bg-surface-100 p-6 shadow-soft border border-surface-200',
        className
      )}
      {...(hover && { whileHover: { y: -4, transition: { duration: 0.2 } } })}
      {...props}
    >
      {children}
    </motion.div>
  )
}
