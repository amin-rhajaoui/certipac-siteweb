import { motion } from 'motion/react'
import { Check } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { fadeUp } from '@/lib/animations'
import { cn } from '@/lib/utils'

export default function PricingCard({
  name,
  price,
  period = '/mois',
  description,
  features = [],
  highlighted = false,
  cta = { label: 'Commencer', to: '/contact' },
  badge,
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        'relative rounded-xl p-6 lg:p-8 flex flex-col',
        highlighted
          ? 'bg-[#194296] text-white shadow-elevated'
          : 'bg-surface-100/60'
      )}
    >
      {badge ? (
        <div className="mb-4">
          <Badge variant={highlighted ? 'surface' : 'accentSolid'}>{badge}</Badge>
        </div>
      ) : null}

      <div className="mb-5">
        <h3 className={cn('text-lg font-bold', highlighted ? 'text-white' : 'text-surface-800')}>{name}</h3>
        <p className={cn('mt-1 text-sm', highlighted ? 'text-white/60' : 'text-surface-500')}>{description}</p>
      </div>

      <div className={cn('mb-6 pb-6 border-b', highlighted ? 'border-white/15' : 'border-surface-200/50')}>
        {typeof price === 'number' ? (
          <div className="flex items-baseline gap-1">
            <span className={cn('text-4xl font-bold tabular-nums', highlighted ? 'text-white' : 'text-surface-800')}>
              {price}
            </span>
            <span className={cn('text-lg font-bold', highlighted ? 'text-white' : 'text-surface-800')}>€</span>
            <span className={cn('text-sm ml-1', highlighted ? 'text-white/50' : 'text-surface-400')}>{period}</span>
          </div>
        ) : (
          <span className={cn('text-2xl font-bold', highlighted ? 'text-white' : 'text-surface-800')}>{price}</span>
        )}
      </div>

      <ul className="mb-8 space-y-2.5 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <Check className={cn('h-4 w-4 shrink-0 mt-0.5', highlighted ? 'text-[#43AA43]' : 'text-[#43AA43]')} />
            <span className={cn('text-sm', highlighted ? 'text-white/70' : 'text-surface-500')}>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        to={cta.to}
        variant={highlighted ? 'secondary' : 'outline'}
        className="w-full"
      >
        {cta.label}
      </Button>
    </motion.div>
  )
}
