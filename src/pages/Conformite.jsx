import { motion } from 'motion/react'
import { Shield, RefreshCw, FileCheck, AlertTriangle, CheckCircle, Lock } from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import SectionWrapper from '@/components/sections/SectionWrapper'
import FeatureGrid from '@/components/sections/FeatureGrid'
import CTASection from '@/components/sections/CTASection'
import Badge from '@/components/ui/Badge'
import { fadeUp } from '@/lib/animations'

const conformiteFeatures = [
  {
    icon: Shield,
    title: 'Dimensionnement validé',
    description: 'Le calcul de puissance est vérifié automatiquement selon la zone climatique, la surface et l\'isolation. Zéro risque de surdimensionnement.',
  },
  {
    icon: RefreshCw,
    title: 'Barèmes toujours à jour',
    description: 'Dès qu\'une nouvelle réglementation entre en vigueur, les barèmes MaPrimeRénov\', CEE et les formulaires sont mis à jour automatiquement.',
  },
  {
    icon: FileCheck,
    title: 'Vérification automatique du dossier',
    description: 'Certipac vérifie la complétude et la conformité de chaque dossier avant export. Pièces manquantes, erreurs de saisie : tout est signalé.',
  },
  {
    icon: AlertTriangle,
    title: 'Alertes proactives',
    description: 'Recevez des alertes lorsqu\'une réglementation change et impacte vos dossiers en cours ou vos chantiers planifiés.',
  },
  {
    icon: CheckCircle,
    title: '98% de dossiers acceptés',
    description: 'Depuis notre lancement, 98% des dossiers générés par Certipac sont acceptés du premier coup par les organismes.',
  },
  {
    icon: Lock,
    title: 'Traçabilité complète',
    description: 'Historique de chaque modification, horodatage, signature électronique et piste d\'audit pour chaque dossier et chaque chantier.',
  },
]

export default function Conformite() {
  return (
    <PageWrapper>
      <SEOHead
        title="Conformité"
        description="Certipac garantit la conformité de vos dossiers PAC : dimensionnement validé, barèmes à jour, dossiers ANAH et CEE conformes. Zéro stress."
      />

      <HeroSection
        badge="Conformité garantie"
        title="Zéro stress sur la"
        highlight="conformité."
        description="Dimensionnement validé, barèmes à jour, dossiers complets : Certipac vous guide pour que chaque dossier passe du premier coup."
        primaryCTA={{ label: 'Essayer gratuitement', to: '/tarifs' }}
      />

      <SectionWrapper>
        <motion.div variants={fadeUp} className="text-center mb-12">
          <Badge className="mb-4">Nos garanties</Badge>
          <h2 className="text-3xl font-bold text-surface-900 sm:text-4xl">
            La conformité, on s'en occupe
          </h2>
          <p className="mt-4 text-lg text-surface-600 max-w-2xl mx-auto">
            Chaque fonctionnalité est pensée pour que vos dossiers soient irréprochables, sans que vous ayez à y penser.
          </p>
        </motion.div>
        <FeatureGrid features={conformiteFeatures} />
      </SectionWrapper>

      <SectionWrapper className="bg-surface-50">
        <motion.div variants={fadeUp} className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-surface-900 sm:text-4xl mb-6">
            98% de dossiers acceptés du premier coup
          </h2>
          <p className="text-lg text-surface-600 leading-relaxed">
            Les artisans qui utilisent Certipac posent leurs PAC sereinement.
            Plus de retours de dossiers, plus de délais supplémentaires,
            plus de stress. Vos dossiers sont conformes, vos primes arrivent.
          </p>
        </motion.div>
      </SectionWrapper>

      <CTASection />
    </PageWrapper>
  )
}
