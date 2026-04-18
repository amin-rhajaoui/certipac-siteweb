import { Check } from 'lucide-react'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

/**
 * PricingCard — style institutionnel, carte rectangulaire.
 * Variante `highlighted` : fond bleu Certipac, texte blanc.
 */

export default function PricingCard({
  name,
  price,
  period = '/mois',
  description,
  features = [],
  highlighted = false,
  cta = { label: 'Commencer', to: '/contact' },
  badge,
  reference,
}) {
  return (
    <article
      className={cn(
        'relative flex flex-col p-6 sm:p-7 h-full rounded-[2px]',
        highlighted
          ? 'bg-[#194296] text-white'
          : 'bg-white border border-[#E0E0E0]',
      )}
    >
      <header className="mb-5 pb-5 border-b border-current/15">
        <div className="flex items-center justify-between mb-3">
          <span
            className={cn(
              'font-mono text-[11px] uppercase tracking-[0.08em]',
              highlighted ? 'text-[#75D593]' : 'text-[#525252]',
            )}
          >
            {reference || 'Formule'}
          </span>
          {badge && (
            <span
              className={cn(
                'font-mono text-[10px] uppercase tracking-[0.08em] px-2 py-0.5',
                highlighted ? 'bg-[#43AA43] text-white' : 'bg-[#161616] text-white',
              )}
            >
              {badge}
            </span>
          )}
        </div>

        <h3
          className={cn(
            'text-[22px] font-bold leading-[1.2]',
            highlighted ? 'text-white' : 'text-[#161616]',
          )}
        >
          {name}
        </h3>
        {description && (
          <p
            className={cn(
              'mt-2 text-[13px] leading-[1.5]',
              highlighted ? 'text-[#C6C6C6]' : 'text-[#525252]',
            )}
          >
            {description}
          </p>
        )}
      </header>

      <div className="mb-6">
        {typeof price === 'number' ? (
          <div className="flex items-baseline gap-1">
            <span
              className={cn(
                'text-[44px] font-bold leading-none tabular-nums',
                highlighted ? 'text-white' : 'text-[#161616]',
              )}
            >
              {price}
            </span>
            <span
              className={cn(
                'text-[20px] font-semibold',
                highlighted ? 'text-white' : 'text-[#161616]',
              )}
            >
              €
            </span>
            <span
              className={cn(
                'text-[13px] ml-1',
                highlighted ? 'text-[#C6C6C6]' : 'text-[#6F6F6F]',
              )}
            >
              {period}
            </span>
          </div>
        ) : (
          <span
            className={cn(
              'text-[28px] font-bold leading-tight',
              highlighted ? 'text-white' : 'text-[#161616]',
            )}
          >
            {price}
          </span>
        )}
      </div>

      <ul className="mb-7 space-y-2.5 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5 text-[13.5px] leading-[1.55]">
            <Check
              className={cn(
                'h-4 w-4 shrink-0 mt-0.5',
                highlighted ? 'text-[#75D593]' : 'text-[#43AA43]',
              )}
              strokeWidth={2.5}
            />
            <span className={cn(highlighted ? 'text-[#E0E0E0]' : 'text-[#393939]')}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        to={cta.to}
        href={cta.href}
        variant={highlighted ? 'onDark' : 'tertiary'}
        className="w-full"
      >
        {cta.label}
      </Button>
    </article>
  )
}
