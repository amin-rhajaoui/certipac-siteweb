import { motion } from 'motion/react'
import { Check, X } from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import SectionWrapper from '@/components/sections/SectionWrapper'
import PricingCard from '@/components/sections/PricingCard'
import CTASection from '@/components/sections/CTASection'
import Accordion from '@/components/ui/Accordion'
import Badge from '@/components/ui/Badge'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { plans, comparisonFeatures } from '@/data/pricing'
import { faqCategories } from '@/data/faq'

const pricingFaq = faqCategories.find((c) => c.name === 'Tarifs & Essai')

export default function Tarifs() {
  return (
    <PageWrapper>
      <SEOHead
        title="Tarifs"
        description="Découvrez les tarifs PACIZZY : Solo à 100€/mois, Équipe à 190€/mois, Entreprise sur mesure. Essai gratuit 1 mois sans engagement."
      />

      <HeroSection
        badge="Tarifs transparents"
        title="Un plan pour chaque"
        highlight="artisan RGE"
        description="Essai gratuit 1 mois sur tous les forfaits. Sans engagement, sans carte bancaire. Annulez à tout moment."
      />

      {/* Pricing cards */}
      <SectionWrapper className="!pt-0 -mt-10" stagger>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
        >
          {plans.map((plan, i) => (
            <PricingCard key={i} {...plan} />
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Comparison table */}
      <SectionWrapper className="bg-surface-50">
        <motion.div variants={fadeUp} className="text-center mb-12">
          <Badge className="mb-4">Comparatif</Badge>
          <h2 className="text-3xl font-bold text-surface-900 sm:text-4xl">
            Comparez les forfaits en détail
          </h2>
        </motion.div>
        <motion.div variants={fadeUp} className="overflow-x-auto">
          <table className="w-full bg-surface-100 rounded-xl shadow-soft border border-surface-200 overflow-hidden">
            <thead>
              <tr className="border-b border-surface-200">
                <th className="text-left p-4 text-surface-600 font-medium">Fonctionnalité</th>
                <th className="p-4 text-center font-semibold text-surface-900">Solo</th>
                <th className="p-4 text-center font-semibold text-primary-500 bg-primary-500/10">Équipe</th>
                <th className="p-4 text-center font-semibold text-surface-900">Entreprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((row, i) => (
                <tr key={i} className="border-b border-surface-200 last:border-0">
                  <td className="p-4 text-surface-700 font-medium">{row.name}</td>
                  {['solo', 'equipe', 'entreprise'].map((plan) => (
                    <td
                      key={plan}
                      className={`p-4 text-center ${plan === 'equipe' ? 'bg-primary-500/5' : ''}`}
                    >
                      {row[plan] === true ? (
                        <Check className="h-5 w-5 text-accent-500 mx-auto" />
                      ) : row[plan] === false ? (
                        <X className="h-5 w-5 text-surface-300 mx-auto" />
                      ) : (
                        <span className="text-surface-600 text-sm">{row[plan]}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </SectionWrapper>

      {/* FAQ Pricing */}
      {pricingFaq && (
        <SectionWrapper>
          <motion.div variants={fadeUp} className="text-center mb-12">
            <Badge variant="accent" className="mb-4">FAQ Tarifs</Badge>
            <h2 className="text-3xl font-bold text-surface-900 sm:text-4xl">
              Questions fréquentes sur les tarifs
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} className="max-w-3xl mx-auto">
            <Accordion items={pricingFaq.items} />
          </motion.div>
        </SectionWrapper>
      )}

      <CTASection />
    </PageWrapper>
  )
}
