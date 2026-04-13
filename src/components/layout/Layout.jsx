import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from '@/components/shared/ScrollToTop'
import CookieConsent from '@/components/shared/CookieConsent'

export default function Layout() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-[67px]">
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  )
}
