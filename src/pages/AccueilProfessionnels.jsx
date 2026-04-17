import { motion } from 'motion/react'
import {
  CheckCircle,
  UserCheck,
  FileText,
  Users,
  Wrench,
  FolderCheck,
  Banknote,
} from 'lucide-react'
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
  'Dossiers PAC complets pour limiter les retours ANAH, CEE et MaPrimeRénov\'',
  'Parcours guidés : vos commerciaux livrent des pièces structurées, sans champs libres piégeux',
  'Commercial, pose, technique, SAV et mise en service : un même cadre pour toute l\'entreprise',
  'Multi-partenaires sur la plateforme et pilotage jusqu\'à l\'encaissement des aides',
]

const partnerLogos = [
  { src: '/logo-anah.svg', alt: 'ANAH' },
  { src: '/logo-maprimerenov.svg', alt: 'MaPrimeRénov\'' },
  { src: '/logo-cee.svg', alt: 'CEE' },
  { src: '/logo-rge.svg', alt: 'RGE Qualibat' },
]

const enterpriseSteps = [
  {
    number: 1,
    icon: UserCheck,
    title: 'Qualification & prospection',
    description:
      'Vos équipes capitalisent sur votre expertise produit tout en suivant un parcours imposant les bonnes informations au bon moment.',
    result: 'Moins d\'opportunités perdues pour cause de dossier incomplet.',
  },
  {
    number: 2,
    icon: FileText,
    title: 'Dossier commercial & technique complet',
    description:
      'Devis, relevés et pièces attendues par les dispositifs : le commercial remplit un flux guidé, le poseur reçoit un dossier prêt à présenter.',
    result: 'Fin des allers-retours pour pièces manquantes ou signatures oubliées.',
  },
  {
    number: 3,
    icon: Users,
    title: 'Multi-partenaires & rôles',
    description:
      'Poseurs internes, sous-traitants RGE, partenaires financeurs : plusieurs acteurs peuvent intervenir avec des droits et des livrables clairs.',
    result: 'Une vision partagée sans doublons ni zones grises.',
  },
  {
    number: 4,
    icon: Wrench,
    title: 'Pose, SAV & mise en service',
    description:
      'Les équipes terrain et SAV alimentent les étapes attendues pour la conformité et la clôture du chantier.',
    result: 'Une traçabilité exploitable jusqu\'au dossier final.',
  },
  {
    number: 5,
    icon: FolderCheck,
    title: 'Conformité administrative',
    description:
      'Les exigences ANAH, CEE et MaPrimeRénov\' sont intégrées dans les parcours : vous déposez des dossiers cohérents avec les fiches en vigueur.',
    result: 'Moins de demandes de compléments côté organismes.',
  },
  {
    number: 6,
    icon: Banknote,
    title: 'Valorisation & encaissement des aides',
    description:
      'Suivez la valorisation des primes et l\'état des versements depuis le pilotage : votre expertise reste sur le terrain, le cadre administratif est cadré.',
    result: 'Une vision financière alignée sur vos dossiers réels.',
  },
]

const journeyBenefits = [
  'Conformité multi-dispositifs',
  'Équipes alignées sur un seul outil',
  'Parcours mis à jour avec les évolutions réglementaires',
]

const enterpriseFeatures = [
  features[5],
  features[6],
  features[3],
  features[4],
  features[9],
  features[7],
]

const enterpriseTestimonials = [
  testimonials[3],
  testimonials[6],
  testimonials[5],
]

