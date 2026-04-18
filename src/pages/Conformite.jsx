import { Shield, RefreshCw, FileCheck, AlertTriangle, CheckCircle, Lock } from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import SectionWrapper from '@/components/sections/SectionWrapper'
import SectionHeader from '@/components/sections/SectionHeader'
import FeatureGrid from '@/components/sections/FeatureGrid'
import StatCounter from '@/components/sections/StatCounter'
import CTASection from '@/components/sections/CTASection'
import PartenairesStrip from '@/components/sections/PartenairesStrip'
import ComparisonRow from '@/components/sections/ComparisonRow'
import Breadcrumb from '@/components/ui/Breadcrumb'
import Callout from '@/components/ui/Callout'
import { CTA_TEXT, APP_URL } from '@/lib/constants'

const conformiteFeatures = [
  {
    icon: Shield,
    title: 'Dimensionnement défendable',
    description: "Puissance PAC calculée selon zone climatique, surface et isolation. Base technique cohérente pour chaque dossier.",
    category: 'Technique',
  },
  {
    icon: RefreshCw,
    title: 'Barèmes alignés sur les textes',
    description: "Fiches CEE, barèmes MaPrimeRénov' et exigences ANAH intégrés au fil des publications officielles.",
    category: 'Réglementaire',
  },
  {
    icon: FileCheck,
    title: 'Vérification du dossier',
    description: "Pièces attendues, erreurs de saisie et incohérences signalées avant dépôt. Fin des envois prématurés.",
    category: 'Contrôle',
  },
  {
    icon: AlertTriangle,
    title: 'Alertes sur évolutions',
    description: "Notification des évolutions réglementaires qui impactent les dossiers en cours ou planifiés.",
    category: 'Veille',
  },
  {
    icon: CheckCircle,
    title: 'Dossiers acceptés',
    description: "Objectif maintenu : 98 % des dossiers générés par Certipac sont acceptés au premier dépôt.",
    category: 'Performance',
  },
  {
    icon: Lock,
    title: 'Traçabilité complète',
    description: "Horodatage, historique, signature électronique et piste d'audit pour chaque dossier et chaque chantier.",
    category: 'Audit',
  },
]

const comparisonItems = [
  {
    context: 'Calcul de puissance',
    reference: 'Art. · 01',
    good: 'Dimensionnement cadré, défendable face au maître d\'ouvrage et aux organismes.',
    bad: 'Règle de trois approximative, surdimensionnement, sous-performance.',
  },
  {
    context: "Dépôt MaPrimeRénov'",
    reference: 'Art. · 02',
    good: 'Pièces listées par le parcours, CERFA pré-remplis, justificatifs joints.',
    bad: 'Pièces manquantes à l\'envoi, demandes de complément de l\'ANAH.',
  },
  {
    context: 'Attestations CEE',
    reference: 'Art. · 03',
    good: 'Fiche d\'opération en vigueur, calcul des kWh cumac, attestations conformes.',
    bad: 'Ancienne fiche utilisée par défaut, calcul à refaire, prime réduite.',
  },
  {
    context: 'Conservation',
    reference: 'Art. · 04',
    good: 'Archivage horodaté, piste d\'audit disponible en cas de contrôle.',
    bad: 'PDF locaux, disparition des fichiers au changement de poste.',
  },
]

const regulatoryRefs = [
  {
    code: 'ANAH',
    title: "MaPrimeRénov'",
    description: "Aide principale de l'État. Barème par ressources et par gain énergétique.",
  },
  {
    code: 'CEE',
    title: "Certificats d'Économies d'Énergie",
    description: "Primes financées par les fournisseurs d'énergie via fiches d'opération standardisées.",
  },
  {
    code: 'RGE',
    title: 'Qualification RGE',
    description: "Mention Reconnu Garant de l'Environnement requise pour l'éligibilité des aides.",
  },
  {
    code: 'Éco-PTZ',
    title: 'Éco-prêt à taux zéro',
    description: "Prêt sans intérêt pour financer le reste à charge client.",
  },
]

const stats = [
  { value: 98, suffix: '%', label: 'Dossiers acceptés au dépôt', reference: 'Indicateur · A' },
  { value: 50000, suffix: '+', label: 'PAC installées conformes', reference: 'Indicateur · B' },
  { value: 100, suffix: '%', label: 'Dossiers horodatés', reference: 'Indicateur · C' },
  { value: 0, suffix: '', label: 'Fichier hors piste d\'audit', reference: 'Indicateur · D' },
]

