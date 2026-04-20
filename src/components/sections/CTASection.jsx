import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import BrandBar from '@/components/shared/BrandBar'
import { APP_URL, CTA_TEXT } from '@/lib/constants'

/**
 * CTA institutionnel — bloc ink avec filet tricolore au-dessus.
 * Deux colonnes : titre à gauche, description + CTA à droite.
 */

export default function CTASection({
  eyebrow = 'Engagement · Plateforme',
  title = 'La conformité de vos dossiers, certifiée.',
  description = "Déployez Certipac dans votre structure et alignez-vous sur les exigences ANAH, MaPrimeRénov' et CEE — du terrain au versement des primes.",
  primaryCTA = { label: CTA_TEXT.primary, href: APP_URL },
  secondaryCTA = { label: CTA_TEXT.contact, to: '/contact' },
  reference = 'CTP-CTA · 01',
}) {
  return (
    <section className="relative bg-[#161616] text-white overflow-hidden">
      <BrandBar />

      {/* Quadrillage discret — cohérent avec le hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '80px 100%',
        }}
      />

      <Container>
        <div className="relative py-16 lg:py-24">
          {/* Dateline reprise du hero */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-10 pb-3 border-b border-[#393939]">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] font-semibold text-[#75D593]">
              <span aria-hidden className="inline-block h-1.5 w-1.5 bg-[#43AA43]" />
              {eyebrow}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#8D8D8D] tabular-nums">
              {reference}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-[clamp(1.75rem,3.8vw,2.75rem)] font-bold leading-[1.1] tracking-tight">
                {title}
                <span className="text-[#43AA43]">.</span>
              </h2>
            </div>

            <div className="lg:col-span-5 lg:pt-3">
              <p className="text-[15px] leading-[1.65] text-[#C6C6C6] mb-7 max-w-md">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                {primaryCTA && (
                  <Button size="lg" variant="onDark" href={primaryCTA.href} to={primaryCTA.to}>
                    {primaryCTA.label}
                  </Button>
                )}
                {secondaryCTA && (
                  <Button
                    size="lg"
                    variant="ghost"
                    href={secondaryCTA.href}
                    to={secondaryCTA.to}
                    className="!text-white hover:!bg-white/10"
                  >
                    {secondaryCTA.label}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
