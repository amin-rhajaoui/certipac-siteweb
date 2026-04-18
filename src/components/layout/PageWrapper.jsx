import { cn } from '@/lib/utils'

/**
 * PageWrapper — sobre, sans animation de page.
 * Les pages institutionnelles ne glissent pas, elles s'affichent.
 */
export default function PageWrapper({ children, className }) {
  return <div className={cn('bg-white', className)}>{children}</div>
}
