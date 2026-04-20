import Container from '@/components/ui/Container'
import { cn } from '@/lib/utils'

/**
 * Bande partenaires — logos institutionnels ANAH, MaPrimeRénov', CEE, RGE.
 * À placer juste sous le hero pour asseoir la légitimité institutionnelle.
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
        isDark ? 'bg-[#0A1A3C] border-[#1A2B4A] text-white' : 'bg-[#F4F4F4] border-[#E0E0E0]',
      )}
    >
      <Container>
        <div className="py-7 lg:py-9 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <div
            className={cn(
              'md:max-w-[15rem] md:border-r md:pr-10',
              isDark ? 'md:border-[#1A2B4A]' : 'md:border-[#C6C6C6]',
            )}
          >
            <p
              className={cn(
                'inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] font-semibold mb-1.5',
                isDark ? 'text-[#75D593]' : 'text-[#194296]',
              )}
            >
              <span aria-hidden className="inline-block h-1.5 w-1.5 bg-[#43AA43]" />
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
                    'grayscale opacity-70 transition-[opacity,filter] duration-200 ease-out',
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
