import { CheckCircle, ClipboardCheck, FileText, Bell, FolderCheck, Handshake } from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import SectionWrapper from '@/components/sections/SectionWrapper'
import SectionHeader from '@/components/sections/SectionHeader'
import FeatureGrid from '@/components/sections/FeatureGrid'
import StatCounter from '@/components/sections/StatCounter'
import TestimonialCard from '@/components/sections/TestimonialCard'
import PricingCard from '@/components/sections/PricingCard'
import CTASection from '@/components/sections/CTASection'
import DashboardMockup from '@/components/sections/DashboardMockup'
import PartenairesStrip from '@/components/sections/PartenairesStrip'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { features } from '@/data/features'
import { plans } from '@/data/pricing'
import { testimonials } from '@/data/testimonials'
import { CTA_TEXT, APP_URL } from '@/lib/constants'

const stats = [
  { value: 2500, suffix: '+', label: 'Artisans RGE accompagnés', reference: 'Indicateur · A' },
  { value: 50000, suffix: '+', label: 'PAC installées conformes', reference: 'Indicateur · B' },
  { value: 98, suffix: '%', label: 'Dossiers acceptés au dépôt', reference: 'Indicateur · C' },
  { value: 5, suffix: 'x', label: 'Gain de temps administratif', reference: 'Indicateur · D' },
]

const valueProps = [
  { title: 'Aucun bureau administratif requis', body: "Devis, signatures et relances sont cadrés dans l'application." },
  { title: 'Dossiers conformes au dépôt', body: "MaPrimeRénov', CEE et ANAH guidés pour éviter les retours." },
  { title: 'Suivi des primes lisible', body: 'Sans tableur ni dossier éparpillé, avec un historique complet.' },
  { title: 'Cadre commun aux partenaires', body: 'Fournisseurs, bureaux de contrôle et mandataires sur la même base.' },
]

const installerSteps = [
  {
    number: 1, icon: ClipboardCheck, title: 'Visite & dimensionnement',
    description: "Relevés, photos, puissance à prévoir. L'application guide chaque étape, y compris en mode hors connexion.",
    result: "Moins d'improvisation, des chantiers posés dans les bonnes conditions.",
  },
  {
    number: 2, icon: FileText, title: 'Devis & signature électronique',
    description: 'Devis clair avec détail des aides et reste à charge, signature électronique légale sur place ou à distance.',
    result: 'Engagements clients plus rapides et mieux tracés.',
  },
  {
    number: 3, icon: Bell, title: 'Relances & suivi',
    description: 'Pièces manquantes, jalons dossiers, relances automatisées — rien ne se perd entre deux chantiers.',
    result: 'Moins de dossiers qui traînent après le retour de la machine.',
  },
  {
    number: 4, icon: FolderCheck, title: 'Conformité des dossiers',
    description: "MaPrimeRénov', CEE et ANAH intégrés au parcours. Vous déposez un dossier aligné avec les exigences en vigueur.",
    result: 'Moins de demandes de complément côté organismes.',
  },
  {
    number: 5, icon: Handshake, title: 'Subventions & partenariats',
    description: 'Aides, reste à charge et avancement vers le versement. Lecture simple, partagée avec vos partenaires.',
    result: 'Vision claire sur les primes sans monter un service compta.',
  },
]

const installerFeatures = [features[0], features[1], features[2], features[3], features[4], features[7]]
const installerTestimonials = [testimonials[2], testimonials[4], testimonials[0]]

