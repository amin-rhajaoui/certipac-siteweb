import { Link } from 'react-router-dom'
import Container from './Container'

/**
 * Breadcrumb institutionnel — DESIGN.md §5 :
 * mono uppercase 10-11px, séparateur "/", traitement document officiel.
 */

export default function Breadcrumb({ items = [], containerSize = 'default' }) {
  return (
    <nav aria-label="Fil d'Ariane" className="border-b border-[#E0E0E0] bg-white">
      <Container size={containerSize}>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 py-3 font-mono text-[11px] uppercase tracking-[0.08em]">
          {items.map((item, i) => {
            const last = i === items.length - 1
            return (
              <li key={i} className="flex items-center gap-2">
                {last ? (
                  <span className="text-[#161616] font-medium" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="text-[#525252] hover:text-[#194296] transition-colors link-underline hover:underline"
                  >
                    {item.label}
                  </Link>
                )}
                {!last && <span className="text-[#C6C6C6] select-none" aria-hidden>/</span>}
              </li>
            )
          })}
        </ol>
      </Container>
    </nav>
  )
}
