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
          <span>{INSTITUTIONAL_BANNER.left}</span>
          <span>{INSTITUTIONAL_BANNER.right}</span>
        </div>
      </Container>
    </div>
  )
}
