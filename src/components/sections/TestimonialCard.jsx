import { motion } from 'motion/react'
import { Star, Quote } from 'lucide-react'
import { fadeUp } from '@/lib/animations'
import { cn } from '@/lib/utils'

export default function TestimonialCard({ name, role, company, content, rating = 5, featured = false }) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        'rounded-lg p-6 flex flex-col border',
        featured
          ? 'bg-surface-100 border-primary-500/30 ring-1 ring-primary-500/10'
          : 'bg-surface-100/50 border-surface-200/50'
      )}
    >
      <Quote className={cn(
        'h-6 w-6 mb-4',
        featured ? 'text-primary-500' : 'text-surface-300'
      )} />
      <p className="text-surface-600 leading-relaxed flex-1 text-sm">{content}</p>
      <div className="flex gap-0.5 my-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <div className="flex items-center gap-3 pt-4 border-t border-surface-200/50">
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-semibold text-xs">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-surface-950 text-sm">{name}</p>
          <p className="text-surface-400 text-xs">
            {role}{company && ` — ${company}`}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
