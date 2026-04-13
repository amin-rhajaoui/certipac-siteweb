import { motion } from 'motion/react'
import { Euro, FileText, TrendingUp, Building2, Users, Calculator } from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import SectionWrapper from '@/components/sections/SectionWrapper'
import CTASection from '@/components/sections/CTASection'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { fadeUp, staggerContainer } from '@/lib/animations'

const aides = [
  {
    icon: Euro,
    title: 'MaPrimeRénov\'',
    description: 'Aide principale de l\'État pour la rénovation énergétique. PACIZZY calcule automatiquement le montant selon les revenus du ménage et le type de PAC.',
    montant: 'Jusqu\'à 11 000€',
  },
  {
    icon: FileText,
    title: 'Certificats d\'Économies d\'Énergie (CEE)',
    description: 'Primes versées par les fournisseurs d\'énergie. PACIZZY génère les attestations nécessaires et calcule les montants selon la zone climatique.',
    montant: 'Jusqu\'à 5 000€',
  },
  {
    icon: TrendingUp,
    title: 'Éco-prêt à taux zéro',
    description: 'Prêt sans intérêt pour financer le reste à charge. PACIZZY prépare les justificatifs nécessaires pour la demande de prêt.',
    montant: 'Jusqu\'à 50 000€',
  },
  {
    icon: Building2,
    title: 'Aides locales',
    description: 'Régions, départements et communes proposent des aides complémentaires. PACIZZY vous aide à identifier les aides disponibles dans chaque territoire.',
    montant: 'Variable',
  },
  {
    icon: Users,
    title: 'TVA réduite à 5,5%',
    description: 'Les travaux de rénovation énergétique bénéficient d\'une TVA réduite. PACIZZY applique automatiquement le bon taux dans vos devis.',
    montant: 'Économie directe',
  },
  {
    icon: Calculator,
    title: 'Cumul des aides',
    description: 'PACIZZY calcule le reste à charge réel en cumulant toutes les aides auxquelles votre client est éligible. Résultat : un devis clair et motivant.',
    montant: 'Jusqu\'à 90% financé',
  },
]

export default function Financement() {
  return (
    <PageWrapper>
      <SEOHead
        title="Financement"
        description="Découvrez toutes les aides au financement PAC : MaPrimeRénov', CEE, éco-PTZ. PACIZZY calcule automatiquement les montants."
      />

      <HeroSection
        badge="Financement"
        title="Maximisez les aides pour"
        highlight="vos clients"
        description="MaPrimeRénov', CEE, éco-PTZ, aides locales... PACIZZY calcule automatiquement toutes les aides et génère les dossiers de demande."
        primaryCTA={{ label: 'Essai gratuit 1 mois', to: '/tarifs' }}
        secondaryCTA={{ label: 'Nous contacter', to: '/contact' }}
      />

      <SectionWrapper>
        <motion.div variants={fadeUp} className="text-center mb-12">
          <Badge className="mb-4">Les aides disponibles</Badge>
          <h2 className="text-3xl font-bold text-surface-900 sm:text-4xl">
            Toutes les aides au financement PAC
          </h2>
          <p className="mt-4 text-lg text-surface-600 max-w-2xl mx-auto">
            PACIZZY intègre tous les dispositifs d'aide et calcule automatiquement les montants.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {aides.map((aide, i) => {
            const Icon = aide.icon
            return (
              <motion.div key={i} variants={fadeUp}>
                <Card className="h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-500">
                      <Icon className="h-5 w-5" />
                    </div>
                    <Badge variant="accent">{aide.montant}</Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-surface-900 mb-2">{aide.title}</h3>
                  <p className="text-surface-600 leading-relaxed">{aide.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </SectionWrapper>

      <SectionWrapper className="bg-surface-50">
        <motion.div variants={fadeUp} className="max-w-3xl mx-auto text-center">
          <Badge variant="accent" className="mb-4">Le + PACIZZY</Badge>
          <h2 className="text-3xl font-bold text-surface-900 sm:text-4xl mb-6">
            Un devis clair = un client convaincu
          </h2>
          <p className="text-lg text-surface-600 leading-relaxed">
            Grâce au calcul automatique des aides, vos devis affichent le reste à charge réel
            pour le client. Résultat : vos prospects comprennent immédiatement l'avantage financier
            et signent plus vite. Nos utilisateurs constatent en moyenne une hausse de 30% de leur
            taux de conversion.
          </p>
        </motion.div>
      </SectionWrapper>

      <CTASection />
    </PageWrapper>
  )
}
