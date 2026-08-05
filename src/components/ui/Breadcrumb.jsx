import { Link } from 'react-router-dom'
import Container from './Container'

/**
 * Fil d'Ariane — esprit fr-breadcrumb (sobre, séparateur « > » DSFR-like).
 */

export default function Breadcrumb({ items = [], containerSize = 'default' }) {
  return (
    <nav aria-label="Fil d'Ariane" className="border-b border-[#DDDDDD] bg-white">
      <Container size={containerSize}>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 py-3 text-[0.875rem]">
          {items.map((item, i) => {
            const last = i === items.length - 1
            return (
              <li key={i} className="flex items-center gap-2">
                {last ? (
                  <span className="text-[#161616] font-bold" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="text-[#666666] hover:text-[#194296] underline-offset-2 hover:underline"
                  >
                    {item.label}
                  </Link>
                )}
                {!last && <span className="text-[#929292] select-none" aria-hidden>›</span>}
              </li>
            )
          })}
        </ol>
      </Container>
    </nav>
  )
}
