import { cn } from '@/lib/utils'

const variants = {
  primary: 'bg-primary-500/10 text-primary-400 border border-primary-500/20',
  accent: 'bg-accent-500/10 text-accent-400 border border-accent-500/20',
  amber: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
  surface: 'bg-surface-100/50 text-surface-500 border border-surface-200/50',
}

export default function Badge({ children, variant = 'primary', className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
