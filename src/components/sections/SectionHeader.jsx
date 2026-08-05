import Reveal from '@/components/shared/Reveal'
import { cn } from '@/lib/utils'

/**
 * SectionHeader — titre de section institutionnel (esprit DSFR).
 * Eyebrow / numéro, H2 gras, filet bleu court, lede 18px.
 */

export default function SectionHeader({
  eyebrow,
  number,
  title,
  lede,
  dot = false,
  align = 'left',
  tone = 'light',
  className,
}) {
  const isDark = tone === 'dark'
  const centered = align === 'center'

  return (
    <Reveal as="header" className={cn(centered && 'text-center mx-auto max-w-3xl', className)}>
      {(number || eyebrow) && (
        <div
          className={cn(
            'flex flex-wrap items-center gap-3 mb-3',
            centered && 'justify-center',
          )}
        >
          {number && (
            <span
              className={cn(
                'font-mono text-[0.875rem] tabular-nums',
                isDark ? 'text-[#CECECE]' : 'text-[#666666]',
              )}
            >
              {number}
            </span>
          )}
          {number && eyebrow && (
            <span
              aria-hidden
              className={cn('h-3 w-px', isDark ? 'bg-[#3A3A3A]' : 'bg-[#CECECE]')}
            />
          )}
          {eyebrow && (
            <span
              className={cn(
                'text-[0.875rem] font-bold uppercase tracking-[0.04em]',
                isDark ? 'text-[#8B8BF5]' : 'text-[#194296]',
              )}
            >
              {eyebrow}
            </span>
          )}
        </div>
      )}

      {title && (
        <h2
          className={cn(
            'text-[clamp(1.5rem,3.2vw,2rem)] leading-[1.25] font-bold tracking-tight',
            isDark ? 'text-white' : 'text-[#161616]',
          )}
        >
          {title}
          {dot && <span className="text-[#43AA43]">.</span>}
        </h2>
      )}

      <div
        className={cn(
          'mt-3 h-1 w-14 bg-[#194296]',
          centered && 'mx-auto',
          isDark && 'bg-[#8B8BF5]',
        )}
      />

      {lede && (
        <p
          className={cn(
            'mt-5 text-[1.125rem] leading-[1.5] max-w-2xl',
            isDark ? 'text-[#CECECE]' : 'text-[#3A3A3A]',
            centered && 'mx-auto',
          )}
        >
          {lede}
        </p>
      )}
    </Reveal>
  )
}
