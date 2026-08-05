import { cn } from '@/lib/utils'

/**
 * Badge — pastille compacte institutionnelle (références, statuts).
 * Angles francs, tracking serré — distinct du Tag pill DSFR.
 */

const variants = {
  primary: 'bg-[#E3E3FD] text-[#194296]',
  accent: 'bg-[#B8FEC9] text-[#18753C]',
  ink: 'bg-[#161616] text-white',
  gray: 'bg-[#EEEEEE] text-[#3A3A3A]',
  white: 'bg-white text-[#194296] shadow-[inset_0_0_0_1px_#DDDDDD]',
  warning: 'bg-[#FEE7C9] text-[#B34000]',
  error: 'bg-[#FFE9E6] text-[#CE0500]',
  success: 'bg-[#B8FEC9] text-[#18753C]',
}

export default function Badge({
  children,
  variant = 'gray',
  mono = true,
  size = 'sm',
  className,
}) {
  const sizes = {
    xs: 'px-1.5 py-0.5 text-[0.6875rem]',
    sm: 'px-2 py-0.5 text-[0.75rem]',
    md: 'px-2.5 py-1 text-[0.875rem]',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center leading-none font-bold uppercase tracking-[0.04em] tabular-nums whitespace-nowrap',
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
