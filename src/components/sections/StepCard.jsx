import { motion } from 'motion/react'
import { fadeUp } from '@/lib/animations'

const stepColors = [
  'bg-[#194296]',
  'bg-[#43AA43]',
  'bg-[#2556A0]',
  'bg-[#D4A017]',
  'bg-[#1A8A7D]',
]

export default function StepCard({ number, icon: Icon, title, description }) {
  return (
    <motion.div variants={fadeUp} className="relative">
      <div className={`flex h-10 w-10 items-center justify-center rounded-full text-white text-sm font-bold mb-4 ${stepColors[(number - 1) % stepColors.length]}`}>
        {number}
      </div>

      <h3 className="mb-2 text-base font-semibold text-surface-800">{title}</h3>
      <p className="text-sm text-surface-500 leading-relaxed">{description}</p>
    </motion.div>
  )
}
