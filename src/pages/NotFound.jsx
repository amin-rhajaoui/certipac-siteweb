import { Home, ArrowLeft } from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <PageWrapper>
      <SEOHead
        title="Page introuvable"
        description="La page demandée n'existe pas dans l'index Certipac. Retournez à l'accueil ou contactez notre équipe."
      />

      <section className="bg-white">
        <Container>
          <div className="pt-12 pb-20 lg:pt-20 lg:pb-32 max-w-2xl">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-10 pb-3 border-b border-[#E0E0E0]">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] font-semibold text-[#DA1E28]">
                Erreur · 404
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#525252]">
                CTP-ERROR-404
              </span>
            </div>

            <p className="font-mono text-[64px] sm:text-[96px] font-bold text-[#194296] leading-none tracking-tight mb-6">
              404
            </p>

            <h1 className="text-[clamp(2rem,4.5vw,2.75rem)] font-bold tracking-tight text-[#161616] leading-[1.1]">
              Ressource introuvable<span className="text-[#43AA43]">.</span>
            </h1>

            <p className="mt-6 text-[17px] leading-[1.6] text-[#525252] max-w-xl">
              La page demandée n'existe pas dans l'index des publications Certipac ou a été
              déplacée. Vérifiez l'orthographe du chemin ou revenez à l'accueil pour
              repartir sur des bases officielles.
            </p>

            <dl className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-[#E0E0E0]">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#525252] mb-1.5">
                  Code
                </dt>
                <dd className="text-[14px] font-semibold text-[#161616]">HTTP 404</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#525252] mb-1.5">
                  Type
                </dt>
                <dd className="text-[14px] font-semibold text-[#161616]">Not Found</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#525252] mb-1.5">
                  Action
                </dt>
                <dd className="text-[14px] font-semibold text-[#161616]">Retour recommandé</dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button to="/" size="lg" variant="primary">
                <Home className="h-4 w-4" strokeWidth={2} />
                Retour à l'accueil
              </Button>
              <Button to="/contact" size="lg" variant="tertiary">
                <ArrowLeft className="h-4 w-4" strokeWidth={2} />
                Contacter Certipac
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </PageWrapper>
  )
}
