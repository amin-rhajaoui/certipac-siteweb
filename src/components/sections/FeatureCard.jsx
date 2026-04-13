import { motion } from 'motion/react'
import { fadeUp } from '@/lib/animations'

const accentColors = [
  'border-l-primary-500',
  'border-l-accent-500',
  'border-l-amber-500',
  'border-l-primary-400',
  'border-l-accent-400',
  'border-l-amber-400',
]

const iconBgs = [
  'bg-primary-500/10 text-primary-400',
  'bg-accent-500/10 text-accent-400',
  'bg-amber-500/10 text-amber-400',
  'bg-primary-500/10 text-primary-300',
  'bg-accent-500/10 text-accent-300',
  'bg-amber-500/10 text-amber-300',
]

export default function FeatureCard({ icon: Icon, title, description, index = 0 }) {
  const accent = accentColors[index % accentColors.length]
  const iconBg = iconBgs[index % iconBgs.length]

  return (
    <motion.div
      variants={fadeUp}
      className={`group rounded-lg bg-surface-100/80 p-5 border border-surface-200/50 border-l-2 ${accent} transition-all hover:bg-surface-100`}
      whileHover={{ x: 4, transition: { duration: 0.2 } }}
    >
      <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg ${iconBg}`}>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mb-1.5 text-base font-semibold text-surface-950">{title}</h3>
      <p className="text-sm text-surface-500 leading-relaxed">{description}</p>
    </motion.div>
  )
}
