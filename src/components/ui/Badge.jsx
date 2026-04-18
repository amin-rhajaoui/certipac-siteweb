import { cn } from '@/lib/utils'

/**
 * Badge monospace type brand book — "RÉFÉRENCE · A", "PILIER 01", etc.
 * Angles francs, majuscules, tracking, variantes tonales Carbon.
 */

const variants = {
  primary: 'bg-[#E6EBF5] text-[#194296]',
  accent: 'bg-[#E8F8ED] text-[#2A7A2A]',
  ink: 'bg-[#161616] text-white',
  gray: 'bg-[#E0E0E0] text-[#393939]',
  white: 'bg-white text-[#194296] border border-[#CDD8EB]',
  warning: 'bg-[#FCF4D6] text-[#8E6A00]',
  error: 'bg-[#FFF1F1] text-[#DA1E28]',
  success: 'bg-[#DEFBE6] text-[#0E6027]',
}

export default function Badge({
  children,
  variant = 'gray',
  mono = true,
  size = 'sm',
  className,
}) {
  const sizes = {
    xs: 'px-1.5 py-0.5 text-[10px]',
    sm: 'px-2 py-0.5 text-[11px]',
    md: 'px-2.5 py-1 text-[12px]',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-[2px] font-medium uppercase tracking-[0.04em]',
        mono && 'font-mono',
        variants[variant] || variants.gray,
        sizes[size],
        className,
      )}
    >
      {children}
    </span>
  )
}
