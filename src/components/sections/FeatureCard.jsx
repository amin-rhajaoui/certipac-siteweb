import { cn } from '@/lib/utils'

/**
 * FeatureCard institutionnel — "pilier" style brand book.
 * Filet vertical coloré + label mono + titre + description.
 * Hover : rail qui s'étend légèrement, bg qui s'affirme.
 */

const railPalette = ['#194296', '#43AA43', '#161616']

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  index = 0,
  number,
  tone,
  reference,
}) {
  const rail = tone || railPalette[index % railPalette.length]

  return (
    <article
      className={cn(
        'group/feature relative h-full bg-[#F4F4F4] p-5 sm:p-6 rounded-[2px]',
        'transition-[background-color,border-color] duration-200 ease-out',
        'hover:bg-white hover:shadow-[0_0_0_1px_#E0E0E0_inset]',
      )}
      style={{ borderLeft: `3px solid ${rail}` }}
    >
      {/* Mini barre supérieure qui apparaît au hover — souligne l'appartenance au rail */}
      <span
        aria-hidden
        className="absolute left-0 top-0 h-px w-0 group-hover/feature:w-8 transition-[width] duration-300 ease-out"
        style={{ backgroundColor: rail }}
      />

      <div className="flex items-center justify-between mb-4">
        {(number || reference) && (
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#525252] tabular-nums">
            {number ? `Pilier ${String(number).padStart(2, '0')}` : reference}
          </span>
        )}
        {Icon && (
          <Icon
            className="h-5 w-5 shrink-0 transition-transform duration-200 ease-out group-hover/feature:-translate-y-px"
            style={{ color: rail }}
            strokeWidth={1.75}
          />
        )}
      </div>

      <h3 className="text-[17px] font-semibold text-[#161616] mb-2 leading-[1.3] tracking-tight">
        {title}
      </h3>
      <p className="text-[14px] leading-[1.65] text-[#525252]">{description}</p>
    </article>
  )
}
