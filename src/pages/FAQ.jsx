import { motion } from 'motion/react'
import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import SectionWrapper from '@/components/sections/SectionWrapper'
import CTASection from '@/components/sections/CTASection'
import Accordion from '@/components/ui/Accordion'
import Badge from '@/components/ui/Badge'
import { fadeUp } from '@/lib/animations'
import { faqCategories } from '@/data/faq'

export default function FAQ() {
  return (
    <PageWrapper>
      <SEOHead
        title="FAQ"
        description="Toutes les réponses à vos questions sur Certipac : app mobile, dimensionnement, signature électronique, dossiers conformes, tarifs et support."
      />

      <HeroSection
        badge="FAQ"
        title="Questions"
        highlight="fréquentes"
        description="Retrouvez les réponses aux questions les plus courantes sur Certipac. Vous ne trouvez pas ce que vous cherchez ? Contactez-nous !"
        secondaryCTA={{ label: 'Nous contacter', to: '/contact' }}
      />

      {faqCategories.map((category, i) => (
        <SectionWrapper
          key={i}
          className={i % 2 === 0 ? 'bg-surface-100' : 'bg-surface-50'}
        >
          <motion.div variants={fadeUp} className="max-w-3xl mx-auto">
            <Badge className="mb-4" variant={i % 2 === 0 ? 'primary' : 'accent'}>
              {category.name}
            </Badge>
            <h2 className="text-2xl font-bold text-surface-900 mb-8">
              {category.name}
            </h2>
            <Accordion items={category.items} />
          </motion.div>
        </SectionWrapper>
      ))}

      <CTASection
        title="Vous avez d'autres questions ?"
        description="Notre équipe est là pour vous répondre. N'hésitez pas à nous contacter."
        secondaryCTA={{ label: 'Nous contacter', to: '/contact' }}
      />
    </PageWrapper>
  )
}
