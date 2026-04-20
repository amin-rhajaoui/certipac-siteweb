import { Check } from 'lucide-react'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

/**
 * PricingCard — carte tarifaire institutionnelle.
 * Variante `highlighted` : fond bleu Certipac, texte blanc, check marks vert clair.
 * Variante normale       : blanc, bordure #E0E0E0.
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
        'relative flex flex-col p-6 sm:p-7 h-full rounded-[2px] transition-[background-color,border-color] duration-200',
        highlighted
          ? 'bg-[#194296] text-white'
          : 'bg-white border border-[#E0E0E0] hover:border-[#8D8D8D]',
      )}
    >
      {highlighted && (
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-[3px]"
          style={{
            background:
              'linear-gradient(to right, #43AA43 0%, #43AA43 50%, #75D593 50%, #75D593 100%)',
          }}
        />
      )}

      <header
        className={cn(
          'mb-5 pb-5 border-b',
          highlighted ? 'border-white/15' : 'border-[#E0E0E0]',
        )}
      >
        <div className="flex items-center justify-between gap-3 mb-3">
          <span
            className={cn(
              'font-mono text-[11px] uppercase tracking-[0.08em] tabular-nums',
              highlighted ? 'text-[#A3E3B7]' : 'text-[#525252]',
            )}
          >
            {reference || 'Formule'}
          </span>
          {badge && (
            <span
              className={cn(
                'font-mono text-[10px] uppercase tracking-[0.08em] px-2 py-1 leading-none rounded-[2px]',
                highlighted ? 'bg-[#43AA43] text-white' : 'bg-[#161616] text-white',
              )}
            >
              {badge}
            </span>
          )}
        </div>

        <h3
          className={cn(
            'text-[22px] font-bold leading-[1.2] tracking-tight',
            highlighted ? 'text-white' : 'text-[#161616]',
          )}
        >
          {name}
        </h3>
        {description && (
          <p
            className={cn(
              'mt-2 text-[13px] leading-[1.55]',
              highlighted ? 'text-[#CDD8EB]' : 'text-[#525252]',
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
                'text-[48px] font-bold leading-none tabular-nums tracking-tight',
                highlighted ? 'text-white' : 'text-[#161616]',
              )}
            >
              {price}
            </span>
            <span
              className={cn(
                'text-[22px] font-semibold',
                highlighted ? 'text-white' : 'text-[#161616]',
              )}
            >
              €
            </span>
            <span
              className={cn(
                'font-mono text-[12px] uppercase tracking-[0.08em] ml-1.5',
                highlighted ? 'text-[#CDD8EB]' : 'text-[#6F6F6F]',
              )}
            >
              {period}
            </span>
          </div>
        ) : (
          <span
            className={cn(
              'text-[28px] font-bold leading-tight tracking-tight',
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
            <span className={cn(highlighted ? 'text-[#E6EBF5]' : 'text-[#393939]')}>
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
