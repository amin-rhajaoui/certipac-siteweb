import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import BrandBar from '@/components/shared/BrandBar'
import { APP_URL, CTA_TEXT } from '@/lib/constants'

/**
 * CTA final — fond ink, BrandBar, typo DSFR-like, boutons francs.
 * Pas de grille décorative.
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
    <section className="relative bg-[#161616] text-white">
      <BrandBar />

      <Container>
        <div className="py-14 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-3 mb-8 pb-3 border-b border-[#3A3A3A]">
            <p className="text-[0.875rem] font-bold uppercase tracking-[0.04em] text-[#75D593]">
              {eyebrow}
            </p>
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.06em] text-[#929292] tabular-nums">
              {reference}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-[clamp(1.5rem,3.2vw,2.25rem)] font-bold leading-[1.25] tracking-tight">
                {title}
                <span className="text-[#43AA43]">.</span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-[1.125rem] leading-[1.5] text-[#CECECE] mb-6 max-w-md">
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
