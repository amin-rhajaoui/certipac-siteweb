import useCountUp from '@/hooks/useCountUp'
import { cn } from '@/lib/utils'

/**
 * Stat institutionnel — grande valeur tabulaire, label mono, sans carte colorée.
 */

export default function StatCounter({ value, suffix = '', label, reference, tone = 'light' }) {
  const { ref, count } = useCountUp(value)
  const isDark = tone === 'dark'

  return (
    <div ref={ref} className="border-t border-[#194296] pt-4">
      {reference && (
        <p
          className={cn(
            'font-mono text-[11px] uppercase tracking-[0.12em] mb-2',
            isDark ? 'text-[#A8A8A8]' : 'text-[#525252]',
          )}
        >
          {reference}
        </p>
      )}
      <div
        className={cn(
          'text-[clamp(2rem,5vw,3rem)] leading-[1] font-bold tabular-nums',
          isDark ? 'text-white' : 'text-[#194296]',
        )}
      >
        {count}
        <span className="text-[#43AA43]">{suffix}</span>
      </div>
      <p
        className={cn(
          'mt-3 text-[13px] leading-[1.5]',
          isDark ? 'text-[#C6C6C6]' : 'text-[#525252]',
        )}
      >
        {label}
      </p>
    </div>
  )
}
