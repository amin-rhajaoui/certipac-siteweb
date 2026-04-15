import { useParams, Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import Container from '@/components/ui/Container'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import CTASection from '@/components/sections/CTASection'
import { blogPosts } from '@/data/blog-posts'

export default function BlogArticle() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <PageWrapper>
        <SEOHead title="Article non trouvé" />
        <Container className="py-32 text-center">
          <h1 className="text-3xl font-bold text-surface-900 mb-4">Article non trouvé</h1>
          <p className="text-surface-600 mb-8">Cet article n'existe pas ou a été déplacé.</p>
          <Button to="/blog">Retour au blog</Button>
        </Container>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <SEOHead title={post.title} description={post.excerpt} />

      <article>
        {/* Header */}
        <div className="bg-surface-50 py-20 lg:py-28">
          <Container className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium mb-8"
              >
                <ArrowLeft className="h-4 w-4" /> Retour au blog
              </Link>

              <Badge variant="accent" className="mb-4">{post.category}</Badge>

              <h1 className="text-3xl font-extrabold text-surface-900 sm:text-4xl lg:text-5xl leading-tight">
                {post.title}
              </h1>

              <div className="mt-6 flex items-center gap-4 text-sm text-surface-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readTime} de lecture
                </span>
              </div>
            </motion.div>
          </Container>
        </div>

        {/* Content placeholder */}
        <Container className="max-w-4xl py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="rounded-xl bg-surface-50 p-8 text-center text-surface-500">
              <p className="text-lg font-medium mb-2">Contenu de l'article à venir</p>
              <p className="text-sm">
                Cet article est en cours de rédaction. Revenez bientôt pour découvrir le contenu complet.
              </p>
            </div>

            <div className="mt-8 space-y-4 text-surface-600">
              <p className="leading-relaxed">{post.excerpt}</p>
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris.
              </p>
              <h2 className="text-2xl font-bold text-surface-900 !mt-10">Introduction</h2>
              <p className="leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <h2 className="text-2xl font-bold text-surface-900 !mt-10">Points clés</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Premier point important à retenir</li>
                <li>Deuxième élément essentiel</li>
                <li>Troisième aspect à considérer</li>
              </ul>
            </div>
          </motion.div>
        </Container>
      </article>

      <CTASection
        title="Posez vos PAC en toute sérénité"
        description="Essayez Certipac gratuitement : guidage complet de la visite technique au versement des primes."
      />
    </PageWrapper>
  )
}
