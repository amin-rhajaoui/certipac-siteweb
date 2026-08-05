import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

/**
 * Bouton — style DSFR-like (fr-btn).
 * Angles 0, poids 500, filet bas inset, hauteurs 2 / 2.5 / 3 rem.
 */

const variants = {
  primary: 'ctp-btn--primary',
  accent: 'ctp-btn--accent',
  secondary: 'ctp-btn--secondary',
  tertiary: 'ctp-btn--tertiary',
  ghost: 'ctp-btn--ghost',
  danger: 'ctp-btn--danger',
  onDark: 'ctp-btn--on-dark',
}

const sizes = {
  sm: 'ctp-btn--sm',
  md: '',
  lg: 'ctp-btn--lg',
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
    'ctp-btn',
    variants[variant],
    sizes[size],
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes} aria-disabled={disabled || undefined} {...props}>
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
        aria-disabled={disabled || undefined}
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
