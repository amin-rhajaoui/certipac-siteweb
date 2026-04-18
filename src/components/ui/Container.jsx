import { cn } from '@/lib/utils'

export default function Container({ children, className, size = 'default' }) {
  const sizes = {
    narrow: 'max-w-4xl',
    default: 'max-w-7xl',
    wide: 'max-w-[90rem]',
  }

  return (
    <div className={cn('mx-auto w-full px-4 sm:px-6 lg:px-10', sizes[size], className)}>
      {children}
    </div>
  )
}
