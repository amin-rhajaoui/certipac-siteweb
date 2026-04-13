import { motion } from 'motion/react'
import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import SectionWrapper from '@/components/sections/SectionWrapper'
import CTASection from '@/components/sections/CTASection'
import Badge from '@/components/ui/Badge'
import { fadeUp } from '@/lib/animations'
import { features, featureCategories } from '@/data/features'

function FeatureDetail({ feature, index }) {
  const isReversed = index % 2 === 1

  return (
    <motion.div
      variants={fadeUp}
      className={`flex flex-col lg:flex-row items-center gap-10 ${isReversed ? 'lg:flex-row-reverse' : ''}`}
    >
      <div className="flex-1 space-y-4">
        <Badge>{feature.category}</Badge>
        <h3 className="text-2xl font-bold text-surface-900">{feature.title}</h3>
        <p className="text-surface-600 leading-relaxed text-lg">{feature.description}</p>
      </div>
      <div className="flex-1 w-full">
        <div className="rounded-2xl bg-surface-50 border border-surface-200 p-10 flex items-center justify-center min-h-[220px]">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary-100 text-primary-500">
            <feature.icon className="h-10 w-10" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Fonctionnalites() {
  return (
    <PageWrapper>
      <SEOHead
        title="Fonctionnalités"
        description="Découvrez toutes les fonctionnalités de PACIZZY : génération de dossiers, devis automatiques, conformité RGE, exports et plus encore."
      />

      <HeroSection
        badge="Fonctionnalités"
        title="Des outils puissants pour"
        highlight="chaque étape"
        description="PACIZZY couvre l'intégralité de votre workflow : de la création du dossier au suivi du paiement des aides."
        primaryCTA={{ label: 'Essai gratuit 1 mois', to: '/tarifs' }}
        secondaryCTA={{ label: 'Voir les tarifs', to: '/tarifs' }}
      />

      {/* Feature details - alternating layout */}
      {features.map((feature, i) => (
        <SectionWrapper
          key={i}
          className={i % 2 === 0 ? 'bg-surface-100' : 'bg-surface-50'}
        >
          <FeatureDetail feature={feature} index={i} />
        </SectionWrapper>
      ))}

      <CTASection />
    </PageWrapper>
  )
}
