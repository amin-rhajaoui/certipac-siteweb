import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import BrandBar from '@/components/shared/BrandBar'
import { APP_URL, CTA_TEXT } from '@/lib/constants'

/**
 * CTA institutionnel — bloc ink avec filet tricolore au-dessus, call à deux boutons.
 */

export default function CTASection({
  eyebrow = 'Engagement · Plateforme',
  title = 'La conformité de vos dossiers, certifiée.',
  description = "Déployez Certipac dans votre structure et alignez-vous sur les exigences ANAH, MaPrimeRénov' et CEE — du terrain au versement des primes.",
  primaryCTA = { label: CTA_TEXT.primary, href: APP_URL },
  secondaryCTA = { label: CTA_TEXT.contact, to: '/contact' },
}) {
  return (
    <section className="bg-[#161616] text-white">
      <BrandBar />
      <Container>
        <div className="py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            {eyebrow && (
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#75D593] mb-4">
                {eyebrow}
              </p>
            )}
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-tight">
              {title}
              <span className="text-[#43AA43]">.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pt-3">
            <p className="text-[15px] leading-[1.65] text-[#C6C6C6] mb-6 max-w-md">
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
      </Container>
    </section>
  )
}
