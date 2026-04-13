import { motion } from 'motion/react'
import { fadeUp, staggerContainer } from '@/lib/animations'
import Container from '@/components/ui/Container'
import { cn } from '@/lib/utils'

export default function SectionWrapper({
  children,
  className,
  containerClassName,
  id,
  stagger = false,
}) {
  const variants = stagger ? staggerContainer : fadeUp

  return (
    <section id={id} className={cn('py-16 lg:py-24', className)}>
      <Container className={containerClassName}>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {children}
        </motion.div>
      </Container>
    </section>
  )
}
