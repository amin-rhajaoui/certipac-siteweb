import { cn } from '@/lib/utils'

/**
 * Tag — style fr-tag DSFR (pill, gras 14px).
 * Exception contrôlée au rayon 0 : les tags DSFR sont arrondis.
 */

export default function Tag({ children, active = false, className, as: Comp = 'span' }) {
  return (
    <Comp
      className={cn(
        'ctp-tag',
        active && 'ctp-tag--active',
        className,
      )}
    >
      {children}
    </Comp>
  )
}
