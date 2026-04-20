import Reveal from '@/components/shared/Reveal'
import { cn } from '@/lib/utils'

/**
 * SectionHeader — titre de section institutionnel (brand book §3).
 *   - `number` + `eyebrow`  : ligne mono type "01 — Identité"
 *   - `title`               : H2 principal (point vert final optionnel)
 *   - filet bleu 2px de 48px sous le titre
 *   - `lede`                : description (gris 525252)
 *
 * Motion : fadeUp sobre à l'entrée dans le viewport (Reveal).
 */

export default function SectionHeader({
  eyebrow,
  number,
  title,
  lede,
  dot = false,      // point vert final sur H2 (optionnel)
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
            'flex items-center gap-3 mb-4 pb-2 border-b',
            centered && 'justify-center max-w-fit mx-auto',
            isDark ? 'border-[#1A2B4A]' : 'border-[#E0E0E0]',
          )}
        >
          {number && (
            <span
              className={cn(
                'font-mono text-[12px] tabular-nums tracking-[0.04em]',
                isDark ? 'text-[#A8A8A8]' : 'text-[#525252]',
              )}
            >
              {number}
            </span>
          )}
          {number && eyebrow && (
            <span
              aria-hidden
              className={cn('h-3 w-px', isDark ? 'bg-[#1A2B4A]' : 'bg-[#C6C6C6]')}
            />
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
            'text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.1] font-bold tracking-tight',
            isDark ? 'text-white' : 'text-[#161616]',
          )}
        >
          {title}
          {dot && <span className="text-[#43AA43]">.</span>}
        </h2>
      )}

      <div className={cn('mt-4 h-[2px] w-12 bg-[#194296]', centered && 'mx-auto')} />

      {lede && (
        <p
          className={cn(
            'mt-6 text-[15px] leading-[1.7] max-w-2xl',
            isDark ? 'text-[#C6C6C6]' : 'text-[#525252]',
            centered && 'mx-auto',
          )}
        >
          {lede}
        </p>
      )}
    </Reveal>
  )
}
