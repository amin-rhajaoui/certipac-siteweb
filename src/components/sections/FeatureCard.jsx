import { motion } from 'motion/react'
import { fadeUp } from '@/lib/animations'
import { cn } from '@/lib/utils'

const iconColors = [
  'bg-[#194296]/8 text-[#194296]',
  'bg-[#43AA43]/8 text-[#43AA43]',
  'bg-amber-500/8 text-amber-600',
  'bg-teal-500/8 text-teal-600',
  'bg-[#2556A0]/8 text-[#2556A0]',
  'bg-[#43AA43]/8 text-[#369236]',
]

export default function FeatureCard({ icon: Icon, title, description, index = 0 }) {
  const iconBg = iconColors[index % iconColors.length]

  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        'group relative overflow-hidden rounded-xl bg-surface-100/60 p-5',
        'transition-all duration-300',
        'hover:bg-surface-100 hover:shadow-card',
      )}
      whileHover={{ y: -3, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }}
    >
      <div className="relative">
        <div
          className={cn(
            'mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl',
            iconBg,
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mb-1.5 text-base font-semibold text-surface-800">{title}</h3>
        <p className="text-sm text-surface-500 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
