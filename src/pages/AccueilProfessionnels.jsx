import { CheckCircle, UserCheck, FileText, Users, Wrench, FolderCheck, Banknote } from 'lucide-react'
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
  { value: 2500, suffix: '+', label: 'Entreprises industrialisées', reference: 'Indicateur · A' },
  { value: 50000, suffix: '+', label: 'PAC installées conformes', reference: 'Indicateur · B' },
  { value: 98, suffix: '%', label: 'Dossiers acceptés au dépôt', reference: 'Indicateur · C' },
  { value: 5, suffix: 'x', label: 'Réduction du temps de traitement', reference: 'Indicateur · D' },
]

const valueProps = [
  { title: "Dossiers limitant les retours ANAH, CEE, MPR", body: 'Pièces attendues imposées dès la collecte.' },
  { title: 'Parcours guidés anti-champs libres', body: 'Structuration obligatoire des informations commerciales.' },
  { title: 'Équipes alignées sur un cadre unique', body: 'Commercial, pose, technique, SAV, mise en service.' },
  { title: "Pilotage multi-partenaires jusqu'aux aides", body: "Vision financière alignée sur les dossiers réels." },
]

const enterpriseSteps = [
  {
    number: 1, icon: UserCheck, title: 'Qualification & prospection',
    description: 'Parcours imposant les bonnes informations au bon moment, tout en capitalisant sur votre expertise produit.',
    result: "Moins d'opportunités perdues pour dossier incomplet.",
  },
  {
    number: 2, icon: FileText, title: 'Dossier commercial & technique',
    description: 'Flux guidé pour le commercial, dossier prêt à présenter pour le poseur. Les pièces sont déjà attachées.',
    result: "Fin des allers-retours pour pièces manquantes.",
  },
  {
    number: 3, icon: Users, title: 'Multi-partenaires & rôles',
    description: 'Poseurs internes, sous-traitants RGE, partenaires financeurs — droits et livrables clairs pour chaque acteur.',
    result: 'Vision partagée, sans doublons ni zones grises.',
  },
  {
    number: 4, icon: Wrench, title: 'Pose, SAV & mise en service',
    description: 'Les équipes terrain et SAV alimentent les étapes attendues pour la conformité et la clôture du chantier.',
    result: 'Traçabilité exploitable jusqu\'au dossier final.',
  },
  {
    number: 5, icon: FolderCheck, title: 'Conformité administrative',
    description: "Les exigences ANAH, CEE et MaPrimeRénov' sont intégrées aux parcours — dossiers cohérents avec les fiches en vigueur.",
    result: 'Moins de demandes de complément côté organismes.',
  },
  {
    number: 6, icon: Banknote, title: 'Valorisation & encaissement',
    description: 'Suivi des primes et des versements depuis le pilotage. Cadre administratif stabilisé, expertise sur le terrain.',
    result: 'Vision financière alignée sur les dossiers réels.',
  },
]

const enterpriseFeatures = [features[5], features[6], features[3], features[4], features[9], features[7]]
const enterpriseTestimonials = [testimonials[3], testimonials[6], testimonials[5]]

export default function AccueilProfessionnels() {
  return (
    <PageWrapper>
      <SEOHead
        title="Entreprises & professionnels"
        description="Certipac pour les entreprises PAC : commercial, pose, technique, SAV et mise en service sur une même plateforme. Dossiers conformes ANAH, CEE et MaPrimeRénov', multi-partenaires."
      />

      <Breadcrumb
        items={[
          { label: 'Accueil', path: '/' },
          { label: 'Pour qui', path: '/' },
          { label: 'Entreprises & professionnels' },
        ]}
      />

      <HeroSection
        eyebrow="Persona · 03 — Entreprises & professionnels"
        reference="CTP-PERSONA-03"
        title="Votre expertise métier,"
        highlight="notre cadre conforme"
        description="Essai gratuit 1 mois. Certipac structure toute l'entreprise — commercial, pose, technique, SAV, mise en service — pour livrer des dossiers PAC complets, limiter les retours ANAH / CEE / MaPrimeRénov' et gagner du temps sur la conformité. De la prospection à l'encaissement des aides, un partenaire logiciel pour vous concentrer sur votre savoir-faire."
        primaryCTA={{ label: CTA_TEXT.primary, href: APP_URL }}
        secondaryCTA={{ label: 'Consulter la conformité', to: '/conformite' }}
        metadata={[
          { label: 'Audience', value: 'Entreprise · Multi-équipes' },
          { label: 'Périmètre', value: 'Commercial → SAV' },
          { label: 'Intégrations', value: 'API · SSO · Exports' },
          { label: 'Support', value: 'Dédié · SLA' },
        ]}
      >
        <DashboardMockup />
      </HeroSection>

      <PartenairesStrip />

      <SectionWrapper tone="white">
        <SectionHeader
          number="01 — Garanties structurelles"
          eyebrow="Engagements opposables"
          title="Quatre garanties pour l'entreprise."
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
          number="02 — Fonctionnalités entreprise"
          eyebrow="Socle unique multi-équipes"
          title="Les briques pour industrialiser la qualité."
          lede="Conformité, pilotage et financement des dossiers PAC : les capacités dont les structures multi-salariés ont besoin."
        />
        <div className="mt-12">
          <FeatureGrid features={enterpriseFeatures} />
        </div>
      </SectionWrapper>

      <SectionWrapper tone="white">
        <SectionHeader
          number="03 — Parcours entreprise"
          eyebrow="De la prospection à l'encaissement"
          title="Six étapes pour cadrer l'activité."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E0E0E0]">
          {enterpriseSteps.map((step) => {
            const Icon = step.icon
            return (
              <article key={step.number} className="bg-white p-5 sm:p-6 border-t-[3px] border-[#161616]">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#161616]">
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

      <SectionWrapper tone="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#E0E0E0]">
          <div className="bg-white p-6 sm:p-8 border-l-[3px] border-[#194296]">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#194296] mb-3">
              Multi-partenaires
            </p>
            <h3 className="text-[20px] font-bold text-[#161616] mb-3 leading-[1.25]">
              Plusieurs poseurs et partenaires sur la même plateforme.
            </h3>
            <p className="text-[14px] leading-[1.65] text-[#525252]">
              Déclarez vos équipes internes, vos sous-traitants RGE et vos partenaires : chacun
              accède aux bonnes informations au bon moment, sans refaire la saisie ni multiplier
              les versions de dossier.
            </p>
          </div>
          <div className="bg-white p-6 sm:p-8 border-l-[3px] border-[#43AA43]">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#2A7A2A] mb-3">
              Évolutions & exigences
            </p>
            <h3 className="text-[20px] font-bold text-[#161616] mb-3 leading-[1.25]">
              Parcours mis à jour avec les fiches et aides.
            </h3>
            <p className="text-[14px] leading-[1.65] text-[#525252]">
              Les évolutions des exigences administratives et des dispositifs sont prises en compte
              dans les parcours Certipac : vos équipes suivent l'application pour rester alignées
              sur les attentes des organismes.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="white">
        <SectionHeader
          number="04 — Indicateurs"
          eyebrow="Performance entreprise"
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
          eyebrow="Retours dirigeants"
          title="Ils structurent leur activité."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {enterpriseTestimonials.map((t, i) => (
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
          title="Un prix adapté à vos équipes."
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
        title="Prêt à industrialiser vos dossiers PAC ?"
        description="Essai gratuit 1 mois. Conformité ANAH, CEE et MaPrimeRénov', équipes alignées, multi-partenaires et suivi jusqu'aux aides."
      />
    </PageWrapper>
  )
}
