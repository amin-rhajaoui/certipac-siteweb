import Container from '@/components/ui/Container'
import { cn } from '@/lib/utils'

/**
 * SectionWrapper — rythme vertical institutionnel (64–96px).
 * `tone` : white | gray (alt DSFR #F6F6F6) | ink | primary
 */

const tones = {
  white: 'bg-white',
  gray: 'bg-[#F6F6F6]',
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
        tighter ? 'py-10 lg:py-14' : 'py-14 lg:py-20',
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
