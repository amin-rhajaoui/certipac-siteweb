import { cn } from '@/lib/utils'

/**
 * SectionHeader — titre de section institutionnel (brand book p. 3+).
 *   - eyebrow : sous-titre majuscule (IDENTITÉ, CADRE…)
 *   - number  : 01, 02 (placé en haut en mono)
 *   - title   : H1/H2 principal
 *   - filet   : trait sous le titre
 */

export default function SectionHeader({
  eyebrow,
  number,
  title,
  lede,
  align = 'left',
  tone = 'light',
  className,
}) {
  const isDark = tone === 'dark'

  return (
    <header className={cn(align === 'center' && 'text-center mx-auto max-w-3xl', className)}>
      {(number || eyebrow) && (
        <div className={cn('flex items-baseline gap-3 mb-4', align === 'center' && 'justify-center')}>
          {number && (
            <span className={cn('font-mono text-[12px]', isDark ? 'text-[#A8A8A8]' : 'text-[#525252]')}>
              {number}
            </span>
          )}
          {eyebrow && (
            <span
              className={cn(
                'font-mono text-[11px] uppercase tracking-[0.12em] font-semibold',
                isDark ? 'text-[#6989C3]' : 'text-[#194296]',
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
            'text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.15] font-bold tracking-tight',
            isDark ? 'text-white' : 'text-[#161616]',
          )}
        >
          {title}
        </h2>
      )}

      <div className={cn('mt-4 h-[2px] w-12 bg-[#194296]', align === 'center' && 'mx-auto')} />

      {lede && (
        <p
          className={cn(
            'mt-6 text-[15px] leading-[1.65] max-w-2xl',
            isDark ? 'text-[#C6C6C6]' : 'text-[#525252]',
            align === 'center' && 'mx-auto',
          )}
        >
          {lede}
        </p>
      )}
    </header>
  )
}
