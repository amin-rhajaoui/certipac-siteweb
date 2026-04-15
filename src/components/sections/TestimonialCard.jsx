import { motion } from 'motion/react'
import { Star, Quote } from 'lucide-react'
import { fadeUp } from '@/lib/animations'
import { cn } from '@/lib/utils'

export default function TestimonialCard({ name, role, company, content, rating = 5, featured = false }) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        'rounded-xl p-6 flex flex-col',
        featured
          ? 'bg-[#194296] text-white'
          : 'bg-surface-100/60'
      )}
    >
      <Quote className={cn(
        'h-6 w-6 mb-4',
        featured ? 'text-[#43AA43]' : 'text-surface-300'
      )} />
      <p className={cn('leading-relaxed flex-1 text-sm', featured ? 'text-white/80' : 'text-surface-600')}>{content}</p>
      <div className="flex gap-0.5 my-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <div className={cn('flex items-center gap-3 pt-4 border-t', featured ? 'border-white/15' : 'border-surface-200/50')}>
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#194296] to-[#43AA43] flex items-center justify-center text-white font-semibold text-xs">
          {name.charAt(0)}
        </div>
        <div>
          <p className={cn('font-semibold text-sm', featured ? 'text-white' : 'text-surface-800')}>{name}</p>
          <p className={cn('text-xs', featured ? 'text-white/50' : 'text-surface-400')}>
            {role}{company && ` — ${company}`}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
