import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import SectionWrapper from '@/components/sections/SectionWrapper'
import SectionHeader from '@/components/sections/SectionHeader'
import TestimonialCard from '@/components/sections/TestimonialCard'
import CTASection from '@/components/sections/CTASection'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { testimonials } from '@/data/testimonials'

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
        description="Extraits de retours d'artisans RGE, de commerciaux PAC et de directions d'entreprise. Publication sous réserve d'accord de la personne ou de l'entreprise citée."
        metadata={[
          { label: 'Références', value: `${testimonials.length} extraits` },
          { label: 'Périmètre', value: 'France métropolitaine' },
          { label: 'Publication', value: 'Avec accord' },
          { label: 'Édition', value: '2026' },
        ]}
      />

      <SectionWrapper tone="white">
        <SectionHeader
          number="01 — Retours"
          eyebrow="Références clients"
          title="Extraits de témoignages."
          lede="Chaque retour est publié avec l'accord de l'entreprise ou de l'artisan cité. Aucun indicateur de satisfaction agrégé n'est affiché tant qu'il n'est pas mesuré et sourcé."
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
        title="Demander une démonstration"
        description="Essai gratuit 1 mois. Évaluez le parcours documentaire sur vos propres dossiers."
      />
    </PageWrapper>
  )
}
