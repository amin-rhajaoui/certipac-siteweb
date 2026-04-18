import { Euro, FileText, TrendingUp, Building2, Receipt, Calculator } from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import SectionWrapper from '@/components/sections/SectionWrapper'
import SectionHeader from '@/components/sections/SectionHeader'
import StatCounter from '@/components/sections/StatCounter'
import CTASection from '@/components/sections/CTASection'
import PartenairesStrip from '@/components/sections/PartenairesStrip'
import Breadcrumb from '@/components/ui/Breadcrumb'
import Callout from '@/components/ui/Callout'
import { CTA_TEXT, APP_URL } from '@/lib/constants'

const aides = [
  {
    icon: Euro,
    code: "ANAH",
    title: "MaPrimeRénov'",
    description: "Aide principale de l'État. Calcul selon ressources du ménage et gain énergétique. Dossier complet généré avec les pièces attendues.",
    montant: "Jusqu'à 11 000 €",
  },
  {
    icon: FileText,
    code: "CEE",
    title: "Certificats d'Économies d'Énergie",
    description: "Primes versées par les obligés via fiches d'opération standardisées. Attestations et kWh cumac calculés automatiquement.",
    montant: "Jusqu'à 5 000 €",
  },
  {
    icon: TrendingUp,
    code: "Éco-PTZ",
    title: 'Éco-prêt à taux zéro',
    description: "Prêt sans intérêt pour financer le reste à charge client. Les justificatifs nécessaires à la demande sont préparés par la plateforme.",
    montant: "Jusqu'à 50 000 €",
  },
  {
    icon: Building2,
    code: "LOCAL",
    title: 'Aides locales',
    description: "Régions, départements et communes proposent des aides complémentaires. Certipac identifie les dispositifs applicables au code postal du chantier.",
    montant: 'Variable',
  },
  {
    icon: Receipt,
    code: "TVA",
    title: 'TVA réduite à 5,5 %',
    description: "Travaux de rénovation énergétique éligibles à la TVA réduite. Le bon taux est appliqué automatiquement dans les devis.",
    montant: 'Économie directe',
  },
  {
    icon: Calculator,
    code: "CUMUL",
    title: 'Cumul des aides',
    description: "Reste à charge réel calculé en cumulant tous les dispositifs. Un chiffre défendable face au client, dès le premier rendez-vous.",
    montant: "Jusqu'à 90 % financé",
  },
]

const stats = [
  { value: 11000, suffix: ' €', label: "MaPrimeRénov' maximale", reference: 'Indicateur · A' },
  { value: 5000, suffix: ' €', label: 'Prime CEE maximale', reference: 'Indicateur · B' },
  { value: 30, suffix: '%', label: 'Conversion moyenne +30 %', reference: 'Indicateur · C' },
  { value: 90, suffix: '%', label: 'Des projets financés', reference: 'Indicateur · D' },
]

export default function Financement() {
  return (
    <PageWrapper>
      <SEOHead
        title="Financement & primes"
        description="Certipac calcule automatiquement toutes les aides PAC (MaPrimeRénov', CEE, éco-PTZ, aides locales), affiche le reste à charge et prépare les dossiers de demande."
      />

      <Breadcrumb
        items={[
          { label: 'Accueil', path: '/' },
          { label: 'Financement' },
        ]}
      />

      <HeroSection
        eyebrow="Dossier · Financement"
        reference="CTP-FIN-2026"
        title="Les aides calculées,"
        highlight="le reste à charge affiché"
        description="Certipac rassemble les dispositifs mobilisables sur un projet PAC — MaPrimeRénov', CEE, éco-PTZ, aides locales, TVA réduite — et affiche le reste à charge défendable dès le devis. Les dossiers de demande sont préparés avec les pièces attendues."
        primaryCTA={{ label: CTA_TEXT.primary, href: APP_URL }}
        secondaryCTA={{ label: 'Consulter la conformité', to: '/conformite' }}
        metadata={[
          { label: 'Dispositifs', value: '6 couverts' },
          { label: 'Mise à jour', value: 'Barèmes en vigueur' },
          { label: 'Périmètre', value: 'National + Local' },
          { label: 'Traçabilité', value: 'Pièces archivées' },
        ]}
      />

      <PartenairesStrip />

      <SectionWrapper tone="white">
        <SectionHeader
          number="01 — Dispositifs"
          eyebrow="Aides mobilisables"
          title="Six dispositifs intégrés."
          lede="Les aides et mécanismes de financement pris en charge par les parcours Certipac."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E0E0E0]">
          {aides.map((aide, i) => {
            const Icon = aide.icon
            return (
              <article key={aide.title} className="bg-white p-6 border-t-[3px] border-[#43AA43]">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#2A7A2A]">
                    Aide · {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#6F6F6F]">
                    {aide.code}
                  </span>
                </div>
                <div className="flex items-start gap-3 mb-3">
                  <Icon className="h-5 w-5 text-[#194296] shrink-0 mt-0.5" strokeWidth={1.75} />
                  <h3 className="text-[15px] font-semibold text-[#161616] leading-[1.3]">
                    {aide.title}
                  </h3>
                </div>
                <p className="text-[13px] leading-[1.55] text-[#525252]">{aide.description}</p>
                <p className="mt-4 pt-3 border-t border-[#E0E0E0] font-mono text-[11px] uppercase tracking-[0.06em] text-[#194296]">
                  → {aide.montant}
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
              Calcul cumulé
            </p>
            <h3 className="text-[20px] font-bold text-[#161616] mb-3 leading-[1.25]">
              Un reste à charge défendable dès le 1er rendez-vous.
            </h3>
            <p className="text-[14px] leading-[1.65] text-[#525252]">
              Le devis Certipac affiche le cumul des aides, le reste à charge et les conditions
              d'éligibilité. Votre client comprend immédiatement l'effort réel à fournir —
              un argument opposable au moment de signer.
            </p>
          </div>
          <div className="bg-white p-6 sm:p-8 border-l-[3px] border-[#43AA43]">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#2A7A2A] mb-3">
              Suivi des versements
            </p>
            <h3 className="text-[20px] font-bold text-[#161616] mb-3 leading-[1.25]">
              Les primes jusqu'au versement, pas seulement jusqu'au dépôt.
            </h3>
            <p className="text-[14px] leading-[1.65] text-[#525252]">
              Statuts des dossiers et relances sur les pièces manquantes, jusqu'à la réception
              effective des aides. Plus de dossiers en attente que personne ne suit dans un
              tableur.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="white">
        <SectionHeader
          number="02 — Indicateurs"
          eyebrow="Effets financiers"
          title="Chiffres opposables."
        />
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Callout tone="info" title="Barèmes alignés sur les publications officielles" reference="Art. 1">
            Les barèmes MaPrimeRénov' et les fiches CEE sont mis à jour dès leur publication
            officielle. Les dossiers en cours sont signalés si une évolution impacte leur
            calcul.
          </Callout>
          <Callout tone="success" title="Traçabilité des aides" reference="Art. 2">
            Chaque pièce justificative est archivée avec sa date de génération et son lien
            au chantier. En cas de contrôle, l'historique est opposable et exportable.
          </Callout>
        </div>
      </SectionWrapper>

      <CTASection
        title="Prêt à présenter des devis qui signent ?"
        description="Essai gratuit 1 mois. Aides calculées, reste à charge lisible, dossiers préparés."
      />
    </PageWrapper>
  )
}
