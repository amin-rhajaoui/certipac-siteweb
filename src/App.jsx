import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'

const Accueil = lazy(() => import('@/pages/Accueil'))
const AccueilCommerciaux = lazy(() => import('@/pages/AccueilCommerciaux'))
const AccueilProfessionnels = lazy(() => import('@/pages/AccueilProfessionnels'))
const AccueilInstallateurs = lazy(() => import('@/pages/AccueilInstallateurs'))
const Fonctionnalites = lazy(() => import('@/pages/Fonctionnalites'))
const CommentCaMarche = lazy(() => import('@/pages/CommentCaMarche'))
const Tarifs = lazy(() => import('@/pages/Tarifs'))
const Temoignages = lazy(() => import('@/pages/Temoignages'))
const APropos = lazy(() => import('@/pages/APropos'))
const FAQ = lazy(() => import('@/pages/FAQ'))
const Contact = lazy(() => import('@/pages/Contact'))
const Blog = lazy(() => import('@/pages/Blog'))
const BlogArticle = lazy(() => import('@/pages/BlogArticle'))
const Conformite = lazy(() => import('@/pages/Conformite'))
const Financement = lazy(() => import('@/pages/Financement'))
const MentionsLegales = lazy(() => import('@/pages/MentionsLegales'))
const CGV = lazy(() => import('@/pages/CGV'))
const PolitiqueConfidentialite = lazy(() => import('@/pages/PolitiqueConfidentialite'))
const NotFound = lazy(() => import('@/pages/NotFound'))

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-200 border-t-primary-500" />
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="commerciaux" element={<AccueilCommerciaux />} />
          <Route path="professionnels" element={<AccueilProfessionnels />} />
          <Route path="installateurs" element={<AccueilInstallateurs />} />
          <Route path="fonctionnalites" element={<Fonctionnalites />} />
          <Route path="comment-ca-marche" element={<CommentCaMarche />} />
          <Route path="tarifs" element={<Tarifs />} />
          <Route path="temoignages" element={<Temoignages />} />
          <Route path="a-propos" element={<APropos />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogArticle />} />
          <Route path="conformite" element={<Conformite />} />
          <Route path="financement" element={<Financement />} />
          <Route path="mentions-legales" element={<MentionsLegales />} />
          <Route path="cgv" element={<CGV />} />
          <Route path="politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
