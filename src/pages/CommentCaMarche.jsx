import { motion } from 'motion/react'
import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import SectionWrapper from '@/components/sections/SectionWrapper'
import CTASection from '@/components/sections/CTASection'
import Badge from '@/components/ui/Badge'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { steps } from '@/data/steps'

export default function CommentCaMarche() {
  return (
    <PageWrapper>
      <SEOHead
        title="Comment ça marche"
        description="Découvrez comment PACIZZY simplifie la création de vos dossiers PAC en 5 étapes simples."
      />

      <HeroSection
        badge="Simple et rapide"
        title="Opérationnel en"
        highlight="5 minutes"
        description="De l'inscription à votre premier dossier, PACIZZY vous accompagne à chaque étape. Pas de formation nécessaire, tout est intuitif."
      />

      {/* Timeline */}
      <SectionWrapper>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 hidden lg:block" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  className="relative flex flex-col lg:flex-row items-start gap-8"
                >
                  {/* Number circle */}
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary-500 text-white shadow-card">
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-primary-500">Étape {step.number}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-surface-900 mb-3">{step.title}</h3>
                    <p className="text-surface-600 leading-relaxed text-lg max-w-xl">
                      {step.description}
                    </p>
                  </div>

                  {/* Illustration placeholder */}
                  <div className="w-full lg:w-80 shrink-0">
                    <div className="rounded-xl bg-surface-100 border border-surface-200 p-8 flex items-center justify-center min-h-[160px]">
                      <Icon className="h-12 w-12 text-primary-300" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Summary */}
      <SectionWrapper className="bg-surface-50">
        <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto">
          <Badge variant="accent" className="mb-4">Résultat</Badge>
          <h2 className="text-3xl font-bold text-surface-900 sm:text-4xl mb-6">
            Vos dossiers PAC, sans prise de tête
          </h2>
          <p className="text-lg text-surface-600 leading-relaxed">
            En moyenne, nos utilisateurs créent leur premier dossier complet en moins de 20 minutes.
            Ce qui prenait 2 heures avec les méthodes traditionnelles ne prend plus qu'un quart d'heure.
          </p>
        </motion.div>
      </SectionWrapper>

      <CTASection />
    </PageWrapper>
  )
}
