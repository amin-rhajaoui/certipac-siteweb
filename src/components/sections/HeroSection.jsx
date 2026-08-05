import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

/**
 * Hero institutionnel — esprit page d'accueil service public.
 * Dateline, H1 d'autorité, CTA DSFR-like, métadonnées en filets.
 * Pas de grille décorative, pas de glass, pas d'orbes.
 */

export default function HeroSection({
  eyebrow,
  reference,
  title,
  highlight,
  description,
  primaryCTA,
  secondaryCTA,
  metadata,
  children,
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
        <div className="relative pt-10 pb-12 lg:pt-14 lg:pb-16">
          {(eyebrow || reference) && (
            <div
              className={cn(
                'animate-fade-up flex flex-wrap items-end justify-between gap-3 mb-8 pb-3 border-b',
                isDark ? 'border-[#1A2B4A]' : 'border-[#DDDDDD]',
              )}
            >
              {eyebrow && (
                <p
                  className={cn(
                    'text-[0.875rem] font-bold uppercase tracking-[0.04em]',
                    isDark ? 'text-[#75D593]' : 'text-[#194296]',
                  )}
                >
                  {eyebrow}
                </p>
              )}
              {reference && (
                <p
                  className={cn(
                    'font-mono text-[0.75rem] uppercase tracking-[0.06em] tabular-nums',
                    isDark ? 'text-[#929292]' : 'text-[#666666]',
                  )}
                >
                  {reference}
                </p>
              )}
            </div>
          )}

          <div className={cn('grid grid-cols-1 gap-10 items-start', children && 'lg:grid-cols-12 lg:gap-12')}>
            <div className={cn(children ? 'lg:col-span-7' : 'max-w-4xl')}>
              <h1
                className={cn(
                  'animate-fade-up animate-delay-1',
                  'font-bold tracking-tight',
                  'text-[clamp(2rem,4.5vw,2.75rem)] leading-[1.2]',
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
                    'animate-fade-up animate-delay-2',
                    'mt-5 text-[1.25rem] leading-[1.5] max-w-2xl font-normal',
                    isDark ? 'text-[#CECECE]' : 'text-[#3A3A3A]',
                  )}
                >
                  {description}
                </p>
              )}

              {(primaryCTA || secondaryCTA) && (
                <div className="animate-fade-up animate-delay-3 mt-8 flex flex-col sm:flex-row gap-3">
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
                      variant="tertiary"
                      to={secondaryCTA.to}
                      href={secondaryCTA.href}
                      className={isDark ? '!text-white !shadow-[inset_0_0_0_1px_#FFFFFF] hover:!bg-white/10' : undefined}
                    >
                      {secondaryCTA.label}
                    </Button>
                  )}
                </div>
              )}

              {metadata && metadata.length > 0 && (
                <dl
                  className={cn(
                    'animate-fade-up animate-delay-4',
                    'mt-10 grid grid-cols-2 sm:grid-cols-4 gap-0 border-t',
                    isDark ? 'border-[#1A2B4A]' : 'border-[#DDDDDD]',
                  )}
                >
                  {metadata.map((item, i) => (
                    <div
                      key={item.label}
                      className={cn(
                        'pt-5 pr-4',
                        i > 0 && 'sm:pl-4 sm:border-l',
                        isDark ? 'sm:border-[#1A2B4A]' : 'sm:border-[#DDDDDD]',
                      )}
                    >
                      <dt
                        className={cn(
                          'text-[0.75rem] font-bold uppercase tracking-[0.04em] mb-1',
                          isDark ? 'text-[#929292]' : 'text-[#666666]',
                        )}
                      >
                        {item.label}
                      </dt>
                      <dd
                        className={cn(
                          'text-[1rem] font-bold leading-snug',
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

            {children && (
              <div className="lg:col-span-5 animate-fade-up animate-delay-3">{children}</div>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
