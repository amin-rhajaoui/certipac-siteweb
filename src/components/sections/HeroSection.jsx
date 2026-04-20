import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

/**
 * Hero institutionnel — brand book v2.0 :
 * dateline (eyebrow + référence), H1 d'autorité avec point vert final,
 * CTA sobres, <dl> de métadonnées, colonne droite optionnelle.
 *
 * Motion : fadeUp séquencé (respect prefers-reduced-motion via index.css).
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
        'relative overflow-hidden',
        isDark ? 'bg-[#0A1A3C] text-white' : 'bg-white text-[#161616]',
      )}
    >
      {/* Quadrillage institutionnel très discret (n'appelle pas l'attention) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: isDark
            ? 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)'
            : 'linear-gradient(to right, rgba(22,22,22,0.035) 1px, transparent 1px)',
          backgroundSize: '80px 100%',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9), transparent 80%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9), transparent 80%)',
        }}
      />

      <Container>
        <div className="relative pt-10 pb-14 lg:pt-16 lg:pb-20">
          {/* Dateline institutionnelle */}
          {(eyebrow || reference) && (
            <div
              className={cn(
                'animate-fade-up flex flex-wrap items-center justify-between gap-2 mb-10 pb-3 border-b',
                isDark ? 'border-[#1A2B4A]' : 'border-[#E0E0E0]',
              )}
            >
              {eyebrow && (
                <span
                  className={cn(
                    'inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] font-semibold',
                    isDark ? 'text-[#75D593]' : 'text-[#194296]',
                  )}
                >
                  <span
                    aria-hidden
                    className={cn(
                      'inline-block h-1.5 w-1.5',
                      isDark ? 'bg-[#43AA43]' : 'bg-[#43AA43]',
                    )}
                  />
                  {eyebrow}
                </span>
              )}
              {reference && (
                <span
                  className={cn(
                    'font-mono text-[11px] uppercase tracking-[0.08em] tabular-nums',
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
                  'animate-fade-up animate-delay-1',
                  'font-bold tracking-tight',
                  'text-[clamp(2rem,5vw,3rem)] leading-[1.05]',
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
                    'mt-6 text-[17px] leading-[1.55] max-w-xl',
                    isDark ? 'text-[#C6C6C6]' : 'text-[#525252]',
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
                    'animate-fade-up animate-delay-4',
                    'mt-10 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 pt-6 border-t',
                    isDark ? 'border-[#1A2B4A]' : 'border-[#E0E0E0]',
                  )}
                >
                  {metadata.map((item, i) => (
                    <div
                      key={item.label}
                      className={cn(
                        'relative pl-3',
                        'before:absolute before:left-0 before:top-0 before:h-full before:w-px',
                        isDark ? 'before:bg-[#1A2B4A]' : 'before:bg-[#E0E0E0]',
                        i === 0 && 'before:hidden pl-0 sm:pl-3 sm:before:block',
                      )}
                    >
                      <dt
                        className={cn(
                          'font-mono text-[10px] uppercase tracking-[0.12em] mb-1.5 tabular-nums',
                          isDark ? 'text-[#8D8D8D]' : 'text-[#525252]',
                        )}
                      >
                        {item.label}
                      </dt>
                      <dd
                        className={cn(
                          'text-[14px] font-semibold leading-[1.3]',
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
