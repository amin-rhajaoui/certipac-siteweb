import { motion } from 'motion/react'
import { CheckCircle, ArrowRight } from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import SectionWrapper from '@/components/sections/SectionWrapper'
import FeatureGrid from '@/components/sections/FeatureGrid'
import StepCard from '@/components/sections/StepCard'
import StatCounter from '@/components/sections/StatCounter'
import TestimonialCard from '@/components/sections/TestimonialCard'
import PricingCard from '@/components/sections/PricingCard'
import CTASection from '@/components/sections/CTASection'
import DashboardMockup from '@/components/sections/DashboardMockup'
import Badge from '@/components/ui/Badge'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { features } from '@/data/features'
import { plans } from '@/data/pricing'
import { testimonials } from '@/data/testimonials'
import { steps } from '@/data/steps'

const stats = [
  { value: 2500, suffix: '+', label: 'Artisans RGE' },
  { value: 50000, suffix: '+', label: 'Dossiers générés' },
  { value: 98, suffix: '%', label: 'Taux de conformité' },
  { value: 5, suffix: 'x', label: 'Plus rapide' },
]

const valueProps = [
  'Dossiers conformes en quelques clics',
  'Barèmes MaPrimeRénov\' toujours à jour',
  'Export direct ANAH & CEE',
  'Support expert en rénovation énergétique',
]

export default function Accueil() {
  return (
    <PageWrapper>
      <SEOHead
        title="Accueil"
        description="PACIZZY — Le logiciel SaaS pour artisans RGE. Générez vos dossiers et devis conformes pour l'installation de PAC en quelques clics."
      />

      {/* Hero — Asymmetric layout */}
      <HeroSection
        badge="Essai gratuit 1 mois — sans engagement"
        title="Vos dossiers PAC,"
        highlight="simplement conformes."
        description="PACIZZY simplifie la création de dossiers et devis conformes pour l'installation de pompes à chaleur. Conçu par des pros, pour des artisans RGE."
        primaryCTA={{ label: 'Commencer gratuitement', to: '/tarifs' }}
        secondaryCTA={{ label: 'Voir comment ça marche', to: '/comment-ca-marche' }}
      >
        <DashboardMockup />
      </HeroSection>

      {/* Value props — Horizontal strip with brand bar */}
      <div className="border-y border-surface-200/50">
        <div className="brand-bar" />
        <SectionWrapper className="py-10 lg:py-12">
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {valueProps.map((prop, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-center gap-3"
              >
                <CheckCircle className="h-5 w-5 text-primary-500 shrink-0" />
                <span className="text-surface-700 font-medium text-sm">{prop}</span>
              </motion.div>
            ))}
          </motion.div>
        </SectionWrapper>
      </div>

      {/* Features — Bento-style layout */}
      <SectionWrapper id="features">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-4">
          <motion.div variants={fadeUp}>
            <Badge className="mb-4">Fonctionnalités</Badge>
            <h2 className="text-3xl font-bold text-surface-950 sm:text-4xl">
              Tout ce qu'il faut pour<br className="hidden sm:block" /> vos dossiers PAC
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="text-surface-500 max-w-md lg:text-right">
            Des outils pensés pour simplifier votre quotidien d'artisan RGE.
          </motion.p>
        </div>
        <FeatureGrid features={features.slice(0, 6)} />
      </SectionWrapper>

      {/* Steps — Timeline style */}
      <SectionWrapper className="bg-surface-100/50 border-y border-surface-200/50" stagger>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-4">
          <motion.div variants={fadeUp}>
            <Badge variant="accent" className="mb-4">Comment ça marche</Badge>
            <h2 className="text-3xl font-bold text-surface-950 sm:text-4xl">
              Opérationnel en 5 minutes
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="text-surface-500 max-w-md lg:text-right">
            De l'inscription à votre premier dossier, tout est simple et guidé.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </SectionWrapper>

      {/* Stats — Large numbers with accent colors */}
      <SectionWrapper>
        <motion.div variants={fadeUp} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-surface-950 sm:text-4xl">
            Des chiffres qui parlent
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatCounter key={i} {...stat} />
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials — Asymmetric with highlighted first */}
      <SectionWrapper className="bg-surface-100/50 border-y border-surface-200/50" stagger>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-4">
          <motion.div variants={fadeUp}>
            <Badge className="mb-4">Témoignages</Badge>
            <h2 className="text-3xl font-bold text-surface-950 sm:text-4xl">
              Ils nous font confiance
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="text-surface-500 max-w-md lg:text-right">
            Plus de 2 500 artisans RGE utilisent PACIZZY au quotidien.
          </motion.p>
        </div>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.slice(0, 3).map((t, i) => (
            <TestimonialCard key={i} {...t} featured={i === 0} />
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Pricing */}
      <SectionWrapper stagger>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-4">
          <motion.div variants={fadeUp}>
            <Badge variant="amber" className="mb-4">Tarifs</Badge>
            <h2 className="text-3xl font-bold text-surface-950 sm:text-4xl">
              Un prix adapté à chaque besoin
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="text-surface-500 max-w-md lg:text-right">
            Essai gratuit 1 mois. Sans engagement, sans carte bancaire.
          </motion.p>
        </div>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
        >
          {plans.map((plan, i) => (
            <PricingCard key={i} {...plan} />
          ))}
        </motion.div>
      </SectionWrapper>

      {/* CTA */}
      <CTASection />
    </PageWrapper>
  )
}
