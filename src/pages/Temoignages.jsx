import { motion } from 'motion/react'
import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import SectionWrapper from '@/components/sections/SectionWrapper'
import TestimonialCard from '@/components/sections/TestimonialCard'
import CTASection from '@/components/sections/CTASection'
import { staggerContainer } from '@/lib/animations'
import { testimonials } from '@/data/testimonials'

export default function Temoignages() {
  return (
    <PageWrapper>
      <SEOHead
        title="Témoignages"
        description="Découvrez les avis de plus de 2 500 artisans RGE qui utilisent PACIZZY au quotidien."
      />

      <HeroSection
        badge="Témoignages"
        title="La parole à nos"
        highlight="utilisateurs"
        description="Plus de 2 500 artisans RGE utilisent PACIZZY au quotidien. Voici ce qu'ils en pensent."
      />

      <SectionWrapper>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </motion.div>
      </SectionWrapper>

      <CTASection
        title="Rejoignez-les !"
        description="Essayez PACIZZY gratuitement pendant 1 mois et constatez la différence par vous-même."
      />
    </PageWrapper>
  )
}
