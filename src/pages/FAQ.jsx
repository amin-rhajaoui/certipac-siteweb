import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import SectionWrapper from '@/components/sections/SectionWrapper'
import SectionHeader from '@/components/sections/SectionHeader'
import CTASection from '@/components/sections/CTASection'
import Accordion from '@/components/ui/Accordion'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { faqCategories } from '@/data/faq'

export default function FAQ() {
  const totalQuestions = faqCategories.reduce((acc, c) => acc + c.items.length, 0)

  return (
    <PageWrapper>
      <SEOHead
        title="FAQ — Questions fréquentes"
        description="Réponses institutionnelles aux questions les plus fréquentes sur Certipac : périmètre produit, tarifs, conformité, signature électronique, support."
      />

      <Breadcrumb
        items={[
          { label: 'Accueil', path: '/' },
          { label: 'FAQ' },
        ]}
      />

      <HeroSection
        eyebrow="Ressources · FAQ"
        reference="CTP-FAQ-2026"
        title="Les questions fréquentes,"
        highlight="les réponses officielles"
        description="Les interrogations les plus récurrentes sur Certipac, organisées par thème. Pour toute question qui ne figure pas ici, l'équipe Certipac répond par écrit sous 2 heures en jours ouvrés."
        primaryCTA={{ label: 'Contacter Certipac', to: '/contact' }}
        metadata={[
          { label: 'Thèmes', value: `${faqCategories.length} sections` },
          { label: 'Questions', value: `${totalQuestions} traitées` },
          { label: 'Édition', value: '2026' },
          { label: 'Support', value: '< 2 h ouvrées' },
        ]}
      />

      {faqCategories.map((category, i) => (
        <SectionWrapper key={category.name} tone={i % 2 === 0 ? 'white' : 'gray'}>
          <SectionHeader
            number={`${String(i + 1).padStart(2, '0')} — ${category.name}`}
            eyebrow={`Catégorie · ${String(i + 1).padStart(2, '0')}`}
            title={`${category.name}.`}
            lede={`${category.items.length} question${category.items.length > 1 ? 's' : ''} traitée${category.items.length > 1 ? 's' : ''}.`}
          />
          <div className="mt-10 max-w-3xl">
            <Accordion items={category.items} />
          </div>
        </SectionWrapper>
      ))}

      <CTASection
        title="Votre question ne figure pas ici ?"
        description="L'équipe Certipac répond par écrit en moins de 2 heures pendant les jours ouvrés."
      />
    </PageWrapper>
  )
}
