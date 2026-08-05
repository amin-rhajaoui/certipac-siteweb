import Container from '@/components/ui/Container'
import { cn } from '@/lib/utils'

/**
 * Bande partenaires — logos institutionnels sous le hero.
 */

const partners = [
  { name: "MaPrimeRénov'", src: '/logo-maprimerenov.svg' },
  { name: 'ANAH',          src: '/logo-anah.svg' },
  { name: 'CEE',           src: '/logo-cee.svg' },
  { name: 'Qualification RGE', src: '/logo-rge.svg' },
]

export default function PartenairesStrip({ tone = 'gray' }) {
  const isDark = tone === 'ink'

  return (
    <section
      className={cn(
        'border-y',
        isDark ? 'bg-[#0A1A3C] border-[#1A2B4A] text-white' : 'bg-[#F6F6F6] border-[#DDDDDD]',
      )}
    >
      <Container>
        <div className="py-6 lg:py-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <div
            className={cn(
              'md:max-w-[15rem] md:border-r md:pr-10',
              isDark ? 'md:border-[#1A2B4A]' : 'md:border-[#CECECE]',
            )}
          >
            <p
              className={cn(
                'text-[0.875rem] font-bold uppercase tracking-[0.04em] mb-1',
                isDark ? 'text-[#75D593]' : 'text-[#194296]',
              )}
            >
              Cadre réglementaire
            </p>
            <p
              className={cn(
                'text-[0.875rem] leading-[1.4]',
                isDark ? 'text-[#CECECE]' : 'text-[#666666]',
              )}
            >
              Conformité opposable aux référentiels officiels.
            </p>
          </div>
          <ul className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5 items-center">
            {partners.map((p) => (
              <li
                key={p.name}
                className="flex items-center justify-center md:justify-start"
              >
                <img
                  src={p.src}
                  alt={p.name}
                  loading="lazy"
                  className={cn(
                    'h-10 sm:h-12 w-auto max-w-full object-contain',
                    'grayscale opacity-70 transition-[opacity,filter] duration-150',
                    'hover:grayscale-0 hover:opacity-100',
                    isDark && 'brightness-0 invert opacity-80 hover:opacity-100',
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
