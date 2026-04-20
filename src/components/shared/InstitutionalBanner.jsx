import Container from '@/components/ui/Container'
import { INSTITUTIONAL_BANNER } from '@/lib/constants'

/**
 * Bandeau institutionnel haut de page — type document de référence.
 * Inspiré du header du brand book : "RÉPUBLIQUE — TRANSITION ÉNERGÉTIQUE · DOCUMENT DE RÉFÉRENCE".
 */

export default function InstitutionalBanner() {
  return (
    <div className="bandeau-republique hidden md:block">
      <Container>
        <div className="flex h-8 items-center justify-between font-mono text-[11px] uppercase tracking-[0.08em] text-[#525252]">
          <span className="inline-flex items-center gap-2">
            <span aria-hidden className="inline-block h-1.5 w-1.5 bg-[#43AA43] rounded-full" />
            {INSTITUTIONAL_BANNER.left}
          </span>
          <span className="inline-flex items-center gap-3">
            <span className="hidden lg:inline tabular-nums text-[#8D8D8D]">
              {new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase()}
            </span>
            <span aria-hidden className="hidden lg:inline h-3 w-px bg-[#C6C6C6]" />
            <span>{INSTITUTIONAL_BANNER.right}</span>
          </span>
        </div>
      </Container>
    </div>
  )
}
