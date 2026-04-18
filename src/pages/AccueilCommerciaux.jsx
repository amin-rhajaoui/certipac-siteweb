import { CheckCircle, UserCheck, Ruler, FileText, PenTool, FolderCheck } from 'lucide-react'
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
  { value: 2500, suffix: '+', label: 'Entreprises accompagnées', reference: 'Indicateur · A' },
  { value: 50000, suffix: '+', label: 'Dossiers transmis aux poseurs', reference: 'Indicateur · B' },
  { value: 98, suffix: '%', label: 'Dossiers acceptés', reference: 'Indicateur · C' },
  { value: 5, suffix: 'x', label: 'Signatures au 1er rendez-vous', reference: 'Indicateur · D' },
]

const valueProps = [
  { title: "Éligibilité client qualifiée", body: "Logement, foyer, dispositifs d'État et aides locales vérifiés en amont." },
  { title: 'Dimensionnement défendable', body: 'Base technique cohérente, prête à présenter en rendez-vous.' },
  { title: 'Devis complet dès le 1er RDV', body: "Aides CEE, MaPrimeRénov' et locales + reste à charge clair." },
  { title: 'Marketplace poseurs RGE', body: "Transmission à un partenaire ou au réseau Certipac." },
]

const commercialSteps = [
  {
    number: 1, icon: UserCheck, title: 'Éligibilité & aides',
    description: "Vérification logement, foyer, dispositifs d'État et aides locales. Arguments clairs avant même le chiffrage.",
    result: 'Qualification rapide des dossiers pertinents.',
  },
  {
    number: 2, icon: Ruler, title: 'Dimensionnement efficace',
    description: 'Puissance et périmètre technique cohérents avec le site — base solide pour le futur installateur RGE.',
    result: 'Faisabilité technique sécurisée.',
  },
  {
    number: 3, icon: FileText, title: 'Devis prêt à signer',
    description: 'Dossier commercial complet : prestation, aides, reste à charge, rappels réglementaires.',
    result: 'Offre claire au premier rendez-vous.',
  },
  {
    number: 4, icon: PenTool, title: 'Signature au 1er RDV',
    description: 'Signature électronique légale sur place ou à distance. Engagement sans attente.',
    result: 'Opportunités transformées plus vite.',
  },
  {
    number: 5, icon: FolderCheck, title: 'Remise au poseur RGE',
    description: 'Transmission à un poseur certifié (partenaire ou marketplace). Récupération automatique des CERFA.',
    result: 'Conformité administrative clôturée.',
  },
]

const commercialFeatures = [features[6], features[0], features[1], features[2], features[3], features[4]]
const commercialTestimonials = [testimonials[6], testimonials[7], testimonials[3]]

