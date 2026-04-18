import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import SEOHead from '@/components/shared/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import SectionWrapper from '@/components/sections/SectionWrapper'
import SectionHeader from '@/components/sections/SectionHeader'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { blogPosts } from '@/data/blog-posts'

function formatDate(d) {
  return new Date(d).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export default function Blog() {
  return (
    <PageWrapper>
      <SEOHead
        title="Blog & ressources"
        description="Notes, guides et actualités Certipac sur la rénovation énergétique, les barèmes MaPrimeRénov', les fiches CEE et le métier d'installateur RGE."
      />

      <Breadcrumb
        items={[
          { label: 'Accueil', path: '/' },
          { label: 'Blog' },
        ]}
      />

      <HeroSection
        eyebrow="Ressources · Blog"
        reference="CTP-BLOG-2026"
        title="Notes, guides,"
        highlight="et actualités"
        description="Les publications Certipac documentent les évolutions réglementaires, les bonnes pratiques de dossier et les questions qui reviennent chez les artisans RGE et les commerciaux PAC."
        metadata={[
          { label: 'Publications', value: `${blogPosts.length} notes` },
          { label: 'Dernière', value: formatDate(blogPosts[0].date) },
          { label: 'Cadence', value: 'Mensuelle' },
          { label: 'Édition', value: '2026' },
        ]}
      />

      <SectionWrapper tone="white">
        <SectionHeader
          number="01 — Publications"
          eyebrow="Notes & guides"
          title="Dernières publications."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E0E0E0]">
          {blogPosts.map((post, i) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-white p-6 flex flex-col border-t-[3px] border-[#194296] hover:bg-[#F4F4F4] transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#194296]">
                  Note · {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#6F6F6F]">
                  {post.category}
                </span>
              </div>
              <h3 className="text-[16px] font-semibold text-[#161616] mb-3 leading-[1.3] group-hover:text-[#194296]">
                {post.title}
              </h3>
              <p className="text-[13px] leading-[1.55] text-[#525252] mb-5 flex-1">
                {post.excerpt}
              </p>
              <div className="pt-4 border-t border-[#E0E0E0] flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#6F6F6F]">
                  {formatDate(post.date)} · {post.readTime}
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-[#194296] group-hover:translate-x-0.5 transition-transform" strokeWidth={2} />
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </PageWrapper>
  )
}
