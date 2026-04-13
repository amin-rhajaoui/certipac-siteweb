import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import Container from '@/components/ui/Container'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

export default function HeroSection({
  badge,
  title,
  highlight,
  description,
  primaryCTA,
  secondaryCTA,
  children,
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-surface-50 py-20 lg:py-28"
    >
      {/* Background — subtle grid + glow orbs */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <motion.div
        style={{ y }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-20 right-1/4 h-[400px] w-[400px] rounded-full bg-primary-500/5 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-accent-500/5 blur-[100px]" />
      </motion.div>

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text content, aligned left */}
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
              className="text-4xl font-bold tracking-tight text-surface-950 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
            >
              {title}{' '}
              {highlight && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
                  {highlight}
                </span>
              )}
            </motion.h1>

            {description && (
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-lg text-surface-500 max-w-lg leading-relaxed"
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
                  <Button size="lg" to={primaryCTA.to}>
                    {primaryCTA.label}
                  </Button>
                )}
                {secondaryCTA && (
                  <Button variant="ghost" size="lg" to={secondaryCTA.to}>
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
      </Container>
    </section>
  )
}
