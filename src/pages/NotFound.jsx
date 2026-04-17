import { motion } from 'motion/react'
import { Home, ArrowLeft } from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <PageWrapper>
      <SEOHead
        title="Page non trouvée"
        description="La page demandée n'existe pas ou a été déplacée. Retournez à l'accueil Certipac ou contactez notre équipe."
      />
      <Container className="py-32 lg:py-44">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-lg mx-auto"
        >
          <div className="text-8xl font-extrabold text-primary-500 mb-4">404</div>
          <h1 className="text-3xl font-bold text-surface-900 mb-4">
            Page non trouvée
          </h1>
          <p className="text-lg text-surface-600 mb-10">
            Oups ! La page que vous cherchez n'existe pas ou a été déplacée.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/" size="lg">
              <Home className="h-5 w-5" />
              Retour à l'accueil
            </Button>
            <Button variant="outline" size="lg" to="/contact">
              <ArrowLeft className="h-5 w-5" />
              Nous contacter
            </Button>
          </div>
        </motion.div>
      </Container>
    </PageWrapper>
  )
}
