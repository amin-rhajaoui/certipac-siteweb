import { motion } from 'motion/react'
import { CheckCircle, UserCheck, Ruler, FileText, PenTool, FolderCheck } from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import SectionWrapper from '@/components/sections/SectionWrapper'
import FeatureGrid from '@/components/sections/FeatureGrid'
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

const stats = [
  { value: 2500, suffix: '+', label: 'Entreprises accompagnées' },
  { value: 50000, suffix: '+', label: 'PAC installées' },
  { value: 98, suffix: '%', label: 'Dossiers conformes' },
  { value: 5, suffix: 'x', label: 'Plus rapide' },
]

const valueProps = [
  'Éligibilité client : logement, foyer, dispositifs d\'État et aides locales',
  'Dimensionnement simple et fiable, prêt à défendre en rendez-vous',
  'Devis avec aides CEE, MaPrimeRénov\' et locales + reste à charge clair',
  'Si vous n\'avez pas de poseur partenaire, la marketplace vous met en relation avec un poseur RGE',
]

const partnerLogos = [
  { src: '/logo-anah.svg', alt: 'ANAH' },
  { src: '/logo-maprimerenov.svg', alt: 'MaPrimeRénov\'' },
  { src: '/logo-cee.svg', alt: 'CEE' },
  { src: '/logo-rge.svg', alt: 'RGE Qualibat' },
]

/** Parcours orienté vente : de la qualification à la remise au poseur certifié. */
const commercialSteps = [
  {
    number: 1,
    icon: UserCheck,
    title: 'Éligibilité & aides',
    description:
      'Vérifiez le logement, le foyer et l\'éligibilité aux dispositifs d\'État (MaPrimeRénov\', CEE) ainsi qu\'aux aides locales. Des arguments clairs avant même le chiffrage.',
    result: 'Vous validez vite les dossiers pertinents.',
  },
  {
    number: 2,
    icon: Ruler,
    title: 'Dimensionnement efficace',
    description:
      'Puissance et périmètre technique cohérents avec le site : vous avancez vite et vous livrez une base solide au futur installateur RGE.',
    result: 'Vous sécurisez la faisabilité technique.',
  },
  {
    number: 3,
    icon: FileText,
    title: 'Devis prêt à signer',
    description:
      'Un dossier commercial complet : prestation, aides affichées, reste à charge et rappels réglementaires. Le client voit tout, vous évitez les allers-retours.',
    result: 'Vous présentez une offre claire au 1er RDV.',
  },
  {
    number: 4,
    icon: PenTool,
    title: 'Signature au 1er rendez-vous',
    description:
      'Signature électronique légale sur place ou à distance. Vous transformez la visite en engagement sans attendre une relance administrative.',
    result: 'Vous transformez plus vite vos opportunités.',
  },
  {
    number: 5,
    icon: FolderCheck,
    title: 'Remise au poseur RGE & conformité',
    description:
      'Le dossier est transmis à un poseur certifié RGE (votre partenaire ou un partenaire marketplace) pour une installation dans les règles de l\'art.',
    result: 'Après la pose, vous récupérez les documents et CERFA nécessaires à la conformité administrative.',
  },
]

const journeyBenefits = [
  'Discours commercial homogène',
  'Moins d\'allers-retours administratifs',
  'Passage fluide au poseur certifié',
]

const commercialFeatures = [
  features[6],
  features[0],
  features[1],
  features[2],
  features[3],
  features[4],
]

const commercialTestimonials = [
  testimonials[6],
  testimonials[7],
  testimonials[3],
]

