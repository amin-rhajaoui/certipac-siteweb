import Container from '@/components/ui/Container'
import { cn } from '@/lib/utils'

/**
 * SectionWrapper institutionnel — espacement généreux, sans effet parallax.
 * `tone` : bg-white (default) | bg-gray-10 (surface-100 alterné) | bg-ink (ink/dark)
 */

const tones = {
  white: 'bg-white',
  gray: 'bg-[#F4F4F4]',
  ink: 'bg-[#161616] text-white',
  primary: 'bg-[#194296] text-white',
}

export default function SectionWrapper({
  children,
  className,
  containerClassName,
  containerSize,
  id,
  tone = 'white',
  tighter = false,
  as: Tag = 'section',
}) {
  return (
    <Tag
      id={id}
      className={cn(
        tighter ? 'py-12 lg:py-16' : 'py-16 lg:py-24',
        tones[tone],
        className,
      )}
    >
      <Container className={containerClassName} size={containerSize}>
        {children}
      </Container>
    </Tag>
  )
}
