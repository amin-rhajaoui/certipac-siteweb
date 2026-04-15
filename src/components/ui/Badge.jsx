import { cn } from '@/lib/utils'

const variants = {
  primary: 'bg-[#194296]/10 text-[#194296]',
  accent: 'bg-[#43AA43]/10 text-[#43AA43]',
  accentSolid: 'bg-[#43AA43] text-white',
  amber: 'bg-amber-500/10 text-amber-600',
  surface: 'bg-surface-100 text-surface-500',
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