export default function AccueilCommerciaux() {
  return (
    <PageWrapper>
      <SEOHead
        title="Commerciaux PAC"
        description="Certipac pour les commerciaux PAC : éligibilité, devis signés, transmission à des poseurs RGE via partenaire ou marketplace, récupération des CERFA pour la conformité."
      />

      <Breadcrumb
        items={[
          { label: 'Accueil', path: '/' },
          { label: 'Pour qui', path: '/' },
          { label: 'Commerciaux PAC' },
        ]}
      />

      <HeroSection
        eyebrow="Persona · 02 — Commerciaux PAC"
        reference="CTP-PERSONA-02"
        title="Vendez le changement de PAC"
        highlight="avec des dossiers déjà prêts"
        description="Essai gratuit 1 mois. Certipac qualifie le client et les dispositifs (MaPrimeRénov', CEE, aides locales), s'appuie sur des références produits éligibles synchronisées avec la base Atita, dimensionne proprement, produit un devis convaincant avec toutes les aides, permet la signature au premier rendez-vous, puis transmet à un poseur certifié RGE — partenaire ou marketplace."
        primaryCTA={{ label: CTA_TEXT.primary, href: APP_URL }}
        secondaryCTA={{ label: 'Comment ça marche', to: '/comment-ca-marche' }}
        metadata={[
          { label: 'Audience', value: 'Équipe commerciale' },
          { label: 'Base produits', value: 'Atita · Temps réel' },
          { label: 'Signature', value: 'Électronique · eIDAS' },
          { label: 'Poseurs', value: 'Réseau RGE certifié' },
        ]}
      >
        <DashboardMockup />
      </HeroSection>

      <PartenairesStrip />

      <SectionWrapper tone="white">
        <SectionHeader
          number="01 — Engagement commercial"
          eyebrow="Promesses opposables"
          title="Quatre garanties pour la force de vente."
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

      <SectionWrapper tone="gray">
        <SectionHeader
          number="02 — Fonctionnalités commerciales"
          eyebrow="Arsenal de vente"
          title="Les bonnes briques pour convaincre et livrer."
          lede="De la collecte d'informations au devis signé, les mêmes briques que vos équipes techniques, présentées pour convaincre."
        />
        <div className="mt-12">
          <FeatureGrid features={commercialFeatures} />
        </div>
      </SectionWrapper>

      <SectionWrapper tone="white">
        <SectionHeader
          number="03 — Parcours commercial"
          eyebrow="De l'éligibilité au poseur"
          title="Cinq étapes pour signer plus vite."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-[#E0E0E0]">
          {commercialSteps.map((step) => {
            const Icon = step.icon
            return (
              <article key={step.number} className="bg-white p-5 border-t-[3px] border-[#43AA43]">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#2A7A2A]">
                    Étape {String(step.number).padStart(2, '0')}
                  </span>
                  <Icon className="h-4 w-4 text-[#525252]" strokeWidth={1.75} />
                </div>
                <h3 className="text-[15px] font-semibold text-[#161616] mb-2 leading-[1.3]">
                  {step.title}
                </h3>
                <p className="text-[13px] leading-[1.55] text-[#525252]">{step.description}</p>
                <p className="mt-4 pt-3 border-t border-[#E0E0E0] font-mono text-[11px] uppercase tracking-[0.06em] text-[#194296]">
                  → {step.result}
                </p>
              </article>
            )
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#E0E0E0]">
          <div className="bg-white p-6 sm:p-8 border-l-[3px] border-[#194296]">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#194296] mb-3">
              Marketplace poseurs
            </p>
            <h3 className="text-[20px] font-bold text-[#161616] mb-3 leading-[1.25]">
              Pas de partenaire poseur ? Nous vous mettons en relation.
            </h3>
            <p className="text-[14px] leading-[1.65] text-[#525252]">
              Accédez à des poseurs certifiés RGE disponibles via la marketplace Certipac, avec un
              fonctionnement simple et un forfait transparent.
            </p>
          </div>
          <div className="bg-white p-6 sm:p-8 border-l-[3px] border-[#43AA43]">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#2A7A2A] mb-3">
              Après la pose
            </p>
            <h3 className="text-[20px] font-bold text-[#161616] mb-3 leading-[1.25]">
              Dossier final et CERFA récupérés automatiquement.
            </h3>
            <p className="text-[14px] leading-[1.65] text-[#525252]">
              Une fois l'installation terminée, vous recevez les documents de fin de chantier et
              les CERFA nécessaires pour clôturer la conformité administrative du dossier.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="white">
        <SectionHeader
          number="04 — Indicateurs"
          eyebrow="Performance commerciale"
          title="Des chiffres opposables."
        />
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="gray">
        <SectionHeader
          number="05 — Témoignages"
          eyebrow="Retours force de vente"
          title="Ils accélèrent la signature."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {commercialTestimonials.map((t, i) => (
            <TestimonialCard
              key={t.name}
              {...t}
              featured={i === 0}
              reference={`TÉMOIGNAGE · ${String(i + 1).padStart(2, '0')}`}
            />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="white">
        <SectionHeader
          number="06 — Tarification"
          eyebrow="Engagement commercial"
          title="Un prix adapté à votre force de vente."
          lede="Essai gratuit 1 mois, sans engagement, sans carte bancaire."
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
        title="Prêt à signer plus d'affaires PAC ?"
        description="Éligibilité, dimensionnement, devis, transmission au poseur RGE et CERFA de conformité — tout depuis Certipac."
      />
    </PageWrapper>
  )
}
