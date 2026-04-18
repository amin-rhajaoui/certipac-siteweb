import { Check, X } from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import SectionWrapper from '@/components/sections/SectionWrapper'
import SectionHeader from '@/components/sections/SectionHeader'
import PricingCard from '@/components/sections/PricingCard'
import CTASection from '@/components/sections/CTASection'
import Accordion from '@/components/ui/Accordion'
import Breadcrumb from '@/components/ui/Breadcrumb'
import Callout from '@/components/ui/Callout'
import { plans, comparisonFeatures } from '@/data/pricing'
import { faqCategories } from '@/data/faq'
import { CTA_TEXT, APP_URL } from '@/lib/constants'

const pricingFaq = faqCategories.find((c) => c.name === 'Tarifs & Essai')

const planColumns = [
  { key: 'solo', name: 'Solo' },
  { key: 'equipe', name: 'Équipe', highlighted: true },
  { key: 'entreprise', name: 'Entreprise' },
]

function Cell({ value, highlighted }) {
  const base = 'p-4 text-center text-[13.5px]'
  const bg = highlighted ? 'bg-[#F0F4FC]' : 'bg-white'
  if (value === true)
    return (
      <td className={`${base} ${bg}`}>
        <Check className="h-4 w-4 text-[#43AA43] mx-auto" strokeWidth={2.5} />
      </td>
    )
  if (value === false)
    return (
      <td className={`${base} ${bg}`}>
        <X className="h-4 w-4 text-[#A8A8A8] mx-auto" strokeWidth={2} />
      </td>
    )
  return (
    <td className={`${base} ${bg} text-[#393939]`}>
      {value}
    </td>
  )
}

export default function Tarifs() {
  return (
    <PageWrapper>
      <SEOHead
        title="Tarifs"
        description="Tarification Certipac : Solo 100€/mois, Équipe 190€/mois, Entreprise sur mesure. Essai gratuit 1 mois, sans engagement, sans carte bancaire."
      />

      <Breadcrumb
        items={[
          { label: 'Accueil', path: '/' },
          { label: 'Tarifs' },
        ]}
      />

      <HeroSection
        eyebrow="Grille tarifaire"
        reference="CTP-TARIFS-2026"
        title="Un tarif lisible,"
        highlight="un essai d'un mois"
        description="Trois formules adaptées aux artisans indépendants, aux petites équipes et aux structures multi-salariés. Essai gratuit 1 mois, sans engagement, sans carte bancaire — toutes les briques Certipac disponibles dès le premier jour."
        primaryCTA={{ label: CTA_TEXT.primary, href: APP_URL }}
        secondaryCTA={{ label: CTA_TEXT.contact, to: '/contact' }}
        metadata={[
          { label: 'Engagement', value: 'Aucun' },
          { label: 'Essai', value: '1 mois gratuit' },
          { label: 'Remise annuelle', value: '-20 %' },
          { label: 'Facturation', value: 'HT · Mensuelle' },
        ]}
      />

      <SectionWrapper tone="white">
        <SectionHeader
          number="01 — Formules"
          eyebrow="Trois niveaux d'usage"
          title="Une formule adaptée à chaque structure."
          lede="Passage d'une formule à l'autre à tout moment. Toutes les briques produit sont disponibles en Solo."
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

      <SectionWrapper tone="gray">
        <SectionHeader
          number="02 — Comparatif"
          eyebrow="Détail par formule"
          title="Ce que chaque formule inclut."
          lede="Lecture intégrale des capacités inclues, ligne par ligne."
        />
        <div className="mt-12 overflow-x-auto bg-white border border-[#E0E0E0]">
          <table className="w-full text-[13.5px]">
            <thead>
              <tr className="bg-[#161616] text-white">
                <th className="text-left p-4 font-mono text-[10px] uppercase tracking-[0.12em] font-semibold">
                  Fonctionnalité
                </th>
                {planColumns.map((col) => (
                  <th
                    key={col.key}
                    className={`p-4 text-center font-mono text-[10px] uppercase tracking-[0.12em] font-semibold ${
                      col.highlighted ? 'bg-[#194296]' : ''
                    }`}
                  >
                    {col.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((row, i) => (
                <tr key={row.name} className="border-t border-[#E0E0E0]">
                  <td className="p-4 text-[#161616] font-medium bg-white">
                    <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#525252] mr-3">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {row.name}
                  </td>
                  {planColumns.map((col) => (
                    <Cell key={col.key} value={row[col.key]} highlighted={col.highlighted} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Callout tone="info" title="Essai gratuit 1 mois, sans CB" reference="Art. 1">
            Toutes les formules sont testables sans engagement ni carte bancaire. Aucune donnée
            de facturation n'est demandée pendant la période d'essai ; les dossiers créés restent
            accessibles si vous choisissez de poursuivre.
          </Callout>
          <Callout tone="success" title="Engagement annuel : -20 %" reference="Art. 2">
            Un engagement sur 12 mois permet d'obtenir 20 % de remise sur les formules Solo et
            Équipe. La formule Entreprise fait l'objet d'une proposition tarifaire adaptée au
            volume et aux équipes concernées.
          </Callout>
        </div>
      </SectionWrapper>

      {pricingFaq && (
        <SectionWrapper tone="gray">
          <SectionHeader
            number="03 — Questions tarifaires"
            eyebrow="FAQ · Tarifs & Essai"
            title="Ce qui est précisé contractuellement."
          />
          <div className="mt-12 max-w-3xl">
            <Accordion items={pricingFaq.items} />
          </div>
        </SectionWrapper>
      )}

      <CTASection
        title="Prêt à essayer Certipac ?"
        description="Essai gratuit 1 mois. Passez d'une formule à l'autre à tout moment."
      />
    </PageWrapper>
  )
}
