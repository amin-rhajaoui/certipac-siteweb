import { motion } from 'motion/react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function CTASection({
  title = 'Prêt à simplifier vos dossiers PAC ?',
  description = 'Essayez PACIZZY gratuitement pendant 1 mois. Sans engagement, sans carte bancaire.',
  primaryCTA = { label: 'Commencer gratuitement', to: '/tarifs' },
  secondaryCTA = { label: 'Demander une démo', to: '/contact' },
}) {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Brand bar top */}
      <div className="brand-bar" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary-500/5 blur-[120px]" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold text-surface-950 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-surface-500">{description}</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg" to={primaryCTA.to}>
              {primaryCTA.label}
            </Button>
            <Button variant="outline" size="lg" to={secondaryCTA.to}>
              {secondaryCTA.label}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
