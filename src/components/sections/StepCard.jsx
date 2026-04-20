import { cn } from '@/lib/utils'

/**
 * StepCard — étape institutionnelle numérotée.
 * DESIGN.md §5 : top-border 3px coloré + mono "Étape 01" + icône discrète.
 */

export default function StepCard({ number, icon: Icon, title, description, tone = '#194296' }) {
  return (
    <article
      className={cn(
        'group/step relative flex flex-col h-full pt-4 pb-2 sm:pb-0',
        'transition-colors duration-200',
        // connecteur discret entre étapes (grille lg:5 colonnes)
        'lg:[&:not(:last-child)]:after:content-["→"]',
        'lg:[&:not(:last-child)]:after:absolute lg:[&:not(:last-child)]:after:-right-3 lg:[&:not(:last-child)]:after:top-[18px]',
        'lg:[&:not(:last-child)]:after:font-mono lg:[&:not(:last-child)]:after:text-[11px] lg:[&:not(:last-child)]:after:text-[#C6C6C6]',
      )}
      style={{ borderTop: `3px solid ${tone}` }}
    >
      {/* Ligne mono Étape 01 */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] tabular-nums text-[#525252]">
          Étape {String(number).padStart(2, '0')}
        </span>
        {Icon && (
          <Icon
            className="h-4 w-4 shrink-0 transition-transform duration-200 ease-out group-hover/step:-translate-y-px"
            style={{ color: tone }}
            strokeWidth={1.75}
          />
        )}
      </div>

      <h3 className="text-[16px] font-semibold text-[#161616] mb-2 leading-[1.3] tracking-tight">
        {title}
      </h3>
      <p className="text-[14px] leading-[1.6] text-[#525252] max-w-md">
        {description}
      </p>
    </article>
  )
}
