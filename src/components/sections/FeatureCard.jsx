import { cn } from '@/lib/utils'

/**
 * FeatureCard — tuile institutionnelle (filet gauche 4px, fond alt-grey).
 * Pas de shadow, pas de hover gadget.
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
        'relative h-full bg-[#F6F6F6] p-5 sm:p-6',
        'transition-colors duration-150',
        'hover:bg-[#EEEEEE]',
      )}
      style={{ borderLeft: `4px solid ${rail}` }}
    >
      <div className="flex items-center justify-between mb-4">
        {(number || reference) && (
          <span className="font-mono text-[0.75rem] uppercase tracking-[0.06em] text-[#666666] tabular-nums">
            {number ? `Pilier ${String(number).padStart(2, '0')}` : reference}
          </span>
        )}
        {Icon && (
          <Icon
            className="h-5 w-5 shrink-0"
            style={{ color: rail }}
            strokeWidth={1.75}
          />
        )}
      </div>

      <h3 className="text-[1.125rem] font-bold text-[#161616] mb-2 leading-snug">
        {title}
      </h3>
      <p className="text-[1rem] leading-[1.5] text-[#3A3A3A]">{description}</p>
    </article>
  )
}
