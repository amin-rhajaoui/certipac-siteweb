import { motion } from 'motion/react'
import { fadeUp } from '@/lib/animations'

const stepColors = [
  'bg-primary-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]',
  'bg-accent-500 shadow-[0_0_20px_rgba(6,182,212,0.3)]',
  'bg-primary-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]',
  'bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.3)]',
  'bg-primary-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]',
]

export default function StepCard({ number, icon: Icon, title, description }) {
  return (
    <motion.div variants={fadeUp} className="relative">
      {/* Number badge */}
      <div className={`flex h-10 w-10 items-center justify-center rounded-full text-white text-sm font-bold mb-4 ${stepColors[(number - 1) % stepColors.length]}`}>
        {number}
      </div>

      <h3 className="mb-2 text-base font-semibold text-surface-950">{title}</h3>
      <p className="text-sm text-surface-500 leading-relaxed">{description}</p>
    </motion.div>
  )
}
