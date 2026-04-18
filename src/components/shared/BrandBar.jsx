import { cn } from '@/lib/utils'

/**
 * Barre tricolore institutionnelle — signature verticale Certipac.
 * Reprise de la signature graphique du brand book : bleu · vert · ink.
 */

export default function BrandBar({ thin = false, className }) {
  return <div aria-hidden className={cn(thin ? 'brand-bar-thin' : 'brand-bar', className)} />
}
