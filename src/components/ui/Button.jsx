import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

/**
 * Button — style Carbon institutionnel.
 * Angles très faibles, poids semibold, transitions immédiates.
 * Variantes : primary (bleu), accent (vert), secondary (ink), tertiary (outline bleu), ghost, danger.
 */

const variants = {
  primary:
    'bg-[#194296] text-white hover:bg-[#143578] active:bg-[#0F285A] disabled:bg-[#C6C6C6] disabled:text-white',
  accent:
    'bg-[#43AA43] text-white hover:bg-[#369236] active:bg-[#2A7A2A] disabled:bg-[#C6C6C6] disabled:text-white',
  secondary:
    'bg-[#161616] text-white hover:bg-[#393939] active:bg-[#262626] disabled:bg-[#C6C6C6] disabled:text-white',
  tertiary:
    'bg-transparent text-[#194296] border border-[#194296] hover:bg-[#194296] hover:text-white active:bg-[#143578]',
  ghost:
    'bg-transparent text-[#194296] hover:bg-[#E6EBF5] active:bg-[#CDD8EB]',
  danger:
    'bg-[#DA1E28] text-white hover:bg-[#B81921] active:bg-[#750E13]',
  onDark:
    'bg-white text-[#194296] hover:bg-[#E6EBF5] active:bg-[#CDD8EB]',
}

const sizes = {
  sm: 'h-9 px-4 text-[13px]',
  md: 'h-11 px-5 text-[14px]',
  lg: 'h-12 px-6 text-[15px]',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className,
  type = 'button',
  disabled,
  ...props
}) {
  const classes = cn(
    'group/btn relative inline-flex items-center justify-center gap-2 rounded-[2px] font-semibold whitespace-nowrap select-none',
    'transition-[background-color,border-color,color,transform] duration-150 ease-out',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#194296]',
    'active:translate-y-px',
    'disabled:cursor-not-allowed disabled:opacity-100 disabled:active:translate-y-0',
    variants[variant],
    sizes[size],
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    const external = /^https?:\/\//.test(href)
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  )
}
