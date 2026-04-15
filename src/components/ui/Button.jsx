import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

const variants = {
  primary:
    'bg-[#194296] text-white hover:bg-[#143578]',
  secondary:
    'bg-[#43AA43] text-white hover:bg-[#369236]',
  outline:
    'border border-surface-300 text-surface-700 hover:border-[#194296] hover:text-[#194296]',
  ghost:
    'text-surface-600 hover:text-[#194296]',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className,
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 cursor-pointer',
    variants[variant],
    sizes[size],
    className
  )

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  }

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...motionProps}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button className={classes} {...motionProps} {...props}>
      {children}
    </motion.button>
  )
}
