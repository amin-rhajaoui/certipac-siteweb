import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

/**
 * Logo Certipac — 3 variantes officielles (brand book p. 6) :
 *   - light   : fond clair (par défaut)
 *   - dark    : fond sombre institutionnel
 *   - icon    : symbole seul
 */

const sources = {
  light: '/CertiPac.svg',
  dark: '/CertiPac-white.svg',
  icon: '/CertiPac-icon.svg',
  iconWhite: '/CertiPac-icon-white.svg',
}

export default function Logo({ variant = 'light', size = 'md', className, asLink = true }) {
  const src = sources[variant] || sources.light

  const sizes = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-10',
  }

  const img = (
    <img
      src={src}
      alt="Certipac — La conformité de vos dossiers, certifiée."
      className={cn('w-auto', sizes[size] || sizes.md, className)}
    />
  )

  if (!asLink) return img

  return (
    <Link to="/" className="inline-flex items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#194296]">
      {img}
    </Link>
  )
}
