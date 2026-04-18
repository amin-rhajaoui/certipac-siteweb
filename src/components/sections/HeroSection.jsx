import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import BrandBar from '@/components/shared/BrandBar'
import { cn } from '@/lib/utils'

/**
 * Hero institutionnel — calé sur l'esprit brand book :
 * filet tricolore, bloc-titre d'autorité, dateline/référence, deux colonnes sobres.
 */

export default function HeroSection({
  eyebrow,
  reference,
  title,
  highlight,
  description,
  primaryCTA,
  secondaryCTA,
  metadata,   // Array: [{ label, value }]
  children,   // Colonne droite (visuel, mockup, liste…)
  tone = 'light',
}) {
  const isDark = tone === 'dark'

  return (
    <section
      className={cn(
        'relative',
        isDark ? 'bg-[#0A1A3C] text-white' : 'bg-white text-[#161616]',
      )}
    >
      <Container>
        <div className="pt-10 pb-14 lg:pt-16 lg:pb-20">
          {/* Dateline institutionnelle */}
          {(eyebrow || reference) && (
            <div
              className={cn(
                'flex flex-wrap items-center justify-between gap-2 mb-10 pb-3 border-b',
                isDark ? 'border-[#1A2B4A]' : 'border-[#E0E0E0]',
              )}
            >
              {eyebrow && (
                <span
                  className={cn(
                    'font-mono text-[11px] uppercase tracking-[0.12em] font-semibold',
                    isDark ? 'text-[#75D593]' : 'text-[#194296]',
                  )}
                >
                  {eyebrow}
                </span>
              )}
              {reference && (
                <span
                  className={cn(
                    'font-mono text-[11px] uppercase tracking-[0.08em]',
                    isDark ? 'text-[#8D8D8D]' : 'text-[#525252]',
                  )}
                >
                  {reference}
                </span>
              )}
            </div>
          )}

          <div className={cn('grid grid-cols-1 gap-10 items-start', children && 'lg:grid-cols-12 lg:gap-12')}>
            <div className={cn(children ? 'lg:col-span-7' : 'max-w-4xl')}>
              <h1
                className={cn(
                  'font-bold tracking-tight',
                  'text-[clamp(2rem,5vw,3rem)] leading-[1.08]',
                )}
              >
                {title}
                {highlight && (
                  <>
                    {' '}
                    <span className="text-[#43AA43]">{highlight}</span>
                  </>
                )}
                <span className="text-[#43AA43]">.</span>
              </h1>

              {description && (
                <p
                  className={cn(
                    'mt-6 text-[17px] leading-[1.55] max-w-xl',
                    isDark ? 'text-[#C6C6C6]' : 'text-[#525252]',
                  )}
                >
                  {description}
                </p>
              )}

              {(primaryCTA || secondaryCTA) && (
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  {primaryCTA && (
                    <Button
                      size="lg"
                      variant={isDark ? 'onDark' : 'primary'}
                      to={primaryCTA.to}
                      href={primaryCTA.href}
                    >
                      {primaryCTA.label}
                    </Button>
                  )}
                  {secondaryCTA && (
                    <Button
                      size="lg"
                      variant={isDark ? 'tertiary' : 'tertiary'}
                      to={secondaryCTA.to}
                      href={secondaryCTA.href}
                    >
                      {secondaryCTA.label}
                    </Button>
                  )}
                </div>
              )}

              {metadata && metadata.length > 0 && (
                <dl
                  className={cn(
                    'mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t',
                    isDark ? 'border-[#1A2B4A]' : 'border-[#E0E0E0]',
                  )}
                >
                  {metadata.map((item) => (
                    <div key={item.label}>
                      <dt
                        className={cn(
                          'font-mono text-[10px] uppercase tracking-[0.12em] mb-1.5',
                          isDark ? 'text-[#8D8D8D]' : 'text-[#525252]',
                        )}
                      >
                        {item.label}
                      </dt>
                      <dd
                        className={cn(
                          'text-[14px] font-semibold',
                          isDark ? 'text-white' : 'text-[#161616]',
                        )}
                      >
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>

            {children && <div className="lg:col-span-5">{children}</div>}
          </div>
        </div>
      </Container>
    </section>
  )
}
