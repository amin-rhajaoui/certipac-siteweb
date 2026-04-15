import { motion } from 'motion/react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function CTASection({
  title = 'Prêt à poser vos PAC en toute sérénité ?',
  description = 'Essayez Certipac gratuitement pendant 1 mois. Guidage complet, dossiers conformes, zéro stress.',
  primaryCTA = { label: 'Essayer gratuitement', href: 'https://app.certipac.fr' },
  secondaryCTA = { label: 'Voir une démo', to: '/contact' },
}) {
  return (
    <section className="relative overflow-hidden pb-20 lg:pb-28">
      <div className="brand-bar" aria-hidden />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#194296]/5 blur-[120px]" />
      </div>

      <Container className="relative pt-20 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold text-[#194296] sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-surface-600">{description}</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg" to={primaryCTA.to} href={primaryCTA.href}>
              {primaryCTA.label}
            </Button>
            <Button variant="outline" size="lg" to={secondaryCTA.to} href={secondaryCTA.href}>
              {secondaryCTA.label}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
