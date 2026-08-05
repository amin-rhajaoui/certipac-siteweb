import { cn } from '@/lib/utils'

/**
 * StepCard — étape numérotée, filet haut 4px (esprit DSFR).
 */

export default function StepCard({ number, icon: Icon, title, description, tone = '#194296' }) {
  return (
    <article
      className={cn(
        'group/step relative flex flex-col h-full pt-4',
        'lg:[&:not(:last-child)]:after:content-["→"]',
        'lg:[&:not(:last-child)]:after:absolute lg:[&:not(:last-child)]:after:-right-3 lg:[&:not(:last-child)]:after:top-[18px]',
        'lg:[&:not(:last-child)]:after:font-mono lg:[&:not(:last-child)]:after:text-[0.75rem] lg:[&:not(:last-child)]:after:text-[#CECECE]',
      )}
      style={{ borderTop: `4px solid ${tone}` }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[0.75rem] uppercase tracking-[0.06em] tabular-nums text-[#666666]">
          Étape {String(number).padStart(2, '0')}
        </span>
        {Icon && (
          <Icon
            className="h-4 w-4 shrink-0"
            style={{ color: tone }}
            strokeWidth={1.75}
          />
        )}
      </div>

      <h3 className="text-[1.125rem] font-bold text-[#161616] mb-2 leading-snug">
        {title}
      </h3>
      <p className="text-[1rem] leading-[1.5] text-[#3A3A3A]">
        {description}
      </p>
    </article>
  )
}
