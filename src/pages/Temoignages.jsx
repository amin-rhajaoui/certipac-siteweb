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
        description="Découvrez les avis de plus de 2 500 artisans RGE qui utilisent Certipac pour poser leurs PAC en toute sérénité."
      />

      <HeroSection
        badge="Témoignages"
        title="Ils posent leurs PAC"
        highlight="sereinement"
        description="Plus de 2 500 artisans RGE font confiance à Certipac pour les guider au quotidien. Voici ce qu'ils en pensent."
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
        description="Essayez Certipac gratuitement et posez vos PAC en toute sérénité dès le premier chantier."
      />
    </PageWrapper>
  )
}
