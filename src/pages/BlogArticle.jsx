import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Breadcrumb from '@/components/ui/Breadcrumb'
import Callout from '@/components/ui/Callout'
import CTASection from '@/components/sections/CTASection'
import { blogPosts } from '@/data/blog-posts'

function formatDate(d) {
  return new Date(d).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogArticle() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <PageWrapper>
        <SEOHead
          title="Article introuvable"
          description="Cet article du blog Certipac n'existe pas ou a été déplacé."
        />
        <Container>
          <div className="py-32 text-center max-w-2xl mx-auto">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#525252] mb-4">
              Erreur · 404
            </p>
            <h1 className="text-[32px] font-bold text-[#161616] mb-4 leading-[1.15]">
              Article introuvable.
            </h1>
            <p className="text-[15px] text-[#525252] mb-8 leading-[1.6]">
              La référence demandée n'existe pas dans l'index des publications Certipac.
            </p>
            <Button to="/blog" variant="primary">
              Retour au blog
            </Button>
          </div>
        </Container>
      </PageWrapper>
    )
  }

  const postIndex = blogPosts.findIndex((p) => p.slug === slug)
  const reference = `CTP-BLOG-2026-${String(postIndex + 1).padStart(3, '0')}`

  return (
    <PageWrapper>
      <SEOHead title={post.title} description={post.excerpt} />

      <Breadcrumb
        items={[
          { label: 'Accueil', path: '/' },
          { label: 'Blog', path: '/blog' },
          { label: post.category },
        ]}
      />

      <article>
        <section className="bg-white">
          <Container>
            <div className="pt-10 pb-12 lg:pt-14 lg:pb-16 max-w-3xl">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-8 pb-3 border-b border-[#E0E0E0]">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] font-semibold text-[#194296]">
                  Publication · {post.category}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#525252]">
                  {reference}
                </span>
              </div>

              <Link
                to="/blog"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-[#194296] hover:text-[#0F2E73] mb-6"
              >
                <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} /> Retour au blog
              </Link>

              <h1 className="text-[clamp(1.75rem,4.5vw,2.75rem)] font-bold tracking-tight text-[#161616] leading-[1.1]">
                {post.title}
              </h1>

              <dl className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-[#E0E0E0]">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.12em] mb-1.5 text-[#525252]">
                    Date
                  </dt>
                  <dd className="text-[14px] font-semibold text-[#161616]">
                    {formatDate(post.date)}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.12em] mb-1.5 text-[#525252]">
                    Durée
                  </dt>
                  <dd className="text-[14px] font-semibold text-[#161616]">
                    {post.readTime}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.12em] mb-1.5 text-[#525252]">
                    Catégorie
                  </dt>
                  <dd className="text-[14px] font-semibold text-[#161616]">
                    {post.category}
                  </dd>
                </div>
              </dl>
            </div>
          </Container>
        </section>

        <section className="bg-[#F4F4F4]">
          <Container>
            <div className="py-12 lg:py-16 max-w-3xl">
              <Callout tone="neutral" title="Publication en cours de rédaction" reference="Art. 1">
                Cette note fait partie du calendrier éditorial Certipac 2026. Le contenu complet
                sera publié prochainement. En attendant, retrouvez le résumé ci-dessous et la
                synthèse des points traités.
              </Callout>

              <div className="mt-10 space-y-6 text-[15px] leading-[1.7] text-[#393939]">
                <h2 className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#194296] mb-2">
                  Résumé
                </h2>
                <p>{post.excerpt}</p>

                <div className="h-[1px] bg-[#E0E0E0] my-8" />

                <h2 className="text-[20px] font-bold text-[#161616] mt-10 mb-3">
                  Points traités
                </h2>
                <ul className="space-y-2 pl-5 list-disc marker:text-[#194296]">
                  <li>Contexte réglementaire et cadre officiel applicable.</li>
                  <li>Impact opérationnel pour les artisans et les commerciaux.</li>
                  <li>Bonnes pratiques de dossier et points de vigilance.</li>
                  <li>Ressources officielles et liens utiles.</li>
                </ul>
              </div>
            </div>
          </Container>
        </section>
      </article>

      <CTASection
        title="Des dossiers PAC à l'épreuve des organismes ?"
        description="Essai gratuit 1 mois. Les exigences réglementaires sont intégrées aux parcours Certipac."
      />
    </PageWrapper>
  )
}
