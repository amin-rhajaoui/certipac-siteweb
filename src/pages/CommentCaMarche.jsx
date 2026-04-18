import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import SectionWrapper from '@/components/sections/SectionWrapper'
import SectionHeader from '@/components/sections/SectionHeader'
import CTASection from '@/components/sections/CTASection'
import StatCounter from '@/components/sections/StatCounter'
import PartenairesStrip from '@/components/sections/PartenairesStrip'
import ComparisonRow from '@/components/sections/ComparisonRow'
import Breadcrumb from '@/components/ui/Breadcrumb'
import Callout from '@/components/ui/Callout'
import { steps } from '@/data/steps'
import { CTA_TEXT, APP_URL } from '@/lib/constants'

const comparisonItems = [
  {
    context: 'Visite technique',
    reference: 'Réf · 01',
    good: "Relevés structurés dans l'app mobile, photos horodatées, exigences terrain imposées.",
    bad: 'Bloc-notes papier, photos éparpillées, informations manquantes au retour.',
  },
  {
    context: 'Devis',
    reference: 'Réf · 02',
    good: 'Aides calculées, reste à charge affiché, signature électronique légale.',
    bad: 'Modèle Word approximatif, aides à recalculer, relance pour signer.',
  },
  {
    context: 'Dossier administratif',
    reference: 'Réf · 03',
    good: "Pièces attendues pré-remplies, exigences ANAH et CEE intégrées au parcours.",
    bad: 'Recherche au dernier moment, pièces manquantes, retours des organismes.',
  },
  {
    context: 'Suivi des aides',
    reference: 'Réf · 04',
    good: 'État des primes lisible, versements tracés, relances automatisées.',
    bad: 'Tableur maison, statuts oubliés, dossiers qui traînent.',
  },
]

const stats = [
  { value: 98, suffix: '%', label: 'Dossiers acceptés au 1er dépôt', reference: 'Indicateur · A' },
  { value: 2, suffix: 'h', label: 'Gagnées par chantier', reference: 'Indicateur · B' },
  { value: 5, suffix: 'x', label: 'Plus de signatures au 1er RDV', reference: 'Indicateur · C' },
  { value: 30, suffix: '%', label: 'Reste à charge en moyenne', reference: 'Indicateur · D' },
]

export default function CommentCaMarche() {
  return (
    <PageWrapper>
      <SEOHead
        title="Comment ça marche"
        description="Le parcours Certipac en 5 étapes : visite technique, dimensionnement, devis signé, dossier conforme et suivi des aides — de la première visite au versement des primes."
      />

      <Breadcrumb
        items={[
          { label: 'Accueil', path: '/' },
          { label: 'Comment ça marche' },
        ]}
      />

      <HeroSection
        eyebrow="Processus opposable"
        reference="CTP-PARCOURS-2026"
        title="De la visite au versement,"
        highlight="un parcours cadré"
        description="Certipac remplace le système D par un chemin clair en cinq étapes : visite, dimensionnement, devis signé, dossier conforme, primes. Aucun des jalons administratifs n'est laissé à l'improvisation."
        primaryCTA={{ label: CTA_TEXT.primary, href: APP_URL }}
        secondaryCTA={{ label: CTA_TEXT.pricing, to: '/tarifs' }}
        metadata={[
          { label: 'Étapes', value: '5 jalons' },
          { label: 'Périmètre', value: 'Visite → Primes' },
          { label: 'Support', value: 'Mobile · Web' },
          { label: 'Mode', value: 'Hors-ligne possible' },
        ]}
      />

      <PartenairesStrip />

      <SectionWrapper tone="white">
        <SectionHeader
          number="01 — Parcours"
          eyebrow="Les 5 étapes"
          title="Chaque étape est guidée."
          lede="Certipac impose les bons gestes au bon moment pour éviter les oublis et les retours administratifs."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-[#E0E0E0]">
          {steps.map((step) => {
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
              </article>
            )
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="gray">
        <SectionHeader
          number="02 — Cadre"
          eyebrow="À faire · À éviter"
          title="Ce que Certipac impose, ce qu'il prévient."
          lede="Le produit est construit pour fermer les portes aux mauvaises pratiques, pas pour laisser le choix."
        />
        <div className="mt-12 space-y-px bg-[#E0E0E0]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-[#E0E0E0]">
            <div className="bg-[#161616] text-white md:col-span-3 p-3 font-mono text-[10px] uppercase tracking-[0.12em]">
              Contexte
            </div>
            <div className="bg-[#161616] text-white md:col-span-4 md:col-start-4 p-3 font-mono text-[10px] uppercase tracking-[0.12em]">
              À faire
            </div>
            <div className="bg-[#161616] text-white md:col-span-5 p-3 font-mono text-[10px] uppercase tracking-[0.12em]">
              À éviter
            </div>
          </div>
          {comparisonItems.map((item) => (
            <ComparisonRow key={item.context} {...item} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="white">
        <SectionHeader
          number="03 — Résultats"
          eyebrow="Effets mesurés"
          title="Ce que le parcours produit."
          lede="Des jalons clairs, des dossiers présentables, des primes qui arrivent."
        />
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Callout tone="info" title="Mobile, avec ou sans réseau" reference="Art. 1">
            L'app Certipac fonctionne hors connexion pour la visite technique. Les données se
            synchronisent automatiquement dès que le terminal retrouve du réseau. Aucune saisie
            perdue entre deux chantiers.
          </Callout>
          <Callout tone="success" title="Traçabilité de bout en bout" reference="Art. 2">
            Chaque étape laisse une trace horodatée, les pièces sont archivées, la signature est
            opposable. Vos dossiers sont prêts à présenter si un organisme demande un justificatif.
          </Callout>
        </div>
      </SectionWrapper>

      <CTASection
        title="Prêt à suivre le parcours Certipac ?"
        description="Essai gratuit 1 mois. De la première visite au versement des aides, tout est cadré."
      />
    </PageWrapper>
  )
}
