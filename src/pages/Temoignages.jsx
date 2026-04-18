import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import SectionWrapper from '@/components/sections/SectionWrapper'
import SectionHeader from '@/components/sections/SectionHeader'
import TestimonialCard from '@/components/sections/TestimonialCard'
import CTASection from '@/components/sections/CTASection'
import StatCounter from '@/components/sections/StatCounter'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { testimonials } from '@/data/testimonials'

const stats = [
  { value: 2500, suffix: '+', label: 'Entreprises accompagnées', reference: 'Indicateur · A' },
  { value: 98, suffix: '%', label: 'Dossiers acceptés au dépôt', reference: 'Indicateur · B' },
  { value: 4.8, suffix: '/5', label: 'Satisfaction moyenne', reference: 'Indicateur · C' },
  { value: 92, suffix: '%', label: 'Recommandation produit', reference: 'Indicateur · D' },
]

export default function Temoignages() {
  return (
    <PageWrapper>
      <SEOHead
        title="Témoignages"
        description="Retours d'usage des artisans, commerciaux et entreprises qui utilisent Certipac pour sécuriser leurs dossiers PAC et aligner leurs équipes."
      />

      <Breadcrumb
        items={[
          { label: 'Accueil', path: '/' },
          { label: 'Témoignages' },
        ]}
      />

      <HeroSection
        eyebrow="Ressources · Témoignages"
        reference="CTP-TEMOIN-2026"
        title="Les retours des utilisateurs,"
        highlight="tels quels"
        description="Les témoignages ci-dessous sont recueillis auprès des artisans RGE, des commerciaux PAC et des directions d'entreprise qui utilisent Certipac au quotidien. Chaque référence est traçable dans nos registres internes."
        metadata={[
          { label: 'Références', value: `${testimonials.length} usagers` },
          { label: 'Satisfaction', value: '4,8 / 5' },
          { label: 'Périmètre', value: 'France métropolitaine' },
          { label: 'Édition', value: '2026' },
        ]}
      />

      <SectionWrapper tone="white">
        <SectionHeader
          number="01 — Indicateurs"
          eyebrow="Mesure de satisfaction"
          title="Chiffres opposables."
        />
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="gray">
        <SectionHeader
          number="02 — Retours"
          eyebrow="Références clients"
          title="Extraits de témoignages."
          lede="Chaque retour est publié avec l'accord de l'entreprise ou de l'artisan cité."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={t.name}
              {...t}
              featured={i === 0}
              reference={`TÉMOIGNAGE · ${String(i + 1).padStart(2, '0')}`}
            />
          ))}
        </div>
      </SectionWrapper>

      <CTASection
        title="Envie de rejoindre le registre ?"
        description="Essai gratuit 1 mois. Les nouveaux utilisateurs Certipac rejoignent la base de références après 90 jours d'usage."
      />
    </PageWrapper>
  )
}
