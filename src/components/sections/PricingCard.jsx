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
        'relative rounded-lg p-6 lg:p-8 flex flex-col border',
        highlighted
          ? 'bg-surface-100 border-primary-500/40 ring-1 ring-primary-500/20'
          : 'bg-surface-100/50 border-surface-200/50'
      )}
    >
      {badge && (
        <div className="absolute -top-3 left-6">
          <Badge variant="primary">{badge}</Badge>
        </div>
      )}

      <div className="mb-5">
        <h3 className="text-lg font-bold text-surface-950">{name}</h3>
        <p className="mt-1 text-sm text-surface-500">{description}</p>
      </div>

      <div className="mb-6 pb-6 border-b border-surface-200/50">
        {typeof price === 'number' ? (
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-surface-950 tabular-nums">
              {price}
            </span>
            <span className="text-lg font-bold text-surface-950">€</span>
            <span className="text-sm text-surface-400 ml-1">{period}</span>
          </div>
        ) : (
          <span className="text-2xl font-bold text-surface-950">{price}</span>
        )}
      </div>

      <ul className="mb-8 space-y-2.5 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <Check className="h-4 w-4 shrink-0 mt-0.5 text-primary-500" />
            <span className="text-sm text-surface-500">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        to={cta.to}
        variant={highlighted ? 'primary' : 'outline'}
        className="w-full"
      >
        {cta.label}
      </Button>
    </motion.div>
  )
}
