import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import SectionWrapper from '@/components/sections/SectionWrapper'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { blogPosts } from '@/data/blog-posts'

function BlogCard({ post }) {
  return (
    <motion.div variants={fadeUp}>
      <Link to={`/blog/${post.slug}`}>
        <Card className="h-full group">
          {/* Thumbnail placeholder */}
          <div className="rounded-lg bg-surface-50 h-44 mb-4 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary-200">
              {post.category.charAt(0)}
            </span>
          </div>

          <Badge variant="accent" className="mb-3">{post.category}</Badge>

          <h3 className="text-lg font-semibold text-surface-900 mb-2 group-hover:text-primary-500 transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-surface-600 text-sm leading-relaxed mb-4 line-clamp-2">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4 text-xs text-surface-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(post.date).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>

          <div className="mt-4 flex items-center gap-1 text-primary-500 text-sm font-medium">
            Lire l'article <ArrowRight className="h-4 w-4" />
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}

export default function Blog() {
  return (
    <PageWrapper>
      <SEOHead
        title="Blog"
        description="Articles, guides et actualités sur les pompes à chaleur, MaPrimeRénov', CEE et le métier d'artisan RGE."
      />

      <HeroSection
        badge="Blog"
        title="Actualités et"
        highlight="ressources"
        description="Guides pratiques, actualités réglementaires et conseils pour les artisans RGE."
      />

      <SectionWrapper>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </motion.div>
      </SectionWrapper>
    </PageWrapper>
  )
}
