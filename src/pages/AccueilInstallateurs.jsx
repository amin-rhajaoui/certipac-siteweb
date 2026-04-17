import { motion } from 'motion/react'
import {
  CheckCircle,
  ClipboardCheck,
  FileText,
  Bell,
  FolderCheck,
  Handshake,
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
  { value: 2500, suffix: '+', label: 'Artisans guidés' },
  { value: 50000, suffix: '+', label: 'PAC installées' },
  { value: 98, suffix: '%', label: 'Dossiers conformes' },
  { value: 5, suffix: 'x', label: 'Plus rapide' },
]

const valueProps = [
  'Concentrez-vous sur la pose : devis, signatures et relances sont cadrés dans l\'app',
  'Dossiers MaPrimeRénov\', CEE et ANAH guidés pour éviter les oublis et les retours',
  'Suivi des subventions et des primes sans tableur ni dossier éparpillé',
  'Un cadre simple pour avancer avec vos partenaires et rester conforme',
]

const partnerLogos = [
  { src: '/logo-anah.svg', alt: 'ANAH' },
  { src: '/logo-maprimerenov.svg', alt: 'MaPrimeRénov\'' },
  { src: '/logo-cee.svg', alt: 'CEE' },
  { src: '/logo-rge.svg', alt: 'RGE Qualibat' },
]

const installerSteps = [
  {
    number: 1,
    icon: ClipboardCheck,
    title: 'Visite & dimensionnement',
    description:
      'Sur le terrain, l\'app vous guide : relevés, photos, puissance à prévoir. Même si vous n\'avez pas une organisation « bureau », vous gardez une base technique solide.',
    result: 'Moins d\'improvisation, plus de chantiers posés dans les bonnes conditions.',
  },
  {
    number: 2,
    icon: FileText,
    title: 'Devis & signature',
    description:
      'Générez un devis clair avec le détail des aides et le reste à charge, puis faites signer électroniquement : vous évitez les allers-retours papier.',
    result: 'Des engagements clients plus rapides et mieux tracés.',
  },
  {
    number: 3,
    icon: Bell,
    title: 'Relances & suivi',
    description:
      'Relances client, pièces manquantes, jalons dossiers : le suivi est structuré pour que rien ne se perde entre deux chantiers.',
    result: 'Moins de dossiers qui traînent après le retour de la machine.',
  },
  {
    number: 4,
    icon: FolderCheck,
    title: 'Conformité des dossiers',
    description:
      'Les pièces attendues par MaPrimeRénov\', les CEE et l\'ANAH sont intégrées au parcours : vous déposez un dossier cohérent avec les exigences en vigueur.',
    result: 'Moins de demandes de complément côté organismes.',
  },
  {
    number: 5,
    icon: Handshake,
    title: 'Subventions & partenariats',
    description:
      'Visualisez les aides, le reste à charge et l\'avancement vers le versement des primes. Gardez une lecture simple pour vous et vos partenaires.',
    result: 'Une vision claire sur l\'argent des aides sans monter un service compta.',
  },
]

const journeyBenefits = [
  'Guidage pas à pas',
  'Peu de structure interne requise',
  'Du terrain au versement des primes',
]

const installerFeatures = [
  features[0],
  features[1],
  features[2],
  features[3],
  features[4],
  features[7],
]

const installerTestimonials = [
  testimonials[2],
  testimonials[4],
  testimonials[0],
]

export default function AccueilInstallateurs() {
  return (
    <PageWrapper>
      <SEOHead
        title="Installateurs PAC"
        description="Certipac pour les installateurs et artisans RGE : posez vos PAC, l'app gère devis, signatures, relances, dossiers conformes ANAH, CEE et MaPrimeRénov', suivi des subventions et partenariats."
      />

      <HeroSection
        badge="Essai gratuit 1 mois — sans engagement"
        title="Vous savez poser des PAC,"
        highlight="Certipac s'occupe du reste."
        description="Peu de structure administrative ? Pas de problème : Certipac vous guide pour le devis, la signature électronique, les relances, la conformité des dossiers et le suivi des subventions. Vous restez concentré sur la pose et la qualité d'installation, tout en présentant des dossiers propres aux organismes et en gardant une lecture simple sur les aides et les partenariats."
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
            Dossiers alignés sur MaPrimeRénov&apos;, CEE et ANAH
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
              De la visite au devis signé,
              <br className="hidden sm:block" /> jusqu&apos;aux aides
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="text-surface-500 max-w-md lg:text-right">
            Le même fil conducteur que pour une grande équipe, adapté à un artisan qui veut avancer sans se noyer dans l&apos;administratif.
          </motion.p>
        </div>
        <FeatureGrid features={installerFeatures} />
      </SectionWrapper>

      <SectionWrapper className="bg-surface-100/50" stagger>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-4">
          <motion.div variants={fadeUp}>
            <Badge variant="accent" className="mb-4">Parcours installateur</Badge>
            <h2 className="text-3xl font-bold text-[#194296] sm:text-4xl">
              Cinq étapes pour garder la tête sur la pose
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="text-surface-500 max-w-md lg:text-right">
            Certipac remplace le « système D » par un chemin clair : moins de stress, moins d&apos;oublis.
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
          {installerSteps.map((step) => {
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
            <Badge className="mb-4">Vous posez, on structure</Badge>
            <h3 className="text-2xl font-bold text-[#194296]">
              L&apos;administratif sans monter un bureau dédié
            </h3>
            <p className="mt-4 text-surface-600 leading-relaxed">
              Devis, signatures, pièces attendues par les organismes et jalons de conformité : tout est
              enchaîné dans Certipac pour que vous ne couriez plus après les mails et les PDF au dernier moment.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-[#194296]/10 bg-white p-6 shadow-soft"
          >
            <Badge variant="accent" className="mb-4">Aides & partenariats</Badge>
            <h3 className="text-2xl font-bold text-[#194296]">
              Subventions lisibles, partenaires dans le même cadre
            </h3>
            <p className="mt-4 text-surface-600 leading-relaxed">
              Le calcul des aides et le suivi des primes restent compréhensibles pour un petit atelier. Si vous
              travaillez avec un fournisseur ou un partenaire, tout le monde s&apos;appuie sur les mêmes dossiers à jour.
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
            <h2 className="text-3xl font-bold text-[#194296] sm:text-4xl">Ils posent, Certipac cadre</h2>
          </motion.div>
          <motion.p variants={fadeUp} className="text-surface-500 max-w-md lg:text-right">
            Artisans indépendants et installateurs : retours sur simplicité et dossiers conformes.
          </motion.p>
        </div>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {installerTestimonials.map((t, i) => (
            <TestimonialCard key={t.name} {...t} featured={i === 0} />
          ))}
        </motion.div>
      </SectionWrapper>

      <SectionWrapper stagger>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-4">
          <motion.div variants={fadeUp}>
            <Badge variant="amber" className="mb-4">Tarifs</Badge>
            <h2 className="text-3xl font-bold text-[#194296] sm:text-4xl">Un prix adapté à l&apos;artisan</h2>
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
        title="Prêt à poser sans la paperasse ?"
        description="Essai gratuit 1 mois. Devis, signatures, relances, conformité et suivi des aides : tout ce qui n'est pas la pose, Certipac vous le structure."
      />
    </PageWrapper>
  )
}
