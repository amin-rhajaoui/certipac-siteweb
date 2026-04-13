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
    title: 'Modèles validés par des experts',
    description: 'Chaque modèle de dossier est validé par des experts en réglementation RGE et mis à jour selon les évolutions légales.',
  },
  {
    icon: RefreshCw,
    title: 'Mises à jour en temps réel',
    description: 'Dès qu\'une nouvelle réglementation entre en vigueur, nos modèles sont mis à jour automatiquement.',
  },
  {
    icon: FileCheck,
    title: 'Vérification automatique',
    description: 'PACIZZY vérifie automatiquement la complétude et la conformité de chaque dossier avant export.',
  },
  {
    icon: AlertTriangle,
    title: 'Alertes proactives',
    description: 'Recevez des alertes lorsqu\'une réglementation change et impacte vos dossiers en cours.',
  },
  {
    icon: CheckCircle,
    title: 'Zéro non-conformité',
    description: 'Depuis notre lancement, 98% de nos dossiers sont acceptés du premier coup par les organismes.',
  },
  {
    icon: Lock,
    title: 'Traçabilité complète',
    description: 'Historique complet de chaque modification, horodatage et piste d\'audit pour chaque dossier.',
  },
]

export default function Conformite() {
  return (
    <PageWrapper>
      <SEOHead
        title="Conformité"
        description="PACIZZY garantit la conformité de vos dossiers PAC : modèles validés, mises à jour automatiques, zéro non-conformité."
      />

      <HeroSection
        badge="Conformité garantie"
        title="Zéro risque de"
        highlight="non-conformité"
        description="Nos modèles sont validés par des experts RGE et mis à jour en continu selon les évolutions réglementaires. Concentrez-vous sur votre métier, on s'occupe de la conformité."
        primaryCTA={{ label: 'Essai gratuit 1 mois', to: '/tarifs' }}
      />

      <SectionWrapper>
        <motion.div variants={fadeUp} className="text-center mb-12">
          <Badge className="mb-4">Nos garanties</Badge>
          <h2 className="text-3xl font-bold text-surface-900 sm:text-4xl">
            La conformité, notre priorité absolue
          </h2>
          <p className="mt-4 text-lg text-surface-600 max-w-2xl mx-auto">
            Chaque fonctionnalité est pensée pour garantir que vos dossiers sont irréprochables.
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
            Les artisans qui utilisent PACIZZY voient leur taux de non-conformité chuter
            drastiquement. Plus de retours de dossiers, plus de délais supplémentaires,
            plus de stress lors des contrôles. Vos dossiers sont conformes, point final.
          </p>
        </motion.div>
      </SectionWrapper>

      <CTASection />
    </PageWrapper>
  )
}