export default function AccueilProfessionnels() {
  return (
    <PageWrapper>
      <SEOHead
        title="Professionnels"
        description="Certipac pour les entreprises PAC : commercial, pose, technique, SAV et mise en service sur une même plateforme. Dossiers conformes ANAH, CEE et MaPrimeRénov\', multi-partenaires, parcours guidés jusqu\'à l\'encaissement des aides."
      />

      <HeroSection
        badge="Essai gratuit 1 mois — sans engagement"
        title="Votre expertise métier,"
        highlight="notre cadre conforme."
        description="Vous maîtrisez la rénovation énergétique ou la plomberie-chauffage, vos produits et vos matériaux. Certipac structure toute l'entreprise — commercial, poseurs, technique, SAV, mise en service — pour livrer des dossiers PAC complets, limiter les retours auprès de l'ANAH, des délégataires CEE et de MaPrimeRénov', et faire gagner du temps sur la conformité. De la prospection à la signature client, jusqu'à la valorisation et l'encaissement des aides : un partenaire logiciel pour vous concentrer sur votre savoir-faire."
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
            Dossiers alignés sur les exigences ANAH, CEE et MaPrimeRénov&apos;
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
              Un socle unique
              <br className="hidden sm:block" /> pour toutes vos équipes
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="text-surface-500 max-w-md lg:text-right">
            Conformité, pilotage et financement des dossiers PAC : les briques dont les structures multi-salariés ont besoin pour industrialiser la qualité.
          </motion.p>
        </div>
        <FeatureGrid features={enterpriseFeatures} />
      </SectionWrapper>

      <SectionWrapper className="bg-surface-100/50" stagger>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-4">
          <motion.div variants={fadeUp}>
            <Badge variant="accent" className="mb-4">Parcours entreprise</Badge>
            <h2 className="text-3xl font-bold text-[#194296] sm:text-4xl">
              De la prospection à l&apos;encaissement des aides
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="text-surface-500 max-w-md lg:text-right">
            Six étapes pour cadrer le métier administratif et financier tout en laissant vos équipes se concentrer sur l&apos;installation et le service client.
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {enterpriseSteps.map((step) => {
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
            <Badge className="mb-4">Multi-partenaires</Badge>
            <h3 className="text-2xl font-bold text-[#194296]">
              Plusieurs poseurs et partenaires sur la même plateforme
            </h3>
            <p className="mt-4 text-surface-600 leading-relaxed">
              Déclarez vos équipes internes, vos sous-traitants RGE et vos partenaires : chacun accède aux bonnes informations au bon moment, sans refaire la saisie ni multiplier les versions de dossier.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-[#194296]/10 bg-white p-6 shadow-soft"
          >
            <Badge variant="accent" className="mb-4">Évolutions & exigences</Badge>
            <h3 className="text-2xl font-bold text-[#194296]">
              Parcours mis à jour avec les fiches et aides
            </h3>
            <p className="mt-4 text-surface-600 leading-relaxed">
              Les évolutions des exigences administratives et des dispositifs sont prises en compte dans les parcours Certipac : vos équipes suivent l&apos;application pour rester alignées sur les attentes des organismes, sans monter une veille documentaire en interne.
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
            <h2 className="text-3xl font-bold text-[#194296] sm:text-4xl">Ils structurent leur activité</h2>
          </motion.div>
          <motion.p variants={fadeUp} className="text-surface-500 max-w-md lg:text-right">
            Dirigeants, responsables techniques et équipes support : retours sur standardisation, conformité et pilotage.
          </motion.p>
        </div>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {enterpriseTestimonials.map((t, i) => (
            <TestimonialCard key={t.name} {...t} featured={i === 0} />
          ))}
        </motion.div>
      </SectionWrapper>

      <SectionWrapper stagger>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-4">
          <motion.div variants={fadeUp}>
            <Badge variant="amber" className="mb-4">Tarifs</Badge>
            <h2 className="text-3xl font-bold text-[#194296] sm:text-4xl">Un prix adapté à vos équipes</h2>
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
        title="Prêt à industrialiser vos dossiers PAC ?"
        description="Essai gratuit 1 mois. Conformité ANAH, CEE et MaPrimeRénov', équipes alignées, multi-partenaires et suivi jusqu'aux aides — tout depuis Certipac."
      />
    </PageWrapper>
  )
}
