import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import Container from '@/components/ui/Container'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const NAV_OFFSET_PX = 67

export default function HeroSection({
  badge,
  title,
  highlight,
  description,
  primaryCTA,
  secondaryCTA,
  children,
  footer,
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])

  const heroGrid = (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left — Text content */}
      <div>
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-5">{badge}</Badge>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight text-[#194296] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
        >
          {title}{' '}
          {highlight && (
            <span className="text-[#43AA43]">
              {highlight}
            </span>
          )}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-surface-600 max-w-lg leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        {(primaryCTA || secondaryCTA) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            {primaryCTA && (
              <Button size="lg" to={primaryCTA.to} href={primaryCTA.href}>
                {primaryCTA.label}
              </Button>
            )}
            {secondaryCTA && (
              <Button variant="ghost" size="lg" to={secondaryCTA.to} href={secondaryCTA.href}>
                {secondaryCTA.label}
                <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            )}
          </motion.div>
        )}
      </div>

      {/* Right — Visual content */}
      {children && (
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      )}
    </div>
  )

  return (
    <section
      ref={ref}
      className={cn(
        'relative overflow-hidden bg-surface-50',
        footer ? 'flex flex-col pt-20 pb-0 lg:pt-28' : 'py-20 lg:py-28',
      )}
      style={footer ? { minHeight: `calc(100dvh - ${NAV_OFFSET_PX}px)` } : undefined}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <motion.div
        style={{ y }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-20 right-1/4 h-[400px] w-[400px] rounded-full bg-[#194296]/5 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-[#43AA43]/5 blur-[100px]" />
      </motion.div>

      {footer ? (
        <>
          <Container className="relative z-10 flex min-h-0 flex-1 flex-col justify-center">
            {heroGrid}
          </Container>
          <div className="relative z-10 mt-auto w-full shrink-0">
            <Container className="pt-10 lg:pt-12">{footer}</Container>
            <div className="brand-bar mt-6 lg:mt-8" aria-hidden />
          </div>
        </>
      ) : (
        <Container className="relative z-10">{heroGrid}</Container>
      )}
    </section>
  )
}
