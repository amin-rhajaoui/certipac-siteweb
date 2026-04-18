import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import SectionWrapper from '@/components/sections/SectionWrapper'
import SectionHeader from '@/components/sections/SectionHeader'
import FeatureGrid from '@/components/sections/FeatureGrid'
import CTASection from '@/components/sections/CTASection'
import PartenairesStrip from '@/components/sections/PartenairesStrip'
import Breadcrumb from '@/components/ui/Breadcrumb'
import Callout from '@/components/ui/Callout'
import { features, featureCategories } from '@/data/features'
import { CTA_TEXT, APP_URL } from '@/lib/constants'

const categoryDescriptions = {
  Terrain: 'Outils mobiles pour la visite, même hors connexion.',
  Technique: 'Calculs conformes et catalogue PAC synchronisé.',
  Commercial: 'Du devis à la signature, sans allers-retours.',
  Conformité: "Dossiers ANAH, CEE et MaPrimeRénov' au dépôt.",
  Financement: 'Toutes les aides calculées et cumulées.',
  Pilotage: 'Vision complète de l\'activité et des équipes.',
}

export default function Fonctionnalites() {
  return (
    <PageWrapper>
      <SEOHead
        title="Fonctionnalités"
        description="Catalogue des fonctionnalités Certipac : visite technique guidée, dimensionnement, devis, signature électronique, dossiers conformes ANAH, CEE et MaPrimeRénov', suivi des aides."
      />

      <Breadcrumb
        items={[
          { label: 'Accueil', path: '/' },
          { label: 'Fonctionnalités' },
        ]}
      />

      <HeroSection
        eyebrow="Dossier · Fonctionnalités"
        reference="CTP-FONCT-2026"
        title="Chaque étape du métier,"
        highlight="cadrée dans Certipac"
        description="Certipac regroupe les briques indispensables pour structurer l'activité : terrain, technique, commercial, conformité, financement et pilotage. Le même fil conducteur de la visite du logement jusqu'au versement des primes."
        primaryCTA={{ label: CTA_TEXT.primary, href: APP_URL }}
        secondaryCTA={{ label: CTA_TEXT.pricing, to: '/tarifs' }}
        metadata={[
          { label: 'Catégories', value: '6 familles' },
          { label: 'Briques', value: `${features.length} fonctions` },
          { label: 'Périmètre', value: 'Terrain → Aides' },
          { label: 'Mise à jour', value: 'Édition 2026' },
        ]}
      />

      <PartenairesStrip />

      {featureCategories.map((category, idx) => {
        const categoryFeatures = features.filter((f) => f.category === category)
        const tone = idx % 2 === 0 ? 'white' : 'gray'
        const num = String(idx + 1).padStart(2, '0')
        return (
          <SectionWrapper key={category} tone={tone}>
            <SectionHeader
              number={`${num} — ${category}`}
              eyebrow={`Famille · ${num}`}
              title={`${category}.`}
              lede={categoryDescriptions[category]}
            />
            <div className="mt-12">
              <FeatureGrid features={categoryFeatures} />
            </div>
          </SectionWrapper>
        )
      })}

      <SectionWrapper tone="white">
        <SectionHeader
          number="07 — Garantie"
          eyebrow="Engagement produit"
          title="Un socle cohérent pour toute l'activité."
        />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Callout tone="info" title="Un seul parcours, pas un empilement d'outils" reference="Art. 1">
            Les briques Certipac partagent les mêmes données : la visite alimente le devis,
            le devis nourrit le dossier, le dossier pilote les aides. Plus de doubles saisies,
            plus d'exports contradictoires entre systèmes.
          </Callout>
          <Callout tone="success" title="Mises à jour alignées sur les barèmes" reference="Art. 2">
            Les évolutions des dispositifs ANAH, CEE et MaPrimeRénov' sont intégrées aux parcours
            sans intervention de votre part. Vos dossiers restent conformes aux exigences en vigueur.
          </Callout>
        </div>
      </SectionWrapper>

      <CTASection
        title="Envie de voir les fonctionnalités en action ?"
        description="Essai gratuit 1 mois, sans engagement. Toutes les briques Certipac disponibles dès la première connexion."
      />
    </PageWrapper>
  )
}