export default function AccueilCommerciaux() {
  return (
    <PageWrapper>
      <SEOHead
        title="Commerciaux PAC"
        description="Certipac pour les commerciaux PAC : éligibilité client, devis signés, transmission à des poseurs RGE via partenaire ou marketplace, puis récupération des CERFA pour la conformité administrative."
      />

      <HeroSection
        badge="Essai gratuit 1 mois — sans engagement"
        title="Vendez le changement de PAC"
        highlight="avec des dossiers déjà prêts."
        description="Certipac vous aide à qualifier le client et les dispositifs (MaPrimeRénov', CEE, aides locales), à utiliser des références produits éligibles et fournisseurs synchronisés avec la base Atita à jour, à dimensionner proprement, à produire un devis convaincant avec toutes les aides, à signer au premier rendez-vous, puis à transmettre le dossier à un poseur certifié RGE. Si vous n'avez pas de partenaire poseur, la marketplace Certipac vous en propose un."
        primaryCTA={{ label: 'Essayer gratuitement', href: 'https://app.certipac.fr' }}
        secondaryCTA={{ label: 'Comment ça marche', to: '/comment-ca-marche' }}
        footer={
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center"
          >
            {valueProps.map((prop, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex max-w-sm items-center justify-center gap-3 text-center sm:max-w-md"
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

      <section className="py-10 bg-surface-50">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm text-surface-400 mb-6 font-medium tracking-wide uppercase">
            Aides, références produits et fournisseurs à jour via la base Atita
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

      <SectionWrapper id="features">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-4">
          <motion.div variants={fadeUp}>
            <Badge className="mb-4">Fonctionnalités</Badge>
            <h2 className="text-3xl font-bold text-[#194296] sm:text-4xl">
              L'arsenal du commercial
              <br className="hidden sm:block" /> sur le terrain comme au bureau
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="text-surface-500 max-w-md lg:text-right">
            De la collecte d'informations au devis signé : les mêmes briques que vos équipes techniques, présentées pour convaincre et livrer une affaire propre.
          </motion.p>
        </div>
        <FeatureGrid features={commercialFeatures} />
      </SectionWrapper>

      <SectionWrapper className="bg-surface-100/50" stagger>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-4">
          <motion.div variants={fadeUp}>
            <Badge variant="accent" className="mb-4">Parcours commercial</Badge>
            <h2 className="text-3xl font-bold text-[#194296] sm:text-4xl">
              Un parcours de vente clair, de l'éligibilité à la pose
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="text-surface-500 max-w-md lg:text-right">
            Cinq étapes concrètes pour signer plus vite et transmettre un dossier immédiatement exploitable par l'artisan RGE.
          </motion.p>
        </div>
        <motion.div variants={fadeUp} className="mb-8 flex flex-wrap items-center gap-2">
          {journeyBenefits.map((benefit) => (
            <span
              key={benefit}
              className="rounded-full border border-[#194296]/20 bg-white/80 px-3 py-1 text-xs font-semibold text-[#194296]"
            >
              {benefit}
            </span>
          ))}
        </motion.div>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {commercialSteps.map((step) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="h-full rounded-2xl border border-[#194296]/10 bg-white p-5 shadow-soft"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#194296]/10 text-[#194296]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold tracking-wide text-[#194296]">ETAPE {step.number}</span>
                </div>
                <h3 className="mb-2 text-base font-semibold text-surface-800">{step.title}</h3>
                <p className="text-sm text-surface-500 leading-relaxed">{step.description}</p>
                <p className="mt-4 border-t border-surface-100 pt-3 text-xs font-semibold text-[#43AA43]">
                  Résultat: {step.result}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-[#194296]/10 bg-white p-6 shadow-soft"
          >
            <Badge className="mb-4">Marketplace poseurs</Badge>
            <h3 className="text-2xl font-bold text-[#194296]">
              Pas de partenaire poseur ? On vous met en relation.
            </h3>
            <p className="mt-4 text-surface-600 leading-relaxed">
              Accédez à des poseurs certifiés RGE disponibles via la marketplace Certipac, avec un
              fonctionnement simple et un forfait transparent.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-[#194296]/10 bg-white p-6 shadow-soft"
          >
            <Badge variant="accent" className="mb-4">Après la pose</Badge>
            <h3 className="text-2xl font-bold text-[#194296]">
              Dossier final et CERFA récupérés automatiquement
            </h3>
            <p className="mt-4 text-surface-600 leading-relaxed">
              Une fois l'installation terminée, vous recevez les documents de fin de chantier et les
              CERFA nécessaires pour clôturer la conformité administrative du dossier.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <motion.div variants={fadeUp} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#194296] sm:text-4xl">Des chiffres qui parlent</h2>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatCounter key={i} {...stat} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-surface-100/50" stagger>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-4">
          <motion.div variants={fadeUp}>
            <Badge className="mb-4">Témoignages</Badge>
            <h2 className="text-3xl font-bold text-[#194296] sm:text-4xl">Ils accélèrent la vente</h2>
          </motion.div>
          <motion.p variants={fadeUp} className="text-surface-500 max-w-md lg:text-right">
            Commerciaux et équipes terrain : retours sur devis, signatures et dossiers livrés plus vite.
          </motion.p>
        </div>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {commercialTestimonials.map((t, i) => (
            <TestimonialCard key={t.name} {...t} featured={i === 0} />
          ))}
        </motion.div>
      </SectionWrapper>

      <SectionWrapper stagger>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-4">
          <motion.div variants={fadeUp}>
            <Badge variant="amber" className="mb-4">Tarifs</Badge>
            <h2 className="text-3xl font-bold text-[#194296] sm:text-4xl">Un prix adapté à votre force de vente</h2>
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

      <CTASection
        title="Prêt à signer plus d'affaires PAC ?"
        description="Essai gratuit 1 mois. Éligibilité, dimensionnement, devis, transmission au poseur RGE via partenaire ou marketplace, puis CERFA de conformité — tout depuis Certipac."
      />
    </PageWrapper>
  )
}
