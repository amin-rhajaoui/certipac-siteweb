import Container from '@/components/ui/Container'
import { cn } from '@/lib/utils'

/**
 * Bande partenaires — logos institutionnels ANAH, MaPrimeRénov', CEE, RGE.
 * À placer juste sous le hero pour asseoir la légitimité institutionnelle.
 */

const partners = [
  { name: "MaPrimeRénov'", src: '/logo-maprimerenov.svg' },
  { name: 'ANAH', src: '/logo-anah.svg' },
  { name: 'CEE', src: '/logo-cee.svg' },
  { name: 'Qualification RGE', src: '/logo-rge.svg' },
]

export default function PartenairesStrip({ tone = 'gray' }) {
  const isDark = tone === 'ink'

  return (
    <section
      className={cn(
        'border-y',
        isDark ? 'bg-[#0A1A3C] border-[#1A2B4A] text-white' : 'bg-[#F4F4F4] border-[#E0E0E0]',
      )}
    >
      <Container>
        <div className="py-6 lg:py-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <div className="md:max-w-[14rem] md:border-r md:pr-10 md:border-[#C6C6C6]">
            <p
              className={cn(
                'font-mono text-[10px] uppercase tracking-[0.12em] mb-1',
                isDark ? 'text-[#75D593]' : 'text-[#194296]',
              )}
            >
              Cadre réglementaire
            </p>
            <p
              className={cn(
                'text-[13px] leading-[1.4]',
                isDark ? 'text-[#C6C6C6]' : 'text-[#525252]',
              )}
            >
              Conformité opposable aux référentiels officiels.
            </p>
          </div>
          <ul className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center">
            {partners.map((p) => (
              <li key={p.name} className="flex items-center justify-center md:justify-start">
                <img
                  src={p.src}
                  alt={p.name}
                  className={cn(
                    'h-10 sm:h-12 w-auto max-w-full object-contain',
                    isDark && 'brightness-0 invert opacity-80',
                  )}
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
