import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import Container from './Container'

/**
 * Breadcrumb institutionnel — Carbon style : taille mono, séparateurs chevrons.
 */

export default function Breadcrumb({ items = [], containerSize = 'default' }) {
  return (
    <nav aria-label="Fil d'Ariane" className="border-b border-[#E0E0E0] bg-white">
      <Container size={containerSize}>
        <ol className="flex flex-wrap items-center gap-1.5 py-3 text-[12px]">
          {items.map((item, i) => {
            const last = i === items.length - 1
            return (
              <li key={i} className="flex items-center gap-1.5">
                {last ? (
                  <span className="text-[#161616] font-medium" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="text-[#525252] hover:text-[#194296] hover:underline transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
                {!last && <ChevronRight className="h-3.5 w-3.5 text-[#A8A8A8]" />}
              </li>
            )
          })}
        </ol>
      </Container>
    </nav>
  )
}
