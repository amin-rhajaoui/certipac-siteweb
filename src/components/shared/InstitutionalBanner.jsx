import Container from '@/components/ui/Container'
import { INSTITUTIONAL_BANNER } from '@/lib/constants'

/**
 * Bandeau haut — type service public (fond ink, texte clair).
 * Remplace le bandeau Carbon clair ; plus proche fr-header top bar.
 */

export default function InstitutionalBanner() {
  return (
    <div className="bandeau-republique hidden md:block">
      <Container>
        <div className="flex h-9 items-center justify-between text-[0.8125rem] font-medium tracking-wide">
          <span className="inline-flex items-center gap-2 text-white">
            <span aria-hidden className="inline-block h-2 w-2 bg-[#43AA43]" />
            {INSTITUTIONAL_BANNER.left}
          </span>
          <span className="inline-flex items-center gap-3 text-[#CECECE]">
            <span className="hidden lg:inline tabular-nums font-mono text-[0.75rem] uppercase tracking-[0.06em]">
              {new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase()}
            </span>
            <span aria-hidden className="hidden lg:inline h-3 w-px bg-[#3A3A3A]" />
            <span className="font-mono text-[0.75rem] uppercase tracking-[0.06em]">
              {INSTITUTIONAL_BANNER.right}
            </span>
          </span>
        </div>
      </Container>
    </div>
  )
}