export default function AccueilInstallateurs() {
  return (
    <PageWrapper>
      <SEOHead
        title="Installateurs & artisans RGE"
        description="Certipac pour les installateurs et artisans RGE : posez vos PAC, l'application gère les devis, signatures, relances et dossiers conformes ANAH, CEE et MaPrimeRénov'."
      />

      <Breadcrumb
        items={[
          { label: 'Accueil', path: '/' },
          { label: 'Pour qui', path: '/' },
          { label: 'Artisans RGE & installateurs' },
        ]}
      />

      <HeroSection
        eyebrow="Persona · 01 — Artisans RGE & installateurs"
        reference="CTP-PERSONA-01"
        title="Vous savez poser des PAC,"
        highlight="Certipac s'occupe du reste"
        description="Essai gratuit 1 mois, sans engagement. Peu de structure administrative ? Certipac vous guide : devis, signature, relances, conformité et suivi des subventions. Vous restez concentré sur la pose et la qualité d'installation ; la plateforme présente des dossiers propres aux organismes et garde une lecture simple sur les aides."
        primaryCTA={{ label: CTA_TEXT.primary, href: APP_URL }}
        secondaryCTA={{ label: 'Comment ça marche', to: '/comment-ca-marche' }}
        metadata={[
          { label: 'Audience', value: 'Artisan RGE · Indépendant' },
          { label: 'Terminaux', value: 'Mobile · Tablette · Web' },
          { label: 'Mode', value: 'En ligne et hors connexion' },
          { label: 'Support', value: 'Email · Chat' },
        ]}
      >
        <DashboardMockup />
      </HeroSection>

      <PartenairesStrip />

      {/* Value propositions */}
      <SectionWrapper tone="white">
        <SectionHeader
          number="01 — Engagement produit"
          eyebrow="Promesses opposables"
          title="Quatre engagements pour l'artisan."
        />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E0E0E0]">
          {valueProps.map((p, i) => (
            <div key={p.title} className="bg-white p-5 sm:p-6 flex items-start gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#525252] pt-0.5">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle className="h-4 w-4 text-[#43AA43] shrink-0" strokeWidth={2.5} />
                  <h3 className="text-[15px] font-semibold text-[#161616]">{p.title}</h3>
                </div>
                <p className="text-[13.5px] leading-[1.6] text-[#525252]">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Features */}
      <SectionWrapper tone="gray">
        <SectionHeader
          number="02 — Fonctionnalités installateur"
          eyebrow="Capacités terrain"
          title="De la visite au devis signé, jusqu'aux aides."
          lede="Le même fil conducteur qu'une grande équipe, adapté à un artisan qui veut avancer sans se noyer dans l'administratif."
        />
        <div className="mt-12">
          <FeatureGrid features={installerFeatures} />
        </div>
      </SectionWrapper>

      {/* Parcours */}
      <SectionWrapper tone="white">
        <SectionHeader
          number="03 — Parcours installateur"
          eyebrow="Processus opposable"
          title="Cinq étapes pour garder la tête sur la pose."
          lede="Certipac remplace le système D par un chemin clair : moins de stress, moins d'oublis, des dossiers propres."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-[#E0E0E0]">
          {installerSteps.map((step) => {
            const Icon = step.icon
            return (
              <article key={step.number} className="bg-white p-5 border-t-[3px] border-[#194296]">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#194296]">
                    Étape {String(step.number).padStart(2, '0')}
                  </span>
                  <Icon className="h-4 w-4 text-[#525252]" strokeWidth={1.75} />
                </div>
                <h3 className="text-[15px] font-semibold text-[#161616] mb-2 leading-[1.3]">
                  {step.title}
                </h3>
                <p className="text-[13px] leading-[1.55] text-[#525252]">{step.description}</p>
                <p className="mt-4 pt-3 border-t border-[#E0E0E0] font-mono text-[11px] uppercase tracking-[0.06em] text-[#2A7A2A]">
                  → {step.result}
                </p>
              </article>
            )
          })}
        </div>
      </SectionWrapper>

      {/* Benefits double card */}
      <SectionWrapper tone="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#E0E0E0]">
          <div className="bg-white p-6 sm:p-8 border-l-[3px] border-[#194296]">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#194296] mb-3">
              Vous posez, nous structurons
            </p>
            <h3 className="text-[20px] font-bold text-[#161616] mb-3 leading-[1.25]">
              L'administratif sans monter un bureau dédié.
            </h3>
            <p className="text-[14px] leading-[1.65] text-[#525252]">
              Devis, signatures, pièces attendues par les organismes et jalons de conformité : tout
              est enchaîné dans Certipac pour que vous ne couriez plus après les mails et les PDF
              au dernier moment.
            </p>
          </div>
          <div className="bg-white p-6 sm:p-8 border-l-[3px] border-[#43AA43]">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#2A7A2A] mb-3">
              Aides & partenariats
            </p>
            <h3 className="text-[20px] font-bold text-[#161616] mb-3 leading-[1.25]">
              Subventions lisibles, partenaires dans le même cadre.
            </h3>
            <p className="text-[14px] leading-[1.65] text-[#525252]">
              Le calcul des aides et le suivi des primes restent compréhensibles pour un petit
              atelier. Si vous travaillez avec un fournisseur ou un partenaire, tout le monde
              s'appuie sur les mêmes dossiers à jour.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Stats */}
      <SectionWrapper tone="white">
        <SectionHeader
          number="04 — Indicateurs"
          eyebrow="Mesure de performance"
          title="Des chiffres opposables."
        />
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper tone="gray">
        <SectionHeader
          number="05 — Témoignages"
          eyebrow="Retours terrain"
          title="Ils posent, Certipac cadre."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {installerTestimonials.map((t, i) => (
            <TestimonialCard
              key={t.name}
              {...t}
              featured={i === 0}
              reference={`TÉMOIGNAGE · ${String(i + 1).padStart(2, '0')}`}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Tarifs */}
      <SectionWrapper tone="white">
        <SectionHeader
          number="06 — Tarification"
          eyebrow="Engagement commercial"
          title="Un prix adapté à l'artisan."
          lede="Essai gratuit 1 mois. Sans engagement, sans carte bancaire."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {plans.map((plan, i) => (
            <PricingCard
              key={plan.name}
              {...plan}
              reference={`Formule · ${String(i + 1).padStart(2, '0')}`}
            />
          ))}
        </div>
      </SectionWrapper>

      <CTASection
        title="Prêt à poser sans la paperasse ?"
        description="Essai gratuit 1 mois. Devis, signatures, relances, conformité et suivi des aides — tout ce qui n'est pas la pose, Certipac vous le structure."
      />
    </PageWrapper>
  )
}