export default function Conformite() {
  return (
    <PageWrapper>
      <SEOHead
        title="Conformité réglementaire"
        description="La conformité documentaire chez Certipac : exigences ANAH, CEE et MaPrimeRénov' intégrées au parcours, dossiers traçables et dépôts acceptés du premier coup."
      />

      <Breadcrumb
        items={[
          { label: 'Accueil', path: '/' },
          { label: 'Conformité' },
        ]}
      />

      <HeroSection
        eyebrow="Dossier · Conformité"
        reference="CTP-CONF-2026"
        title="La conformité du dossier,"
        highlight="intégrée au parcours"
        description="Certipac traduit les exigences ANAH, CEE et MaPrimeRénov' en parcours concrets : pièces attendues, barèmes en vigueur, justificatifs archivés. Les dossiers sont présentés avec ce que les organismes attendent — pas un PDF improvisé en fin de chantier."
        primaryCTA={{ label: CTA_TEXT.primary, href: APP_URL }}
        secondaryCTA={{ label: 'Consulter les aides', to: '/financement' }}
        metadata={[
          { label: 'Cadres intégrés', value: "ANAH · CEE · MPR'" },
          { label: 'Qualification', value: 'RGE requis' },
          { label: 'Traçabilité', value: 'Horodatée · Auditable' },
          { label: 'Mise à jour', value: 'En continu' },
        ]}
      />

      <PartenairesStrip />

      <SectionWrapper tone="white">
        <SectionHeader
          number="01 — Cadre réglementaire"
          eyebrow="Textes et dispositifs"
          title="Quatre cadres opposables."
          lede="Les dispositifs mobilisés par Certipac pour les dossiers de rénovation énergétique."
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E0E0E0]">
          {regulatoryRefs.map((ref, i) => (
            <article
              key={ref.code}
              className="bg-white p-5 sm:p-6 border-t-[3px] border-[#194296]"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#194296]">
                  Cadre · {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#6F6F6F]">
                  {ref.code}
                </span>
              </div>
              <h3 className="text-[15px] font-semibold text-[#161616] mb-2 leading-[1.3]">
                {ref.title}
              </h3>
              <p className="text-[13px] leading-[1.55] text-[#525252]">{ref.description}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="gray">
        <SectionHeader
          number="02 — Garanties"
          eyebrow="Engagements conformité"
          title="Six garanties documentaires."
          lede="Ce que le produit impose pour que le dossier tienne devant les organismes."
        />
        <div className="mt-12">
          <FeatureGrid features={conformiteFeatures} />
        </div>
      </SectionWrapper>

      <SectionWrapper tone="white">
        <SectionHeader
          number="03 — À faire, à éviter"
          eyebrow="Bonnes pratiques imposées"
          title="Ce que Certipac rend impossible à oublier."
        />
        <div className="mt-12 space-y-px bg-[#E0E0E0]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-[#E0E0E0]">
            <div className="bg-[#161616] text-white md:col-span-3 p-3 font-mono text-[10px] uppercase tracking-[0.12em]">
              Situation
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

      <SectionWrapper tone="gray">
        <SectionHeader
          number="04 — Indicateurs"
          eyebrow="Performance conformité"
          title="Chiffres opposables."
        />
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Callout tone="info" title="RGPD et hébergement France" reference="Art. 1">
            Les données sont hébergées en France, chiffrées en transit et au repos. Certipac
            applique les obligations RGPD, tient un registre des traitements et fournit les
            exports de données à la demande du responsable de traitement.
          </Callout>
          <Callout tone="success" title="Signature électronique opposable" reference="Art. 2">
            Les signatures produites par Certipac sont horodatées et conformes au règlement
            eIDAS. Chaque document signé est archivé avec sa preuve d'identité et sa piste
            technique.
          </Callout>
        </div>
      </SectionWrapper>

      <CTASection
        title="Prêt à déposer sans retour ?"
        description="Essai gratuit 1 mois. Exigences ANAH, CEE et MaPrimeRénov' intégrées au parcours."
      />
    </PageWrapper>
  )
}
