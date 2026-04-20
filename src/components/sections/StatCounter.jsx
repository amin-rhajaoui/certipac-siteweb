import useCountUp from '@/hooks/useCountUp'
import { cn } from '@/lib/utils'

/**
 * StatCounter — grande valeur tabulaire, label mono, sans carte colorée.
 * Top-border bleu Certipac qui s'étend lors de l'entrée dans le viewport.
 */

export default function StatCounter({ value, suffix = '', label, reference, tone = 'light' }) {
  const { ref, count } = useCountUp(value)
  const isDark = tone === 'dark'

  return (
    <div
      ref={ref}
      className={cn(
        'relative pt-5 border-t border-[#194296]',
        'transition-colors duration-300',
      )}
    >
      {/* filet bleu qui s'étend visuellement (effet "s'install en place") */}
      <span
        aria-hidden
        className="absolute -top-px left-0 h-[2px] w-12 bg-[#43AA43] origin-left animate-fade-up"
      />

      {reference && (
        <p
          className={cn(
            'font-mono text-[11px] uppercase tracking-[0.12em] mb-3 tabular-nums',
            isDark ? 'text-[#A8A8A8]' : 'text-[#525252]',
          )}
        >
          {reference}
        </p>
      )}
      <div
        className={cn(
          'text-[clamp(2.25rem,5vw,3rem)] leading-[0.95] font-bold tabular-nums tracking-tight',
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
