import { cn } from '@/lib/utils'

/**
 * Card — carte institutionnelle.
 * Par défaut : fond gris-10, angles francs, bordure 1px.
 * `rail` : filet vertical de couleur (bleu/vert/ink) façon brand book (pilier).
 */

const railColors = {
  primary: '#194296',
  accent: '#43AA43',
  ink: '#161616',
  amber: '#F1C21B',
}

export default function Card({
  children,
  className,
  rail,
  tone = 'gray',
  padded = true,
  as: Tag = 'div',
  ...props
}) {
  const toneClasses = {
    gray: 'bg-[#F4F4F4]',
    white: 'bg-white border border-[#E0E0E0]',
    ink: 'bg-[#161616] text-white',
    primary: 'bg-[#194296] text-white',
  }

  const style = rail ? { borderLeft: `3px solid ${railColors[rail] || rail}` } : undefined

  return (
    <Tag
      style={style}
      className={cn(
        'rounded-[2px] transition-colors duration-200 ease-out',
        toneClasses[tone] || toneClasses.gray,
        padded && 'p-5 sm:p-6',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
