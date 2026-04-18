import { cn } from '@/lib/utils'

/**
 * FeatureCard institutionnel — "pilier" style brand book.
 * Filet vertical coloré + label mono + titre + description.
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
      className="h-full bg-[#F4F4F4] p-5 sm:p-6 transition-colors duration-200 hover:bg-[#E0E0E0] rounded-[2px]"
      style={{ borderLeft: `3px solid ${rail}` }}
    >
      <div className="flex items-center justify-between mb-4">
        {(number || reference) && (
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#525252]">
            {number ? `Pilier ${String(number).padStart(2, '0')}` : reference}
          </span>
        )}
        {Icon && (
          <Icon className="h-5 w-5 shrink-0" style={{ color: rail }} strokeWidth={1.75} />
        )}
      </div>

      <h3 className="text-[17px] font-semibold text-[#161616] mb-2 leading-[1.3]">
        {title}
      </h3>
      <p className="text-[14px] leading-[1.6] text-[#525252]">{description}</p>
    </article>
  )
}
