import { motion } from 'motion/react'
import { CheckCircle } from 'lucide-react'
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
  { value: 2500, suffix: '+', label: 'Artisans guidés' },
  { value: 50000, suffix: '+', label: 'PAC installées' },
  { value: 98, suffix: '%', label: 'Dossiers conformes' },
  { value: 5, suffix: 'x', label: 'Plus rapide' },
]

const valueProps = [
  'Visite technique guidée sur le terrain',
  'Dimensionnement & choix du modèle PAC',
  'Devis + signature électronique',
  'Dossiers conformes ANAH, CEE, MaPrimeRénov\'',
]

const partnerLogos = [
  { src: '/logo-anah.svg', alt: 'ANAH' },
  { src: '/logo-maprimerenov.svg', alt: 'MaPrimeRénov\'' },
  { src: '/logo-cee.svg', alt: 'CEE' },
  { src: '/logo-rge.svg', alt: 'RGE Qualibat' },
]

export default function Accueil() {
  return (
    <PageWrapper>
      <SEOHead
        title="Accueil"
        description="Certipac — Le logiciel + app mobile qui guide les artisans RGE de A à Z : visite technique, dimensionnement, devis, signature électronique et dossiers conformes pour toucher les primes."
      />

      {/* Hero */}
      <HeroSection
        badge="Essai gratuit 1 mois — sans engagement"
        title="Posez vos PAC"
        highlight="en toute sérénité."
        description="Certipac vous guide de A à Z : visite technique, dimensionnement, devis, signature électronique et dossiers conformes. Zéro stress, zéro erreur."
        primaryCTA={{ label: 'Essayer gratuitement', to: '/tarifs' }}
        secondaryCTA={{ label: 'Voir une démo', to: '/comment-ca-marche' }}
        footer={
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {valueProps.map((prop, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-center gap-3"
              >
                <CheckCircle className="h-5 w-5 text-[#43AA43] shrink-0" />
                <span className="text-surface-700 font-medium text-sm">{prop}</span>
              </motion.div>
            ))}
          </motion.div>
        }
      >
        <DashboardMockup />
      </HeroSection>

      {/* Partner logos banner */}
      <section className="py-10 bg-surface-50">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm text-surface-400 mb-6 font-medium tracking-wide uppercase">
            Dossiers conformes pour toutes les aides
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partnerLogos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <SectionWrapper id="features">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-4">
          <motion.div variants={fadeUp}>
            <Badge className="mb-4">Fonctionnalités</Badge>
            <h2 className="text-3xl font-bold text-[#194296] sm:text-4xl">
              Tout ce qu'il faut pour<br className="hidden sm:block" /> poser vos PAC sereinement
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="text-surface-500 max-w-md lg:text-right">
            Du terrain au bureau, Certipac guide chaque étape de votre activité.
          </motion.p>
        </div>
        <FeatureGrid features={features.slice(0, 6)} />
      </SectionWrapper>

      {/* Steps */}
      <SectionWrapper className="bg-surface-100/50" stagger>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-4">
          <motion.div variants={fadeUp}>
            <Badge variant="accent" className="mb-4">Comment ça marche</Badge>
            <h2 className="text-3xl font-bold text-[#194296] sm:text-4xl">
              De la visite au versement des primes
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="text-surface-500 max-w-md lg:text-right">
            5 étapes guidées. Zéro stress. Tout est fait pour vous.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </SectionWrapper>

      {/* Stats */}
      <SectionWrapper>
        <motion.div variants={fadeUp} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#194296] sm:text-4xl">
            Des chiffres qui parlent
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatCounter key={i} {...stat} />
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper className="bg-surface-100/50" stagger>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-4">
          <motion.div variants={fadeUp}>
            <Badge className="mb-4">Témoignages</Badge>
            <h2 className="text-3xl font-bold text-[#194296] sm:text-4xl">
              Ils posent leurs PAC sereinement
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="text-surface-500 max-w-md lg:text-right">
            Plus de 2 500 artisans RGE font confiance à Certipac au quotidien.
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
            <h2 className="text-3xl font-bold text-[#194296] sm:text-4xl">
              Un prix adapté à chaque artisan
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
